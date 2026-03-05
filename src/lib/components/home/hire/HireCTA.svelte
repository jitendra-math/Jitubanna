<!-- src/lib/components/home/hire/HireCTA.svelte -->

<script>
  import Container from "../../layout/Container.svelte";
  import GlassCard from "../../ui/GlassCard.svelte";
  import GradientText from "../../ui/GradientText.svelte";
  import Badge from "../../ui/Badge.svelte";
  import ScrollReveal from "../../effects/ScrollReveal.svelte";
  import GradientBlob from "../../effects/GradientBlob.svelte";
  import { ArrowUpRight, Briefcase } from "lucide-svelte";

  const services = [
    "Web Apps",
    "UI/UX Interfaces",
    "Developer Tools",
    "Performance Optimization"
  ];
</script>

<section class="hire-section section-wrapper">
  <Container>

    <ScrollReveal>
      <div class="hire-wrapper">

        <!-- Background glow blobs -->
        <GradientBlob
          color="violet"
          size={300}
          top="-80px"
          right="-100px"
          blur={120}
          opacity={0.28}
        />

        <GradientBlob
          color="cyan"
          size={260}
          bottom="-70px"
          left="-80px"
          blur={120}
          opacity={0.26}
        />

        <GlassCard padding="lg" radius="xl" hover={true} glow={true}>
          <div class="hire-card">

            <div class="hire-icon">
              <Briefcase size={22} />
            </div>

            <div class="hire-content">

              <h3 class="hire-title">
                <GradientText gradient="primary">
                  Let's Build Something
                </GradientText>
              </h3>

              <p class="hire-desc">
                If you need a fast web app, experimental UI,
                or a performance-focused tool — I'm always
                interested in building interesting projects.
              </p>

              <div class="hire-tags">
                {#each services as service}
                  <Badge text={service} variant="glass" size="sm" />
                {/each}
              </div>

              <a href="/hire" class="hire-button">
                Hire Me
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
  .hire-section {
    position: relative;
  }

  .hire-wrapper {
    position: relative;
  }

  .hire-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .hire-icon {
    width: 44px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;

    background: var(--bg-secondary);
    border: 1px solid var(--border-subtle);

    color: var(--text-primary);
  }

  .hire-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .hire-title {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    letter-spacing: -0.01em;
  }

  .hire-desc {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 420px;
  }

  .hire-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 6px;
  }

  .hire-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    margin-top: 8px;

    padding: 12px 16px;

    border-radius: var(--radius-md);

    background: var(--gradient-primary);
    color: white;

    font-size: var(--text-sm);
    font-weight: var(--font-semibold);

    transition:
      transform var(--transition-fast) var(--easing),
      box-shadow var(--transition-fast) var(--easing);
  }

  .hire-button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
  }

  @media (max-width: 480px) {
    .hire-desc {
      font-size: 14px;
    }
  }
</style>