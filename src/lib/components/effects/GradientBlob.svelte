<!-- src/lib/components/effects/GradientBlob.svelte -->

<script>
  import { onMount } from "svelte";

  export let color = "violet"; // violet | cyan | pink | blue | custom
  export let size = 320;
  export let top = "auto";
  export let left = "auto";
  export let right = "auto";
  export let bottom = "auto";
  export let opacity = 0.35;
  export let blur = 120;
  export let animate = true;

  let blob;

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  onMount(() => {
    if (!animate) return;

    let x = 0;
    let y = 0;

    function move() {
      x = random(-40, 40);
      y = random(-40, 40);

      blob.style.transform = `translate(${x}px, ${y}px)`;
    }

    const interval = setInterval(move, 4000);

    return () => clearInterval(interval);
  });
</script>

<div
  bind:this={blob}
  class={`blob blob-${color}`}
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
  .blob {
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
    z-index: -1;

    transition: transform 6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .blob-violet {
    background: radial-gradient(circle, #7c5cff 0%, transparent 70%);
  }

  .blob-cyan {
    background: radial-gradient(circle, #16d6ff 0%, transparent 70%);
  }

  .blob-pink {
    background: radial-gradient(circle, #ff5caa 0%, transparent 70%);
  }

  .blob-blue {
    background: radial-gradient(circle, #3a8dff 0%, transparent 70%);
  }

  .blob-custom {
    background: radial-gradient(circle, rgba(124, 92, 255, 0.7), transparent 70%);
  }

  @media (max-width: 480px) {
    .blob {
      opacity: 0.28;
    }
  }
</style>