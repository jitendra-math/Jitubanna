<!-- src/lib/components/home/hero/HeroCTA.svelte -->

<script>
  import ScrollReveal from "../../effects/ScrollReveal.svelte";
  import IconButton from "../../ui/IconButton.svelte";
  import { HERO } from "../../../utils/constants";
  import { ArrowRight, Briefcase } from "lucide-svelte";

  export let align = "left"; // left | center
</script>

<ScrollReveal type="up" delay={380}>
  <div class={`hero-cta align-${align}`}>

    <a
      href={HERO.primaryCTA.href}
      class="cta-primary"
    >
      <span>{HERO.primaryCTA.label}</span>
      <ArrowRight size={18} />
    </a>

    <a
      href={HERO.secondaryCTA.href}
      class="cta-secondary"
    >
      <IconButton
        icon={Briefcase}
        size="sm"
        variant="glass"
        label="Hire"
      />
      <span>{HERO.secondaryCTA.label}</span>
    </a>

  </div>
</ScrollReveal>

<style>
  .hero-cta {
    display: flex;
    gap: 14px;
    margin-top: 18px;
    flex-wrap: wrap;
  }

  .align-center {
    justify-content: center;
  }

  .align-left {
    justify-content: flex-start;
  }

  .cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: 12px 18px;

    border-radius: var(--radius-md);

    background: var(--gradient-primary);
    color: white;

    font-weight: 600;
    font-size: var(--text-md);

    transition:
      transform var(--transition-fast) var(--easing),
      box-shadow var(--transition-fast) var(--easing);
  }

  .cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
  }

  .cta-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: 10px 14px;

    border-radius: var(--radius-md);

    border: 1px solid var(--border-subtle);

    color: var(--text-primary);
    font-weight: 500;

    transition:
      transform var(--transition-fast) var(--easing),
      background var(--transition-fast) var(--easing);
  }

  .cta-secondary:hover {
    background: var(--bg-secondary);
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    .hero-cta {
      gap: 10px;
    }

    .cta-primary {
      padding: 11px 16px;
    }
  }
</style>