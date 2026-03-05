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
    box-sizing: border-box;
  }

  /* -------------------------------------------------------------------------- */
  /* WIDTH MODES                                                                */
  /* -------------------------------------------------------------------------- */

  .container-mobile {
    max-width: 1200px;
  }

  .container-tablet {
    max-width: 900px;
  }

  .container-full {
    max-width: 100%;
  }

  /* -------------------------------------------------------------------------- */
  /* CENTERING                                                                  */
  /* -------------------------------------------------------------------------- */

  .container-center {
    margin-left: auto;
    margin-right: auto;
  }

  /* -------------------------------------------------------------------------- */
  /* PADDING                                                                    */
  /* -------------------------------------------------------------------------- */

  .container-padding {
    padding-left: 20px;
    padding-right: 20px;
  }

  /* -------------------------------------------------------------------------- */
  /* MOBILE                                                                     */
  /* -------------------------------------------------------------------------- */

  @media (max-width: 640px) {
    .container-padding {
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  /* -------------------------------------------------------------------------- */
  /* SMALL MOBILE                                                               */
  /* -------------------------------------------------------------------------- */

  @media (max-width: 420px) {
    .container-padding {
      padding-left: 14px;
      padding-right: 14px;
    }
  }
</style>
