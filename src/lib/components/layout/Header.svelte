<!-- src/lib/components/layout/Header.svelte -->

<script>
  import { onMount } from "svelte";

  import Container from "./Container.svelte";
  import HamburgerButton from "./HamburgerButton.svelte";
  import IconButton from "../ui/IconButton.svelte";
  import GradientText from "../ui/GradientText.svelte";
  import { theme } from "../../stores/theme";
  import { Sun, Moon } from "lucide-svelte";

  export let title = "Jitendra Singh";

  let currentTheme = "dark";
  let scrolled = false;

  const unsubscribe = theme.subscribe((t) => {
    currentTheme = t;
  });

  function toggleTheme() {
    theme.toggleTheme();
  }

  function handleScroll() {
    scrolled = window.scrollY > 8;
  }

  onMount(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  });
</script>

<header class="header" class:scrolled={scrolled}>
  <Container size="mobile" padding={true}>
    <div class="header-inner">

      <!-- Logo -->
      <a href="/" class="logo">
        <GradientText tag="span" gradient="primary" weight="bold">
          {title}
        </GradientText>
      </a>

      <!-- Actions -->
      <div class="actions">

        <IconButton
          icon={currentTheme === "dark" ? Sun : Moon}
          label="Toggle theme"
          variant="glass"
          size="md"
          on:click={toggleTheme}
        />

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

    background: transparent;

    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);

    border-bottom: 1px solid transparent;

    transition:
      background 0.25s ease,
      backdrop-filter 0.25s ease,
      border-color 0.25s ease;
  }

  /* SCROLLED STATE */

  .header.scrolled {
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    background: rgba(10, 10, 12, 0.55);

    border-bottom: 1px solid var(--border-subtle);
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

  @media (max-width: 480px) {

    .header-inner {
      height: 58px;
    }

    .logo {
      font-size: 17px;
    }

  }

</style>
