<!-- src/lib/components/home/bento/BentoGrid.svelte -->

<script>
  import ScrollReveal from "../../effects/ScrollReveal.svelte";
  import SectionTitle from "../../ui/SectionTitle.svelte";
  import BentoCard from "./BentoCard.svelte";

  import {
    User,
    FolderGit2,
    Mail,
    Briefcase,
    Sparkles
  } from "lucide-svelte";

  const cards = [
    {
      title: "About Me",
      description: "Who I am and what I build on the internet.",
      icon: User,
      href: "/about",
      gradient: "primary"
    },
    {
      title: "Projects",
      description: "Explore experiments, tools and dev builds.",
      icon: FolderGit2,
      href: "/projects",
      gradient: "cyan",
      size: "wide"
    },
    {
      title: "Hire Me",
      description: "Let's build something fast and beautiful.",
      icon: Briefcase,
      href: "/hire",
      gradient: "sunset"
    },
    {
      title: "Contact",
      description: "Reach out for collaboration or ideas.",
      icon: Mail,
      href: "/contact",
      gradient: "neon"
    },
    {
      title: "Experiments",
      description: "Strange and fun web experiments.",
      icon: Sparkles,
      href: "/projects",
      gradient: "primary",
      size: "wide"
    }
  ];
</script>

<section class="bento-section">

  <SectionTitle
    title="Explore"
    subtitle="A quick way to navigate through my work and ideas."
  />

  <ScrollReveal type="up" delay={120}>
    <div class="bento-grid">

      {#each cards as card}
        <BentoCard
          title={card.title}
          description={card.description}
          icon={card.icon}
          href={card.href}
          gradient={card.gradient}
          size={card.size ?? "normal"}
          glow={true}
        />
      {/each}

    </div>
  </ScrollReveal>

</section>

<style>
  .bento-section {
    margin-top: 64px;
  }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 480px) {
    .bento-grid {
      gap: 14px;
    }
  }

  @media (min-width: 768px) {
    .bento-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>