<!-- src/lib/components/home/hero/HeroIntro.svelte -->

<script>
  import GradientText from "../../ui/GradientText.svelte";
  import Badge from "../../ui/Badge.svelte";
  import ScrollReveal from "../../effects/ScrollReveal.svelte";
  import { HERO } from "../../../utils/constants";
</script>

<div class="hero-intro">

  <ScrollReveal type="fade" delay={80}>
    <div class="hero-greeting">
      <span>{HERO.greeting}</span>
    </div>
  </ScrollReveal>

  <ScrollReveal type="up" delay={140}>
    <h1 class="hero-name">
      <GradientText tag="span" gradient="primary">
        {HERO.name}
      </GradientText>
    </h1>
  </ScrollReveal>

  <ScrollReveal type="up" delay={200}>
    <p class="hero-tagline">
      {HERO.tagline}
    </p>
  </ScrollReveal>

  <ScrollReveal type="up" delay={260}>
    <p class="hero-subtext">
      {HERO.subtext}
    </p>
  </ScrollReveal>

  <ScrollReveal type="up" delay={320}>
    <div class="hero-badges">
      <Badge text="Mobile-First UI" variant="glass" size="sm" />
      <Badge text="Fast Web Tools" variant="glass" size="sm" />
      <Badge text="Experimental Dev" variant="glass" size="sm" />
    </div>
  </ScrollReveal>

</div>

<style>
  .hero-intro {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .hero-greeting {
    font-size: var(--text-md);
    color: var(--text-secondary);
  }

  .hero-name {
    font-size: clamp(34px, 6vw, 46px);
    font-weight: var(--font-bold);
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .hero-tagline {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    color: var(--text-primary);
  }

  .hero-subtext {
    font-size: var(--text-md);
    color: var(--text-secondary);
    max-width: 420px;
    line-height: 1.6;
  }

  .hero-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 6px;
  }

  @media (max-width: 480px) {
    .hero-name {
      font-size: clamp(30px, 7vw, 40px);
    }

    .hero-tagline {
      font-size: var(--text-lg);
    }
  }
</style>