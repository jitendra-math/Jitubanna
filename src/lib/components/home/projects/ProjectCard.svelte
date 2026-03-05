<!-- src/lib/components/home/projects/ProjectCard.svelte -->

<script>
  import GlassCard from "../../ui/GlassCard.svelte";
  import Badge from "../../ui/Badge.svelte";
  import GradientText from "../../ui/GradientText.svelte";
  import { ArrowUpRight, Github } from "lucide-svelte";

  export let title = "";
  export let description = "";
  export let image = "";
  export let href = "#";
  export let repo = "";
  export let tags = [];
</script>

<div class="project-card">

  <GlassCard padding="md" radius="xl" hover={true} glow={true}>
    <div class="card-inner">

      <!-- Preview -->
      {#if image}
        <div class="project-image">
          <img src={image} alt={title} loading="lazy" />
        </div>
      {/if}

      <!-- Content -->
      <div class="project-content">

        <div class="project-header">
          <h3 class="project-title">
            <GradientText gradient="primary">
              {title}
            </GradientText>
          </h3>
        </div>

        {#if description}
          <p class="project-desc">
            {description}
          </p>
        {/if}

        {#if tags.length}
          <div class="project-tags">
            {#each tags as tag}
              <Badge text={tag} size="sm" variant="glass" />
            {/each}
          </div>
        {/if}

      </div>

      <!-- Actions -->
      <div class="project-actions">

        <a href={href} target="_blank" class="project-link">
          <span>View</span>
          <ArrowUpRight size={16} />
        </a>

        {#if repo}
          <a href={repo} target="_blank" class="project-repo">
            <Github size={18} />
          </a>
        {/if}

      </div>

    </div>
  </GlassCard>

</div>

<style>
  .project-card {
    min-width: 260px;
  }

  .card-inner {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .project-image {
    width: 100%;
    height: 150px;

    border-radius: var(--radius-lg);
    overflow: hidden;

    background: var(--bg-tertiary);
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .project-title {
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
  }

  .project-desc {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.5;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
  }

  .project-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 6px;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    font-size: var(--text-sm);
    font-weight: 500;

    color: var(--text-primary);

    transition:
      transform var(--transition-fast) var(--easing),
      opacity var(--transition-fast) var(--easing);
  }

  .project-link:hover {
    transform: translateY(-1px);
    opacity: 0.8;
  }

  .project-repo {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;

    border-radius: 10px;

    background: var(--bg-secondary);
    border: 1px solid var(--border-subtle);

    transition:
      transform var(--transition-fast) var(--easing),
      background var(--transition-fast) var(--easing);
  }

  .project-repo:hover {
    transform: translateY(-2px);
    background: var(--bg-tertiary);
  }

  @media (max-width: 480px) {
    .project-image {
      height: 140px;
    }
  }
</style>