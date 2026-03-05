<!-- src/lib/components/home/hero/HeroSection.svelte -->

<script>
  import Container from "../../layout/Container.svelte";
  import ScrollReveal from "../../effects/ScrollReveal.svelte";
  import HeroIntro from "./HeroIntro.svelte";
  import HeroCTA from "./HeroCTA.svelte";
  import HeroBlobs from "./HeroBlobs.svelte";

  export let align = "left"; // left | center
</script>

<section class={`hero-section align-${align}`}>
  <HeroBlobs />

  <Container size="mobile" padding={true}>
    <div class="hero-inner">

      <ScrollReveal type="up">
        <HeroIntro />
      </ScrollReveal>

      <HeroCTA align={align} />

    </div>
  </Container>
</section>

<style>
  .hero-section {
    position: relative;
    overflow: hidden;

    padding-top: 57px;
    padding-bottom: 72px;

    min-height: 70vh;

    display: flex;
    align-items: center;
  }
@media (max-width: 480px) {
  .hero-section {
    padding-top: 40px;
  }
}
  .hero-inner {
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .align-center .hero-inner {
    align-items: center;
    text-align: center;
  }

  .align-left .hero-inner {
    align-items: flex-start;
    text-align: left;
  }

  @media (max-width: 480px) {
    .hero-section {
      padding-top: 64px;
      padding-bottom: 64px;
      min-height: 60vh;
    }

    .hero-inner {
      gap: 20px;
    }
  }
</style>
