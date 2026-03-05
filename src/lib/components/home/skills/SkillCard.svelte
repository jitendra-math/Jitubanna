<!-- src/lib/components/home/skills/SkillCard.svelte -->

<script>
  import GlassCard from "../../ui/GlassCard.svelte";
  import Badge from "../../ui/Badge.svelte";
  import { Code2 } from "lucide-svelte";

  export let name = "";
  export let level = "";
  export let icon = Code2;
  export let highlight = false;
</script>

<div class="skill-card">
  <GlassCard padding="md" radius="lg" hover={true} glow={highlight}>
    <div class="skill-inner">

      <div class="skill-icon">
        <svelte:component this={icon} size={20} />
      </div>

      <div class="skill-content">
        <h4 class="skill-name">{name}</h4>

        {#if level}
          <Badge text={level} size="sm" variant="glass" />
        {/if}
      </div>

    </div>
  </GlassCard>
</div>

<style>
  .skill-card {
    width: 100%;
  }

  .skill-inner {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .skill-icon {
    width: 36px;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    background: var(--bg-secondary);
    border: 1px solid var(--border-subtle);

    color: var(--text-primary);
  }

  .skill-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .skill-name {
    font-size: var(--text-md);
    font-weight: var(--font-semibold);
    letter-spacing: -0.01em;
  }

  @media (max-width: 480px) {
    .skill-icon {
      width: 34px;
      height: 34px;
    }
  }
</style>