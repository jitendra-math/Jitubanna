<!-- src/lib/components/ui/IconButton.svelte -->

<script>
  export let icon = null;
  export let label = "";
  export let variant = "ghost"; // ghost | glass | solid
  export let size = "md"; // sm | md | lg
  export let type = "button";
  export let disabled = false;

  function handleClick(event) {
    if (disabled) {
      event.preventDefault();
      return;
    }
  }
</script>

<button
  type={type}
  class={`icon-btn variant-${variant} size-${size} ${disabled ? "disabled" : ""}`}
  aria-label={label}
  on:click={handleClick}
>
  {#if icon}
    <svelte:component this={icon} size={20} />
  {:else}
    <slot />
  {/if}
</button>

<style>
  .icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: 999px;

    cursor: pointer;

    transition:
      transform var(--transition-fast) var(--easing),
      background var(--transition-fast) var(--easing),
      box-shadow var(--transition-fast) var(--easing),
      border var(--transition-fast) var(--easing);

    -webkit-tap-highlight-color: transparent;
  }

  /* -------------------------------------------------------------------------- */
  /*                                   SIZE                                     */
  /* -------------------------------------------------------------------------- */

  .size-sm {
    width: 34px;
    height: 34px;
  }

  .size-md {
    width: 42px;
    height: 42px;
  }

  .size-lg {
    width: 50px;
    height: 50px;
  }

  /* -------------------------------------------------------------------------- */
  /*                                  GHOST                                     */
  /* -------------------------------------------------------------------------- */

  .variant-ghost {
    background: transparent;
    color: var(--text-primary);
  }

  .variant-ghost:hover {
    background: var(--bg-secondary);
  }

  /* -------------------------------------------------------------------------- */
  /*                                   GLASS                                    */
  /* -------------------------------------------------------------------------- */

  .variant-glass {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);

    backdrop-filter: blur(var(--blur-soft));
    -webkit-backdrop-filter: blur(var(--blur-soft));
  }

  .variant-glass:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-soft);
  }

  /* -------------------------------------------------------------------------- */
  /*                                   SOLID                                    */
  /* -------------------------------------------------------------------------- */

  .variant-solid {
    background: var(--gradient-primary);
    color: white;
  }

  .variant-solid:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-medium);
  }

  /* -------------------------------------------------------------------------- */
  /*                                INTERACTION                                 */
  /* -------------------------------------------------------------------------- */

  .icon-btn:active {
    transform: scale(0.95);
  }

  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }
</style>