<!-- src/lib/components/home/skills/SkillsSection.svelte -->

<script>
  import SectionTitle from "../../ui/SectionTitle.svelte";
  import ScrollReveal from "../../effects/ScrollReveal.svelte";
  import SkillCard from "./SkillCard.svelte";

  import {
    Code2,
    Cpu,
    Globe,
    Database,
    Layers,
    Zap
  } from "lucide-svelte";

  const skills = [
    {
      name: "JavaScript",
      level: "Advanced",
      icon: Code2,
      highlight: true
    },
    {
      name: "Svelte / SvelteKit",
      level: "Advanced",
      icon: Layers
    },
    {
      name: "Frontend UI",
      level: "Advanced",
      icon: Globe
    },
    {
      name: "Backend APIs",
      level: "Intermediate",
      icon: Database
    },
    {
      name: "Performance",
      level: "Advanced",
      icon: Zap
    },
    {
      name: "Web Experiments",
      level: "Creative",
      icon: Cpu,
      highlight: true
    }
  ];
</script>

<section class="skills-section section-wrapper">

  <ScrollReveal>
    <SectionTitle
      title="Skills & Tools"
      subtitle="Technologies and areas I enjoy working with."
    />
  </ScrollReveal>

  <ScrollReveal type="up" delay={120}>
    <div class="skills-grid">
      {#each skills as skill}
        <SkillCard
          name={skill.name}
          level={skill.level}
          icon={skill.icon}
          highlight={skill.highlight}
        />
      {/each}
    </div>
  </ScrollReveal>

</section>

<style>
  .skills-section {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  @media (min-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>