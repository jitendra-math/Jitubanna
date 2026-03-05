<!-- src/lib/components/home/bento/BentoCard.svelte -->

<script>
  import GlassCard from "../../ui/GlassCard.svelte";
  import GradientText from "../../ui/GradientText.svelte";
  import { ArrowUpRight } from "lucide-svelte";

  export let title = "";
  export let description = "";
  export let icon = null;
  export let href = "#";

  export let gradient = "primary"; // primary | cyan | sunset | neon
  export let size = "normal"; // normal | wide | tall

  export let glow = false;
</script>

<a href={href} class={`bento-card-wrapper size-${size}`}>
  <GlassCard padding="lg" radius="xl" hover={true} glow={glow}>

    <div class="bento-card">

      <!-- icon -->
      {#if icon}
        <div class="bento-icon">
          <svelte:component this={icon} size={22} />
        </div>
      {/if}

      <!-- content -->
      <div class="bento-content">
        <h3 class="bento-title">
          <GradientText gradient={gradient}>
            {title}
          </GradientText>
        </h3>

        {#if description}
          <p class="bento-desc">
            {description}
          </p>
        {/if}
      </div>

      <!-- arrow -->
      <div class="bento-arrow">
        <ArrowUpRight size={18} />
      </div>

    </div>

  </GlassCard>
</a>

<style>
  .bento-card-wrapper {
    display: block;
    width: 100%;
  }

  .bento-card {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 14px;

    min-height: 120px;
  }

  .bento-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    border-radius: 12px;

    background: var(--bg-tertiary);
    color: var(--text-primary);
  }

  .bento-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .bento-title {
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    letter-spacing: -0.01em;
  }

  .bento-desc {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.5;
  }

  .bento-arrow {
    position: absolute;
    top: 0;
    right: 0;

    opacity: 0.7;

    transition:
      transform var(--transition-fast) var(--easing),
      opacity var(--transition-fast) var(--easing);
  }

  .bento-card-wrapper:hover .bento-arrow {
    transform: translate(2px, -2px);
    opacity: 1;
  }

  /* ------------------------------------------------ */
  /* SIZES */
  /* ------------------------------------------------ */

  .size-normal {
    grid-column: span 1;
  }

  .size-wide {
    grid-column: span 2;
  }

  .size-tall {
    grid-row: span 2;
  }

  @media (max-width: 480px) {
    .bento-card {
      min-height: 110px;
    }
  }
</style>