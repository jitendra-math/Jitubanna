<!-- src/lib/components/ui/SectionTitle.svelte -->

<script>
  import GradientText from "./GradientText.svelte";

  export let title = "";
  export let subtitle = "";
  export let align = "center"; // left | center | right
  export let gradient = true;
  export let tag = "h2";
</script>

<div class={`section-title-wrapper align-${align}`}>
  {#if gradient}
    <GradientText tag={tag} class="title">
      {title}
    </GradientText>
  {:else}
    <svelte:element this={tag} class="title">
      {title}
    </svelte:element>
  {/if}

  {#if subtitle}
    <p class="subtitle">{subtitle}</p>
  {/if}
</div>

<style>
  .section-title-wrapper {
    width: 100%;
    margin-bottom: 28px;
  }

  .align-left {
    text-align: left;
  }

  .align-center {
    text-align: center;
  }

  .align-right {
    text-align: right;
  }

  .title {
    font-size: clamp(24px, 5vw, 32px);
    font-weight: var(--font-bold);
    line-height: var(--line-tight);
    letter-spacing: var(--tracking-tight);
  }

  .subtitle {
    margin-top: 10px;
    font-size: var(--text-md);
    color: var(--text-secondary);
    max-width: 520px;
  }

  .align-center .subtitle {
    margin-left: auto;
    margin-right: auto;
  }

  .align-right .subtitle {
    margin-left: auto;
  }
</style>