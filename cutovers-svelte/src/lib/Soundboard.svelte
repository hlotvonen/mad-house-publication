<script>
  import { circles, innerHeight, innerWidth} from "./store.js";
  import Circle from "./Circle.svelte";

  let svg;

</script>

<div class="svg-container">

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <svg width="100%" height="100%" bind:this={svg} viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
    {#each $circles as circle (circle.id)}
      <Circle
        index={circle.id}
        svg={svg}
      />
    {/each}
  </svg>

</div>

<svelte:window bind:innerWidth={$innerWidth} bind:innerHeight={$innerHeight} />

<style>
  .svg-container {
    background-color: #d1d1d1;
    margin:0 auto;
    height: 100%;
    aspect-ratio: 1/1;
    display: flex;
  }
  @media (max-aspect-ratio: 1/1) {
    .svg-container {
      width: 100%;
      height: auto;
    }
  }
  svg {
    background: linear-gradient(black 0 15%, red);
  }
</style>