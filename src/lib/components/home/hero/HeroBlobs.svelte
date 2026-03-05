<!-- src/lib/components/home/hero/HeroBlobs.svelte -->

<script>
  import GradientBlob from "../../effects/GradientBlob.svelte";
  import BlurGlow from "../../effects/BlurGlow.svelte";
  import ParallaxLayer from "../../effects/ParallaxLayer.svelte";

  export let intensity = 1;
</script>

<div class="hero-blobs">

  <!-- Background Violet Blob -->
  <ParallaxLayer speed={0.15 * intensity}>
    <GradientBlob
      color="violet"
      size={420}
      top="-120px"
      left="-140px"
      blur={140}
      opacity={0.35}
    />
  </ParallaxLayer>

  <!-- Cyan Floating Blob -->
  <ParallaxLayer speed={0.22 * intensity}>
    <GradientBlob
      color="cyan"
      size={340}
      top="120px"
      right="-120px"
      blur={130}
      opacity={0.32}
    />
  </ParallaxLayer>

  <!-- Pink Glow -->
  <ParallaxLayer speed={0.18 * intensity} reverse>
    <BlurGlow
      color="pink"
      size={300}
      bottom="-100px"
      left="40px"
      blur={90}
      opacity={0.3}
    />
  </ParallaxLayer>

  <!-- Blue Glow -->
  <ParallaxLayer speed={0.12 * intensity}>
    <BlurGlow
      color="blue"
      size={260}
      top="40%"
      right="-80px"
      blur={80}
      opacity={0.25}
    />
  </ParallaxLayer>

</div>

<style>
  .hero-blobs {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 480px) {
    .hero-blobs {
      opacity: 0.9;
    }
  }
</style>