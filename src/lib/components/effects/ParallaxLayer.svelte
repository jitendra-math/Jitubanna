<!-- src/lib/components/effects/ParallaxLayer.svelte -->

<script>
  import { onMount, onDestroy } from "svelte";
  import { throttle } from "../../utils/helpers";

  export let speed = 0.25;     // scroll intensity
  export let axis = "y";       // y | x
  export let reverse = false;
  export let clamp = false;    // stop movement outside viewport

  let el;

  function update() {
    const rect = el.getBoundingClientRect();
    const viewport = window.innerHeight;

    if (clamp && (rect.top > viewport || rect.bottom < 0)) return;

    const offset = window.scrollY * speed * (reverse ? -1 : 1);

    if (axis === "y") {
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    } else {
      el.style.transform = `translate3d(${offset}px, 0, 0)`;
    }
  }

  const onScroll = throttle(update, 16);

  onMount(() => {
    update();
    window.addEventListener("scroll", onScroll);
  });

  onDestroy(() => {
    window.removeEventListener("scroll", onScroll);
  });
</script>

<div bind:this={el} class="parallax-layer">
  <slot />
</div>

<style>
  .parallax-layer {
    will-change: transform;
    transition: transform 0.1s linear;
  }
</style>