<!-- src/lib/components/home/projects/ProjectsPreview.svelte -->

<script>
  import SectionTitle from "../../ui/SectionTitle.svelte";
  import ProjectsCarousel from "./ProjectsCarousel.svelte";
  import ScrollReveal from "../../effects/ScrollReveal.svelte";

  export let projects = [
    {
      title: "Eye Guardian",
      description: "AI based eye state detection using browser camera.",
      image: "/images/projects/eye-guardian.jpg",
      href: "#",
      repo: "#",
      tags: ["AI", "Vision", "Web"]
    },
    {
      title: "GitHub Repo Downloader",
      description: "Download full GitHub repositories directly from browser.",
      image: "/images/projects/repo-downloader.jpg",
      href: "#",
      repo: "#",
      tags: ["GitHub", "Tools", "JS"]
    },
    {
      title: "Image Converter",
      description: "Convert images to AVIF, JXL, WebP directly in browser.",
      image: "/images/projects/image-converter.jpg",
      href: "#",
      repo: "#",
      tags: ["Image", "WebAssembly"]
    },
    {
      title: "JS Mail",
      description: "Experimental browser based mail client built with JS.",
      image: "/images/projects/js-mail.jpg",
      href: "#",
      repo: "#",
      tags: ["Email", "Web App"]
    }
  ];
</script>

<section class="projects-preview section-wrapper">

  <ScrollReveal>
    <SectionTitle
      title="Featured Projects"
      subtitle="A few things I've built and experimented with."
    />
  </ScrollReveal>

  <ProjectsCarousel {projects} />

</section>

<style>
  .projects-preview {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
</style>