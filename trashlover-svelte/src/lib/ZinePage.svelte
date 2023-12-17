<script>
  export let choice;
</script>

<div class="choice-container page">
  {#if choice.type === 'text'}
    <p>{@html choice.content}</p>
  {:else if choice.type === 'image'}
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={`./${choice.content}`} alt="Choice Image" />
  {/if}
</div>

<style>
  .choice-container p {
    margin: 0;
    font-size: 2rem;
    line-height: 1;
  }
  img {
    object-fit: contain;
    max-height: 100%;
    margin: 0 auto;
  }
</style>
