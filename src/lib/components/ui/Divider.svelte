<!-- src/lib/components/ui/Divider.svelte -->

<script>
  export let label = "";
  export let align = "center"; // left | center | right
  export let variant = "line"; // line | gradient | glow
  export let spacing = "md"; // sm | md | lg
</script>

<div class={`divider divider-${variant} divider-${spacing} divider-${align}`}>
  {#if label}
    <span class="divider-label">{label}</span>
  {/if}
</div>

<style>
  .divider {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
  }

  /* -------------------------------------------------------------------------- */
  /*                                SPACING                                     */
  /* -------------------------------------------------------------------------- */

  .divider-sm {
    margin: 16px 0;
  }

  .divider-md {
    margin: 28px 0;
  }

  .divider-lg {
    margin: 48px 0;
  }

  /* -------------------------------------------------------------------------- */
  /*                                 BASE LINE                                  */
  /* -------------------------------------------------------------------------- */

  .divider::before,
  .divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--border-subtle);
  }

  /* -------------------------------------------------------------------------- */
  /*                                ALIGNMENT                                   */
  /* -------------------------------------------------------------------------- */

  .divider-left::after {
    flex: 0;
  }

  .divider-right::before {
    flex: 0;
  }

  /* -------------------------------------------------------------------------- */
  /*                                  LABEL                                     */
  /* -------------------------------------------------------------------------- */

  .divider-label {
    padding: 0 12px;
    font-size: 13px;
    color: var(--text-muted);
    white-space: nowrap;
  }

  /* -------------------------------------------------------------------------- */
  /*                                GRADIENT                                    */
  /* -------------------------------------------------------------------------- */

  .divider-gradient::before,
  .divider-gradient::after {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(124, 92, 255, 0.7),
      transparent
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                  GLOW                                      */
  /* -------------------------------------------------------------------------- */

  .divider-glow::before,
  .divider-glow::after {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(124, 92, 255, 0.5),
      transparent
    );
    box-shadow: 0 0 10px rgba(124, 92, 255, 0.35);
  }
</style>