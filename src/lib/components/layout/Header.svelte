<!-- src/lib/components/layout/Header.svelte -->

<script>
  import Container from "./Container.svelte";
  import HamburgerButton from "./HamburgerButton.svelte";
  import IconButton from "../ui/IconButton.svelte";
  import GradientText from "../ui/GradientText.svelte";
  import { theme } from "../../stores/theme";
  import { Sun, Moon } from "lucide-svelte";

  export let title = "jitubanna.in";

  let currentTheme = "dark";

  const unsubscribe = theme.subscribe((t) => {
    currentTheme = t;
  });

  function toggleTheme() {
    theme.toggleTheme();
  }
</script>

<header class="header">
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

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    background: rgba(10, 10, 12, 0.4);

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
      height: 60px;
    }

    .logo {
      font-size: 17px;
    }
  }
</style>