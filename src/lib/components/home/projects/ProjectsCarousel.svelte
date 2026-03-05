<!-- src/lib/components/home/projects/ProjectsCarousel.svelte -->

<script>
  import { onMount } from "svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import ScrollReveal from "../../effects/ScrollReveal.svelte";
  import IconButton from "../../ui/IconButton.svelte";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";

  export let projects = [];

  let container;

  function scrollLeft() {
    container.scrollBy({
      left: -280,
      behavior: "smooth"
    });
  }

  function scrollRight() {
    container.scrollBy({
      left: 280,
      behavior: "smooth"
    });
  }

  let isMobile = true;

  onMount(() => {
    isMobile = window.innerWidth <= 480;
  });
</script>

<div class="projects-carousel">

  <!-- Controls -->
  {#if !isMobile}
    <div class="carousel-controls">
      <IconButton icon={ChevronLeft} variant="glass" on:click={scrollLeft} />
      <IconButton icon={ChevronRight} variant="glass" on:click={scrollRight} />
    </div>
  {/if}

  <!-- Scroll Area -->
  <ScrollReveal type="up">
    <div class="carousel-container" bind:this={container}>
      {#each projects as project}
        <ProjectCard
          title={project.title}
          description={project.description}
          image={project.image}
          href={project.href}
          repo={project.repo}
          tags={project.tags}
        />
      {/each}
    </div>
  </ScrollReveal>

</div>

<style>
  .projects-carousel {
    position: relative;
    width: 100%;
  }

  .carousel-container {
    display: flex;
    gap: 16px;

    overflow-x: auto;
    overflow-y: hidden;

    scroll-snap-type: x mandatory;

    padding-bottom: 6px;
  }

  .carousel-container::-webkit-scrollbar {
    display: none;
  }

  .carousel-container > * {
    scroll-snap-align: start;
  }

  .carousel-controls {
    position: absolute;
    right: 0;
    top: -48px;

    display: flex;
    gap: 8px;
  }

  @media (max-width: 480px) {
    .carousel-container {
      gap: 14px;
    }
  }
</style>