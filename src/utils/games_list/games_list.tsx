import { Game } from "../../types/game.types";
// import craniumImage from "/image/cranium_image.jpg";
import azulImage from "./image/azul.jpg";
import azulQueenGardenImage from "./image/azul-il-giardino-della-regina.jpg";
import craniumImage from "./image/cranium.jpg";
import callistoImage from "./image/callisto.jpg";
import kalidosJunioImage from "./image/kalidosJunior.jpg";
import genialeImage from "./image/geniale.jpg";
import olympusImage from "./image/olympus.jpg";
import catanImage from "./image/catan.png";
import lilleroImage from "./image/lillero.png";
import dixitImage from "./image/dixit.jpg";
import kawoomImage from "./image/ka-woom.jpg";
import sherlockImage from "./image/sherlock.jpg";
import jokerImage from "./image/joker.jpg";
import level9Image from "./image/level-9.jpg";
import pandemicImage from "./image/pandemic.jpg";
import tubimagiciImage from "./image/tubiMagici.jpg";
import topTenImage from "./image/topTen.jpg";
import tokyoTrainImage from "./image/tokyoTrain.png";
import indizi13Image from "./image/13Indizi.jpg";
import baleneImage from "./image/balene-in-liberta.jpg";
import happySalmonImage from "./image/happy-salmon.webp";
import fantascattiImage from "./image/fantascatti.jpg";
import fantascattiExpressImage from "./image/fantascatti-express.webp";
import saboteurImage from "./image/saboteur.jpg";
import bellzImage from "./image/bellz.jpg";
import seiFuoriImage from "./image/sei-fuori.jpg";
import camaleonteImage from "./image/camaleonte.jpg";
import unstableUnicornsImage from "./image/unstable-unicorns.jpg";
import explodingKittenVM18 from "./image/exploding_kittens_vm18.jpg";
import dontGetGotImage from "./image/dont-get-got.jpg";
import kaBlabImage from "./image/ka-blab.jpg";
import uccelliniImage from "./image/uccellini.jpg";
import kryptosImage from "./image/kryptos.webp";
import treDesideriImage from "./image/tre-desideri.webp";
import oleGuacamole from "./image/ole-guacamole.jpg";
import tacoGatto from "./image/tacoGatto.png";
import tacoParty from "./image/tacoParty.jpg";
import yogiImage from "./image/yogiImage.jpg";
import truthOrDrinkImage from "./image/truthOrDrink.webp";
import cinqueSecondi from "./image/cinqueSecondi.webp";
import bangImage from "./image/bang.jpg";
import ethnosImage from "./image/ethnos.jpg";
import gummiLandImage from "./image/gummiland.jpg";
import lewisAndClarkImage from "./image/lewis-clark.jpg";
import portaliDiMoltharImage from "./image/il-portale-di-molthar.jpg";
import myShelfieImage from "./image/my-shelfie.jpg";
import huesAndCuesImage from "./image/hues-and-cues.jpg";
import dulcisInFundoImage from "./image/dulcis-in-fundo.jpg";
import IconImage from "./image/dulcis-in-fundo.jpg";
import crackListImage from "./image/crack-list.jpg";
import aiaGaiaImage from "./image/aia-gaia.jpg";
import beccatoImage from "./image/beccato.jpg";
import sushiGoPartyImage from "./image/sushi-go-party.jpg";
import centuryMOImage from "./image/century-meraviglie-orientali.jpg";
import centuryNMImage from "./image/century-nuovo-mondo.jpg";
import centuryVdSImage from "./image/century-la-via-delle-spezie.jpg";

