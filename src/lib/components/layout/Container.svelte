<!-- src/lib/components/layout/Container.svelte -->

<script>
  export let size = "mobile"; // mobile | tablet | full
  export let padding = true;
  export let center = true;
  export let className = "";
</script>

<div
  class={`container container-${size} ${padding ? "container-padding" : ""} ${center ? "container-center" : ""} ${className}`}
>
  <slot />
</div>

<style>
  .container {
    width: 100%;
    position: relative;
  }

  /* -------------------------------------------------------------------------- */
  /*                                WIDTH MODES                                 */
  /* -------------------------------------------------------------------------- */

  .container-mobile {
    max-width: var(--container-max);
  }

  .container-tablet {
    max-width: 768px;
  }

  .container-full {
    max-width: 100%;
  }

  /* -------------------------------------------------------------------------- */
  /*                                CENTERING                                   */
  /* -------------------------------------------------------------------------- */

  .container-center {
    margin-left: auto;
    margin-right: auto;
  }

  /* -------------------------------------------------------------------------- */
  /*                                PADDING                                     */
  /* -------------------------------------------------------------------------- */

  .container-padding {
    padding-left: 16px;
    padding-right: 16px;
  }

  /* -------------------------------------------------------------------------- */
  /*                         MOBILE-FIRST TUNING                                */
  /* -------------------------------------------------------------------------- */

  @media (max-width: 480px) {
    .container-padding {
      padding-left: 14px;
      padding-right: 14px;
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                         WIDER SCREENS CONTROL                              */
  /* -------------------------------------------------------------------------- */

  @media (min-width: 1024px) {
    .container-mobile {
      max-width: 520px;
    }
  }
</style>