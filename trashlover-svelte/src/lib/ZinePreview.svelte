<script>
  import { userChoices } from '../store';
  import ZineCover from './ZineCover.svelte';
  import ZinePage from './ZinePage.svelte';
</script>

<div class="zine-preview">
  <div></div>
  <div class="page cover-container">
    <ZineCover />
  </div>
  <div class="innerCover page"></div>
  <div class="titlepage choice-container page" id="maanantai">
    <h2>Maanantai</h2>
  </div>
  {#each $userChoices['maanantai'] as choice}
    <ZinePage {choice} />
  {/each}
  <div class="titlepage choice-container page" id="tiistai">
    <h2>Tiistai</h2>
  </div>
  {#each $userChoices['tiistai'] as choice}
    <ZinePage {choice} />
  {/each}
  <div class="titlepage choice-container page" id="keskiviikko">
    <h2>Keskiviikko</h2>
  </div>
  {#each $userChoices['keskiviikko'] as choice}
    <ZinePage {choice} />
  {/each}
  <div class="titlepage choice-container page" id="torstai">
    <h2>Torstai</h2>
  </div>
  {#each $userChoices['torstai'] as choice}
    <ZinePage {choice} />
  {/each}
  <div class="titlepage choice-container page" id="perjantai">
    <h2>Perjantai</h2>
  </div>
  {#each $userChoices['perjantai'] as choice}
    <ZinePage {choice} />
  {/each}
  <div class="titlepage choice-container page" id="lauantai">
    <h2>Lauantai</h2>
  </div>
  {#each $userChoices['lauantai'] as choice}
    <ZinePage {choice} />
  {/each}
  <div class="titlepage choice-container page" id="sunnuntai">
    <h2>Sunnuntai</h2>
  </div>
  {#each $userChoices['sunnuntai'] as choice}
    <ZinePage {choice} />
  {/each}
  <div class="innerCover page"></div>
  <div class="page backCover pattern-DGzqM"></div>
</div>

<style>
  .cover-container {
    font-size: clamp(1rem, 5vw, 3rem);
    font-weight: bold;
  }
  .titlepage {
    text-align: center;
    padding: 1em;
    font-family: 'Reenie Beanie', serif;
    font-size: clamp(0.7rem, 3vw, 2rem);

  }
  .innerCover {
    /* Add styles for your choice container */
    max-width: 45rem;
    background-color: #ffffff;
    border: 1px solid #ccc;
  }

</style>