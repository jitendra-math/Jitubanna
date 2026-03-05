<!-- src/lib/components/layout/FullscreenMenu.svelte -->

<script>
  import { menu } from "../../stores/menu";
  import { NAV_LINKS } from "../../utils/constants";
  import { menuOpen, menuClose } from "../../utils/animations";
  import IconButton from "../ui/IconButton.svelte";
  import { X } from "lucide-svelte";
  import { onMount } from "svelte";

  let container;
  let visible = false;

  const unsubscribe = menu.subscribe((state) => {
    visible = state.open;

    if (!container) return;

    if (visible) {
      menuOpen(container);
    } else {
      menuClose(container);
    }
  });

  function closeMenu() {
    menu.closeMenu();
  }

  onMount(() => {
    return () => unsubscribe();
  });
</script>

{#if visible}
  <div class="menu-overlay">
    <div bind:this={container} class="menu-container">

      <!-- close button -->
      <div class="menu-top">
        <IconButton
          icon={X}
          label="Close menu"
          variant="glass"
          size="md"
          on:click={closeMenu}
        />
      </div>

      <!-- navigation -->
      <nav class="menu-nav">
        {#each NAV_LINKS as link}
          <a
            href={link.href}
            class="menu-link"
            on:click={closeMenu}
          >
            {link.label}
          </a>
        {/each}
      </nav>

      <!-- bottom CTA -->
      <div class="menu-cta">
        <a href="/hire" class="menu-button" on:click={closeMenu}>
          Hire Me
        </a>
      </div>

    </div>
  </div>
{/if}

<style>
  .menu-overlay {
    position: fixed;
    inset: 0;

    background: rgba(10, 10, 12, 0.65);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);

    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-container {
    width: 100%;
    height: 100%;

    max-width: var(--container-max);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 24px;
  }

  .menu-top {
    display: flex;
    justify-content: flex-end;
  }

  .menu-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }

  .menu-link {
    font-size: 32px;
    font-weight: 600;

    letter-spacing: -0.02em;

    color: var(--text-primary);

    transition:
      opacity var(--transition-fast) var(--easing),
      transform var(--transition-fast) var(--easing);
  }

  .menu-link:hover {
    opacity: 0.7;
    transform: translateY(-2px);
  }

  .menu-cta {
    display: flex;
    justify-content: center;
  }

  .menu-button {
    padding: 14px 26px;

    border-radius: 14px;

    background: var(--gradient-primary);
    color: white;

    font-weight: 600;

    transition:
      transform var(--transition-fast) var(--easing),
      box-shadow var(--transition-fast) var(--easing);
  }

  .menu-button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
  }

  @media (max-width: 480px) {
    .menu-link {
      font-size: 28px;
    }

    .menu-container {
      padding: 20px;
    }
  }
</style>