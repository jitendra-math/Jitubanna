<!-- src/lib/components/layout/HamburgerButton.svelte -->

<script>
  import { menu } from "../../stores/menu";
  import { buttonTap } from "../../utils/animations";

  export let size = 22;

  let button;

  function toggle() {
    buttonTap(button);
    menu.toggleMenu();
  }
</script>

<button
  bind:this={button}
  class="hamburger-btn"
  aria-label="Open menu"
  on:click={toggle}
>
  <span class="line line-1"></span>
  <span class="line line-2"></span>
  <span class="line line-3"></span>
</button>

<style>
  .hamburger-btn {
    width: 44px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;

    background: var(--glass-bg);
    border: 1px solid var(--glass-border);

    backdrop-filter: blur(var(--blur-soft));
    -webkit-backdrop-filter: blur(var(--blur-soft));

    position: relative;

    transition:
      transform var(--transition-fast) var(--easing),
      background var(--transition-fast) var(--easing),
      box-shadow var(--transition-fast) var(--easing);
  }

  .hamburger-btn:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-soft);
  }

  .line {
    position: absolute;

    width: 20px;
    height: 2px;

    background: var(--text-primary);
    border-radius: 2px;

    transition:
      transform var(--transition-normal) var(--easing),
      opacity var(--transition-normal) var(--easing);
  }

  .line-1 {
    transform: translateY(-6px);
  }

  .line-2 {
    transform: translateY(0);
  }

  .line-3 {
    transform: translateY(6px);
  }

  @media (max-width: 480px) {
    .hamburger-btn {
      width: 42px;
      height: 42px;
    }

    .line {
      width: 18px;
    }
  }
</style>