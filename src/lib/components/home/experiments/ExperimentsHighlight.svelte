<!-- src/lib/components/home/experiments/ExperimentsHighlight.svelte -->

<script>
  import Container from "../../layout/Container.svelte";
  import GlassCard from "../../ui/GlassCard.svelte";
  import GradientText from "../../ui/GradientText.svelte";
  import SectionTitle from "../../ui/SectionTitle.svelte";
  import Badge from "../../ui/Badge.svelte";
  import ScrollReveal from "../../effects/ScrollReveal.svelte";
  import GradientBlob from "../../effects/GradientBlob.svelte";
  import { ArrowUpRight, Sparkles } from "lucide-svelte";

  const tags = [
    "AI Experiments",
    "Browser APIs",
    "WebAssembly",
    "Creative Coding"
  ];
</script>

<section class="experiments-section section-wrapper">
  <Container>

    <ScrollReveal>
      <SectionTitle
        title="Experiments"
        subtitle="Creative and experimental things I build for the web."
      />
    </ScrollReveal>

    <ScrollReveal type="up" delay={120}>
      <div class="experiment-wrapper">

        <!-- background blobs -->
        <GradientBlob
          color="cyan"
          size={280}
          top="-60px"
          right="-80px"
          blur={120}
          opacity={0.28}
        />

        <GradientBlob
          color="violet"
          size={260}
          bottom="-60px"
          left="-80px"
          blur={120}
          opacity={0.26}
        />

        <GlassCard padding="lg" radius="xl" hover={true} glow={true}>
          <div class="experiment-card">

            <div class="experiment-icon">
              <Sparkles size={22} />
            </div>

            <div class="experiment-content">
              <h3 class="experiment-title">
                <GradientText gradient="primary">
                  Strange Web Experiments
                </GradientText>
              </h3>

              <p class="experiment-desc">
                I enjoy building unusual and experimental
                things with modern browser technology —
                camera AI tools, interactive UI ideas,
                and performance experiments.
              </p>

              <div class="experiment-tags">
                {#each tags as tag}
                  <Badge text={tag} variant="glass" size="sm" />
                {/each}
              </div>

              <a href="/projects" class="experiment-link">
                Explore Experiments
                <ArrowUpRight size={16} />
              </a>
            </div>

          </div>
        </GlassCard>

      </div>
    </ScrollReveal>

  </Container>
</section>

<style>
  .experiments-section {
    position: relative;
  }

  .experiment-wrapper {
    position: relative;
  }

  .experiment-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .experiment-icon {
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;

    background: var(--bg-secondary);
    border: 1px solid var(--border-subtle);

    color: var(--text-primary);
  }

  .experiment-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .experiment-title {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    letter-spacing: -0.01em;
  }

  .experiment-desc {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 420px;
  }

  .experiment-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 6px;
  }

  .experiment-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    margin-top: 6px;

    font-size: var(--text-sm);
    font-weight: var(--font-semibold);

    color: var(--text-primary);

    transition:
      transform var(--transition-fast) var(--easing),
      opacity var(--transition-fast) var(--easing);
  }

  .experiment-link:hover {
    transform: translateX(2px);
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    .experiment-desc {
      font-size: 14px;
    }
  }
</style>