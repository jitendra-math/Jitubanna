<!-- src/routes/+page.svelte -->

<script>
  import Container from "$layout/Container.svelte";

  import HeroSection from "$home/hero/HeroSection.svelte";
  import BentoGrid from "$home/bento/BentoGrid.svelte";
  import ProjectsPreview from "$home/projects/ProjectsPreview.svelte";
  import SkillsSection from "$home/skills/SkillsSection.svelte";
  import AboutPreview from "$home/about/AboutPreview.svelte";
  import ExperimentsHighlight from "$home/experiments/ExperimentsHighlight.svelte";
  import HireCTA from "$home/hire/HireCTA.svelte";
</script>

<div class="home-page">

  <!-- HERO -->
  <HeroSection />

  <!-- CONTENT CONTAINER -->
  <Container>

    <!-- NAV BENTO -->
    <BentoGrid />

    <!-- PROJECTS -->
    <ProjectsPreview />

    <!-- SKILLS -->
    <SkillsSection />

    <!-- ABOUT -->
    <AboutPreview />

    <!-- EXPERIMENTS -->
    <ExperimentsHighlight />

    <!-- HIRE CTA -->
    <HireCTA />

  </Container>

</div>

<style>
  .home-page {
    position: relative;
    width: 100%;
  }

  .home-page :global(section) {
    margin-top: 72px;
  }

  @media (max-width: 480px) {
    .home-page :global(section) {
      margin-top: 60px;
    }
  }
</style>