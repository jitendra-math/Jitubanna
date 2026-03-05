<!-- src/lib/components/layout/Header.svelte -->

<script>
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import { throttle } from "$utils/helpers"; // pehle se exists

  import Container from "./Container.svelte";
  import HamburgerButton from "./HamburgerButton.svelte";
  import IconButton from "../ui/IconButton.svelte";
  import GradientText from "../ui/GradientText.svelte";
  import { theme } from "../../stores/theme";
  import { Sun, Moon } from "lucide-svelte";

  export let title = "jitubanna.in";

  let currentTheme = "dark";
  let scrolled = false;

  const unsubscribe = theme.subscribe((t) => {
    currentTheme = t;
  });

  function toggleTheme() {
    theme.toggleTheme();
  }

  // Scroll handler
  const handleScroll = throttle(() => {
    scrolled = window.scrollY > 20;
  }, 100);

  onMount(() => {
    if (browser) {
      handleScroll(); // initial check
      window.addEventListener("scroll", handleScroll);
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener("scroll", handleScroll);
    }
  });
</script>

<!-- dynamic class: scrolled -->
<header class="header" class:scrolled>
  <Container size="mobile" padding={true}>
    <div class="header-inner">

      <!-- Logo / Site name -->
      <a href="/" class="logo">
        <GradientText tag="span" gradient="primary" weight="bold">
          {title}
        </GradientText>
      </a>

      <!-- Right side actions -->
      <div class="actions">

        <!-- Theme toggle -->
        <IconButton
          icon={currentTheme === "dark" ? Sun : Moon}
          label="Toggle theme"
          variant="glass"
          size="md"
          on:click={toggleTheme}
        />

        <!-- Hamburger menu -->
        <HamburgerButton />

      </div>
    </div>
  </Container>
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 500;

    width: 100%;

    /* base background - fully transparent */
    background: transparent;

    /* backdrop blur - premium glass */
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);

    /* border replaced with subtle shadow */
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);

    /* smooth transition for background & blur */
    transition: 
      background-color 0.3s ease,
      backdrop-filter 0.3s ease,
      box-shadow 0.3s ease;
  }

  /* when scrolled down, background becomes slightly opaque */
  .header.scrolled {
    background: var(--header-bg-scrolled, rgba(10, 10, 12, 0.6));
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
  }

  .logo {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* dark mode specific scrolled background */
  :global([data-theme="dark"]) .header.scrolled {
    background: rgba(10, 10, 12, 0.7);
  }

  /* light mode specific scrolled background */
  :global([data-theme="light"]) .header.scrolled {
    background: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 480px) {
    .header-inner {
      height: 60px;
    }

    .logo {
      font-size: 17px;
    }

    .header {
      backdrop-filter: blur(14px);
    }
  }
</style>
