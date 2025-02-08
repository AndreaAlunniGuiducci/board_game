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

export const games: Game[] = [
  {
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
    id: "019",
    image: azulQueenGardenImage,
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
];

export default games;
