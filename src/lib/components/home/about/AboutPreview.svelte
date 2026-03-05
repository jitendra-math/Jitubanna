<!-- src/lib/components/home/about/AboutPreview.svelte -->

<script>
  import Container from "../../layout/Container.svelte";
  import GlassCard from "../../ui/GlassCard.svelte";
  import GradientText from "../../ui/GradientText.svelte";
  import SectionTitle from "../../ui/SectionTitle.svelte";
  import Badge from "../../ui/Badge.svelte";
  import ScrollReveal from "../../effects/ScrollReveal.svelte";
  import { ArrowRight } from "lucide-svelte";

  const badges = [
    "Web Developer",
    "UI Experiments",
    "Performance Focused",
    "Open Source"
  ];
</script>

<section class="about-preview section-wrapper">
  <Container>

    <ScrollReveal>
      <SectionTitle
        title="About Me"
        subtitle="A quick introduction about what I build and explore."
      />
    </ScrollReveal>

    <ScrollReveal type="up" delay={120}>
      <GlassCard padding="lg" radius="xl" hover={true} glow={true}>
        <div class="about-card">

          <div class="about-text">
            <p class="about-line">
              Hi, I'm
              <GradientText gradient="primary">
                Jitu Banna
              </GradientText>
              — a developer who enjoys building fast,
              beautiful and experimental web tools.
            </p>

            <p class="about-line muted">
              I love creating mobile-first interfaces,
              smooth animations and performance-focused
              applications that feel premium and modern.
            </p>

            <div class="about-badges">
              {#each badges as badge}
                <Badge text={badge} variant="glass" size="sm" />
              {/each}
            </div>

            <a href="/about" class="about-link">
              Read more
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </GlassCard>
    </ScrollReveal>

  </Container>
</section>

<style>
  .about-preview {
    position: relative;
  }

  .about-card {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .about-line {
    font-size: var(--text-md);
    line-height: var(--line-loose);
    color: var(--text-primary);
  }

  .about-line.muted {
    color: var(--text-secondary);
  }

  .about-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
  }

  .about-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    font-size: var(--text-sm);
    font-weight: var(--font-semibold);

    margin-top: 6px;

    color: var(--text-primary);

    transition:
      transform var(--transition-fast) var(--easing),
      opacity var(--transition-fast) var(--easing);
  }

  .about-link:hover {
    transform: translateX(2px);
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    .about-line {
      font-size: 15px;
    }
  }
</style>