export const games: Game[] = [
  {
    show_in_home: false,
    id: "001",
    image: craniumImage,
    name: "Cranium",
    categories: ["party game"],
    minPlayer: 4,
    maxPlayer: 99,
    playerAge: 16,
    playTime: 60,
    description:
      "Cranium è un gioco estremamente divertente e dà ai giocatori la possibilità di mostrare il loro talento! I giocatori formano le squadre e girano attorno al tabellone completando attività suddivise in 4 categorie di colori diversi: Creative Cat, Data Head, Star Performer, and Word Worm. Una squadra pesca una carta della categoria corrispondente alla sua casella sul tabellone e deve successivamente completare l'attività prima che finisca il tempo. Sillabare una parola al contrario, disegnare a occhi chiusi e risolvere un puzzle sono solo alcune delle attività che potreste dover svolgere. La prima squadra che raggiunge la casella Cranium Central e completa un'ultima sfida vince! Comprende 600 carte, 4 pedine, Cranium Clay, timer, dado, 1 blocco notes e le istruzioni.",
  },
  {
    show_in_home: false,
    id: "002",
    image: callistoImage,
    name: "Callisto",
    categories: ["euro", "filler"],
    maxPlayer: 4,
    minPlayer: 2,
    playerAge: 7,
    playTime: 20,
    description:
      "Callisto è un avvincente gioco di strategia, dove analisi e previsione sono fondamentali per portare avanti il proprio gioco e neutralizzare quello degli avversari. Come primo impatto ricorda molto il gioco del Tetris, per la somiglianza dei pezzi ai famosi tetramini e la meccanica degli incastri. Tuttavia qui non ci sono righe da eliminare, lo scopo è quello di piazzare le proprie tessere, intralciando nel contempo gli avversari.",
  },
  {
    show_in_home: false,
    id: "003",
    image: kalidosJunioImage,
    name: "Kaleidos junior",
    categories: ["kids"],
    minPlayer: 2,
    maxPlayer: 99,
    playerAge: 5,
    playTime: 45,
    description:
      "In Kaleidos lo scopo del gioco, riuscire a identificare all’interno di immagini appositamente realizzate il maggior numero di soggetti il cui nome inizia con la lettera selezionata. Ogni immagine contiene un incredibile numero di soggetti diversi, ma con la fantasia è possibile identificare anche quelli non immediatamente visibili. Rapido, veloce e in un’elegante confezione metallica, è perfetto anche per gruppi numerosi, suddivisi in squadre.",
  },
  {
    show_in_home: false,
    id: "004",
    image: genialeImage,
    name: "Geniale",
    categories: ["euro"],
    minPlayer: 1,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 45,
    description:
      "Un gioco astratto di strategia in cui i partecipanti cercheranno di utilizzare le tessere di domino a loro disposizione per totalizzare il maggior numero di punti vittoria. I punti vengono assegnati per i simboli dello stesso tipo accoppiati sul tabellone e la partita termina quando non sarà più possibile aggiungere ulteriori pezzi. Bisognerà cercare di far avanzare tutti i colori il più possibile, poiché ognuno di essi avrà un tracciato del punteggio indipendente. Alla fine della partita il punteggio di ogni partecipante verrà determinato dal colore con cui ha totalizzato il minor numero di punti. Semplicità delle regole, partite sempre differenti e buon livello di strategia rendono il titolo adatto a tutta la famiglia.",
  },
  {
    show_in_home: false,
    id: "005",
    image: olympusImage,
    name: "Olympus",
    categories: ["euro", "management"],
    minPlayer: 3,
    maxPlayer: 5,
    playerAge: 14,
    playTime: 90,
    description:
      "Nell’Antica Grecia, le poleis (città-stato) prosperarono incrementando la propria popolazione e cultura, facendosi occasionalmente guerra l’un l’altra, erigendo edifici e celebrando cerimonie per ottenere il favore delle divinità che abitavano sul Monte Olimpo. Tu guiderai una di queste città-stato (come Atene, Sparta, Corinto, Tebe, Argo e altre) espandendola e adorando le varie divinità per diventare la potenza egemone del Peloponneso.",
  },
  {
    show_in_home: true,
    id: "006",
    image: catanImage,
    name: "Catan",
    categories: ["euro"],
    minPlayer: 2,
    maxPlayer: 4,
    playTime: 90,
    playerAge: 10,
    description:
      "Alcuni marinai sono sbarcati sulla costa di un'isola sconosciuta che hanno battezzato Catan. Grazie al legno che raccolgono uomini e donne costruiscono insieme le case delle prime colonie. L'isola è ricca e ci sono molte materie prime disponibili, si costruiscono le strade e le colonie diventano presto delle città. Nello sviluppo di questa civiltà il baratto gioca un ruolo primario, visto che alcune volte può esserci argilla in abbondanza, mentre altre c'è più minerale. Si scambia questo per quello a seconda dei bisogni del momento. Le colonie prosperano e l'influenza di queste aumenta, combatti per avere il predominio territoriale di Catan!",
  },
  {
    show_in_home: false,
    id: "007",
    image: lilleroImage,
    name: "Lillero",
    categories: ["management", "euro"],
    minPlayer: 2,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 90,
    description:
      "Gioco da tavolo personalizzato in dialetto perugino. Lo scopo del gioco è diventare il governante di Perugia, affittando, comprando e vendendo i “poderi” presenti sul tabellone, fino al possedimento di tutti i 5 Rioni.",
  },
  {
    show_in_home: true,
    id: "008",
    image: dixitImage,
    name: "Dixit",
    categories: ["party game"],
    minPlayer: 2,
    maxPlayer: 6,
    playerAge: 8,
    playTime: 30,
    description:
      "Le immagini sono state rivelate. Tutte hanno una cosa in comune: una frase enigmatica! Ora state attenti... solo una delle immagini è la Chiave! Usate fiuto e intuizione per trovarla, evitando le trappole degli altri giocatori! Dixit, un gioco sorprendente e divertente da giocare in famiglia o con gli amici! Ogni giocatore avrà una mano di carte (molto grandi) con bizzarre ma stupende illustrazioni. Il Narratore sceglierà segretamente una delle sue carte fornendone una breve (troppo breve!) descrizione composta di una frase, o un indizio. Gli altri giocatori selezioneranno segretamente quale delle loro carte possa identificarsi nella descrizione... e una volta che le carte vengono selezionate, ogni giocatore selezionerà segretamente quale sia la carta giusta!",
  },
  {
    show_in_home: false,
    id: "009",
    image: kawoomImage,
    name: "Ka-Woom",
    categories: ["kids"],
    minPlayer: 2,
    maxPlayer: 5,
    playerAge: 6,
    playTime: 30,
    description:
      "Mentre il mastro costruttore è intento a erigere le sue torri, l'obiettivo degli altri giocatori e delle loro catapulte è uno solo: fuoco a volontà! Ma non tutti i colpi vanno a segno e le munizioni sono limitate. Solo se ci saranno ancora torri in piedi alla fine del round il costruttore otterrà punti.",
  },
  {
    show_in_home: false,
    id: "010",
    image: sherlockImage,
    name: "Sherlock Holmes",
    categories: ["investigatives", "party game"],
    minPlayer: 1,
    maxPlayer: 99,
    playerAge: 10,
    playTime: 60,
    description:
      "I giocatori interpretano dei membri della banda ufficiosa degli Irregolari di Baker Street, una squadra formata da Sherlock Holmes per essere informato su ciò che si diceva per le strade e per ottenere supporto nelle indagini più misteriose. Questa scatola presenta dieci casi spinosi che spetterà ai giocatori risolvere.",
  },
  {
    show_in_home: false,
    id: "011",
    image: jokerImage,
    name: "Joker: a diabolical party game",
    categories: ["party game", "cards"],
    minPlayer: 3,
    maxPlayer: 6,
    playerAge: 12,
    playTime: 40,
    description:
      "I più folli e pericolosi criminali di Gotham City sono giunti in città, determinati a impadronirsene una volta per tutte! Un gioco Diabolico: sei uno dei 9 Supercriminali che tentano di corrompere e controllare Gotham City! Se vuoi sopravvivere fino alla fine, non dovrai dare nell'occhio! Sarai l'ultimo Supercriminale rimasto o sarà il Joker ad avere la meglio",
  },
  {
    show_in_home: false,
    id: "012",
    image: level9Image,
    name: "Level 9",
    categories: ["management"],
    minPlayer: 1,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 20,
    description:
      " In Level 9 tutti i giocatori usano le tessere, numerate da 0 a 9, per fare una costruzione davanti a sé. Più in alto viene piazzata una tessera, più punti vale. All’inizio di ogni turno, si volta la prima carta del mazzo e si annuncia a voce alta il numero riportato; i giocatori prendono dalla scatola una tessera col numero appena annunciato e pensano a come piazzarla nel migliore dei modi davanti a sé, rispettando alcune semplici regole. La partita si svolge in 20 turni; dopo che è stata giocata l’ultima carta del mazzo i giocatori contano il loro punteggio moltiplicando il numero indicato sulle loro tessere per il livello in cui si trovano.",
  },
  {
    show_in_home: false,
    id: "013",
    image: pandemicImage,
    name: "Pandemic - una nuova sfida",
    categories: ["war game", "cooperative"],
    minPlayer: 2,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 45,
    description:
      "Pandemic - Una Nuova Sfida è un gioco altamente cooperativo in cui ogni giocatore sarà chiamato a collaborare per salvare il pianeta da una terribile epidemia virale. Assumerete un ruolo unico e fondamentale all'interno della vostra squadra, visto che ogni personaggio è dotato di abilità speciali particolari che gli consentono di cavarsela meglio in determinate situazioni. Utilizzare al meglio i talenti di ciascuno è la chiave per ottenere la vittoria dell'intera squadra.",
  },
  {
    show_in_home: false,
    id: "014",
    image: tubimagiciImage,
    name: "Tubi magici",
    categories: ["euro", "party game", "filler"],
    minPlayer: 1,
    maxPlayer: 8,
    playerAge: 10,
    playTime: 20,
    description:
      "Tubi Magici è una divertente sfida di logica in cui dovrete realizzare una contorta rete di tubi sulla vostra plancia, cercando di concatenarne di più lunghi possibile dello stesso colore. Ad ogni partita avrete accesso ad un set di tessere diverse, in modo da rendere ogni sfida sempre nuova e divertente, inoltre vi sfiderete utilizzando le stesse tessere presentate nello stesso ordine, in modo da poter determinare con certezza chi sia il giocatore più logico al tavolo!",
  },
  {
    show_in_home: false,
    id: "015",
    image: topTenImage,
    name: "Top ten",
    categories: ["party game", "cooperative"],
    minPlayer: 4,
    maxPlayer: 9,
    playerAge: 14,
    playTime: 30,
    description:
      "Top Ten è un party game collaborativo. Un giocatore a turno, Capitan Ten, deve mettere in ordine le risposte degli altri giocatori. Si sceglie un tema che indica una intensità particolare delle risposte (es. dalla più utile alla meno utile, dalla peggiore alla migliore,…). I giocatori dovranno dare risposte con intensità in base al numero della carta che hanno in mano (dalla numero 1 alla numero 10). Il Capitan Ten dovrà indovinare l’ordine delle risposte. Riuscirete a superare il quinto turno, senza aver accumulato tutti i gettoni… cacca?",
  },
  {
    show_in_home: false,
    id: "016",
    image: tokyoTrainImage,
    name: "Tokyo train",
    categories: ["party game", "filler"],
    minPlayer: 4,
    maxPlayer: 8,
    playerAge: 8,
    playTime: 10,
    description:
      "Hisashiburi! Kyokugaiska! Tokosishemu?!?... Alla guida di un gruppo di turisti nella capitale dell' ordine e della precisione, dovrete fare i conti a gesti e urla in lingua giapponese con il solerte capotreno che vi indicherà dove far accomodare tutti nel posto loro assegnato. In un tourbillon allegro e frenetico di spinte e valigie, con l'occhio alla mimica dei gesti e l'orecchio agli ordini secchi, dovrete riportare la quiete e l'ordine sudando sette camicie...",
  },
  {
    show_in_home: false,
    id: "017",
    image: azulImage,
    name: "Azul",
    categories: ["euro", "management"],
    minPlayer: 2,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 45,
    description:
      "Scopri l'affascinante universo di Azul, un gioco da tavolo strategico che ti invita a creare mosaici incantevoli con tessere di ceramica dai colori vivaci. Ispirato all'arte storica degli azulejos, che risalgono alla tradizione moresca e sono stati perfezionati dai portoghesi, Azul ti offre l'opportunità di diventare un abile artista incaricato di abbellire le splendide mura del Palazzo Reale di Évora. Ogni partita è un'esperienza unica, ricca di strategia, sorprese e momenti avvincenti.",
  },
  {
    show_in_home: false,
    id: "018",
    image: azulQueenGardenImage,
    name: "Azul - Il giardino della regina",
    categories: ["euro", "management"],
    minPlayer: 2,
    maxPlayer: 4,
    playerAge: 10,
    playTime: 69,
    description:
      "Re Manuel I ha commissionato ai migliori progettisti del Portogallo la realizzazione del giardino più straordinario di sempre per sua moglie, la Regina Maria di Aragona. In Azul – Il Giardino della Regina, i giocatori sono incaricati di realizzare uno splendido giardino per la graziosa moglie del Re, disponendo ad arte piante, alberi e ornamenti meravigliosi.Tramite un innovativo sistema di acquisizione delle tessere, caratteristica peculiare della serie di Azul, i giocatori dovranno scegliere attentamente quelle per decorare il proprio giardino. Solo i più abili progettisti prospereranno e riceveranno la benedizione della Regina.",
  },
  {
    show_in_home: false,
    id: "019",
    image: bangImage,
    name: "Bang!",
    categories: ["euro"],
    minPlayer: 4,
    maxPlayer: 7,
    playerAge: 8,
    playTime: 30,
    description:
      "I Fuorilegge danno la caccia allo Sceriffo. Lo Sceriffo dà la caccia ai Fuorilegge. Il Rinnegato trama nell’ombra, pronto a schierarsi da una parte o dall’altra. Le pallottole volano. Chi fra i pistoleri sarà un aiutante dello Sceriffo, pronto a sacrificarsi per lui? E chi invece uno spietato Fuorilegge, che non aspetta altro che farlo fuori? Il gioco western più venduto del mondo in una versione ancora più ricca e facile da imparare!",
  },
  {
    show_in_home: false,
    id: "020",
    image: indizi13Image,
    name: "13 Indizzi",
    categories: ["euro", "management"],
    minPlayer: 2,
    maxPlayer: 6,
    playerAge: 99,
    playTime: 30,
    description:
      "Londra, 1899. La città è sconvolta da crimini efferati le cui soluzioni sono avvolte nel mistero. La polizia di Scotland Yard brancola nel buio e convoca i detective migliori, per un aiuto risolutivo nelle indagini. Ogni investigatore dovrà usare tutto il proprio fiuto per scovare quali dei 13 indizi riguardano il caso a lui assegnato. Interrogando i testimoni e consultando gli informatori segreti, sarà possibile formulare le accuse e scoprire il colpevole, il luogo e l’arma.",
  },
  {
    show_in_home: false,
    id: "021",
    image: baleneImage,
    name: "Balene in libertà",
    categories: ["party game"],
    minPlayer: 3,
    maxPlayer: 12,
    playerAge: 14,
    playTime: 30,
    description:
      "Le Balene... in Libertà è un divertente gioco di carte in cui dovrete giocare con la lingua italiana costruendo una serie di frasi strampalate e divertenti utilizzando una serie di espressioni, spesso bizzarre. Ciascun giocatore avrà a disposizione una serie di carte con diversi spezzoni che dovrà concatenare con le carte giocate in precedenza per dare vita a una frase di senso compiuto.Carta dopo carta avrete l'occasione di liberarvi la mano, ma attenzione a non esagerare, se la sequenza non ha un senso logico dovrete recuperare la carta giocata e pescarne un'altra. Il vincitore è colui che per primo riuscirà a liberarsi di tutte le sue carte. Le Balene... in Libertà è un gioco da tavolo party edito da Imagommage e distribuito in Italia da Oliphante.",
  },
  {
    show_in_home: false,
    id: "022",
    image: happySalmonImage,
    name: "Happy Salmon",
    categories: ["party game", "kids", "cards"],
    minPlayer: 3,
    maxPlayer: 6,
    playerAge: 6,
    playTime: 2,
    description:
      "Dallo studio di Exploding Kittens: un gioco fisico, veloce e rumoroso. Happy Salmon è un gioco di carte velocissimo che fa muovere e ridere tutti in meno di due minuti.  Quindi fate un po’ di spazio, liberatevi delle sedie e, se il vostro battito supera i 120 bpm, probabilmente state giocando nel modo giusto.",
  },
  {
    show_in_home: false,
    id: "023",
    image: fantascattiImage,
    name: "Fantascatti",
    categories: ["euro", "kids", "cards"],
    minPlayer: 2,
    maxPlayer: 8,
    playerAge: 8,
    playTime: 20,
    description:
      "In Fantascatti imparerete a conoscere il simpatico fantasma Baldovino che infesta un lugubre castello. Se ne va in giro con una vecchia e polverosa macchina fotografica e fotografa tutto quello che fa apparire e scomparire …compreso se stesso! Purtroppo, la vecchia macchina fotografica sbaglia tutti i colori. Una bottiglia verde, ad esempio, a volte sembra bianca a volte blu; tanto che Baldovino non ricorda più cosa voleva far sparire. Aiutalo a ricordare gli oggetti giusti o falli scomparire per lui. Un buon colpo d’occhio e uno scatto felino ti assicureranno la vittoria! Fantascatti è un gioco da tavolo di destrezza e abilità adatto a tutta la famiglia edito da Giochi Uniti.",
  },
  {
    show_in_home: false,
    id: "024",
    image: fantascattiExpressImage,
    name: "Fantascatti express",
    categories: ["euro", "kids", "cards"],
    minPlayer: 2,
    maxPlayer: 6,
    playerAge: 7,
    playTime: 20,
    description:
      "Tommy è un giovane investigatore specializzato in casi mooolto particolari. Nonostante la sua giovane età non ha paura di avventurarsi in un vecchio castello abbandonato, armato solo della sua macchina fotografica, in cerca di temibili fantasmi da stanare. Ma non sarà facile, poiché i fantasmi cercheranno di confonderlo. Siete disposti a dargli una mano? Nel corso della partita, i giocatori tentano di “acchiappare” un numero di Fantasmi uguale a quello che compare sui 4 dadi.Per acchiappare i Fantasmi i giocatori possono prendere le carte che sono sparse sul tavolo da gioco, su cui ci sono raffigurati i vari tipi di fantasmi in varie combinazioni.",
  },
  {
    show_in_home: false,
    id: "025",
    image: saboteurImage,
    name: "Saboteur",
    categories: ["euro", "party game"],
    minPlayer: 3,
    maxPlayer: 10,
    playerAge: 8,
    playTime: 30,
    description:
      "Saboteur Nuova Edizione include anche l'espansione che comprende i nuovi ruoli quali il Boss, il Profittatore e il Geologo. Troverete inoltre nuove carte azione e nuove carte percorso, mentre la strada per raggiungere il tesoro sarà ancora più tortuosa! In Saboteur i giocatori sono nani minatori che hanno il compito di scavare con il loro piccone profonde gallerie alla ricerca del tesoro, avvalendosi solo di picconi, lampade e carrelli. Si vocifera, però, che tra i nani si nasconda un sabotatore che manderà tutto all'aria. Solo i nani capici di creare il giusto percorso per raggiungere i tesori verranno ricompensati con le pepite d'oro lasciando i sabotatori a mani vuote. Tuttavia, se saranno i cercatori d'oro a fallire, spetterà ai sabotatori ricevere la ricompensa. Lo scopo del gioco è quello di arrivare, partendo da una carta iniziale, alle carte di fine percorso: solo sotto una di esse si trova l'ambito tesoro. L’interazione tra i giocatori è altissima e la capacità di bluffing è un elemento fondamentale, capace di donare al gioco inaspettati colpi di scena. Brevità delle partite, regole semplici e l'alto numero di partecipanti possibili rendono questo gioco un party game eccezionale.",
  },
  {
    show_in_home: false,
    id: "026",
    image: bellzImage,
    name: "Bellz",
    categories: ["kids", "filler"],
    minPlayer: 2,
    maxPlayer: 4,
    playerAge: 6,
    playTime: 15,
    description:
      "Bellz! è un gioco di destrezza in cui ogni giocatore dovrà cercare di catturare tutti campanelli dello stesso colore, attirandoli con la bacchetta magnetica. Attenzione però, se per sbaglio attirate un campanello di un colore diverso, dovrete posare tutti i campanelli raccolti e cedere la bacchetta al giocatore successivo! Campanello dopo campanello chi riuscirà a completare per primo la propria collezione? Fate attenzione alla posizione dei campanelli sulla plancia di stoffa, cercate di intuire l'attrazione magnetica reciproca in base alle dimensione dei campanelli e provate a studiare una strategia vincente per portare a casa sia i campanelli piccoli che quelli grandi. Poche regole, tanti campanelli colorati per un divertimento assicurato per grandi e piccini.",
  },
  {
    show_in_home: false,
    id: "027",
    image: seiFuoriImage,
    name: "6 fuori",
    categories: ["cards", "party game", "euro"],
    minPlayer: 3,
    maxPlayer: 9,
    playerAge: 7,
    playTime: 20,
    description:
      "Questo gioco da tavolo coinvolgente, adatto a 3-9 giocatori, mette alla prova la tua capacità di pensare velocemente, evitare trabocchetti linguistici e scartare carte strategicamente per restare Dentro fino alla fine. Ma attenzione: una parola di troppo può metterti nei guai!",
  },
  {
    show_in_home: false,
    id: "028",
    image: camaleonteImage,
    name: "Camaleonte",
    categories: ["party game", "filler"],
    minPlayer: 3,
    maxPlayer: 8,
    playerAge: 14,
    playTime: 15,
    description:
      "Il super-social, poliziesco, party game. Tutti sono a conoscenza del “segreto” tranne il Camaleonte.Ma chi è il Camaleonte?Per catturarlo, i giocatori devono descrivere il “segreto” utilizzando una sola parola. Troppo ovvia?Il Camaleonte si mimetizza. Troppo difficile?Qualcuno inizia a sospettare di voi. A questo punto date il via a frenetiche discussioni, bufale e dita puntate. Ma attenzione: scegliete il giocatore sbagliato e il Camaleonte fuggirà.",
  },
  {
    show_in_home: false,
    id: "029",
    image: unstableUnicornsImage,
    name: "Unstable Unicorns",
    categories: ["cards"],
    minPlayer: 2,
    maxPlayer: 8,
    playerAge: 14,
    playTime: 40,
    description:
      "Unstable Unicorns è un gioco di carte strategico, rapido e divertente, dalle illustrazioni pucciose e azioni infami! Crea un esercito di unicorni. Tradisci i tuoi amici. Sono gli unicorni i tuoi amici adesso. Un gioco di carte strategico sulle due cose che tutti amano: gli Unicorni e la Distruzione!Vince il primo giocatore che possiede 7 Unicorni nella propria Stalla!Si parte con 5 carte a testa e un unicorno baby nella propria stalla.Il gioco consiste poi nel pescare carte e giocare carte cercando di ravvivare la propria stalla con altri unicorni e, allo stesso tempo, impedendo agli altri di raggiungere l’obbiettivo.Come? Semplicemente lanciando bombe di glitter, inviando unicorni-narvali in azione, negando le azioni altrui con poderosi nitriti e altro ancora.",
  },
  {
    show_in_home: false,
    id: "030",
    image: explodingKittenVM18,
    name: "Exploding kittens VM18",
    categories: ["cards"],
    minPlayer: 2,
    maxPlayer: 5,
    playerAge: 18,
    playTime: 20,
    description:
      "Exploding Kittens: VM18 è la versione NSFW del divertentissimo gioco di carte con gattini puccettosi che esplodono a profusione. Queste carte, inizialmente ideate come espansione del gioco base e successivamente diventate un set giocabile in modo indipendente, contengono illustrazioni non del tutto politicamente corrette per essere incluse in un gioco adatto anche ai più piccoli. Questo pack di carte può essere giocato da solo, oppure combinandolo con il set standard.Anche in Exploding Kittens: VM18 ogni giocatore pesca carte fino a quando qualcuno non pesca una carta Exploding Kitten: a quel punto quel qualcuno esplode, è eliminato, è fuori dal gioco. A meno che quel giocatore non abbia una carta Disinnesgatto nella propria mano che possa disinnescare la carta Exploding Kitten. Queste carte possono essere i puntatori laser, i grattini sulla pancia o i sandwich di erba gatta. Tutte le rimanenti carte nel mazzo vengono usate per spostare, attenuare o evitare le carte Exploding Kitten.",
  },
  {
    show_in_home: false,
    id: "031",
    image: dontGetGotImage,
    name: "Don't Get Got",
    categories: ["party game"],
    minPlayer: 2,
    maxPlayer: 10,
    playerAge: 16,
    playTime: 30,
    description:
      "Ingannatevi a vicenda ma non fatevi scoprire! Questo non è il classico gioco da tavolo in cui sei piantato su una sedia: è un gioco di missioni segrete a cui puoi giocare mentre fai altro.Ogni giocatore riceve sei Missioni segrete, il primo a completarne tre decreta la fine del gioco e vince. Quindi, a prescindere che tu sia a casa, in vacanza, a una festa o che, addirittura, tu stia giocando ad un altro gioco, tieni d'occhio chi hai intorno... non potrai più fidarti di nessuno.",
  },
  {
    show_in_home: false,
    id: "032",
    image: kaBlabImage,
    name: "Ka-Blab",
    categories: ["party game", "euro"],
    minPlayer: 2,
    maxPlayer: 6,
    playerAge: 10,
    playTime: 30,
    description:
      "Ka-Blab Gioco di Società con Timer Bomba. Spara tutte le parole necessarie prima che scada il tempo; Ka-Blab! è un gioco veloce e frenetico in cui i giocatori devono dire parole appartenenti a una categoria prima che il timer esploda. In ogni round, i giocatori a turno tirano il dado per scoprire quante parole relative all'argomento indicato sulla carta devono dire; continuano a tirare il dado e a sparare parole fino a quando non possono passare il turno.",
  },
  {
    show_in_home: true,
    id: "033",
    image: uccelliniImage,
    name: "Uccellini",
    categories: ["filler", "kids", "euro"],
    minPlayer: 2,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 15,
    description:
      "Uccellini è un gioco semplice e alla portata di tutti, in cui ciascun giocatore dovrà riuscire a completare i propri gruppi di uccellini del solito colore. Ricordatevi dove si nascondo gli uccellini che state cercando, ma fate molta attenzione perchè le tessere hanno una duplice faccia con colori diversi, per cui ricordarsi la posizione di questi coloratissimi animaletti non sarà affatto facile!Divertitevi con questo coloratissimo gioco adatto soprattutto ai giocatori più piccoli, per iniziare a muovere le prime mosse nel mondo dei giochi da tavolo.",
  },
  {
    show_in_home: false,
    id: "034",
    image: kryptosImage,
    name: "Kryptos",
    categories: ["filler", "investigatives"],
    minPlayer: 3,
    maxPlayer: 6,
    playerAge: 8,
    playTime: 15,
    description:
      "Kryptos racchiude una miniera di enigmi: chiavi per codici, indizi e messaggi segreti. Decifra il codice prima che lo faccia il tuo nemico! Pensa, pianifica e deduci, ma senza impiegare troppo tempo perché i tuoi avversari approfitteranno dei tuoi errori. Kryptos è un intuitivo gioco di deduzione in cui dovrete riuscire a capire quale sia la combinazione scelta dai vostri avversari, ovviamente prima che gli altri facciano lo stesso con voi, chi di voi riuscirà a scassinare per primo tutti gli avversari?",
  },
  {
    show_in_home: false,
    id: "035",
    image: treDesideriImage,
    name: "3 Desideri",
    categories: ["filler", "kids"],
    minPlayer: 3,
    maxPlayer: 5,
    playerAge: 8,
    playTime: 5,
    description:
      "3 Desideri è un gioco semplice ed estremamente rapido, ma non per questo poco divertente! Qualcuno deve aver strofinato una lampada magica, visto che di fronte ai vostri occhi si erge un imponente genio che vi chiede 3 esattamente desideri ciascuno. Solo quelli di uno di voi verranno realizzati, per cui il genio vi propone un giochino. Chi di voi riuscirà a proporgli 3 desideri di diversa tipologia riuscirà a vederli realizzati.ll'inizio del gioco ciascuno di voi possiede 3 carte desiderio, mentre al centro del tavolo ne sono presenti altre 2 coperte. Come unica azione a vostra disposizione potrete sbirciare o scambiare una carta con uno degli avversari o con quelle al centro del tavolo. Il primo ad ottenere 3 desideri diversi avrà vinto la partita!",
  },
  {
    show_in_home: false,
    id: "036",
    image: oleGuacamole,
    name: "Olè guacamole",
    categories: ["filler", "party game"],
    minPlayer: 2,
    maxPlayer: 8,
    playerAge: 10,
    playTime: 20,
    description:
      "Olé! Guacamole è un Party Game che si spiega in 10 secondi e che ti farà spremere le meningi!na carta con una lettera. (es. B) e dì una parola che non contenga quella lettera. (es. Tavolo)Tocca poi al giocatore successivo, che gira un’altra carta lettera. (es. F)Il giocatore deve dire ora una parola che NON contenga né la B, né la F e che sia collegata semanticamente alla parola precedente (Tavolo). Quindi, ad esempio “Sedia”!Si continua così finché qualcuno sbaglia o resta senza parole!Gli errori si pagano prendendo tutte le carte girate fino a quel momento.Alla fine della partita, il giocatore con meno carte è il vincitore!",
  },
  {
    show_in_home: false,
    id: "037",
    image: tacoGatto,
    name: "Taco gatto capra cacio pizza",
    categories: ["filler", "party game"],
    minPlayer: 2,
    maxPlayer: 8,
    playerAge: 8,
    playTime: 10,
    description:
      "Taco Gatto Capra Cacio Pizza! Fissate bene a mente queste 5 parole. A turno si scopre una carta dal mazzo ma appena prima di farlo si dichiara ad alta voce una delle 5 parole. Appare una carta con l’immagine della parola dichiarata? Colpite con la mano velocemente la Pila centrale. L’ultimo raccoglie tutto! Siate vigili e osservatori per sbarazzarvi di tutte le vostre carte! Il minimo errore vi costerà carte di penalità: nessuna finta, nessuna esitazione è permessa!",
  },
  {
    show_in_home: false,
    id: "038",
    image: tacoParty,
    name: "Taco party torta pacco pizza",
    categories: ["filler", "party game"],
    minPlayer: 2,
    maxPlayer: 8,
    playerAge: 8,
    playTime: 10,
    description:
      "Fissate bene a mente queste 5 parole. Appare una carta con l’immagine della parola dichiarata? Colpite con la mano velocemente la Pila centrale. L’ultimo raccoglie tutto! Siate vigili e osservatori per sbarazzarvi di tutte le vostre carte! Il minimo errore vi costerà carte di penalità: nessuna finta, nessuna esitazione è permessa in questo gioco di carte frenetico e divertente.",
  },
  {
    show_in_home: false,
    id: "039",
    image: yogiImage,
    name: "Yogi",
    categories: ["party game", "american"],
    minPlayer: 3,
    maxPlayer: 12,
    playerAge: 8,
    playTime: 15,
    description:
      "In Yogi sarete chiamati ad assumere una serie di posizioni decisamente buffe e fuori di testa, in modo da ottenere il maggior numero di punti e risultare vincitori al termine della partita. Pescate una carta, se la carta è di colore rosso, dovrete tenere la carta appena pescata nel modo richiesto, mentre se è verde dovrete assumure la posizione richiesta. Ogni carta vi renderà sempre più difficile la vita, ma non temete, in Yogi più la posizione è assurda e più probabilmente starete accumulando punti!",
  },
  {
    show_in_home: false,
    id: "040",
    image: truthOrDrinkImage,
    name: "Truth or drink",
    categories: ["party game", "american"],
    minPlayer: 3,
    maxPlayer: 8,
    playerAge: 18,
    playTime: 45,
    description:
      "Cosa vorresti dire ai tuoi datori di lavoro? In cosa ti piace sperperare i tuoi soldi? Cosa è successo al tuo primo appuntamento? Tratto dalla serie di grandissimo successo (11 milioni di iscritti, media di 1 milione di visualizzazioni a video) gestita dal gruppo CUT, truth or drink è un gioco di segreti da scoprire. Dovrai condividere le tue storie più imbarazzanti, dire quello che non avresti mai voluto ammettere, oppure bere…rischiando di finire per rivelare ancora di più!",
  },
  {
    show_in_home: false,
    id: "041",
    image: cinqueSecondi,
    name: "Cinque secondi, senza censure",
    categories: ["party game", "american"],
    minPlayer: 3,
    maxPlayer: 99,
    playerAge: 18,
    playTime: 45,
    description:
      "Sembra facile nominare tre usi per la lingua, ma riesci a farlo senza rimanere impantanato o agitato? Tutti ti guardano, chiedendosi a cosa ti serve esattamente la lingua, e il tempo stringe: hai solo cinque secondi per scavare nell'angolo perverso della tua mente e sputarlo fuori!",
  },
  {
    show_in_home: false,
    id: "042",
    image: ethnosImage,
    name: "Ethnos",
    categories: ["deck building", "euro", "strategy"],
    minPlayer: 2,
    maxPlayer: 6,
    playerAge: 14,
    playTime: 50,
    description:
      "In Ethnos dovrete chiedere aiuto alle 12 tribù che abitano questo reame fantasy per ottenere il controllo dei vari territori e risultare l'alleanza più potente al termine della partita! Invocate l'aiuto di giganti, tritoni, halfling, minotauri e tutta una serie di altre razze fantasy per imporvi sui vostri avversari grazie ad un fine posizionamento strategico ed all'utilizzo sagace del potere di ogni razza. Ogni partita prevederà l'utilizzo di sole 6 razze, in modo da garantire un'alta rigiocabilità e permettervi una serie altissima di possibili combinazioni. Utilizzate al meglio la vostra mano di carte e posizionate in modo astuto i membri dei vari clan per ottenere più gloria possibile nel corso di 3 ere di gioco. Al termine dell'ultima era, il giocatore con il maggior quantitativo di punti gloria verrà proclamato vincitore. Ethnos è un gioco di tattica e strategia edito da Asmodee Italia.",
  },
  {
    show_in_home: false,
    id: "043",
    image: gummiLandImage,
    name: "Gummy land",
    categories: ["kids"],
    minPlayer: 2,
    maxPlayer: 4,
    playerAge: 6,
    playTime: 20,
    description:
      "Gummiland è un gioco da tavolo ambientato in un universo colorato e vibrante, popolato dai deliziosi Gummiz, caramelle animate che vivono in un mondo ricco di frutta. I giocatori vengono trasportati in questa terra incantata con l'obiettivo di attirare e collezionare i Gummiz, sfruttando la loro passione per la frutta. Il gioco si presenta come un'esperienza visiva e tattile unica, dove ogni tessera e componente è progettato con cura per immergere i partecipanti in un'avventura coinvolgente.",
  },
  {
    show_in_home: false,
    id: "044",
    image: lewisAndClarkImage,
    name: "Lewis and Clark",
    categories: ["management", "euro", "strategy"],
    minPlayer: 1,
    maxPlayer: 5,
    playerAge: 14,
    playTime: 120,
    description:
      "Lewis & Clark ti immerge in un viaggio epico attraverso il continente nordamericano, accompagnando gli intrepidi esploratori Meriwether Lewis e William Clark. In questa seconda edizione migliorata, il gioco offre un'esperienza unica di gestione delle risorse e piazzamento lavoratori, con un elegante motore di deck building. L'obiettivo è raggiungere la costa del Pacifico, vivendo un'avventura originale e stimolante.",
  },
  {
    show_in_home: false,
    id: "045",
    image: portaliDiMoltharImage,
    name: "I portali di Molthar",
    categories: ["cards"],
    minPlayer: 2,
    maxPlayer: 5,
    playerAge: 8,
    playTime: 40,
    description:
      "Il Portale di Molthar è un gioco da tavolo di carte che conduce i giocatori nel pieno di un mondo popolato da creature magiche e folkloristiche. In questo mondo, dovranno collezionare perle arcane e scambiarle con carte potenti o usarle per attivare dei personaggi: solo chi raccoglierà per primo 12 simboli di potere, però, potrà dirsi l'unico salvatore di Molthar (e l'unico vincitore della partita).",
  },
  {
    show_in_home: false,
    id: "046",
    image: myShelfieImage,
    name: "My shelfie",
    categories: ["euro", "management", "strategy"],
    minPlayer: 2,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 30,
    description:
      "My Shelfie ti invita a immergerti in un'esperienza di gioco unica, dove la tua missione è quella di riempire la tua nuova libreria con una varietà di oggetti affascinanti. Colleziona libri, piante, giochi da tavolo, ritratti e premi, senza dimenticare di riservare un angolino speciale per i tuoi amati gatti. Ogni scelta che fai contribuisce a creare una libreria che rispecchia la tua personalità e il tuo stile. Sei pronto a dimostrare di avere la libreria meglio organizzata?",
  },
  {
    show_in_home: false,
    id: "047",
    image: huesAndCuesImage,
    name: "Hues and cues",
    categories: ["party game", "filler"],
    minPlayer: 3,
    maxPlayer: 10,
    playerAge: 8,
    playTime: 30,
    description:
      "Hues & Cues è un party game brillante che mette alla prova la capacità di associare parole e sfumature. Con 480 colori sul tabellone, ogni indizio diventa una sfida: una sola parola per guidare gli altri verso la tonalità esatta, una seconda per affinare il tiro. Quanto riuscirete ad avvicinarvi? Parole, intuizioni e deduzioni: I giocatori devono interpretare gli indizi e scegliere il quadratino di colore che ritengono corrispondente. Chi dà l’indizio ottiene punti in base alla precisione dei guess, mentre chi indovina viene premiato per la propria abilità nel cogliere la sfumatura giusta. “Fenicottero”… “Frullato fragole”… sapreste trovare la nuance perfetta?",
  },
  {
    show_in_home: false,
    id: "048",
    image: dulcisInFundoImage,
    name: "Dulcis in fundo",
    categories: ["kids", "filler"],
    minPlayer: 2,
    maxPlayer: 5,
    playerAge: 5,
    playTime: 10,
    description:
      "Benvenuti alla Grande Abbuffata dei Mostri di Dulcis in Fundo! Tu sei uno di questi mostri coccolosi con un'attrazione incredibile per i dessert. Alla fine di ogni pasto potrai mangiarne solo uno; però quello giusto. Raggiungilo prima degli altri per pappartelo e vincere! Utilizzate il vostro colpo d'occhio per capire quale sentirero vi porterà al giusto dessert da gustare, ma fatelo rapidamente, poiché anche gli altri mostri vorranno ottenere il dolcetto prima degli altri! Lanciate il dado e via ad acchiappare il dessert giusto al termine del percorso indicato dal suo risultato.",
  },
  {
    show_in_home: false,
    id: "049",
    image: IconImage,
    name: "Icon",
    categories: ["kids", "filler"],
    minPlayer: 3,
    maxPlayer: 10,
    playerAge: 10,
    playTime: 15,
    description:
      "La sfida è riuscire a descrivere uno stato d’animo tramite un'immagine. Il giocatore di turno (il giudice) pone una domanda e gli altri utilizzano una delle proprie carte per rappresentare l’emozione vissuta. Colui che avrà dato la migliore interpretazione, a scelta del giudice, guadagnerà un punto. Chi arriva per primo a tre punti vince la partita!",
  },
  {
    show_in_home: false,
    id: "050",
    image: crackListImage,
    name: "Crack list",
    categories: ["party game", "filler", "cards"],
    minPlayer: 2,
    maxPlayer: 8,
    playerAge: 14,
    playTime: 30,
    description:
      "Il gioco di società di chi adora stare insieme: “Nome, cose, città”, in una nuova, spassosa versione! Con i partner, gli amici, i nonni o chi vuoi tu... In 2, 4, 6 o 8 (o molte di più se giochi a squadre), dopo il lavoro, con i colleghi, all’aperitivo o al digestivo, coi coinquilini o con i cugini, metti sul tavolo le carte di CRACK LIST... e il gioco è fatto! Crack List è un gioco di carte in 3 turni. Il primo che si libera di tutte le carte, ha vinto! Nulla di più semplice, o quasi...",
  },
  {
    show_in_home: false,
    id: "051",
    image: aiaGaiaImage,
    name: "Aia gaia",
    categories: ["kids", "filler"],
    minPlayer: 3,
    maxPlayer: 8,
    playerAge: 6,
    playTime: 15,
    description:
      "Aia Gaia è un gioco pensato per tutta la famiglia. La sfida consiste nell'avere il cortile più bello e divertente! In Aia Gaia gli animali della fattoria e non solo scorrazzano a destra e a manca. Richiamate i vostri animali nel cortile con i loro caratteristici versi per attivarne gli effetti e così danneggiare i vostri vicini. Ogni turno potrete aggiungere nuovi animali alla vostra mano, oppure utilizzare uno di essi per giocarlo nella vostra aia. Ma fate attenzione, solamente chiamandoli nel modo giusto gli animali vi daranno retta! Vi ricordate il verso di tutti gli animali?",
  },
  {
    show_in_home: false,
    id: "052",
    image: beccatoImage,
    name: "Beccato",
    categories: ["party game", "filler"],
    minPlayer: 4,
    maxPlayer: 9,
    playerAge: 8,
    playTime: 15,
    description:
      "Beccato è un gioco che ti immerge in un'esperienza unica di strategia e comunicazione non verbale. In questo avvincente party game, il tuo obiettivo è raccogliere più uova dei tuoi avversari. Ma attenzione, la chiave del successo è nei gesti furtivi e negli sguardi eloquenti. Dovrai far capire al tuo compagno di squadra le carte che hai in mano attraverso un segnale segreto, senza farti scoprire dagli avversari. Beccato è un gioco che mette alla prova la tua capacità di comunicare in modo sottile e quasi telepatico.",
  },
  {
    show_in_home: false,
    id: "053",
    image: sushiGoPartyImage,
    name: "Sushi go party",
    categories: ["party game", "cards", "euro"],
    minPlayer: 2,
    maxPlayer: 8,
    playerAge: 8,
    playTime: 20,
    description:
      "Sushi Go Party! ti invita a partecipare a una vivace festa sushi in una versione deluxe che promette di conquistare tutti i palati. Immergiti in un mondo di sapori giapponesi mentre componi il tuo menù personale scegliendo tra una vasta gamma di opzioni deliziose. L'obiettivo è ottenere il punteggio più alto in tre round, selezionando le combinazioni di carte più vantaggiose prima che sfuggano via! Questo gioco non è solo una sfida strategica, ma anche un viaggio culinario che ti farà apprezzare l'arte del sushi.",
  },
  {
    show_in_home: false,
    id: "054",
    image: centuryMOImage,
    name: "Century: mervaiglie orientali",
    categories: ["euro", "management", "strategy"],
    minPlayer: 2,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 40,
    description:
      "Meraviglie Orientali è il secondo capitolo della serie di Century che può essere giocato indipendentemente, oppure combinato con il primo capitolo La Via delle Spezie per aver accesso ad una variante di gioco ancora più ricca. Il commercio delle spezie ha portato le nazioni più ricche ad esplorare nuove terre in cerca di queste preziose merci. Le esplorazioni via mare hanno permesso la scoperta delle prosperose Isole delle Spezie, un luogo in cui le spezie più preziose al mondo possono essere raccolte. Questa scoperta ha dato il via ad una nuova ondata di esplorazioni che ha portato a nuove competizioni commerciali ed in alcuni casi belliche. Nella veste di un mercante e di un bucaniere, dovrete cercare di portare profitto a voi e alla vostra nazione, cercando gloria e merci preziose nel lontano oriente. Prendete il mare in questo nuovo emozionante capitolo che vi permetterà di partire verso l'arcipelago Indonesiano alla ricerca di incredibili ricchezze accompagnati da una serie di nuove accattivanti meccaniche da includere nella saga di Century.",
  },
  {
    show_in_home: false,
    id: "055",
    image: centuryNMImage,
    name: "Century: nuovo mondo",
    categories: ["euro", "management", "strategy"],
    minPlayer: 2,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 40,
    description:
      "Il Nuovo Mondo è il terzo ed ultimo capitolo della serie di Century che può essere giocato indipendentemente, oppure combinato con il primo capitolo La Via delle Spezie e/o il secondo capitolo Meraviglie Orientali per aver accesso ad una variante di gioco ancora più ricca. Il vostro viaggio di almeno 300 anni nella storia del commercio e dell'esplorazione che avete intrapreso grazie a Century sta per concludersi, stavolta entro i confini del Nuovo Mondo! Nella veste di un mercante dedito a costruire il proprio impero commerciale all’inizio del 16° secolo sfruttando le risorse delle Americhe dovrete sfruttare al meglio le risorse di questo nuovo continente. Lo scontro con la natura selvaggia è tuttavia inevitabile, avrete bisogno di cacciare e coltivare, raccogliere risorse, esplorare i territori e commerciare con i nativi per poter sopravvivere e ottenere profitto dalla vostra impresa commerciale.",
  },
  {
    show_in_home: false,
    id: "056",
    image: centuryVdSImage,
    name: "Century: la via delle spezie",
    categories: ["euro", "management", "strategy"],
    minPlayer: 2,
    maxPlayer: 4,
    playerAge: 8,
    playTime: 40,
    description:
      "La Via delle Spezie è il primo di una trilogia di giochi raggruppati sotto il titolo Century, ciascuno indipendente dall'altro. In questo primo capitolo vestirete i panni di un capo carovaniere che si muove lungo la via della seta per commerciare spezie ed ottenere gloria e ricchezza dal loro commercio. Durante il proprio turno ciascun giocatore ha a disposizione 4 diverse azioni: stabilire una nuova rotta commerciale pescando una nuova carta dal mercato centrale; commerciare o raccogliere una determinata risorsa, giocando una carta dalla mano; completare una richiesta ed ottenerne i punti vittoria; riposarsi e riprendere in mano le carte precedentemente giocate. Dopo che uno dei giocatori è riuscito ad ottenere il suo quinto punto vittoria, viene giocato un ultimo round e dopo di esso il giocatore con il maggior numero di punti vittoria viene proclamato il carovaniere più abile!",
  },
];

export default games;
