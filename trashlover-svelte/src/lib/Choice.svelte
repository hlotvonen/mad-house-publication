<script>
  import { createEventDispatcher } from 'svelte';

  export let choice; // Receive the choice data as a prop
  export let index;

  const dispatch = createEventDispatcher();

  let choiceElement; // Variable to hold the DOM element reference

  function handleSelect() {
    dispatch('select', choice);
    if (choiceElement) {
      choiceElement.blur();
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter") {
      handleSelect(e);
      console.log("Choice selected:", choice);
    }
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div 
  class="choice-container page" 
  tabindex={index+1} 
  on:click={handleSelect}
  on:keydown={onKeyDown} 
  bind:this={choiceElement}
  style="rotate: {Math.random() * 4 - 2}deg;"
  alt="Choice number {index+1}"
>
  <div class="index">{index + 1}</div>
  {#if choice.type === 'text'}
    <p>{@html choice.content}</p>
  {:else if choice.type === 'image'}
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={`./${choice.content}`} alt="Choice Image" />
  {/if}
</div>

<style>
  .index {
    position: absolute;
    top: -40px;
    left:50%;
    transform: translateX(-50%);
    border-radius: 100%;
    border:1px solid black;
    font-family: sans-serif;
    background-color: white;
    padding: 0.2rem 0.5rem;
  }
  .choice-container {
    cursor: pointer; 
    outline: none;
    display: grid;
    border-radius: 10px;
    padding: 1rem;
    overflow: initial;
  }
  img {
    object-fit: contain;
    max-height: 100%;
    margin: 0 auto;
  }
  
  .choice-container:focus, .choice-container:hover {
    box-shadow: 0 0 10px 5px var(--color3); 
    transform: scale(1.05);
    z-index: 2;
  }
  @media screen and (max-width: 800px) {
    .choice-container:focus, .choice-container:hover {
      transform: scale(1);
      z-index: 0;
    }
  }
</style>
