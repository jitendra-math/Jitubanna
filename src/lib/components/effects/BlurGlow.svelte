<!-- src/lib/components/effects/BlurGlow.svelte -->

<script>
  import { onMount } from "svelte";

  export let color = "violet";     // violet | cyan | pink | blue
  export let size = 260;
  export let opacity = 0.35;
  export let blur = 80;
  export let top = "auto";
  export let left = "auto";
  export let right = "auto";
  export let bottom = "auto";
  export let pulse = true;

  let glow;

  onMount(() => {
    if (!pulse) return;

    let direction = 1;

    const interval = setInterval(() => {
      direction *= -1;

      glow.style.transform =
        direction > 0
          ? "scale(1.05)"
          : "scale(0.95)";
    }, 3500);

    return () => clearInterval(interval);
  });
</script>

<div
  bind:this={glow}
  class={`blur-glow glow-${color}`}
  style="
    width:{size}px;
    height:{size}px;
    top:{top};
    left:{left};
    right:{right};
    bottom:{bottom};
    opacity:{opacity};
    filter: blur({blur}px);
  "
/>

<style>
  .blur-glow {
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
    z-index: -1;

    transition:
      transform 6s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.6s ease;
  }

  .glow-violet {
    background: radial-gradient(circle, rgba(124,92,255,0.8), transparent 70%);
  }

  .glow-cyan {
    background: radial-gradient(circle, rgba(22,214,255,0.8), transparent 70%);
  }

  .glow-pink {
    background: radial-gradient(circle, rgba(255,92,170,0.8), transparent 70%);
  }

  .glow-blue {
    background: radial-gradient(circle, rgba(58,141,255,0.8), transparent 70%);
  }

  @media (max-width: 480px) {
    .blur-glow {
      opacity: 0.28;
    }
  }
</style>