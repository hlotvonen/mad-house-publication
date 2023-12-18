<script>
  import Soundboard from "./lib/Soundboard.svelte";
  import Modal from "./lib/Modal.svelte";

  let showBioInfo = false;
  let showTariKuvailee = false;
  let showTariDescribes = false;
  let showSharpEdges = false;
  let showToChop = false;
  let showHygge = false; 
  let showTheChoppingBlock = false;
  let showAxesAccess = false;
  let showTheHedge = false;
</script>

<div class="content bg-color">

  <div class="top-bar">
    <div>
      <a href="..">&larr; Takaisin / Back</a>
      <span class="title">Freja Bäckman & Tari Doris <i>Cutovers</i></span>
      <button on:click={() => (showBioInfo = true)}> Bio & Info</button>
    </div>
  </div>
  <div class="top-bar bg-color">
    <button on:click={() => (showTariKuvailee = true)}>Tari Doris kuvailee sanoin konserttia.</button>
    <button on:click={() => (showTariDescribes = true)}>The concert is described in words by Tari Doris.</button>
    <button on:click={() => (showSharpEdges = true)}>Sharp Edges</button>
    <button on:click={() => (showToChop = true)}>To Chop</button>
    <button on:click={() => (showHygge = true)}>Hygge</button>
    <button on:click={() => (showTheChoppingBlock = true)}>The Chopping Block</button>
    <button on:click={() => (showAxesAccess = true)}>Axes/Access</button>
    <button on:click={() => (showTheHedge = true)}>The Hedge</button>

  </div>
  <div class="freja-container bg-color">
    <Soundboard />
  </div>
</div>

