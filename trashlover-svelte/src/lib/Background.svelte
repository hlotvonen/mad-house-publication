<script>
  $: clientWidth = 0
	$: clientHeight = 0
</script>

<div 
  class="grid-container" 
  style="grid-template-columns: repeat(50, 1fr); grid-template-rows: repeat(50, 1fr)"
  bind:clientWidth
  bind:clientHeight
>
  <div style="grid-area: 1 / 1 / 51 / 51;" class="shapeContainer"><div class="shape  pattern-floor"></div></div>
  <div style="grid-area: 1 / 1 / 51 / 51;" class="shapeContainer"><div style="transform: translate3d(0, 0, -{clientHeight}px);" class="shape pattern-wall wall-back"></div></div>
  <div style="grid-area: 1 / 1 / 51 / 51;" class="shapeContainer "><div class="shape  pattern-wall wall-ceiling "></div></div>
  <div style="grid-area: 1 / 1 / 51 / 51; perspective: {(clientWidth / clientHeight) * 2000}px;" class="shapeContainer sidewalls"><div class="shape  pattern-wall wall-left "></div></div>
  <div style="grid-area: 1 / 1 / 51 / 51; perspective: {(clientWidth / clientHeight) * 2000}px;" class="shapeContainer sidewalls"><div class="shape  pattern-wall wall-right "></div></div>
  <div style="grid-area: 1 / 1 / 51 / 51;" class="content-container">
    <slot />
  </div>
</div>
  


<style>
  .grid-container {
    height: 100%;
  }
  .content-container {
    position: relative;
  }
  .shapeContainer {
    position: relative;
    perspective:2000px;
  }
  .pattern-wall {
    background: 
      radial-gradient(
        100% 100% at center,
        white 40%,
        #e5e5e5 65%,
        var(--color8) 80%
      )
    ;
  }
  .wall-right {
    transform: rotateY(-90deg);
    transform-origin: center right;
  } 
  .wall-left {
    rotate: y 90deg;
    transform-origin: left;
  }
  .wall-ceiling {
    rotate: x -90deg;
    transform-origin: top;
  }
  .pattern-floor {
    background:
      radial-gradient(
        100% 100% at center,
        transparent 40%,
        hsl(0 0% 0% / 10%) 60%
      ),
      radial-gradient(
        100% 100% at center,
        transparent 40%,
        hsl(0 0% 80% / 10%) 65%
      ),
      conic-gradient(
        white 0.25turn,
        #e5e5e5 0.25turn 0.5turn,
        white 0.5turn 0.75turn,
        #e5e5e5 0.75turn
      )
    ;
    background-size: 100% 100%, 10% 10%, 20% 20%;
    rotate: x 90deg;
    transform-origin: bottom;
  } 
</style>