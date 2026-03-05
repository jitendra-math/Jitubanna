<!-- src/routes/+layout.svelte -->

<script>
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  import Header from "$layout/Header.svelte";
  import Footer from "$layout/Footer.svelte";
  import FullscreenMenu from "$layout/FullscreenMenu.svelte";

  import { theme } from "$stores/theme";

  import "$styles/globals.css";

  import Lenis from "lenis";

  let lenis;

  onMount(() => {
    if (!browser) return;

    theme.initTheme();

    lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
</script>

<div class="app-root">

  <Header />

  <FullscreenMenu />

  <main class="main-content">
    <slot />
  </main>

  <Footer />

</div>

<style>
  .app-root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
    width: 100%;
  }
</style>
