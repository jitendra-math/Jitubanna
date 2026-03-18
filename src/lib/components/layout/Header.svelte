
<script>
  import { onMount } from "svelte";

  import Container from "./Container.svelte";
  import HamburgerButton from "./HamburgerButton.svelte";
  import GradientText from "../ui/GradientText.svelte";

  export let title = "Jitendra Singh";

  let scrolled = false;

  function handleScroll() {
    scrolled = window.scrollY > 8;
  }

  onMount(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <HamburgerButton />
      </div>

    </div>
  </Container>
</header>

<style>

  :global(body) {
    background: #f8fafc;
    color: #0f172a;
  }

  .header {
    position: sticky;
    top: 0;
    z-index: 500;

    width: 100%;

    background: rgba(255, 255, 255, 0.7);

    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);

    border-bottom: 1px solid transparent;

    transition:
      background 0.25s ease,
      backdrop-filter 0.25s ease,
      border-color 0.25s ease,
      box-shadow 0.25s ease;
  }

  /* SCROLLED STATE (premium glass feel 😏) */

  .header.scrolled {
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    background: rgba(255, 255, 255, 0.85);

    border-bottom: 1px solid rgba(0,0,0,0.06);

    box-shadow: 0 6px 20px rgba(0,0,0,0.06);
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