{#if showBioInfo}
  <Modal on:close={() => (showBioInfo = false)}>
    <h2 slot="title">Cutovers</h2>
    <h2 slot="name">Freja Bäckman & Tari Doris</h2>
    <div class="descriptions">
      <div lang="fi" class="description-finnish">
        <strong>Suomeksi</strong>
        <p>
          Konsertti: Lokakuu 2023<br>
          Sanasto: Freja Bäckman, 2018 (2023)
        </p>
        <p>
          <i>Cutovers</i> dronekonsertti leikittelee keskeytyksellä eleenä siitä, mitä olisi voinut olla tai mitä voisi tulla. 
        </p>
        <p>Äänimaisema syleilee toisteisilla matalilla taajuuksilla.</p>
        <p>
          Käyttäjä osallistuu teoksen valmistumiseen ja voi vaikuttaa kuuntelukokemukseen liikuttamalla painikkeita. Konsertti muuttuu sen mukaan, missä ja miten sivulla olevat ääniloopit soitetaan ja järjestetään.
        </p>
        <p>
          Konsertin ohessa on Tari Doriksen kirjoittama kuvaus konsertista ja Freja Bäckmanin kokoama sarja tekstejä, jotka hän on kirjoittanut osana väitöskirjatutkimustaan. Bäckmanin tekstit tarkastelevat puun pilkkomiseen liittyvää kummallista sanastoa, joka puolestaan viittaa syleilyyn, sulkeutumiseen, halkaisuihin, kodikkuuteen ja syntipukkeihin.
        </p>
        <p>
          <b>Freja Bäckman</b> toimii taiteilijana, opettajana ja tutkijana. Tekstin, äänen, esityksen ja installaatioiden avulla hän tutkii yhteisöllisiä muodostumia, neuvottelun paikkoja ja kielen moninaisia näkökohtia.
        </p>
        <p>
          <b>Tari Doris</b> työskentelee esitystaiteen parissa esiintyjänä, äänisuunnittelijana, säveltäjänä ja muusikkona.
        </p>
        <p>
          <b>Katie Lenanton</b>&hairsp;—&hairsp;oikolukija ja kielineuvoja Bäckmanin teksteissä.
        </p>
      </div>
      <div lang="en" class="description-english">
        <strong>In English</strong>
        <p>
          Concert: October 2023<br>
          Vocabulary: Freja Bäckman, 2018 (2023)
        </p>
        <p>
          A drone concert plays with suspension, as a gesture of what might have been or what might come.
        </p>
        <p>
          The soundscape carries aspects of holding, and explores low frequency sound and repetition. The work is completed together with the user who can influence the listening experience by moving the sound buttons. Depending on where on the page the loops are placed and played, and how they are arranged together, the concert is shifting.
        </p>
        <p>
          Accompanying the concert is a description written by Tari Doris, and a series of texts written by Freja Bäckman as part of their ongoing doctoral research. Bäckman’s texts examine an uncanny vocabulary related to wood chopping, which refers to embraces, enclosures, splittings, cutovers, coziness and scapegoating.
        </p>
        <p>
          <b>Freja Bäckman</b> works as an artist, educator, and researcher. Using text, sound, performance and installation, they explore collective formations, sites of negotiation, and the multifaceted aspects of language.
        </p>
        <p>
          <b>Tari Doris</b> works in the field of performing arts as a performer, sound designer, composer, and musician.
        </p>
        <p>
          <b>Katie Lenanton</b>&hairsp;—&hairsp;proofreading and language advice of Bäckman’s texts.
        </p>
        <p>
          Published 12/2023.
        </p>
      </div>
    </div>
  </Modal>
{/if}
{#if showTariKuvailee}
  <Modal on:close={() => (showTariKuvailee = false)}>
    <h2 slot="title">Tari Doris kuvailee sanoin konserttia.</h2>
    <div>
      <ul>
        <li>Teos toimii parhaiten kuulokkeilla kuunneltuna.</li>
        <li>Teoksessa on kahdeksan ääniraitaa.</li>
        <li>Kunkin ääniraidan saa käynnistettyä play -napeista, jotka ovat nettisivulla graafisesti esitettynä ympyränä.</li>
        <li>Play -nappia vetämällä alaspäin ääniraita käynnistyy. Play -nappia voi siirtää klikkaamalla ja raahaamalla. Play -napin sijainti näytöllä vaikuttaa ääniraidan voimakkuuteen ja panorointiin. 
          <ul>
            <li>Mitä alempana play- nappi on näytöllä, sitä voimakkaampi on äänenpaine. </li>
            <li>Jos nappi on näytön vasemmalla reunalla, ääni kuuluu vain vasemmasta kuulokkeesta. </li>
            <li>Jos nappi on näytön oikealla reunalla, ääni kuuluu vain oikeasta kuulokkeesta. </li>
            <li>Jos nappi on vasemman ja oikean laidan välissä, ääni painottuu kuulokkeisiin sen sijainnin mukaan.</li>
          </ul>
        </li>
        <li>Teoksen kahdeksan ääniraitaa on rakennettu editoimalla ja miksaamalla äänitteitä, jotka tuotettiin äänittämällä sähköbassoa ja -sähkökitaraa studiossa.</li>
      </ul>
      <h3>Prosessin kuvailu&hairsp;:</h3>
      <div class="centered">
        <p>Kieli värähtelee sen mukaan, millaisia voimia kieleen kohdistuu.</p>
        <span>&darr;</span>
        <p>Plektran liike kielellä saa kielen värähtelemään.</p>
        <span>&darr;</span>
        <p>Sormi, joka painaa kieltä kohti kaulan otelautaa, saa kielen osumaan otelaudalla olevaan nauhaan.</p>
        <span>&darr;</span>
        <p>Nauhan ja tallan välisellä matkalla kieli värähtelee vapaasti.</p>
        <span>&darr;</span>
        <p>Tämä värähtely tapahtuu magneettimikrofonin magneettikentässä.</p>
        <span>&darr;</span>
        <p>Magneettimikrofoni muuttaa värähtelyn sähköjännitteen vaihteluksi, eli sähköiseksi äänisignaaliksi.</p>
        <span>&darr;</span>
        <p>Tämä kielen värähtelyä vastaava vaihtelu siirtyy piuhaa pitkin ja kulkee jokaisen efektipedaalin läpi.</p>
        <span>&darr;</span>
        <p>Efektipedaalien sisällä olevat elektroniset komponentit&hairsp;—&hairsp;resistorit, kondensaattorit, diodit, vahvistimet&hairsp;—&hairsp;kytkettyinä tiettyyn järjestykseen, vaikuttavat jännitteen vaihteluun, signaali vaikuttuu kun komponentit reagoivat signaaliin.</p>
        <span>&darr;</span>
        <p>Jännitteen vaihtelu muuttuu jokaisessa komponentissa ko. komponentin sisällä olevan materiaalisen avaruuden mukaan.</p>
        <span>&darr;</span>
        <p>Komponentin materiaali&hairsp;—&hairsp;sen atomit&hairsp;—&hairsp;neutronit, protonit ja elektronit&hairsp;—&hairsp;reagoi omien ominaisuuksiensa mukaan ja jännitteen vaihtelu muuntuu kuin veden kulku vuorilta tulevassa purossa kohti jokea, suvanto, niska, koski, putous, suvanto, suisto, meri.</p>
        <span>&darr;</span>
        <p>Kun jännitteen vaihtelu on edennyt läpi efektipedaalien, se tulee vahvistimeen, joka vahvistaa signaalin kaiuttimelle.</p>
        <span>&darr;</span>
        <p>Signaali kulkee piuhaa pitkin kelaan/käämiin, joka liikkuu jännitteen vaihtelun mukaisesti&hairsp;—&hairsp;vastaten kielen värähtelyä ja sen jälkeistä signaalireittiä, joka kuvattiin edellä&hairsp;—&hairsp;ja kelan liike siirtyy pahviseen kartioon, joka liikuttaa ilmamassaa kartion edessä.</p>
        <span>&darr;</span>
        <p>Ilma värähtelee kartion liikkeiden mukaan.</p>
        <span>&darr;</span>
        <p>Kun kartio työntyy eteenpäin, ilmamassa puristuu tiheäksi, kun kartio vetäytyy taaksepäin, ilmamassa vapautuu harvaksi, kun kartio taas työntyy eteenpäin, ilmamassa tiivistyy, harvenee, tiivistyy, harvenee&hairsp;—&hairsp;ääniaalto etenee ilmassa kuten mittarimato.</p>
        <span>&darr;</span>
        <p>Mikäli kartio vetäytyy ensin taaksepäin, mittarimato ikään kuin ottaa vauhtia.</p>
        <span>&darr;</span>
        <p>Tihentymät ja harventumat vaihtelevat kartion liikkeiden mukaisesti.</p>
      </div>
      <h4>Miksi kartio liikkuu edestakaisin?</h4>
      <p>Jos ajattelemme kieltä yksiulotteisesti, kieli joka on liikkumaton, on lepotilassa, joka on nolla.</p>
      <p>Kun plektra venyttää kieltä pois lepotilasta, kieleen muodostuu potentiaalienergiaa, joka on joko enemmän tai vähemmän kuin nolla.</p>
      <p>Kun plektra päästää kielen potentiaalienergian vapaaksi, kieli liikkuu kohti lepotilaa, eli nollaa, mutta menee ohi nollasta, koska potentiaalienergiaa on enemmän kuin mitä tarvitaan nollaan palautumiseen.</p>
      <p>Kieli jatkaa matkaa nollan ohi toiselle puolelle, mutta ei voi jatkaa loputtomiin, koska kieli on jännittyneenä tallan ja otelaudan nauhan välillä (&hairsp;sormi pitää edelleen kieltä kiinni nauhassa&hairsp;).</p>
      <p>Kun kieli ei voi enää jatkaa matkaansa, siihen kertynyt potentiaalienergia muuttaa suunnan kohti nollaa.</p>
      <p>Ja taas nollan ohi, koska potentiaalienergiaa oli enemmän kuin mitä tarvitaan nollaan palautumiseen.</p>
      <p>Näin mennään edes takaisin, nollan ohi miinuksen ja plussan puolille, kunnes kaikki energia on käytetty. Kuten paikoillaan olevassa keinussa.</p>
      <p>Vaikka kieli ei liiku yksiulotteisesti&hairsp;—&hairsp;vaan heiluu edes takaisin kaikkiin suuntiin&hairsp;—&hairsp;magneettimikrofoni aistii liikettä nollan molemmin puolin yksiulotteisesti: sähköjännite vaihtelee &minus;&thinsp;0&thinsp;+</p>
      <p>Se mikä on aallon amplitudi, eli voimakkuus, tarkoittaa sitä kuinka kauas nollasta kielen heilahdus, tai jännitteen heilahdus, ulottuu.</p>
      <p>Se kuinka kauas kaiuttimen pahvinen kartio liikkuu kelan mukana eteen- tai taaksepäin, riippuu siitä, kuinka kauas kieli liikkui lepotilasta edes takaisin, kuinka paljon efektipedaalien ja vahvistimen komponentit vahvistivat tai heikensivät amplitudeja, eli heilahdusten voimakkuuksia.</p>
      <p>Kaiuttimen kela voi liikuttaa kartiota vain yksiulotteisesti, sisään ja ulos.</p>
      <p>Se voi liikuttaa ainoastaan yhtä aaltomuotoa.</p>
      <p>Kieli värähdellessään tuottaa useita samanaikaisia aaltoja.</p>
      <p>Akustisesti basson kieli ja runko värähtelee tuottaen monesta kohdasta moneen suuntaan eteneviä ääniaaltoja.</p>
      <p>Magneettimikrofoni summaa nämä kaikki aallot yhdeksi aalloksi, joka on monimutkainen, kuin vuoristorata, joka menee hieman ylös, sitten alas, sitten korkealle ylös, sitten vähän alas, sitten taas ylös, sitten kovaa vauhtia ihan alas ja taas ylös, ja niin edelleen.</p>
      <p>Tämä yksiulotteisen liikkeen monimutkaisuus saa kaiuttimen tuottaman ilman värähtelyn muistuttamaan basson akustista värähtelyä&hairsp;—&hairsp;eli kuulostamaan samalta instrumentilta&hairsp;—&hairsp;mutta silti myös eron kuulee: instrumentin ääni akustisesti ei ole lainkaan sama kuin kaiuttimista kuultu ääni.</p>
      <p>Silti tunnistamme instrumentin myös kaiuttimista.</p>
      <p>Olemme tottuneet tunnistamaan.</p>
      <p>Pidämme ääntä samana, vaikka ääniaallot ilmatilassa ovat täysin erilaisia.</p>
      <p>Bassosta lähtee useita ääniaaltoja useisiin suuntiin.</p>
      <p>Kaiuttimen pahvinen kartio työntää ilmamassaa eteen- ja taaksepäin ja tuottaa ilmamassaan tihentymiä ja harventumia, mitä kutsutaan ääniaalloiksi.</p>
      <p>Nämä tihentymät ja harventumat etenevät ilmamassassa kuten laineet veden pinnalla, mutta eivät kuten laineet veden pinnalla; ääniaallot eivät liiku vain ilmamassan pinnalla, eikä aallot liiku ylös&hairsp;/&hairsp;alas, vaan ääniaalto etenee kaasussa, koko ilmamassan mitalla, tihentymien ja harventumien vaihteluna.</p>
      <p>Jokainen kohta basson kielessä ja rungossa värähtelee, jokainen kohta tuottaa ilmamassaan oman aaltonsa.</p>
      <p>Jokainen ääniaalto myös kimpoaa esteistä, heijastaen oman ääniaaltonsa tilaan.</p>
      <p>Kaiutin toistaa kaikki basson kielen värähtelyt vain yhtenä yksiulotteisena liikkeenä.</p>
      <p>Ymmärrettävästi ilmamassan käyttäytyminen on tällä tavoin hyvin erilaista.</p>
      <p>Kaiutinta käytetään, koska sähköbasson ideana on vahvistaa kielen värähtely voimakkaammaksi kuin miksi se voisi ilman elektroniikkaa kasvaa.</p>
      <p>Eli jotta saamme kovempaa ääntä.</p>
      <p>Kun saamme elektroniikan komponenttien sisäiset avaruudet kuultaviksi kaiuttimen kartion liikkeen kautta, voimme nauttia näistä kosmisista atomitason värähtelyistä.</p>
      <p>Voimme kuulla tilassa kaiuttimen tuottaman äänen.</p>
      <p>Ilmamassa värähtelee, ääniaallot kimpoilevat kaikista esteistä&hairsp;—&hairsp;seinistä, katosta, lattiasta, tuoleista, pöydistä, mikrofoniständeistä, repuista, lampuista, tietokoneista, silmälaseista, kahvikupeista&hairsp;—&hairsp;ja muodostavat monimutkaisen värähtelyavaruuden.</p>
      <p>Tilassa kimpoilevat aallot muodostavat erilaisia resonansseja, eli tietyt taajuudet korostuvat ja toiset vaimenevat sen mukaan, miten erimittaiset tihentymät ja harventumat osuvat yhteen.</p>
      <p>Kuvittele kuinka useampi ryhmä ihmisiä tulee eri suunnista torille ja hetken ajan torilla on tiheästi ihmisiä.</p>
      <p>Ja sitten ei ketään.</p>
      <p>Ja sitten taas tori on täynnä.</p>
      <p>Ja sitten ei.</p>
      <p>Kuvittele miten mittarimato liikkuu tihentyminä ja harventumina.</p>
      <p>Kuvittele miten mittarimato törmää seinään.</p>
      <p>Jos mittarimato törmää seinään kesken liikeen, se heijastuu takaisin heikompana.</p>
      <p>Mutta jos mittarimato osuu seinään juuri ollessaan ojentuneena täyteen mittaansa, tai ollessaan kokonaan mutkalla, se saa hyvän otteen seinästä ja ponnistettua voimalla takaisin siihen suuntaan, josta oli tulossa.</p>
      <p>Joskus mittarimato jää pomppimaan edes takaisin kahden pinnan välille, koska sen liike on juuri sen mittainen, että jokaisella seinäosumalla se osuu juuri sopivasti kimmotakseen voimakkaasti takaisin.</p>
      <p>Kuulemme tämän taajuuskorostumana, jota kutsutaan seisovaksi aalloksi.</p>
      <p>Tilassa soi monenlaisten vuorovaikutusten sinfonia.</p>
      <p>Jotta tämä sinfonia saadaan nettisivulle kuultavaksi, asetamme tilaan mikrofoneja.</p>
      <p>Mikrofonin kalvo liikkuu ilmamassan värähtelyjen mukaan, ja kalvon liikkeiden mukaan liikkuva kela/käämi muuntaa värähtelyt jälleen jännitteen vaihteluksi, eli signaaliksi.</p>
      <p>Signaali jatkaa matkaansa tietokoneen komponenteissa datana, eli numeroina, biteissä, eli komponentin atomin ionin sijainneissa (&hairsp;muistaakseni, joku tietokoneasiantuntija voi korjata ja kertoa tästä enemmän&hairsp;).</p>
      <p>Tietokoneohjelmalla dataa voi muokata koodaamalla, eli vaikuttamalla datan reitteihin ja laskennallisiin tapahtumiin.</p>
      <p>Kun datan kulkuun ollaan tyytyväisiä, bittien asemat voidaan tallentaa datavirraksi, jota voidaan toistaa nettisivuilla olevilla play -nappuloilla.</p>
      <p>Se miten valitsimme järjestää datavirran&hairsp;—&hairsp;ja sitä ennen järjestää äänitysolosuhteet, ja sitä ennen tutkia bassoa instrumenttina ja efektipedaaleja soundia muokkaavina laitteina&hairsp;—&hairsp;perustuu monenlaisiin sosiaalisiin, poliittisiin ja esteettisiin periaatteisiin. Musiikkiin liittyy paljon yhteiskunnallisia, yleisiä ja yksityisiä odotuksia. Millaista ihmis- ja maailmankuvaa mikäkin musiikkityyli kannattelee? Millainen on ”hyvä akustiikka”? Entä ”hyvä soundi”? Se liittyy valtaan&hairsp;:&ensp;siihen, kuinka paljon rahaa ihmisellä on ollut käytettävissä soundin tuottamiseen. Ennen tietokoneet olivat tehottomampia ja kalliimpia, studiot ja studiolaitteet olivat kalliita ja vain rikkailla oli varaa tuottaa sellaisia signaaleja, joissa kohinaa oli vähän.</p>
      <p>Kohina tarkoittaa ei-toivottua ääntä signaalissa. Kun ilman värähtelyä vahvistetaan elektronisesti, elektroniikan komponentit vahvistavat signaalia, mutta jokainen komponentti lisää signaaliin myös kohinaa. Tästä tulee käsite signaali-kohina -suhde. Kun mikrofonilla halutaan vahvistaa Merkkihenkilön puheääni, kun Merkkihenkilö kertoo Merkittävistä asioista, kaikki muu kuin Merkkihenkilön Puheääni, on Kohinaa. Kaiuttimeen halutaan mahdollisimman paljon Merkkihenkilön Puheääntä ja mahdollisimman vähän Kohinaa.</p>
      <p>Teknologiaa on kehitetty, kehitetty ja kehitetty, jotta saadaan vähemmän Kohinaa ja vahvistettua Signaalia. Rahalla on saanut oman Signaalinsa kuuluville, pienemmällä määrällä Kohinaa.</p>
      <p>Kohinatonta signaalia ei ole.</p>
      <p>Kukin voi itse päättää, mitä tarkastelee signaalina ja mitä kohinana. Ja millainen kokonaisuus signaali ja kohina ovat yhdessä.</p>
      <p>Kukin voi myös olla määrittelemättä mitään signaaliksi tai kohinaksi.</p>
      <p>Cutovers koostuu useista basso- ja kitaranauhoituksista, joissa efektipedaalien komponenttien sisäiset kosmokset värähtelevät, atomit järjestyvät uudestaan ja uudestaan erilaisiin muodostelmiin, tilat soivat erilaisia resonansseja, seisovia aaltoja ja heijastuksia. Näissä avaruuksissa värähtelyt vahvistuvat, säröytyvät, pirstoutuvat uusiksi galakseiksi, ja muotoutuvat fraktaalimaisen äärettömästi.</p>
      <p>Tässä äärettömässä avaruudessa soi säröytyvää bassosoundia, jatkuvaa dronea, toistuvia iskuja (&hairsp;delay&hairsp;), ujeltavia seisovia aaltoja, resonansseja, harmonisia yläsävelsarjoja, jotka pirskahtelevat kuin räiskyvät ilotulitusraketit. Jokainen ääniraita on noin puolentoista minuutin pituinen looppi. Kahdeksan looppia muodostavat erilaisia yhdistelmiä riippuen siitä, milloin kukin äänite laitetaan soimaan, miten äänen voimakkuutta ja panorointia (&hairsp;vasen&hairsp;/&hairsp;oikea balanssi&hairsp;) säädetään. Erilaisia yhdistelmiä on ääretön määrä. Jokainen äänite voi alkaa ja päättyä milloin vain, olla millä tahansa voimakkuudella ja missä tahansa kohtaa vasen/oikea balanssia. Vaikka tietokone ei voi valita alku- ja päätepisteitä äärettömän tarkasti, teoksen kokija liikkuu maapallon mukana aurinkokunnassa, joka etenee galaksin mukana avaruudessa. Kokija muuttuu koko ajan. Todellisuus muuttuu koko ajan.</p>
      <p>Näitä atomitason kosmisia tapahtumia tarkastellaan elävinä olentoina, vapaasti liikkuvina entiteetteinä&hairsp;—&hairsp;ei käskytettävinä instrumentteina. Bassoa ei soiteta, sen annetaan soida. Pedaalien nappuloita ei väännetä ”oikeisiin” kohtiin, jotta soundi kuulostaa ennalta odotetulta, vaan nappulaa kääntämällä etsitään universumista kaikkea, mitä sieltä löytyy.</p>
      <p>Tätä etsimistä kokija voi jatkaa äärettömästi.</p>
    </div>
  </Modal>
{/if}
{#if showTariDescribes}
  <Modal on:close={() => (showTariDescribes = false)}>
    <h2 slot="title">The concert is described in words by Tari Doris.</h2>
    <div>
      <ul>
        <li>The piece works best when listened to with headphones.</li>
        <li>The work has eight soundtracks.</li>
        <li>Each soundtrack can be started from the play buttons, which are shown graphically as circle on the website.</li>
        <li>Drag the play button downwards to start the soundtrack. The play button can be moved by clicking and dragging.</li>
          <ul>
            <li>The position of the play button on the screen affects the volume and panning of the soundtrack. </li>
            <li>The lower the play button is on the screen, the stronger the sound pressure. </li>
            <li>If the button is on the left side of the screen, the sound is heard only from the left earpiece. </li>
            <li>If the button is on the right side of the screen, the sound is heard only from the right earpiece. </li>
            <li>If the button is between the left and right sides, the sound will be focused on the headphones according to its position.</li>
          </ul>
        <li>The work’s eight soundtracks are built by editing and mixing recordings that were produced by recording electric bass and electric guitar in the studio.</li>
      </ul>
      <h3>Description of the process:</h3>
      <div class="centered">
        <p>The strings vibrate according to the forces that are applied to it.</p>
        <span>&darr;</span>
        <p>The movement of a pick on the string causes the string to vibrate.</p>
        <span>&darr;</span>
        <p>A finger pushes the string towards the fretboard. The string is caught between the finger and the fret.</p>
        <span>&darr;</span>
        <p>The string oscillates between the fret and the saddle.</p>
        <span>&darr;</span>
        <p>This vibration occurs in the magnetic field of the pickup.</p>
        <span>&darr;</span>
        <p>The pickup converts the vibration into an alternation in electrical voltage, i.e. an electrical sound signal.</p>
        <span>&darr;</span>
        <p>This fluctuation, which corresponds to the vibration of the string, is transmitted along a wire and passes through each effect pedal.</p>
        <span>&darr;</span>
        <p>The electronic components inside effect pedals&hairsp;—&hairsp;resistors, capacitors, diodes, amplifiers&hairsp;—&hairsp;connected in a particular order, affect the voltage variation, the signal is affected when the components react to the signal.</p>
        <span>&darr;</span>
        <p>The voltage variation in each component changes according to the material space within that component.</p>
        <span>&darr;</span>
        <p>The material of the component&hairsp;—&hairsp;its atoms&hairsp;—&hairsp;neutrons, protons and electrons&hairsp;—&hairsp;react according to their unique nature and the voltage variation changes like the flow of water from a mountain in a stream towards a river, a ditch, a neck, a rapids, a waterfall, a pool, a delta, an ocean.</p>
        <span>&darr;</span>
        <p>Once the voltage variation has passed through the effects pedals, it enters the amplifier, which amplifies the signal to the speaker.</p>
        <span>&darr;</span>
        <p>The signal travels along the wire to the coil, which moves in response to the voltage variation&hairsp;—&hairsp;corresponding to the string vibration and the subsequent signal path described above&hairsp;—&hairsp;and the movement of the coil is transferred to a cardboard cone, which moves the air mass in front of the cone.</p>
        <span>&darr;</span>
        <p>The air vibrates in response to the cone’s movements.</p>
        <span>&darr;</span>
        <p>As the cone pushes forward, the air mass is compressed to a dense density; as the cone retreats backwards, the air mass is released to a sparse density; as the cone pushes forward again, the air mass becomes dense, sparse, dense, sparse&hairsp;—&hairsp;the sound wave travels through the air like an inchworm.</p>
        <span>&darr;</span>
        <p>If the cone retreats backwards first, the inchworm picks up speed, as it were.</p>
        <span>&darr;</span>
        <p>Dense and sparse vary according to the movements of the cone.</p>
      </div>
      <h4>Why does the cone move back and forth?</h4>
      <p>If we think of the string in one dimension, a string that is motionless is at rest, which is zero.</p>
      <p>When the plectrum stretches the string away from the resting state, the string builds up a potential energy that is either more or less than zero.</p>
      <p>When the plectrum releases the potential energy of the string, the string moves towards rest, zero, but goes past zero because there is more potential energy than is needed to return to zero.</p>
      <p>The string continues past the zero to the other side, but cannot continue indefinitely because the string is stretched between the fret and the saddle (&hairsp;the string is still between the finger and the fret on the fretboard&hairsp;).</p>
      <p>When the string can’t go any further, the potential energy accumulated on it changes direction towards zero.</p>
      <p>And again past zero, because there was more potential energy than needed to return to zero.</p>
      <p>And so on, back and forth, past zero to the minus and plus sides, until all the energy is used up. Like in a stationary swing.</p>
      <p>While the string does not move in one dimension&hairsp;—&hairsp;but swings in all directions&hairsp;—&hairsp;the pickup senses motion on both sides of zero in one dimension&hairsp;:&ensp;the electric voltage varies &minus;&thinsp;0&thinsp;+.</p>
      <p>What is the amplitude, or intensity, of the wave means how far from zero the string oscillation, or voltage oscillation, extends.</p>
      <p>How far the cardboard cone of the speaker moves backwards or forwards with the coil depends on how far the string moved from rest, how much the components of the effects pedals and amplifier amplified or attenuated the amplitudes of the oscillations.</p>
      <p>A loudspeaker coil can only move the cone in one dimension, in and out.</p>
      <p>It can only move one waveform.</p>
      <p>The guitar string vibrates and produces several simultaneous waves.</p>
      <p>Acoustically, the bass string and body vibrate, producing sound waves in many directions from many points.</p>
      <p>The pickup sums up all these waves into one waveform, which is complex, like a roller coaster, going up a bit, then down, then high up, then down a bit, then up again, then fast all the way down and up again, and so on.</p>
      <p>This complexity of one-dimensional motion makes the vibration of the air produced by the speaker resemble the acoustic vibration of the bass&hairsp;—&hairsp;that is, sound like the same instrument&hairsp;—&hairsp;but you can also hear the difference&hairsp;:&ensp;the sound of the instrument acoustically is not at all the same as the sound heard through the speakers.</p>
      <p>Yet we recognise the instrument from the speakers as well.</p>
      <p>We are used to recognising.</p>
      <p>We consider the sound the same, even though the sound waves in the airspace are completely different.</p>
      <p>The bass emits several sound waves in several directions.</p>
      <p>The cardboard cone of the loudspeaker pushes the air mass back and forth, producing compressions and contractions in the air mass, called sound waves.</p>
      <p>These condensations and rarefactions propagate in the air mass like waves on the surface of water, but not like waves on the surface of water; the sound waves do not move only on the surface of the air mass, nor do the waves move up/down, but the sound wave propagates in the gas, along the entire length of the air mass, as a variation of condensations and rarefactions.</p>
      <p>Every part of the bass string and body vibrates, every part produces its own wave in the air.</p>
      <p>Each sound wave also bounces off obstacles, reflecting its own sound wave into space.</p>
      <p>The loudspeaker reproduces all the vibrations of the bass string as a single one-dimensional movement.</p>
      <p>Understandably, the behaviour of the air mass is very different in this way.</p>
      <p>The loudspeaker is used because the idea of the electric bass is to amplify the vibration of the string more than it could be without electronics.</p>
      <p>In other words, to get a louder sound.</p>
      <p>When we make the internal spaces of electronic components audible through the movement of the cone of a loudspeaker, we can enjoy these cosmic atomic vibrations.</p>
      <p>We can hear the sound of the speaker in space.</p>
      <p>The air mass vibrates, the sound waves bounce off all the barriers&hairsp;—&hairsp;walls, ceilings, floors, chairs, tables, microphone stands, backpacks, lamps, computers, glasses, coffee cups&hairsp;—&hairsp;and form a complex vibrational space.</p>
      <p>The bouncing waves in space form different resonances, i.e. certain frequencies are accentuated and others attenuated depending on how the differently sized compressions and rarefactions coincide.</p>
      <p>Imagine several groups of people coming from different directions to the market and for a moment the market is densely populated.</p>
      <p>And then no one.</p>
      <p>And then again the market is crowded.</p>
      <p>And then no one.</p>
      <p>Imagine how the inchworm moves in thickenings and thinnings.</p>
      <p>Imagine how an inchworm hits a wall.</p>
      <p>If the inchworm hits a wall in the middle of its movement, it will be reflected back in a weaker form.</p>
      <p>But if the inchworm hits the wall just when it is fully extended, or when it is fully bent, it will get a good grip on the wall and push back with force in the direction it came from.</p>
      <p>Sometimes the inchworm is caught bouncing back and forth between two surfaces, because its movement is just the right amount so that with each wall hit it hits just right to bounce back hard.</p>
      <p>We hear this as a frequency emphasis called a standing wave.</p>
      <p>A symphony of interactions can be heard in space.</p>
      <p>To make this symphony audible on the website, we will place microphones in the room.</p>
      <p>The diaphragm of the microphone moves according to the vibrations of the air mass, and the coil moving according to the diaphragm’s movements converts the vibrations back into a voltage variation, i.e. a signal.</p>
      <p>The signal continues its journey in the computer components as data, i.e. numbers, in bits, i.e. ion positions of the component’s atom (&hairsp;as I recall it, a computer expert can correct me and tell you more about this&hairsp;).</p>
      <p>With a computer program, data can be manipulated by coding, i.e. by influencing the paths and computational events of the data.</p>
      <p>Once the data flow is satisfactory, the positions of the bits can be stored in a data stream that can be played back using the play buttons on the website.</p>
      <p>The way we chose to organise the data stream&hairsp;—&hairsp;and before that to organise the recording conditions, and before that to explore the bass as an instrument and the effects pedals as sound-shaping devices&hairsp;—&hairsp;is based on a variety of social, political and aesthetic principles. There are many social, public and private expectations associated with music. What kind of concept of humanity and worldview does each style of music promote? What is ‘good acoustics’? What about ‘good sound’? It has to do with power&hairsp;:&ensp;with how much money people have had available to them to produce a sound. In the past, computers were less efficient and more expensive, studios and studio equipment were expensive, and only the rich could afford to produce signals with little noise. Noise means unwanted sound in a signal. When air vibration is amplified electronically, the electronic components amplify the signal, but each component also adds noise to the signal. Hence the term signal-to-noise ratio. When a microphone is used to amplify a Significant Person’s speech voice when the Significant Person is talking about Significant Things, anything other than the Significant Person’s Speech Voice is considered Noise. They want as much of the Significant Person’s Speech as possible and as little of the Noise as possible on the loudspeaker.</p>
      <p>The technology has been developed, developed and developed to produce less Noise and a stronger Signal. Wealth has made it possible to get your Signal heard, with less Noise.</p>
      <p>There is no noise-free signal.</p>
      <p>It is up to each individual to decide what to consider a signal and what to consider noise. And what kind of entity the signal and the noise are together.</p>
      <p>Each individual can also choose not to define anything as a signal or noise.</p>
      <p>Cutovers consists of a series of bass and guitar recordings in which the internal cosmos of effects pedal components oscillate, atoms rearranging themselves again and again into different formations, spaces playing different resonances, standing waves and reflections. In these spaces, vibrations amplify, distort, shatter into new galaxies, and take shape in fractal infinities.</p>
      <p>In this infinite space, there is a distorted bass sound, a constant drone, repetitive strokes (&hairsp;delay&hairsp;), howling standing waves, resonances, harmonics that crackle like fireworks. Each soundtrack is a loop about a minute and a half long. The eight loops form different combinations depending on when each track is played, how the volume and panning (&hairsp;left&hairsp;/&hairsp;right balance&hairsp;) of the sound is adjusted. The number of different combinations is infinite. Each soundtrack can start and end at any time, at any volume and at any point in the left/right balance. Although the computer cannot select the starting and ending points with infinite precision, the experiencer of the work moves with the Earth in a solar system that moves with the galaxy in space. The experiencer is constantly changing. Reality is constantly changing.</p>
      <p>These cosmic events at the atomic level are viewed as living beings, free entities&hairsp;—&hairsp;not as instruments to be commanded. The bass is not played, it is allowed to play. The pedal buttons are not twisted to the ‘right’ places to make the sound predictable, but by turning a knob you search the universe for whatever is there.</p>
      <p>The experiencer can continue this search indefinitely.</p>      
    </div>
  </Modal>
{/if}
{#if showSharpEdges}
  <Modal on:close={() => (showSharpEdges = false)}>
    <h2 slot="title">Sharp Edges</h2>
    <div>
      <p>I was at a lecture some years ago<sup>1</sup> in which the the origin of the word <em>symbol</em> was mentioned&mdash;they talked about &ldquo;<em>language as a symbol of the non-communicable or inexpressible</em>&rdquo;<sup>2</sup>. The word originates from the Greek term <em>symbolon</em>, which connotes a physical object, like a token. It emerged from the tradition of a host breaking a plate after dinner, and giving a piece to the guest as a symbol of belonging and togetherness. The tradition of breaking something&mdash;like a plate or a glass&mdash;persists in many cultures as confirmation of a contract. I could not stop thinking of the sharp edges of a broken plate, and how careful one needs to be to not cut oneself. This symbol of belonging together becomes something that needs to be handled with care, something with sharp edges.</p>     
      <small>
        <ol>
          <li>Mika Elo, &ldquo;The ontology and epistemology of Artistic research,&rdquo; <em>Artistic and Art-Based Research: possibilities, practices and critique from an international perspective</em>, with Mira Kallio-Tavin (lecture at at Aalto University Department of Arts, Espoo, Finland, 2017).
          <li>Mika Elo, &ldquo;Notes on Media Sensitivity in Artistic Research,<em>&rdquo;</em> in <em>Exposition of Artistic Research: Publishing Art in Academia</em>, ed. Michael Schwab and Henk Borgdorff (Leiden: Leiden University Press, 2014), 31.
        </ol>
      </small>
    </div>
  </Modal>
{/if}

{#if showToChop}
  <Modal on:close={() => (showToChop = false)}>
    <h2 slot="title">To Chop</h2>
    <div>
      <p>A friend used the phrase &ldquo;hug wood&rdquo; a while back&mdash;a mistranslation of <em>chopping</em>, from the Swedish word <em>hugga</em>. Through this confusion of words, the aspect of proximity between caring, vulnerability, and violence became evident. To embrace something or somebody can take the place of chopping. There are parallels in the origins of these words; both <em>hug</em> and <em>hugga</em> come from <em>comforting</em>, <em>hug</em> might also come from <em>enclosing</em> something with a hedge. The noun of <em>hugga</em> in Swedish is <em>hygge</em>, which usually refers to a harvested forest area, a clear-cut. The Danish word <em>hygge</em> on the other hand refers to a comfortable mood, and a sense of cosiness often described as simple pleasures, &ldquo;a form of everyday togetherness&rdquo; which has become a Danish export concept. Through language, the uncanniness of <em>hygge</em> became more apparent.</p>
    </div>
  </Modal>
{/if}
{#if showHygge}
  <Modal on:close={() => (showHygge = false)}>
    <h2 slot="title">Hygge</h2>
    <div>
      <p>Around 2016, there were a great many books published about <em>hygge</em>, usually containing well-lit staged photos&mdash;the tea cups, woollen socks, candles. <em>Hygge</em> was announced as the&nbsp;&ldquo;word of the year&rdquo;&nbsp;in 2016 by several online dictionaries, alongside <em>Brexit</em> and <em>Trumpism</em>; within the company of the two other words, the selection indicates tendencies of enclosures and exclusiveness. This prompted articles like: &ldquo;Denmark&rsquo;s Hygge Aesthetic Is Comfy, Cozy, and Complicit With the Rise of Xenophobic Populism<sup>1</sup>&rdquo;. The author writes, &ldquo;<em>Hygge is against conflict and discomfort, distrustful of newness or challenging viewpoints. It is a closed system</em>.&rdquo;&nbsp; It draws a picture of a society in which cosiness can also mean exclusivity, and this is absolutely not a solely Danish phenomena&mdash;the exclusiveness of the cosiness, as well as being cosy in the first place. After presenting an earlier version of this text, I received a link to an article about hygge from several people. This time published in Jacobin, which is described as &ldquo;the leading voice of the American left&rdquo;, this article proclaims &ldquo;You don't want Hygge&rdquo;. You want Social Democracy&rdquo;<sup>2</sup>.</p>
      <small>
        <ol>
          <li>Alex Rober Ross, &ldquo;Denmark&rsquo;s&nbsp;Hygge&nbsp;Aesthetic Is Comfy, Cozy, and Complicit With the Rise of Xenophobic Populism,&rdquo; <em>Slate Magazine</em>, January 10, 2017, <a href="http://www.slate.com/blogs/xx_factor/2017/01/10/danish_hygge_is_cozy_and_also_tied_to_right_nationalist_xenophobic_populism.html?via=gdpr-consent" target="_blank" rel="noopener">http://www.slate.com/blogs/xx_factor/2017/01/10/danish_hygge_is_cozy_and_also_tied_to_right_nationalist_xenophobic_populism.html?via=gdpr-consent</a>
          <li>Meagan Day, &ldquo;You Don&rsquo;t Want Hygge, You Want Social Democracy,&rdquo;, <em>Jacobin Magazine</em>, December 28, 2018, <a href="https://jacobinmag.com/2018/12/hygge-holidays-design-denmark-social-democracy-solidarity" target="_blank" rel="noopener">https://jacobinmag.com/2018/12/hygge-holidays-design-denmark-social-democracy-solidarity</a>
        </ol>
      </small>
    </div>
  </Modal>
{/if}
{#if showTheChoppingBlock}
  <Modal on:close={() => (showTheChoppingBlock = false)}>
    <h2 slot="title">The Chopping Block</h2>
    <div>
      <p>A friend watched my video, &ldquo;<em>I was told I chop wood like a ballet dancer&rdquo;,</em> and was reminded of the Norwegian expression &ldquo;huggestabb&rdquo; [direct translation: chopping block], which is also an expression for a person or institution that is constantly criticised; it sometimes refers to a scapegoat who takes the blame for others. I was later pointed towards the English meaning for chopping block; somebody or something likely to soon be fired or removed.&nbsp;</p>
    </div>
    </Modal>
{/if}
{#if showAxesAccess}
  <Modal on:close={() => (showAxesAccess = false)}>
    <h2 slot="title">Axes/Access&nbsp</h2>
    <div>
      <p>In a conversation that followed a film premiere I attended, I consciously misheard the word <em>access</em>. Its twofold meaning can refer to the&nbsp;method&nbsp;or&nbsp;possibility&nbsp;of getting near to a&nbsp;place&nbsp;or&nbsp;person, or &nbsp;the&nbsp;opportunity&nbsp;or&nbsp;ability&nbsp;to use something. This made me realise how close it sounds to the word <em>axes</em>&mdash;the plural of the tool typically used to chop wood, usually a steel blade attached at a right angle to a wooden handle.</p>    
    </div>
  </Modal>
{/if}
{#if showTheHedge}
  <Modal on:close={() => (showTheHedge = false)}>
    <h2 slot="title">The Hedge</h2>
    <div>
      <p>Let&rsquo;s return to the hedge as one of the origins of the word <em>hug</em>&mdash;to enclose something with a hedge, an enclosure or partition of bushes or trees. In the animated movie <em>Over the Hedge </em>(2006), a group of forest animals wake up from winter hibernation to find a mysterious green wall which they initially name Steve. A suburban housing development has been constructed while the animals slept, and the forest they live in has been reduced to a small green area cut off from the human colonisers with a hedge.&nbsp;</p>
      
      <p>In this scene, the group awakening from hibernation sees the hedge for the first time:</p>
      <em>What weird thing?</em><br>
      <em>Oh, that weird thing</em><br>
      <em>What is this thing?</em><br>
      <em>No!!</em><br>
      <em>Shhh, shh, it’s okay [to the kids] what is this thing? [turns to the partner]</em><br>
      <em>Well, it’s&hellip;it’s&hellip;it’s&hellip;&nbsp;</em><br>
      <em>Well, it’s some kind of...bush</em><br>
      <em>I would be a lot less afraid of that, if I just knew what it was called</em><br>
      <em>Let’s call it Steve!</em><br>
      <em>Steve?</em><br>
      <em>It’s a pretty name</em><br>
      <em>Steve sounds nice</em><br>
      <em>I'm not that scared of Steve</em><br>
      <em>Oh, great and powerful Steve, what do you want?</em><br>
      <em>I don't think it can speak</em><br>
      <em>I heard that young man [from behind Steve / the hedge]<sup>1</sup></em><br>

      <p>In <em>The Queer Art of Failure</em>, Jack Halberstam describes how throughout the movie, we could see the animal as &ldquo;<em>a cross-species alliance to destroy the colonisers, tear down the partition, and upend the suburbanites' depiction of them as &lsquo;vermin</em>&rsquo;&rdquo;<sup>2</sup>. Halberstam finds modes of &ldquo;<em>collective action, anti-capitalist critique, group bonding, and alternative imaginings of community, space, embodiment, and responsibility</em><sup>3</sup>&rdquo; in the film, where the animals oppose a neoliberal individualism for exceptional people with a collective mentality.</p>    

      <small>
        <ol>
          <li>Over the Hedge, 2006, <a href="https://www.youtube.com/watch?v=1JgySwYb40Y" target="_blank" rel="noopener">https://www.youtube.com/watch?v=1JgySwYb40Y</a>
          <li>Jack Halberstam, <em>The Queer Art of Failure</em>, (Durham: Duke University Press, 2011), 44.
          <li>Ibid. p.43-44
        </ol>
      </small>
    </div>
  </Modal>
{/if}

<style>
  .bg-color {
    background: var(--color9);
  }
  .freja-container {
    overflow: auto;
  }
  .centered {
    text-align: center;
  }
</style>