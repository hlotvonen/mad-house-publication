<script>
  export let choice; // Receive the choice data as a prop
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleSelect() {
    dispatch('select', choice);
  }
</script>

<div class="choice-container" on:click={handleSelect}>
  {#if choice.type === 'text'}
    <p>{@html choice.content}</p>
  {:else if choice.type === 'image'}
    <img src={`./${choice.content}`} alt="Choice Image" />
  {/if}
</div>

<style>
  .choice-container {
    /* Add styles for your choice container */
    cursor: pointer;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>
