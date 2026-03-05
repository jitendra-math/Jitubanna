<!-- src/lib/components/ui/GradientText.svelte -->

<script>
  export let text = "";
  export let tag = "span"; // span | h1 | h2 | etc
  export let gradient = "primary"; // primary | cyan | sunset | neon
  export let weight = "bold"; // medium | semibold | bold
  export let size = "inherit"; // inherit | sm | md | lg | xl
</script>

<svelte:element
  this={tag}
  class={`gradient-text gradient-${gradient} weight-${weight} size-${size}`}
>
  {#if text}
    {text}
  {:else}
    <slot />
  {/if}
</svelte:element>

<style>
  .gradient-text {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    transition:
      opacity var(--transition-fast) var(--easing),
      transform var(--transition-fast) var(--easing);
  }

  /* -------------------------------------------------------------------------- */
  /*                                  GRADIENTS                                 */
  /* -------------------------------------------------------------------------- */

  .gradient-primary {
    background-image: var(--gradient-primary);
  }

  .gradient-cyan {
    background-image: var(--gradient-cyan);
  }

  .gradient-sunset {
    background-image: var(--gradient-sunset);
  }

  .gradient-neon {
    background-image: var(--gradient-neon);
  }

  /* -------------------------------------------------------------------------- */
  /*                                   WEIGHT                                   */
  /* -------------------------------------------------------------------------- */

  .weight-medium {
    font-weight: var(--font-medium);
  }

  .weight-semibold {
    font-weight: var(--font-semibold);
  }

  .weight-bold {
    font-weight: var(--font-bold);
  }

  /* -------------------------------------------------------------------------- */
  /*                                    SIZE                                    */
  /* -------------------------------------------------------------------------- */

  .size-inherit {
    font-size: inherit;
  }

  .size-sm {
    font-size: var(--text-sm);
  }

  .size-md {
    font-size: var(--text-lg);
  }

  .size-lg {
    font-size: var(--text-2xl);
  }

  .size-xl {
    font-size: var(--text-4xl);
  }

  /* -------------------------------------------------------------------------- */
  /*                                INTERACTION                                 */
  /* -------------------------------------------------------------------------- */

  .gradient-text:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
</style>