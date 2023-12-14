<script>
  import Game from "./lib/Game.svelte";
  import Modal from "./lib/Modal.svelte";
  import Pdf from "./lib/Pdf.svelte";

  let showBioInfo = false;

</script>

<div class="content">

  <div class="top-bar">
    <div>
      <a href="..">&larr; Takaisin / Back</a>
      <span class="title">Elsa Tölli <i>Trashlover</i></span>
      <button on:click={() => (showBioInfo = true)}> Bio & Info</button>
    </div>
  </div>
  <div class="elsa-container">
    <Game />
    <Pdf />
  </div>
</div>

{#if showBioInfo}
  <Modal on:close={() => (showBioInfo = false)}>
    <h2 slot="title">Trashlover</h2>
    <h2 slot="name">Elsa Tölli</h2>
    <div class="descriptions">
      <div lang="fi" class="description-finnish">
        <strong>Suomeksi</strong>
        <p><i>Trash Lover</i> on maistelumenu virtuaaliseen koriin poimittua kultaa ja kipua. Hylättyjen filmikuvien alta löytyy käyttämättömiä runoja, sotkeutuneita muistiinpanoja sekä muistiin tarttuneita keskusteluja. Residenssissä syntynyt materiaali on arkaa ja tujua arkipäiväistä raaka-ainetta: taiteen alkuja jotka yleensä vain unohtuu nurkkaan. Trash Lover on (jossain kaukana siintävän) shown kaatopaikka: työpöydän roskakori, jota kävijä pääsee keräämään ja tonkimaan.</p>
        <p><b><a href="https://www.elsatolli.com/">Elsa Tölli</a></b> on runoilija ja esiintyjä. Hän on tehnyt esityksiä ja runovideoita erilaisille taidefestivaaleille, keikkaillut lavarunoilijana sekä oli yksi Nuoret 2023 -näyttelyn taiteilijoista. Hänen sydämensä hakkaa riskaabelille herkkyydelle, unohtuneille iskelmä-diivoille sekä esiintymistilanteen perkuulle. Töllin työskentelyssä keskiössä on elämää syleilyvyys. Tölli julkaisi palkitun esikoiskirjansa Fun Primavera vuonna 2020 ja viimeistelee nyt toista kokoelmaansa.</p>       
      </div>
      <div lang="en" class="description-english">
        <strong>In English</strong>
        <p><i>Trash Lover</i> is a tasting menu of trinkets and hurts collected into a virtual basket. Underneath discarded film images unused poems, messy notes and drawings, as well as small meaningful conversations are discovered. The collection that emerged from the residency is a delicate yet strong archive of everyday raw materials: beginnings of art often forgotten in a corner. Trash Lover is a dumpster of the undone show, a workspace's waste bin that the viewer gets to rummage through.</p>
        <p><b><a href="https://www.elsatolli.com/">Elsa Tölli</a></b> is a poet and performer. They have created performances and poetry videos for various art festivals, performed as a stage poet, and was one of the artists in the Nuoret 2023 exhibition. Their heart beats for risky sensitivity, forgotten schlager divas, and dissecting the dynamics of performances. At the core of Tölli's work is a profound embrace of life's every flavor. Tölli published their award-winning debut book, Fun Primavera, in 2020 and is currently completing their second collection.</p>
        <p>
          Published 12/2023.
        </p>
      </div>
    </div>
  </Modal>
{/if}