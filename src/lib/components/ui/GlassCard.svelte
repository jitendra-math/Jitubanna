<!-- src/lib/components/ui/GlassCard.svelte -->

<script>
  export let padding = "md"; // sm | md | lg
  export let radius = "lg"; // md | lg | xl
  export let hover = true;
  export let border = true;
  export let glow = false;
</script>

<div
  class={`glass-card padding-${padding} radius-${radius} ${hover ? "hoverable" : ""} ${border ? "bordered" : ""} ${glow ? "glow" : ""}`}
>
  <slot />
</div>

<style>
  .glass-card {
    position: relative;
    width: 100%;

    background: var(--glass-bg);
    backdrop-filter: blur(var(--blur-glass));
    -webkit-backdrop-filter: blur(var(--blur-glass));

    transition:
      transform var(--transition-fast) var(--easing),
      box-shadow var(--transition-fast) var(--easing),
      background var(--transition-normal) var(--easing);

    overflow: hidden;
  }

  /* -------------------------------------------------------------------------- */
  /*                                   BORDER                                   */
  /* -------------------------------------------------------------------------- */

  .bordered {
    border: 1px solid var(--glass-border);
  }

  /* -------------------------------------------------------------------------- */
  /*                                   RADIUS                                   */
  /* -------------------------------------------------------------------------- */

  .radius-md {
    border-radius: var(--radius-md);
  }

  .radius-lg {
    border-radius: var(--radius-lg);
  }

  .radius-xl {
    border-radius: var(--radius-xl);
  }

  /* -------------------------------------------------------------------------- */
  /*                                   PADDING                                  */
  /* -------------------------------------------------------------------------- */

  .padding-sm {
    padding: 12px;
  }

  .padding-md {
    padding: 20px;
  }

  .padding-lg {
    padding: 28px;
  }

  /* -------------------------------------------------------------------------- */
  /*                                   HOVER                                    */
  /* -------------------------------------------------------------------------- */

  .hoverable:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-medium);
  }

  /* -------------------------------------------------------------------------- */
  /*                                    GLOW                                    */
  /* -------------------------------------------------------------------------- */

  .glow::before {
    content: "";
    position: absolute;
    inset: -1px;

    background: linear-gradient(
      120deg,
      rgba(124, 92, 255, 0.25),
      rgba(58, 141, 255, 0.25),
      rgba(22, 214, 255, 0.25)
    );

    opacity: 0.35;
    filter: blur(40px);
    z-index: -1;
  }

  /* -------------------------------------------------------------------------- */
  /*                              MOBILE OPTIMIZED                              */
  /* -------------------------------------------------------------------------- */

  @media (max-width: 480px) {
    .padding-lg {
      padding: 22px;
    }

    .padding-md {
      padding: 16px;
    }
  }
</style>