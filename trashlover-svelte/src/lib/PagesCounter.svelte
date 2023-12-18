<script>
  import { userChoices, storeTotalProgress, storePageCounts } from "../store";


  const colors = ["#ff6161", "#ff754f", "#ff8b3c", "#ffa327", "#f9bb12", "#e8d30d", "#d0e928", "#b1ff4b"]
  const totalProgressColors = ["#ff6161", "#ff6161", "#ff665c", "#ff665c", "#ff6c57", "#ff6c57", "#ff7251", "#ff7251", "#ff784c", "#ff784c", "#ff7f46", "#ff7f46", "#ff8541", "#ff8541", "#ff8c3b", "#ff8c3b", "#ff9335", "#ff9335", "#ff9a2f", "#ff9a2f", "#ffa129", "#ffa129", "#ffa823", "#ffa823", "#ffaf1d", "#ffaf1d", "#fbb617", "#fbb617", "#f7bd11", "#f7bd11", "#f3c40c", "#f3c40c", "#eecb0a", "#eecb0a", "#e9d20d", "#e9d20d", "#e3d812", "#e3d812", "#dcdf1a", "#dcdf1a", "#d5e623", "#d5e623", "#cdec2c", "#cdec2c", "#c4f236", "#c4f236", "#bbf940", "#bbf940", "#b1ff4b", "#b1ff4b"]

  let pageCounts = {
    maanantai: 0,
    tiistai: 0,
    keskiviikko: 0,
    torstai: 0,
    perjantai: 0,
    lauantai: 0,
    sunnuntai: 0
  };

  let totalProgress = 0;

  function countFilledPages(data) {
    for (const day in data) {
      pageCounts[day] = 0;
      data[day].forEach(obj => {
        if (obj.content && obj.content.trim() !== '') {
          pageCounts[day]++;
        }
      });
    }

    totalProgress = Object.values(pageCounts).reduce((acc, count) => acc + count, 0);

    return pageCounts;
  }
  $: countFilledPages($userChoices);

  $: $storeTotalProgress = totalProgress;
  $: $storePageCounts = pageCounts;

</script>

<div class="pages-counter">
  <div class="day-container" style="background: {colors[pageCounts.maanantai]};">
    <div class="day">
      MA
    </div>
    <div class="counter">
      {Math.round(pageCounts.maanantai / 7 * 100)}%
    </div>
  </div>
  <div class="day-container" style="background: {colors[pageCounts.tiistai]};">
    <div class="day">
      TI
    </div>
    <div class="counter">
      {Math.round(pageCounts.tiistai / 7 * 100)}%
    </div>
  </div>
  <div class="day-container" style="background: {colors[pageCounts.keskiviikko]};">
    <div class="day">
      KE
    </div>
    <div class="counter">
      {Math.round(pageCounts.keskiviikko / 7 * 100)}%
    </div>
  </div>
  <div class="day-container" style="background: {colors[pageCounts.torstai]};">
    <div class="day">
      TO
    </div>
    <div class="counter">
      {Math.round(pageCounts.torstai / 7 * 100)}%
    </div>
  </div>
  <div class="day-container" style="background: {colors[pageCounts.perjantai]};">
    <div class="day">
      PE
    </div>
    <div class="counter">
      {Math.round(pageCounts.perjantai / 7 * 100)}%
    </div>
  </div>
  <div class="day-container" style="background: {colors[pageCounts.lauantai]};">
    <div class="day">
      LA
    </div>
    <div class="counter">
      {Math.round(pageCounts.lauantai / 7 * 100)}%
    </div>
  </div>
  <div class="day-container" style="background: {colors[pageCounts.sunnuntai]};">
    <div class="day">
      SU
    </div>
    <div class="counter">
      {Math.round(pageCounts.sunnuntai / 7 * 100)}%
    </div>
  </div>
  <div class="day-container" style="background: {totalProgressColors[totalProgress]};">
    <div class="day">
      Yht.
    </div>
    <div class="counter">
      {Math.round((totalProgress / 49) * 100)}%
    </div>
  </div>
</div>

<style>
  .pages-counter {
    display: flex;
    justify-content: center;
    gap:0.5rem;
    font-family: sans-serif;
  }
  .day-container {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 100%;
    border:1px solid #ccc;
    padding:1rem;
  }
  .day {
    text-align: center;
  }
  .counter {
    text-align: center;
    font-size: 1.5rem;
    font-family: monospace;
    width:4ch;
  }
  @media screen and (max-width: 800px) {
    .pages-counter {
      gap:0;
    }
    .day-container {
      padding: 5px;
    }
    .counter {
      font-size: 0.7rem;
    }
  }

</style>