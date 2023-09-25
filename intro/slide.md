---
theme: default
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://img.freepik.com/free-photo/white-paper-texture_1194-2324.jpg?w=1060&t=st=1695479454~exp=1695480054~hmac=1b3f0b0e02e2ec8fee572b8b46a3d8f13fa942549008a0c092d41aef3470e2d6')
marp: true
footer:  https://ecommerce-piemontesi.netlify.app
margin-left: 20
---

# Presentazione Progetto di E-Commerce

**Corso di Web Design 2**
=========================
A.A. 2022/2023

**Monica Piemontesi**
Matricola 829
Indirizzo di Immagine d'impresa
Docente **Matteo Baccan**




<!-- _paginate: false -->
<!-- _footer: "" -->
<!-- style: "
img[alt~='center'] {
  display: block;
  margin: 0 auto;
}
" -->

---

## Indice dei contenuti
1. Introduzione al sito: le pagine
2. Le piattaforme e gli strumenti utilizzati
3. La struttura base della pagina
4. Immagini
5. Homepage
6. La storia
7. Il Team
8. Il prodotto
9. Il carrello
10. I contatti
11. Le prestazioni e responsive

<!-- _paginate: false -->
<!-- _footer: "" -->
<!-- style: "
img[alt~='center'] {
  display: block;
  margin: 0 auto;
}
" -->
---

## Introduzione al sito: la pagine
L'obiettivo dell'esame di Web Design 2 consiste nell'invenzione e nella creazione di un'ecommerce.
Io ho scelto di creare un sito di strumenti musicali dal nome di 45 Giri Lab.

---
## Le pagine del sito
Il sito si suddivide in 6 sezioni fondamentali:
-Homepage
-La storia
-Il Team
-Il prodotto
-Il carrello
-I contatti

---
## Le piattaforme e gli strumenti utilizzati
Per la creazione di questo sito ho utilizzato tre piattaforme: **Codespace di GitHub** e **Netlify**.
Per la scrittura dei codici invece sono stata supportata da Bootstrap e l'intelligenza artificiale ChatGpt.

---
## Codespace di GitHub e Netlify

**Codespace** è un'estensione di GitHub che permette di visualizzare direttamente il sito senza uscire da GitHub.  
**Netlify** è invece una società di cloud con cui abbiamo già lavorato nel primo corso di Web Design. Il nostro repository di GitHub è collegato a Netlify e da esso possiamo sviluppare il sito.
![bg right:30% h:130px] (Slide Immagini/github.png)

---
## Bootstrap
**Bootstrap** è invece una libreria open source fornita di strumenti per la creazione di siti e applicazioni.
Ci è utile per regolare in maniera ordinata gli elementi che compongono la nostra pagina.

---
## ChatGPT

**ChatGPT** è un chatbot basato su intelligenza artificiale e machine learning. È in grado di fornirci tantissimi informazioni e l'abbiamo interpella* per darci un input per la creazione del sito.

---
## La struttura base della pagina
La scrittura di ogni documento html ha due elementi costanti ossia la *barra di navigazione*, detta anche **header** e il **footer**.
La *prima* si presenta in maniera semplice, con il naming e le sezioni delle pagine visitabili (si raccolgono in un burger menù se il formato di visualizzazione è ridotto).
Il *footer* invece presenta la denominazione del copyright, i vari link alla privacy, i termini e le condizioni e i dati geografici dell'azienda.

---
Inserire Header

---
Inserire footer e spiegarlo

---

## Il font
Il carattere tipografico utilizzato per la formattazione del sito è quello di **Hobeaux** poichè un carattere scherzoso ma interessante, e si adatta all'identità del brand di 45 Giri Lab.
Hobeaux è un font che necessita però di una licenza, infatti nei vari documenti html è presente il link di riferimento ad Adobe.
 <!-- Collegamento ad licenza Adobe Fonts -->
  <link rel="stylesheet" href="https://use.typekit.net/swk3feg.css">

---
## Homepage
L'homepage è costituita da 4 blocchi principali.
Si apre con un visual e una parte testuale che ringrazia a introduce il visitatore nel sito. Anche nel secondo abbiamo una composizione similare, che guida lo user verso uno slider. 
Lo slider presenta una serie di prodotti "Limited Edition" e contiene 3 immagini che scorrono automaticamente in un intervallo di 4 secondi (funzione autoplay javascript).
Il codice nativo dello slider è stato preso dal sito di Swiperjs (https://swiperjs.com/).

---
## Homepage
Fatta eccezione per lo slider, ogni blocco testuale è scandito da una classe di headline e da paragrafi.
L'ultima sezione testuale aggiunge anche un pulsante di rimando alla pagina dello "store" attraverso un **button di Call To Action** "Clicca qui per scoprire i nostri prodotti".

---
## La storia
La pagina dedicata alla storia è costituita principalmente da un'animazione del testo di apertura (*class=roller*) regolato da uno *span*, elementi testuali alternati a visual.
Per creare l'effetto di animazione mi sono ispirata ad un prodotto di Codepen.

---
## La storia
Le tre sezioni (container) riprendono e approfondiscono le parole chiave che troviamo nel *text effect* di apertura:
1. Persone
2. Innovazione
3. Amore
Troviamo così una *class* che si applica ai titolo (<h1 class="TitoliAboutUs">) e da una classe che regola i paragrafi.

---
## Il Team
La pagina del team si apre con un effetto di scorrimento verso l'alto.
Abbiamo un background immagine con un testo sovrapposto.
Successivamente troviamo la sezione con le immagini del team. Ponendo il cursore sull'immagine, il visual di base verrà oscurato dalla didascalia esplicativa del team.

---
## Il prodotto
La pagina del prodotto è una delle due più complesse.
Si compone di un container 

---
## Il carrello
---
## I contatti
I contatti si presentano come una pagina semplice. Abbiamo un brackground con un testo che spiega ai navigatori i dati per raggiungerci telefonicamente e geograficamente. 
Di seguito è inserita un **<iframe>** che incorporare la mappa geografica della sede.
Il footer è ridotto rispetto alle altre pagine per non essere ridondanti nelle informazioni. Contiene infatti solo i **link utili**, il box per l'iscrizione alla newsletter e la barra conclusiva con il mark del copyright e dei diritti.

---
## Le prestazioni e responsive
