<!-- src/lib/components/effects/ScrollReveal.svelte -->

<script>
  import { onMount } from "svelte";
  import { fadeUp, fadeDown, scaleIn } from "../../utils/animations";

  export let type = "up";      // up | down | scale | fade
  export let delay = 0;
  export let once = true;
  export let threshold = 0.2;

  let element;

  function runAnimation() {
    if (type === "up") fadeUp(element);
    else if (type === "down") fadeDown(element);
    else if (type === "scale") scaleIn(element);
    else element.style.opacity = 1;
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          setTimeout(() => {
            runAnimation();
          }, delay);

          if (once) observer.unobserve(entry.target);
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  });
</script>

<div bind:this={element} class="scroll-reveal">
  <slot />
</div>

<style>
  .scroll-reveal {
    opacity: 0;
    will-change: transform, opacity;
  }
</style>