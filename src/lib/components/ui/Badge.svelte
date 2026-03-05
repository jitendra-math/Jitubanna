<!-- src/lib/components/ui/Badge.svelte -->

<script>
  export let text = "";
  export let icon = null;
  export let variant = "default"; // default | gradient | glass
  export let size = "md"; // sm | md | lg
</script>

<span
  class={`badge badge-${variant} badge-${size}`}
>
  {#if icon}
    <span class="badge-icon">
      <svelte:component this={icon} size={14} />
    </span>
  {/if}

  <span class="badge-text">{text}</span>
</span>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    font-weight: 500;
    letter-spacing: -0.01em;

    border-radius: 999px;

    white-space: nowrap;

    transition:
      transform var(--transition-fast) var(--easing),
      box-shadow var(--transition-fast) var(--easing),
      background var(--transition-fast) var(--easing);
  }

  .badge:hover {
    transform: translateY(-1px);
  }

  .badge-icon {
    display: flex;
    align-items: center;
  }

  /* -------------------------------------------------------------------------- */
  /*                                    SIZE                                    */
  /* -------------------------------------------------------------------------- */

  .badge-sm {
    font-size: 12px;
    padding: 4px 8px;
  }

  .badge-md {
    font-size: 13px;
    padding: 6px 12px;
  }

  .badge-lg {
    font-size: 14px;
    padding: 8px 14px;
  }

  /* -------------------------------------------------------------------------- */
  /*                                   DEFAULT                                  */
  /* -------------------------------------------------------------------------- */

  .badge-default {
    background: var(--bg-secondary);
    color: var(--text-primary);
    border: 1px solid var(--border-subtle);
  }

  /* -------------------------------------------------------------------------- */
  /*                                   GRADIENT                                 */
  /* -------------------------------------------------------------------------- */

  .badge-gradient {
    background: var(--gradient-primary);
    color: white;
  }

  /* -------------------------------------------------------------------------- */
  /*                                     GLASS                                  */
  /* -------------------------------------------------------------------------- */

  .badge-glass {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(var(--blur-soft));
    -webkit-backdrop-filter: blur(var(--blur-soft));
    color: var(--text-primary);
  }
</style>