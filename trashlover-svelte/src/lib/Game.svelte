<script>
  import "dayjs/locale/fi.js";
  import dayjs from "dayjs";
  import Time from "svelte-time";
  import { userChoices, cooldown } from "../store.js";
  import Choice from "./Choice.svelte";
  import { onMount } from "svelte";
  import materiaali from "../assets/materiaali.json";
  import extrat from "../assets/extrat.json";


  dayjs.locale("fi");

  let randomMoment = "";
  function getRandomMoment() {
    const randomIndex = Math.floor(Math.random() * extrat.hetket.length);
    randomMoment = extrat.hetket[randomIndex];
  }
  $: getRandomMoment();

  const maxStages = 7;

  let stage = 0;
  let currentChoices = [];
  let isCooldownActive = false;

  onMount(() => {
    checkCooldown();
    loadChoices();
  });

  // Function to get current day in Finnish
  function getCurrentDay() {
    const days = [
      "sunnuntai",
      "maanantai",
      "tiistai",
      "keskiviikko",
      "torstai",
      "perjantai",
      "lauantai",
    ];
    const today = new Date();
    return days[today.getDay()];
  }

  function loadChoices() {
    let setsGenerated = 0;
    let totalSetsNeeded = 7;
    let choicesPerSet = 3;
    let possibleThemes = new Set();
    let usedContent = new Set(); // Set to keep track of used content

    // Gather all unique themes
    materiaali.forEach((item) => {
      possibleThemes.add(item.theme);
    });
    possibleThemes = Array.from(possibleThemes);

    while (setsGenerated < totalSetsNeeded && stage < maxStages) {
      let possibleChoices = [];
      const today = getCurrentDay();
      const selectedTheme = possibleThemes[Math.floor(Math.random() * possibleThemes.length)];

      // Filter choices based on the day and the selected theme
      materiaali.forEach((item) => {
        if ((item.day === "any" || item.day === today) && item.theme === selectedTheme) {
          item.content.forEach((contentItem) => {
            if (!$userChoices.includes(contentItem) && !usedContent.has(contentItem)) {
              possibleChoices.push({ ...item, content: contentItem });
            }
          });
        }
      });

      if (possibleChoices.length >= choicesPerSet) {
        let setChoices = [];
        for (let i = 0; i < choicesPerSet; i++) {
          const randomIndex = Math.floor(Math.random() * possibleChoices.length);
          setChoices.push(possibleChoices[randomIndex]);
          usedContent.add(possibleChoices[randomIndex].content); // Add to used content
          possibleChoices.splice(randomIndex, 1);
        }
        currentChoices = [...currentChoices, setChoices];
        setsGenerated++;
      }
    }

    if (setsGenerated < totalSetsNeeded) {
      console.log(
        "Unable to generate enough choice sets. Implementing cooldown.",
      );
      isCooldownActive = true;
    }
  }

  function selectChoice(choice) {
    userChoices.update((n) => [...n, choice.detail]);
    console.log($userChoices)
    stage++;
  }

  function checkCooldown() {
    // Implement cooldown logic based on last choice timestamp
  }
  function clearChoices() {
    userChoices.set([]);
  }
</script>

<button on:click={clearChoices}>Empty</button>

{#if isCooldownActive}
  <p>Voit tehdä lisää valintoja huomenna</p>
  {#each $userChoices as choice}
    <Choice {choice} />
  {/each}
{:else}
  <p>
    On <Time timestamp={new Date()} format="dddd [ja kello näyttää] H:mm" />. {randomMoment}
  </p>
  <div class="choices">
    {#if currentChoices[stage]}
      {#each currentChoices[stage] as choice }
        <Choice {choice} on:select={selectChoice} />
      {/each}
    {/if}
  </div>
{/if}

<style>
  .choices {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>
