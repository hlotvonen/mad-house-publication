<script>
  import "dayjs/locale/fi.js";
  import dayjs from "dayjs";
  import Time from "svelte-time";
  import { userChoices, storePageCounts, storeTotalProgress } from "../store.js";
  import Choice from "./Choice.svelte";
  import { onMount } from "svelte";
  import materiaali from "../assets/materiaali.json";
  import extrat from "../assets/extrat.json";
  import ZinePreview from "./ZinePreview.svelte";
  import Background from "./Background.svelte";
  import PagesCounter from "./PagesCounter.svelte";


  dayjs.locale("fi");

  let randomMoment = "";
  function getRandomMoment() {
    const randomIndex = Math.floor(Math.random() * extrat.hetket.length);
    randomMoment = extrat.hetket[randomIndex];
  }
  $: getRandomMoment();

  let stage = 0;
  let currentChoices = [];
  let isCooldownActive = false;
  let themePrompt = "";

  function checkDaysWithLessThanSevenItems(pageCounts) {
    const daysWithLessThanSeven = [];
    for (const day in pageCounts) {
      if (pageCounts[day] < 7) {
        daysWithLessThanSeven.push(`<b>${day}`);
      }
    }
    if (daysWithLessThanSeven.length > 1) {
      // Join all elements except the last one, then add " and " before the last element
      return "Jotta voit täyttää loputkin sivut Trash Lover -zinestä, tule tälle sivulle uudestaan jonain " + daysWithLessThanSeven.slice(0, -1).join("na</b>, ") + "na</b> tai " + daysWithLessThanSeven.slice(-1) + "na</b>. (Edistymisesi on tallennettu selaimen muistiin.)";
    } else if (daysWithLessThanSeven.length === 1) {
      // If there is only one day, return it as is
      return "Jotta voit täyttää viimeisen sivun Trash Lover -zinestä, tule tälle sivulle uudestaan " + daysWithLessThanSeven[0] + "</b>na. (Edistymisesi on tallennettu selaimen muistiin.)";
    } else {
      // If the array is empty, handle accordingly (e.g., return an empty string or a specific message)
      return "Trash Lover -zine on valmis!";
    }
  }
  $: daysWithLessThanSeven = checkDaysWithLessThanSevenItems($storePageCounts);

  function checkFilledPages(pageCounts) {
    const filledPages = [];
    for (const day in pageCounts) {
      if (pageCounts[day] === 7) {
        filledPages.push(`<a href="#${day}">${day}`);
      }
    }
    if (filledPages.length > 1) {
      // Join all elements except the last one, then add " and " before the last element
      return "Olet täyttänyt zinestä " + filledPages.slice(0, -1).join("n</a>, ") + "</a> ja " + filledPages.slice(-1) + "n</a>.";
    } else if (filledPages.length === 1) {
      // If there is only one day, return it as is
      return "Olet täyttänyt zinestä " + filledPages[0] + "n</a>.";
    } else {
      // If the array is empty, handle accordingly (e.g., return an empty string or a specific message)
      return "Et ole täyttänyt vielä yhtään päivää... miten pääsit tänne?";
    }
  }
  $: filledPages = checkFilledPages($storePageCounts);


  onMount(() => {
    checkCooldown();
    loadChoices();
    getThemePrompt();
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


    while (setsGenerated <= totalSetsNeeded) {
      let possibleChoices = [];
      const today = getCurrentDay();
      const selectedTheme = possibleThemes[Math.floor(Math.random() * possibleThemes.length)];

      // Filter choices based on the day and the selected theme
      materiaali.forEach((item) => {
        if ((item.day === "any" || item.day === today) && item.theme === selectedTheme) {
          item.content.forEach((contentItem) => {
            if (!$userChoices[today].includes(contentItem) && !usedContent.has(contentItem)) {
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
    }
  }
  function getThemePrompt() {
    if(currentChoices[stage]) {
      switch (currentChoices[stage][0].theme) {
        case "roska":
          console.log('roska')
          themePrompt = "Huomaat roskan lattialla. Noukit sen ylös.";
          break;
        case "piirrustus":
          themePrompt = "Siitä inspiroituneena piirrät kuvan.";
          break;
        case "filmikuva":
          themePrompt = "Tallennat hetken kamerallasi.";
          break;
        case "runo":
          themePrompt = "Mielesi kutoo sanoista kangasta.";
          break;
        case "esitys":
          themePrompt = "Saat idean esityksestä.";
          break;
        case "keskustelu":
          themePrompt = "Teet muistiinpanon käymästäsi keskustelusta.";
          break;
        case "lista":
          themePrompt = "Teet listan, jottet unohtaisi.";
          break;
        case "lause":
          themePrompt = "Rustaat ylös kuulemasi lauseen joka jäi mieleen.";
          break;
      }
    }
  }

  function selectChoice(choice) {
    checkCooldown();
    userChoices.update(choices => {
      // Add the choice to the appropriate day
      choices[getCurrentDay()][stage] = choice.detail;
      return choices;
    });
    stage++;
    getThemePrompt();
  }

  function checkCooldown() {
    if($userChoices[getCurrentDay()][5].content === undefined) {
      isCooldownActive = false;
      console.log('Cooldown is inactive');
    } else {
      isCooldownActive = true;
      console.log('Cooldown is active');
    }
  }
</script>

<Background>
  <div class="game-content">
    {#if isCooldownActive}
      <div class="prompt dontprint">
        <p>{@html filledPages}</p>
        <p>{@html daysWithLessThanSeven}</p>
        <p>Kokonaisuudessaan zinestä on täytetty {Math.floor($storeTotalProgress / 49 * 100)}% <button on:click={() => window.print() }>Tulosta</button></p>
      </div>
      <ZinePreview />
    {:else}
      <div class="prompt dontprint">
        <p>
          On <Time timestamp={new Date()} format="dddd [ja kello näyttää] H:mm" />. {randomMoment}
        </p>
        <p>
          {themePrompt}
        </p>
      </div>
      <div class="choices">
        {#if currentChoices[stage]}
          {#each currentChoices[stage] as choice, i }
            <Choice {choice} index={i} on:select={selectChoice} />
          {/each}
        {/if}
      </div>
    {/if} 
  </div>
  <div class="counter">
    <PagesCounter />
  </div>
</Background>

<style>
  .counter {
    position: absolute;
    bottom:0;
    width:100%;
  }
  .game-content {
    height: 100%;
    width:100%;
    overflow: auto;
  }
  .prompt {
    font-size: 1.5rem;
    background-color: white;
    border:1px solid black;
    padding:0 1rem;
    margin: 5vh auto;
    width:max-content;
    max-width:800px;
  }
  .choices {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:1rem;
    max-width: 1024px;
    margin: 0 auto;
  }

</style>
