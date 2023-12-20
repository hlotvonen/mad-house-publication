<script>
  import { Howl } from 'howler';
  import { onMount } from "svelte";
  import { circles, circleDistances, innerHeight, innerWidth } from "./store.js";
  import { spring } from 'svelte/motion';
  import {
    clamp,
    normalize,
    convertPixelToSvgCoord,
  } from "./audioHelpers.js";

  export let index;
  export let svg;

  let el;
  let dragging = false;
  let sound;
  let size = spring(30);

  onMount(() => {
    makeDraggable();
    initializeAudio();
  });

  function initializeAudio() {
    if ($circles[index].soundLoaded) return

    sound = new Howl({
      src: [index + 1 + '.webm', index + 1 + '.mp3'],
      loop: true,
      preload: true,
      volume: 0,
      onload: function() {
        $circles[index].soundLoaded = true
        console.log('loaded sound ' + index);
      }
    });  
  }

  function adjustSound() {
    const circle = $circles[index];

    const viewBox = svg.viewBox.baseVal;
    const zeroVolumeThreshold = circle.radius * 2;

    // Adjust playback based on the circle's Y position
    if (circle.position.y >= zeroVolumeThreshold) {
      sound.volume(normalize($circles[index].position.y, zeroVolumeThreshold, $innerHeight))
    }
    let normalizedX = ((circle.position.x - viewBox.width / 2) / (viewBox.width / 2 - circle.radius));
    sound.stereo(normalizedX);
  }

  function makeDraggable() {
    el.addEventListener("pointerdown", startDragging);
    el.addEventListener("pointerup", endDragging);
    el.addEventListener("pointercancel", endDragging);
    el.addEventListener("pointermove", dragAndMove);
    el.addEventListener('touchstart', (e) => e.preventDefault());
  }

  function startDragging(event) {
    if (event.button !== 0) return;
    event.stopPropagation();
    
    initializeAudio();

    let coords = convertPixelToSvgCoord(event, el);
    dragging = {
      dx: $circles[index].position.x - coords.x,
      dy: $circles[index].position.y - coords.y,
    };
    el.setPointerCapture(event.pointerId);
  }

  function endDragging(event) {
    dragging = false;
    const circle = $circles[index];
    const zeroVolumeThreshold = circle.radius * 2;
    if (circle.position.y <= zeroVolumeThreshold) {
      if(circle.soundLoaded) {
        sound.stop();
      }
    }
  }

  function dragAndMove(event) {

    if (!dragging) return;
    event.stopPropagation();

    const circle = $circles[index];
    const zeroVolumeThreshold = circle.radius * 2;
    if (circle.position.y >= zeroVolumeThreshold) {
      if(circle.soundLoaded && !sound.playing()) {
        sound.play();
      }
    }

    let coords = convertPixelToSvgCoord(event, el);
    const viewBox = svg.viewBox.baseVal;
    $circles[index].position = {
      x: clamp(
        coords.x + dragging.dx,
        viewBox.x + $circles[index].radius,
        viewBox.x + viewBox.width - $circles[index].radius
      ),
      y: clamp(
        coords.y + dragging.dy,
        viewBox.y + $circles[index].radius,
        viewBox.y + viewBox.height - $circles[index].radius
      ),
    };

    adjustSound();
  }
</script>

<defs>
  <radialGradient 
    id="gradient{index}"
    fr="5%"
    r="0.5"
    fx="{clamp((normalize($circles[index].position.x, 0, 600) * 100), 35, 65)}%"
    fy="{clamp((normalize($circles[index].position.y, 0, 600) * 100), 35, 65)}%"
    cx="{clamp((100 - normalize($circles[index].position.x, 0, 600) * 100), 35, 65)}%"
    cy="{clamp((100 - normalize($circles[index].position.y, 0, 600) * 100), 35, 65)}%"
    spreadMethod="reflect"
    >
    <stop 
      offset="0%" 
      stop-color="hsl(
        {1 - $circleDistances[index].totalNormalizedDistance}turn
        {180 + $circleDistances[index].totalNormalizedDistance * 500}% 
        {(normalize($circles[index].position.y, 0, 600) * 50)}%
      )"
    />
    <stop 
      offset="100%" 
      stop-color="hsl(
        {360 - $circleDistances[index].totalNormalizedDistance * 1000}deg
        {100 - $circleDistances[index].totalNormalizedDistance * 20}% 
        50%
      )"
    />
  </radialGradient>
</defs>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<g
  bind:this={el}
  transform={`translate(${$circles[index].position.x}, ${$circles[index].position.y})`}
  style="cursor: ${dragging ? 'grabbing' : 'grab'}"
  class={$circles[index].soundLoaded? 'loaded' : 'loading'}
  on:mousedown={() => size.set(40)}
	on:mouseup={() => size.set(30)}
>
  <circle
    r={$size}
    fill="url('#gradient{index}')"
  />
</g>

<style>
  circle {
    cursor: grab;
  }
  g {
    transition: opacity 2s ease-in-out;
  }
  .loading {
    pointer-events: none;
    opacity: 0;
  }
  .loaded {
    opacity: 1;
    pointer-events: all;
  }
</style>