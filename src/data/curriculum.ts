import { Module } from '../types';

export const curriculum: Module[] = [
  {
    id: 'mod-1',
    title: 'MODULO 1 — CRM Foundations',
    description: 'Capire l’ecosistema del CRM, i ruoli, il ciclo di vita del cliente e la tipologia di dati.',
    objective: 'Apprendere i concetti cardine del CRM Marketing per posizionare le fondamenta teoriche.',
    lessons: [
      {
        id: 'les-1-1',
        title: 'Cos’è il CRM Marketing',
        objective: 'Comprendere lo scopo reale del Customer Relationship Management lato marketing.',
        theory: 'Il CRM Marketing non è solo un software (come Salesforce o HubSpot), ma una vera e propria strategia aziendale basata sui dati dei clienti. L’obiettivo principale è raccogliere, organizzare e utilizzare le informazioni dei contatti per costruire relazioni durature, d’impatto, e generare profitto. Si passa da una comunicazione di massa ("one-to-many") a una comunicazione altamente mirata e personalizzata ("one-to-one") basata sul comportamento dell’utente.',
        example: 'Invece di inviare uno sconto generico su scarpe da corsa a tutto il database (creando fastidio), il CRM Specialist invia la promozione SOLO a chi ha visualizzato scarpe da corsa sul sito negli ultimi 7 giorni ed è iscritto alla newsletter.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-1-1-1',
            type: 'multiple-choice',
            question: 'Qual è l’obiettivo primario del CRM Marketing in un’azienda moderna?',
            options: [
              { id: 'a', text: 'Inviare il maggior numero possibile di email a chiunque' },
              { id: 'b', text: 'Costruire relazioni rilevanti e durature basate sui dati, personalizzando la comunicazione' },
              { id: 'c', text: 'Sostituire completamente i canali di traffico a pagamento come Google Ads' },
              { id: 'd', text: 'Scrivere solo righe di codice SQL per pulire tabelle' }
            ],
            correctAnswerId: 'b',
            explanation: 'Il CRM Marketing mira alla rilevanza. Personalizzare i messaggi in base alle esigenze e al comportamento di ciascun cliente aumenta la retention e le vendite, a differenza del marketing di massa.'
          },
          {
            id: 'ex-1-1-2',
            type: 'true-false',
            question: 'Il CRM Marketing coincide solo con l’acquisto di una licenza software costosa.',
            options: [
              { id: 'true', text: 'Vero - Il software fa tutto da solo' },
              { id: 'false', text: 'Falso - È una combinazione di strategia, processi, cultura aziendale e tecnologia' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. Comprare un software avanzato non basta se non si definiscono prima le strategie di segmentazione, i flussi, la qualità del dato e le prassi organizzative.'
          },
          {
            id: 'ex-1-1-3',
            type: 'matching',
            question: 'Abbina i concetti del CRM alle loro corrette definizioni pratiche.',
            pairs: [
              { id: 'p1', concept: 'One-to-One Marketing', definition: 'Inviare messaggi personalizzati in base allo specifico comportamento e preferenze.' },
              { id: 'p2', concept: 'Single Customer View', definition: 'L’unificazione di tutti i touchpoint e dati anagrafici di un utente in un’unica scheda profilo.' },
              { id: 'p3', concept: 'CRM Campaign', definition: 'Un’iniziativa marketing strutturata mirata a un segmento specifico del database.' }
            ],
            explanation: 'La Single Customer View unisce tutti i silos di dati. Il marketing One-to-one permette comunicazioni iper-profilate, realizzate tramite campagne mirate.'
          }
        ]
      },
      {
        id: 'les-1-2',
        title: 'Customer Lifecycle Stages',
        objective: 'Memorizzare e distinguere le fasi strategiche del ciclo di vita del cliente.',
        theory: 'Il Customer Lifecycle (ciclo di vita del cliente) indica gli stadi attraversati da una persona nel rapporto con il brand. Possiamo suddividerlo in:\n\n1. Subscriber/Lead: Ha mostrato interesse (es. iscritto newsletter) ma non ha acquistato.\n2. Prospect: Lead qualificato con alta intenzione d’acquisto (es. compilato form preventivo).\n3. Active Customer (Nuovo o Ricorrente): Ha fatto almeno un acquisto recente.\n4. Inactive Customer: Cliente che non acquista da un periodo prestabilito (es. 90-180 giorni).\n5. Loyal Customer: Cliente ricorrente ad alto valore (promotore del brand).',
        example: 'Un utente inserisce i propri dati per scaricare un catalogo PDF ma non compra nulla. In questo scenario specifico l’utente si trova nello stadio di "Lead". Se invece ha completato 3 ordini negli ultimi 4 mesi, è un "Loyal Customer".',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-1-2-1',
            type: 'multiple-choice',
            question: 'Un utente ha completato un acquisto sul tuo e-commerce ieri sera, ma prima era solo iscritto alla newsletter. Qual è la sua nuova fase nel ciclo di vita?',
            options: [
              { id: 'a', text: 'Resta un Lead perché serve attendere la spedizione' },
              { id: 'b', text: 'Diventa un Active Customer (Nuovo Cliente)' },
              { id: 'c', text: 'Viene inserito subito tra i Loyal Customers' },
              { id: 'd', text: 'Diventa un Inactive Customer' }
            ],
            correctAnswerId: 'b',
            explanation: 'Corretto. Avendo rinfrescato lo status completando il suo primo acquisto recente, l’utente compie il passaggio fondamentale da Lead a Active Customer.'
          },
          {
            id: 'ex-1-2-2',
            type: 'multiple-choice',
            question: 'Come CRM Specialist, quale obiettivo prioritario imposteresti per la fase "Inactive Customer"?',
            options: [
              { id: 'a', text: 'Inviare email promozionali giornaliere fino all’acquisto' },
              { id: 'b', text: 'Campagna di riattivazione (Winback) mirata, magari con un incentivo o un sondaggio' },
              { id: 'c', text: 'Eliminarli immediatamente dal database per risparmiare costi' },
              { id: 'd', text: 'Offrire un badge promozionale sul sito senza inviare comunicazioni' }
            ],
            correctAnswerId: 'b',
            explanation: 'Per i clienti inattivi si applica la strategia di "Winback / Reactivation". Visto che conoscono già il brand, risvegliare il loro interesse costa meno che acquisire nuovi clienti.'
          },
          {
            id: 'ex-1-2-3',
            type: 'ordering',
            question: 'Ordina gli stadi del ciclo di vita del cliente dal primo contatto all’eccellenza della fidelizzazione.',
            orderedSteps: [
              'Lead / Subscriber',
              'Active Customer (New)',
              'Active Customer (Repeat)',
              'Loyal Customer'
            ],
            initialStepsOrder: [
              'Loyal Customer',
              'Active Customer (New)',
              'Lead / Subscriber',
              'Active Customer (Repeat)'
            ],
            explanation: 'La progressione ideale parte da Lead interessato, passa per il primo acquisto (Active New), la ripetizione dell’acquisto (Active Repeat), fino a diventare Ambasciatore/Loyal.'
          }
        ]
      },
      {
        id: 'les-1-3',
        title: 'Tipi di Dati CRM',
        objective: 'Classificare i dati in anagrafici, comportamentali e transazionali.',
        theory: 'I dati nel CRM si dividono in tre macro-categorie:\n- Dati Anagrafici (Profilo): Chi è l’utente (nome, email, telefono, città, genere, data di nascita).\n- Dati Transazionali: Cosa e come acquista (storico ordini, importi spesi, data ultimo ordine, prodotti preferiti, canali di pagamento).\n- Dati Comportamentali: Come interagisce (clic sulle email, pagine web visitate, prodotti aggiunti al carrello, apertura app).',
        example: 'Sapere che Alessandro Rossi vive a Roma è un dato anagrafico. Sapere che ha speso 150€ ieri è un dato transazionale. Vedere che ha cliccato sul link di una scarpa trekking è un dato comportamentale.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-1-3-1',
            type: 'multiple-choice',
            question: 'In quale categoria rientra l’evento "L’utente ha cliccato sulla newsletter di Natale dal suo smartphone alle 08:30"?',
            options: [
              { id: 'a', text: 'Dato Anagrafico' },
              { id: 'b', text: 'Dato Transazionale' },
              { id: 'c', text: 'Dato Comportamentale' },
              { id: 'd', text: 'Dato Fiscale' }
            ],
            correctAnswerId: 'c',
            explanation: 'Corretto! È un dato comportamentale perché traccia un’interazione diretta dell’utente con un canale di comunicazione del brand.'
          },
          {
            id: 'ex-1-3-2',
            type: 'matching',
            question: 'Associa ciascun dato alla sua categoria corretta.',
            pairs: [
              { id: 'cat1', concept: 'Marta Barbieri, IT, 28 anni', definition: 'Dato Anagrafico' },
              { id: 'cat2', concept: 'Ordine #9876, Valore: 250€, Categoria: Scarpe', definition: 'Dato Transazionale' },
              { id: 'cat3', concept: 'Visita alla pagina "Prezzi" 3 volte in un giorno', definition: 'Dato Comportamentale' }
            ],
            explanation: 'La demografica definisce chi sono, le transazioni definiscono gli scambi finanziari, e i comportamenti indicano i segnali di interesse digitale.'
          },
          {
            id: 'ex-1-3-3',
            type: 'true-false',
            question: 'I dati transazionali includono necessariamente informazioni sulle aperture delle email.',
            options: [
              { id: 'true', text: 'Vero - Fa sempre parte delle transazioni' },
              { id: 'false', text: 'Falso - Le aperture email sono dati comportamentali, non transazionali' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. Le aperture e i clic fanno parte del flusso di tracciamento dell’engagement (comportamentale). I transazionali riguardano contratti, fatture o ordini.'
          }
        ]
      },
      {
        id: 'les-1-4',
        title: 'Touchpoint & Customer Journey',
        objective: 'Comprendere come i touchpoint disegnano il viaggio del cliente.',
        theory: 'Un Touchpoint è qualsiasi punto di contatto tra il brand e l’utente (sito web, social, email, SMS, negozio fisico, assistenza clienti). La somma ordinata di questi contatti costituisce la Customer Journey.\n\nNel CRM Marketing l’obiettivo è mappare questi touchpoint per intervenire al momento giusto. Se un utente si ferma a un touchpoint e non prosegue, si verifica una "leakage" (perdita nel funnel) su cui l’automazione deve agire.',
        example: 'Alessandro visita il sito (touchpoint 1), si iscrive alla newsletter (touchpoint 2), riceve un’email di benvenuto (touchpoint 3) e infine acquista tramite l’app (touchpoint 4).',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-1-4-1',
            type: 'multiple-choice',
            question: 'Cosa si intende per "Customer Journey Map" nel contesto del CRM?',
            options: [
              { id: 'a', text: 'Un disegno geografico dei negozi fisici attivi' },
              { id: 'b', text: 'La rappresentazione visiva dei passi e dei sentimenti provati dal cliente durante l’interazione con il brand' },
              { id: 'c', text: 'L’elenco dei server di invio email autorizzati' },
              { id: 'd', text: 'Una query SQL per selezionare i clienti che viaggiano spesso' }
            ],
            correctAnswerId: 'b',
            explanation: 'La Customer Journey mappa l’esperienza end-to-end, aiutando il team CRM a individuare i momenti critici dove inviare messaggi di incentivo o supporto.'
          },
          {
            id: 'ex-1-4-2',
            type: 'true-false',
            question: 'L’assistenza post-vendita (Customer Care) non rappresenta un touchpoint utile per il CRM Marketing.',
            options: [
              { id: 'true', text: 'Vero - Il marketing si occupa solo di acquisire' },
              { id: 'false', text: 'Falso - È un touchpoint fondamentale per la retention e la soddisfazione' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. Il CRM punta sul ciclo di vita intero. Sapere se un utente ha un ticket aperto negativo previene l’invio di email commerciali inopportune, ottimizzando l’esperienza.'
          },
          {
            id: 'ex-1-4-3',
            type: 'multiple-choice',
            question: 'Se un cliente riceve un’email che consiglia ricambi per un prodotto acquistato solo 2 ore prima, di quale touchpoint stiamo parlando?',
            options: [
              { id: 'a', text: 'Touchpoint di acquisizione fredda' },
              { id: 'b', text: 'Touchpoint post-acquisto/up-sell' },
              { id: 'c', text: 'Touchpoint di riattivazione silente' },
              { id: 'd', text: 'Lead Generation classica' }
            ],
            correctAnswerId: 'b',
            explanation: 'Corretto. È un touchpoint post-acquisto impostato per fare cross-selling o up-selling di accessori correlati ad un acquisto completato con successo.'
          }
        ]
      },
      {
        id: 'les-1-5',
        title: 'Consenso & Privacy Intro',
        objective: 'Comprendere l’importanza del consenso di marketing (Opt-in e Opt-out).',
        theory: 'Fattore essenziale: non puoi fare CRM Marketing senza il consenso legale dell’utente (es. conforme a GDPR). \n- Opt-In: L’utente sceglie attivamente e consapevolmente di registrarsi e ricevere email commerciali (es. spuntando una casella non preselezionata).\n- Soft Opt-In: Consenso limitato legato a clienti esistenti che hanno acquistato prodotti simili (regolato da leggi nazionali).\n- Opt-Out (Unsubscribe): Il diritto inalienabile del cliente di disiscriversi in qualunque momento e con un solo clic.',
        example: 'Inviare un’email promozionale a un utente che ha negato il consenso marketing è sanzionabile e danneggia irreparabilmente la reputazione del mittente (deliverability).',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-1-5-1',
            type: 'multiple-choice',
            question: 'Cosa prevede la normativa europea GDPR in merito alle spunte di iscrizione newsletter?',
            options: [
              { id: 'a', text: 'Devono essere pre-selezionate per aiutare l’utente' },
              { id: 'b', text: 'Devono essere facoltative, chiare e richiedere un comportamento attivo (no caselle pre-spuntate)' },
              { id: 'c', text: 'Non servono se l’utente ha già inserito il proprio indirizzo email' },
              { id: 'd', text: 'Si applicano solo ad utenti di età superiore ai 65 anni' }
            ],
            correctAnswerId: 'b',
            explanation: 'Esatto. Il GDPR vieta il consenso pre-selezionato o tacito. L’opt-in deve essere esplicito, informato e inequivocabile.'
          },
          {
            id: 'ex-1-5-2',
            type: 'true-false',
            question: 'Se un cliente si disiscrive (Opt-out), puoi comunque continuare a inviargli email promozionali di basso valore economico.',
            options: [
              { id: 'true', text: 'Vero - Se il valore del prodotto è minimo' },
              { id: 'false', text: 'Falso - L’opt-out promozionale blocca qualunque tipo di comunicazione di marketing' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. Una volta espresso l’opt-out, l’invio di qualsiasi email promozionale è illegale. Puoi mandare solo comunicazioni transazionali necessarie (es. ricevute d’acquisto).'
          },
          {
            id: 'ex-1-5-3',
            type: 'multiple-choice',
            question: 'Un utente effettua un acquisto e riceve la fattura per email. Questa email richiede il consenso marketing attivo?',
            options: [
              { id: 'a', text: 'Sì, tutto ciò che passa dal CRM richiede il consenso' },
              { id: 'b', text: 'No, è un’email transazionale necessaria per l’esecuzione del contratto d’acquisto' },
              { id: 'c', text: 'Sì, a meno che non contenga codici sconto' },
              { id: 'd', text: 'No, perché il GDPR si applica solo alle newsletter cartacee' }
            ],
            correctAnswerId: 'b',
            explanation: 'Le email transazionali (conferme d’ordine, spedizioni, reset password) non hanno scopi commerciali diretti e non richiedono l’opt-in di marketing, in quanto necessarie al servizio.'
          }
        ]
      }
    ]
  },
  {
    id: 'mod-2',
    title: 'MODULO 2 — Segmentation & Audience',
    description: 'Imparare a raggruppare i clienti in segmenti utili per massimizzare la precisione e il ROI.',
    objective: 'Sviluppare abilità logiche per progettare audience rilevanti ed evitare sprechi di budget.',
    lessons: [
      {
        id: 'les-2-1',
        title: 'Basi della Segmentazione',
        objective: 'Apprendere la differenza tra liste statiche e liste dinamiche (segmenti).',
        theory: 'Segmentare significa dividere il database complessivo in sotto-gruppi omogenei in base a criteri predefiniti (demografici, comportamentali o transazionali).\n- Liste Statiche: Elenchi fissi di utenti che non variano a meno di caricamento o rimozione manuale (es. "Partecipanti evento 12 Maggio").\n- Segmenti Dinamici (Filtri attivi): Gruppi che si aggiornano in tempo reale in base a regole dinamiche. Se un cliente risponde ai criteri, entra nel segmento; se smette di rispondergli, esce automaticamente.',
        example: 'Un segmento impostato con "Spesa totale > 500€" è dinamico: non appena Alessandro spende altri 50€ superando la soglia, entra a fare parte del gruppo "Super Clienti" senza intervento manuale.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-2-1-1',
            type: 'multiple-choice',
            question: 'Qual è il vantaggio cruciale di un segmento dinamico rispetto a una lista statica?',
            options: [
              { id: 'a', text: 'Richiede più risorse server e costa sempre il doppio in licenze' },
              { id: 'b', text: 'Si aggiorna da solo in base al comportamento e ai dati più recenti dell’utente' },
              { id: 'c', text: 'Sostituisce il consenso marketing degli utenti esclusi' },
              { id: 'd', text: 'Nessuno, sono concetti identici' }
            ],
            correctAnswerId: 'b',
            explanation: 'Il segmento dinamico assicura che la tua comunicazione colpisca sempre l’utente giusto al momento giusto, senza rischio di inviare messaggi a chi non ha più i requisiti richiesti.'
          },
          {
            id: 'ex-2-1-2',
            type: 'segment-builder',
            question: 'Configura il segmento "Nuovi iscritti da accogliere". Trova la combinazione logica corretta.',
            targetSegmentCriteria: [
              { field: 'signup_date', operator: '>=', value: '30 giorni fa' },
              { field: 'lifecycle_stage', operator: '==', value: 'Lead' },
              { field: 'marketing_consent', operator: '==', value: 'true' }
            ],
            explanation: 'Perfetto! Un nuovo iscritto da accogliere deve essersi registrato di recente, essere nello status iniziale (Lead), e soprattutto aver fornito il consenso marketing primario.'
          },
          {
            id: 'ex-2-1-3',
            type: 'true-false',
            question: 'La segmentazione geografica rientra nella categoria dei dati comportamentali.',
            options: [
              { id: 'true', text: 'Vero' },
              { id: 'false', text: 'Falso - Fa parte dei dati demografici/anagrafici' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. Il paese di provenienza o la città di residenza sono dati anagrafici duraturi, non comportamenti temporanei o transazioni commerciali.'
          }
        ]
      },
      {
        id: 'les-2-2',
        title: 'Includere vs Escludere',
        objective: 'Sviluppare la capacità di ripulire un’audience usando le regole di esclusione.',
        theory: 'Costruire un’audience efficace non significa solo definire CHI includere, ma anche definire in modo rigoroso CHI ESCLUDERE per evitare pessime figure o sprechi.\n\nRegola d’oro: se fai una promozione d’acquisto con forte sconto per attrarre nuovi clienti, devi ESCLUDERE chi ha già acquistato di recente quel prodotto a prezzo pieno, altrimenti provocherai rabbia o lamentele al servizio clienti.',
        example: 'Includi: Tutti i Lead interessati a corsi marketing. Escludi: Chi ha acquistato un corso negli ultimi 30 giorni o chi ha sottomesso un dissenso marketing.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-2-2-1',
            type: 'multiple-choice',
            question: 'Stai lanciando un’offerta speciale per incentivare il "primo acquisto". Quale di queste combinazioni di audience è sintomo di ottima professionalità?',
            options: [
              { id: 'a', text: 'Includi tutti i contatti nel database senza controlli' },
              { id: 'b', text: 'Includi i Lead con consenso marketing; escludi tutti i clienti che hanno già concluso almeno un ordine in passato' },
              { id: 'c', text: 'Includi chi ha acquistato ieri; escludi chi non ha mai aperto una tua email' },
              { id: 'd', text: 'Includi solo gli utenti disiscritti' }
            ],
            correctAnswerId: 'b',
            explanation: 'Ottimo! Se l’obiettivo è convertire lead freddi al "primo acquisto", includi chi non ha ancora acquistato ed escludi accuratamente chi è già cliente strutturato.'
          },
          {
            id: 'ex-2-2-2',
            type: 'true-false',
            question: 'Escludere chi ha un "ticket di assistenza urgente aperto" da una campagna promozionale massiva è sempre consigliato.',
            options: [
              { id: 'true', text: 'Vero - Evita di mandare sconti a chi è arrabbiato' },
              { id: 'false', text: 'Falso - Le vendite hanno priorità assoluta rispetto ai problemi tecnici' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. Mandare email commerciali allegre a un cliente che in quel momento ha un reclamo aperto o è irritato aumenta solo il tasso di disiscrizione e il danno d’immagine.'
          },
          {
            id: 'ex-2-2-3',
            type: 'multiple-choice',
            question: 'Se invii una comunicazione e dimentichi di escludere gli indirizzi con status "unsubscribed = true", cosa succede?',
            options: [
              { id: 'a', text: 'Niente, riceveranno lo stesso l’email con piacere' },
              { id: 'b', text: 'Il tuo sender score crollerà e starai violando le normative sulla privacy (GDPR)' },
              { id: 'c', text: 'I filtri antispam del destinatario aumenteranno la tua visibilità' },
              { id: 'd', text: 'Verrà scalato meno budget' }
            ],
            correctAnswerId: 'b',
            explanation: 'Ignorare la volontà di opt-out viola sanzioni severe sul trattamento e distrugge la credibilità del server d’invio su provider come Gmail o Outlook.'
          }
        ]
      },
      {
        id: 'les-2-3',
        title: 'Campagne Winback e Riattivazione',
        objective: 'Analizzare le regole logiche per scovare clienti dormienti riattivabili.',
        theory: 'La campagna "Winback" (riattivazione) punta a ravvivare clienti che in passato hanno espresso fiducia (acquistando) ma che non effettuano transazioni da molto tempo. Questa audience deve rispettare vincoli stringenti:\n1. Ha effettuato almeno un ordine in passato (transazionale).\n2. L’ultimo ordine risale a molto tempo fa (es. > 90 o 180 giorni).\n3. Ha il consenso marketing attivo (anagrafico/legale).\n4. Non si è disiscritto (unsubscribed = false).',
        example: 'Se imposti una regola "Last Purchase Date < 2026-02-01 AND marketing_consent == true", intercetti chi non acquista da fine inverno ma è ancora contattabile.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-2-3-1',
            type: 'multiple-choice',
            question: 'Devi lanciare una campagna di riattivazione. Quale segmento useresti tra i seguenti per ottimizzare le risorse?',
            options: [
              { id: 'a', text: 'Clienti con spesa memorabile (High Value) inattivi da 90 giorni, con consenso marketing valido e non unsubscribed' },
              { id: 'b', text: 'Tutti i lead registrati ieri che non hanno ancora completato un ordine' },
              { id: 'c', text: 'Utenti inattivi da 3 anni senza alcuna spesa passata e con consenso revocato' },
              { id: 'd', text: 'Contatti che aprono ogni giorno le email aziendali' }
            ],
            correctAnswerId: 'a',
            explanation: 'Perfetto! Riattivare clienti che hanno un valore storico elevato ("High Value") ma dormono da almeno 90 giorni massimizza il ritorno commerciale della campagna nel pieno rispetto dei consensi.'
          },
          {
            id: 'ex-2-3-2',
            type: 'true-false',
            question: 'In una campagna di winback, i tassi di conversione storici sono solitamente superiori rispetto a quelli riscontrati su lead freddi estranei al brand.',
            options: [
              { id: 'true', text: 'Vero - Conoscono già la qualità del brand' },
              { id: 'false', text: 'Falso - Un cliente inattivo non comprerà mai più nulla' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. Poiché l’utente ha già superato le frizioni del primo acquisto e conosce i prodotti, ri-attrarlo con una comunicazione rilevante è molto più efficace.'
          },
          {
            id: 'ex-2-3-3',
            type: 'segment-builder',
            question: 'Seleziona le condizioni per raccogliere i "Clienti Dormienti ad Alto Valore".',
            targetSegmentCriteria: [
              { field: 'total_spend', operator: '>', value: '1000' },
              { field: 'last_purchase_date', operator: '<', value: '3 mesi fa' },
              { field: 'marketing_consent', operator: '==', value: 'true' }
            ],
            explanation: 'Ottimo! Spesa superiore a 1000€ identifica l’alto valore, mentre l’acquisto lontano nel tempo ne stabilisce lo stato dormiente.'
          }
        ]
      },
      {
        id: 'les-2-4',
        title: 'Segmentazione per Valore: RFM',
        objective: 'Comprendere come funziona la segmentazione RFM e le sue metriche.',
        theory: 'La segmentazione RFM è uno dei modelli quantitativi storici più potenti del CRM Marketing. Si basa su tre pilastri:\n- Recency (R): Quanto tempo fa è avvenuto l’ultimo acquisto.\n- Frequency (F): Quanti acquisti ha effettuato l’utente in un intervallo di tempo.\n- Monetary (M): Qual è il valore complessivo speso dall’utente nel suo ciclo di vita (LTV/Total Spend).',
        example: 'Un cliente con RFM score "5-5-5" ha acquistato ieri, acquista spessissimo e spende grandi cifre (Campione). Un cliente "1-1-5" ha speso tantissimo in passato ma non acquista da anni.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-2-4-1',
            type: 'multiple-choice',
            question: 'Cosa indica la componente "Recency" all’interno della segmentazione RFM?',
            options: [
              { id: 'a', text: 'I ricavi medi generati dall’ultima campagna newsletter' },
              { id: 'b', text: 'Il numero di giorni trascorsi dall’ultimo acquisto effettuato dal cliente' },
              { id: 'c', text: 'La frequenza con cui un utente cancella l’iscrizione' },
              { id: 'd', text: 'La freschezza anagrafica dell’indirizzo email' }
            ],
            correctAnswerId: 'b',
            explanation: 'Esatto. "Recency" analizza la freschezza temporale dell’ultimo acquisto. Più l’acquisto è recente, più il cliente è ricettivo a nuove offerte.'
          },
          {
            id: 'ex-2-4-2',
            type: 'true-false',
            question: 'Un cliente che fa moltissimi micro-ordini economici ha un valore di Frequency alto ma un Monetary potenzialmente basso.',
            options: [
              { id: 'true', text: 'Vero - Compra spesso ma spende poco ad ordine' },
              { id: 'false', text: 'Falso - Le due metriche devono sempre coincidere' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. La frequenza (F) traccia il conteggio delle transazioni indipendentemente dall’importo. Il valore monetario complessivo (M) traccia i ricavi assoluti accumulati.'
          },
          {
            id: 'ex-2-4-3',
            type: 'multiple-choice',
            question: 'Come tratteresti un cliente con RFM "5-1-1" (Recency alta, frequenza bassa, spesa bassa)?',
            options: [
              { id: 'a', text: 'Come un sostenitore storico da premiare' },
              { id: 'b', text: 'Come un nuovo cliente recente da accogliere con una journey di onboarding' },
              { id: 'c', text: 'Rimuovendolo subito perché spende pochissimo' },
              { id: 'd', text: 'Inviando un’email di winback dormiente' }
            ],
            correctAnswerId: 'b',
            explanation: 'Un utente 5-1-1 è appena arrivato (recency alta), ma non ha ancora consolidato abitudini (frequenza 1). Va nutrito e assistito per stimolare una seconda transazione.'
          }
        ]
      },
      {
        id: 'les-2-5',
        title: 'Prevenire Cancellazione ed Opt-Out',
        objective: 'Gestire il churn prevenendo l’overcommunication sul database.',
        theory: 'L’iscrizione disdetta (Unsubscribe / Opt-out) è un indicatore di affaticamento dell’audience. Per preservare l’igiene del database, il team CRM deve definire una "Supression List" (lista di contatti a cui vietare l’invio totale) ed impostare una soglia massima di messaggi settimanali (frequency capping), evitando che l’utente senta la comunicazione come spam.',
        example: 'Invece di lasciare che le persone si disiscrivano del tutto, un buon portale CRM offre un centro preferenze ("Preference Center") dove l’utente può scegliere di ricevere solo email mensili anziché settimanali.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-2-5-1',
            type: 'multiple-choice',
            question: 'Cos’è un "Preference Center" e perché è utile per contenere gli opt-out?',
            options: [
              { id: 'a', text: 'Un pannello interno per censurare le recensioni negative degli utenti' },
              { id: 'b', text: 'Una pagina dove gli utenti possono calibrare la frequenza e gli argomenti di loro interesse anziché disiscriversi da tutto' },
              { id: 'c', text: 'Un centro assistenza telefonico per gestire le modifiche dei contratti' },
              { id: 'd', text: 'Uno strumento utile solo per le campagne di cold-outreach' }
            ],
            correctAnswerId: 'b',
            explanation: 'Esatto. Permettere all’utente di modulare l’afflusso di messaggi riduce drasticamente i tassi di unsubscribe totali, mantenendo il contatto attivo nel database.'
          },
          {
            id: 'ex-2-5-2',
            type: 'true-false',
            question: 'Se un utente effettua il reclamo di spam presso il proprio provider (es. Gmail), il CRM lo deve inserire immediatamente nella suppression list e non contattarlo mai più.',
            options: [
              { id: 'true', text: 'Vero - Continuare ad inviare messaggi porta a essere banditi dai provider' },
              { id: 'false', text: 'Falso - Finché non clicca sul link di unsubscribe manuale l’indirizzo è valido' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. I "spam complaints" sono segnali critici. Proseguire con gli invii distrugge la deliverability per l’intera infrastruttura aziendale.'
          },
          {
            id: 'ex-2-5-3',
            type: 'multiple-choice',
            question: 'Qual è una buona pratica per evitare di stancare l’audience con messaggi ripetitivi?',
            options: [
              { id: 'a', text: 'Inviare messaggi solo ad ore notturne' },
              { id: 'b', text: 'Impostare regole di "Frequency Capping" (es. massimo 2 email di marketing a settimana per contatto)' },
              { id: 'c', text: 'Modificare l’indirizzo mittente ad ogni singolo invio promozionale' },
              { id: 'd', text: 'Omettere il link di disiscrizione a fondo pagina' }
            ],
            correctAnswerId: 'b',
            explanation: 'Il Frequency Capping salvaguarda i rapporti a lungo termine. Mettere un limite al volume degli invii evita l’over-comunicazione e la conseguente perdita di fiducia.'
          }
        ]
      }
    ]
  },
  {
    id: 'mod-3',
    title: 'MODULO 3 — Campaign & Email Analytics',
    description: 'Imparare a interpretare KPI reali e monitorare la salute delle campagne CRM.',
    objective: 'Saper prendere decisioni basate sui dati, superando le metriche di pura apparenza.',
    lessons: [
      {
        id: 'les-3-1',
        title: 'Open Rate e Click Rate',
        objective: 'Calcolare e comprendere Open Rate, CTR e Click-to-Open Rate (CTOR).',
        theory: 'Nelle campagne email, studiamo tre metriche essenziali di ingaggio:\n- Open Rate (Tasso di Apertura): Email Aperte / Email Recapitate. Misura la forza del tuo Oggetto e nome Mittente.\n- Click-Through Rate (CTR): Email Cliccate / Email Recapitate. Misura l’efficacia complessiva della campagna.\n- Click-to-Open Rate (CTOR): Email Cliccate / Email Aperte. Misura quanto il contenuto interno era interessante per chi ha aperto l’email.',
        example: 'Se invii 1000 email, 900 arrivano (100 rimbalzano). Di queste, 450 vengono aperte (Open Rate = 50%). Di quelle aperte, 90 persone cliccano su un bottone (CTOR = 90 / 450 = 20%; CTR = 90 / 900 = 10%).',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-3-1-1',
            type: 'kpi-calculator',
            question: 'Calcola il Click-to-Open Rate (CTOR) in percentuale. Dati: Email recapitate: 2000, Email aperte: 800, Clic unici registrati: 160.',
            kpiFormulaData: {
              numbers: {
                recapitate: 2000,
                aperte: 800,
                clic: 160
              },
              targetKpi: 'CTOR',
              correctValue: 20,
              unit: '%'
            },
            explanation: 'Corretto! La formula del CTOR è: (Clic / Aperte) * 100. Quindi: (160 / 800) * 100 = 20%. È la metrica corretta per valutare l’engagement del solo design interno dell’email.'
          },
          {
            id: 'ex-3-1-2',
            type: 'multiple-choice',
            question: 'Se noti che una campagna ha un tasso di apertura stellare (es. 65%) ma pochissimi clic (CTR 1%), qual è la causa più probabile?',
            options: [
              { id: 'a', text: 'L’oggetto era estremamente intrigante, ma l’offerta interna non era chiara o il link era rotto' },
              { id: 'b', text: 'Il server d’invio ha bloccato del tutto la ricezione' },
              { id: 'c', text: 'La newsletter conteneva troppe immagini pesanti nel corpo finale' },
              { id: 'd', text: 'Il database è composto solo da record obsoleti duplicati' }
            ],
            correctAnswerId: 'a',
            explanation: 'Esatto! Il tasso di apertura alto dimostra che l’oggetto ha convinto all’azione iniziale, ma l’assenza di clic riflette un contenuto deludente, non coerente o CTA fallimentari.'
          },
          {
            id: 'ex-3-1-3',
            type: 'true-false',
            question: 'Il CTR si calcola prendendo il numero di clic diviso per il numero totale di email aperte.',
            options: [
              { id: 'true', text: 'Vero - Questa è la formula classica del CTR' },
              { id: 'false', text: 'Falso - Questa è la formula del CTOR. Il CTR usa a denominatore le email recapitate (delivered)' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. Ricorda: il CTR analizza il successo dell’invio totale (recapitato, incluse le email non aperte). Il CTOR analizza la capacità di conversione sulle sole visite aperte.'
          }
        ]
      },
      {
        id: 'les-3-2',
        title: 'Business Metriche vs Vanity Metriche',
        objective: 'Privilegiare i ricavi e la conversione rispetto a metriche puramente estetiche.',
        theory: 'Le Vanity Metrics (tassi di apertura gonfiati, clic di curiosità, badge visualizzati) gratificano l’occhiello ma a volte non generano cassa. Le Business Metrics (tasso di conversione, carrello medio, fatturato generato, ROI della campagna) collegano direttamente gli sforzi marketing al conto economico dell’azienda.',
        example: 'La Campagna A genera il 50% di Open Rate e 0 vendite. La Campagna B genera il 20% di Open Rate, ma converte 15 transazioni ad alto valore. La Campagna B è quella di successo per il business.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-3-2-1',
            type: 'multiple-choice',
            question: 'Il manager afferma: "Dobbiamo ottimizzare l’open rate perché è l’unico indicatore di successo". Quale obiezione professionale solleveresti?',
            options: [
              { id: 'a', text: 'Nessuna, l’open rate è effettivamente l’unica metrica che genera fatturato' },
              { id: 'b', text: 'L’open rate può essere alterato da filtri di sicurezza e non garantisce che i clienti stiano acquistando; dobbiamo tracciare conversioni e revenue generate' },
              { id: 'c', text: 'L’open rate non si calcola via CRM ma solo via marketing generico' },
              { id: 'd', text: 'L’open rate riflette solo l’uso corretto di query strutturate in SQL' }
            ],
            correctAnswerId: 'b',
            explanation: 'Ottimo ragionamento. Le abitudini di sicurezza e i bot automatici possono simulare false aperture email. Solo monitorando le transazioni si ottiene la verità sul valore reale generato per il business.'
          },
          {
            id: 'ex-3-2-2',
            type: 'true-false',
            question: 'Il ROI di una campagna email di retention si calcola ignorando il costo del budget promozionale.',
            options: [
              { id: 'true', text: 'Vero' },
              { id: 'false', text: 'Falso - Il calcolo del ROI deve comprendere tutti i costi diretti, inclusi incentivi o sconti applicati' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. Sminuire o nascondere i costi dei margini sacrificati (sconti, offerte, coupon regalo) porta a futili report di profitto inflazionato.'
          },
          {
            id: 'ex-3-2-3',
            type: 'multiple-choice',
            question: 'Quale delle seguenti è una pura "Vanity Metric" in una campagna di lead generation CRM?',
            options: [
              { id: 'a', text: 'Ricavi generati dalle trattative chiuse' },
              { id: 'b', text: 'Tasso di qualificazione dei contatti in trattativa' },
              { id: 'c', text: 'Il numero totale di semplici visualizzazioni sulla pagina web della landing page' },
              { id: 'd', text: 'Costo per Lead qualificato' }
            ],
            correctAnswerId: 'c',
            explanation: 'Le semplici visite o visualizzazioni, prive di interazione reale, non dicono nulla sulla qualità del contatto né sulle possibilità di concludere ordini.'
          }
        ]
      },
      {
        id: 'les-3-3',
        title: 'Bounce Rate e Deliverability',
        objective: 'Comprendere l’effetto dei rimbalzi (Hard e Soft Bounce) sui server aziendali.',
        theory: 'Ogni rimbalzo (Bounce) è un’email respinta dal server di destinazione.\n- Soft Bounce: Problema temporaneo (casella piena, server down momentaneo). Il CRM riproverà l’invio più tardi.\n- Hard Bounce: Problema definitivo (indirizzo inesistente, dominio errato, spam block bloccante). \n\nRegola tassativa: gli Hard Bounce devono essere inseriti subito in black list ed esclusi dagli invii futuri, altrimenti i sistemi di sicurezza (es. Gmail) bloccheranno l’intero dominio.',
        example: 'Un utente scrive "a.rossi@gmailll.com" (errore di battitura). L’invio risulterà in un Hard Bounce definitivo.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-3-3-1',
            type: 'multiple-choice',
            question: 'Qual è la corretta procedura per gestire un contatto classificato come "Hard Bounce"?',
            options: [
              { id: 'a', text: 'Provare a reinviare lo stesso identico messaggio due volte al giorno' },
              { id: 'b', text: 'Escludere o bloccare definitivamente il record per salvaguardare la reputazione di invio (deliverability)' },
              { id: 'c', text: 'Chiamare telefonicamente ciascun contatto per lamentarsi del rimbalzo' },
              { id: 'd', text: 'Esportare l’utente in una lista Excel statica chiamata "Inattivi Comuni"' }
            ],
            correctAnswerId: 'b',
            explanation: 'Gli Hard Bounce degradano velocemente la reputazione IP. Tenerli attivi porta i filtri a relegarti nella cartella Spam di tutto il tuo portafoglio clienti.'
          },
          {
            id: 'ex-3-3-2',
            type: 'true-false',
            question: 'Una casella di posta temporaneamente piena genera un errore di tipo Soft Bounce.',
            options: [
              { id: 'true', text: 'Vero - È un intoppo momentaneo ripristinabile' },
              { id: 'false', text: 'Falso - È una cancellazione immediata anagrafica' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. Poiché l’indirizzo esiste ma ha temporaneamente esaurito lo spazio sul disco del destinatario, l’allarme viene catalogato come temporaneo (soft).'
          },
          {
            id: 'ex-3-3-3',
            type: 'multiple-choice',
            question: 'Se il tuo tasso di bounce supera costantemente il 5%, cosa dovresti verificare prioritariamente?',
            options: [
              { id: 'a', text: 'La veste grafica della newsletter' },
              { id: 'b', text: 'Il processo di acquisizione contatti (es. implementare double opt-in) e l’igiene del database' },
              { id: 'c', text: 'Se il budget di spesa su Google Ads è esaurito' },
              { id: 'd', text: 'Se il database supporta query SQL nidificate' }
            ],
            correctAnswerId: 'b',
            explanation: 'Un bounce elevato indica sporcizia nei flussi di attivazione. Usare l’opt-in a doppio step (confezione con link di verifica obbligatorio) taglia alla radice le iscrizioni farlocche.'
          }
        ]
      },
      {
        id: 'les-3-4',
        title: 'Calcolo del ROI del CRM',
        objective: 'Acquisire dimestichezza con la formula finanziaria del Return on Investment.',
        theory: 'Il ROI del CRM Marketing mette a confronto il profitto netto generato dalle campagne con i relativi investimenti monetari dei canali (costi d’invio o incentivi).\n\nFormula base ROI: [(Fatturato Generato - Costi Complessivi) / Costi Complessivi] * 100.',
        example: 'Se investi 500€ per una promozione newsletter via SMS e vendi merce per un fatturato totale di 2500€, il profitto netto è 2000€. Il ROI è: [(2500 - 500) / 500] * 100 = 400%.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-3-4-1',
            type: 'kpi-calculator',
            question: 'Calcola il ROI percentuale di una campagna CRM. Costo totale (software + coupon di sconti emessi): 1000€. Ricavi diretti tracciati: 6000€.',
            kpiFormulaData: {
              numbers: {
                ricavi: 6000,
                costi: 1000
              },
              targetKpi: 'ROI',
              correctValue: 500,
              unit: '%'
            },
            explanation: 'Lavoro impeccabile. La formula applicata è: [(6000 - 1000) / 1000] * 100 = 500% di ritorno sull’investimento. È un risultato splendido.'
          },
          {
            id: 'ex-3-4-2',
            type: 'true-false',
            question: 'I canali CRM (email, automazioni) mostrano solitamente costi-per-conversione inferiori rispetto alle campagne sponsorizzate fredde (Google/Meta Ads).',
            options: [
              { id: 'true', text: 'Vero - Perché i contatti ti conoscono già ed hanno prestato l’opt-in' },
              { id: 'false', text: 'Falso - Mandare un’email costa sempre più che sponsorizzare' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. L’efficienza sui costi del CRM è legata alla presenza di utenti già caldi che hanno espresso una chiara connessione di interesse in precedenza, abbattendo le barriere all’acquisto.'
          },
          {
            id: 'ex-3-4-3',
            type: 'multiple-choice',
            question: 'Di quale di queste voci NON hai assoluta necessità per calcolare il ROI finanziario diretto?',
            options: [
              { id: 'a', text: 'Il fatturato totale convertito dai codici sconto ad hoc' },
              { id: 'b', text: 'La spesa legata ai server di invio ed SMS' },
              { id: 'c', text: 'La popolarità o il numero totale di followers sul profilo Instagram aziendale' },
              { id: 'd', text: 'Il valore d’acquisto effettivo associato ai carrelli transati' }
            ],
            correctAnswerId: 'c',
            explanation: 'Il conteggio follower è una metrica esterna slegata dal calcolo finanziario di rientro dei tuoi investimenti promozionali tracciati sul database proprietario.'
          }
        ]
      },
      {
        id: 'les-3-5',
        title: 'A/B Testing CRM',
        objective: 'Disegnare test comparativi robusti per ottimizzare le conversioni.',
        theory: 'Un A/B Test confronta due versioni di uno stesso messaggio (email, landing, sms) modificando un singolo elemento alla volta (Oggetto, copy del bottone CTA, colori o layout grafico).\n\nProcedimento classico:\n- Dividi un campione iniziale della tua audience (es. 20% totale) in due mini-gruppi eguali. \n- Mandi la variante A a uno e la variante B all’altro.\n- Individui la variante vincente dopo 4-24 ore (es. chi clicca di più) e mandi in automatico la vincente al restante 80% dell’audience.',
        example: 'Variante A oggetto: "Ultimo giorno di sconti!". Variante B oggetto: "Alessandro, il tuo carrello sta per scadere!". Se la B vince per tasso di apertura, invii la B a tutto il resto della lista.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-3-5-1',
            type: 'multiple-choice',
            question: 'Perché è importante testare un solo elemento alla volta durante un A/B test?',
            options: [
              { id: 'a', text: 'Perché altrimenti il sistema impiega troppe ore a configurare la query' },
              { id: 'b', text: 'Per individuare chiaramente quale specifica modifica ha causato la variazione di performance' },
              { id: 'c', text: 'Per non confondere l’assistenza clienti con variabilità eccessive' },
              { id: 'd', text: 'Non c’è limite, è sempre idoneo cambiare tutto insieme' }
            ],
            correctAnswerId: 'b',
            explanation: 'Ottimo! Cambiando simultaneamente l’oggetto, l’intestazione ed il design del bottone, non potrai mai stabilire se il successo derivi dalla riga di testo o dall’estetica aziendale.'
          },
          {
            id: 'ex-3-5-2',
            type: 'true-false',
            question: 'Se vuoi testare l’efficacia dell’oggetto di una newsletter, la metrica vincente da osservare principalmente è il tasso di clic (CTR).',
            options: [
              { id: 'true', text: 'Vero - Il clic è l’obiettivo supremo' },
              { id: 'false', text: 'Falso - L’oggetto influenza direttamente solo l’apertura (Open Rate)' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. L’oggetto dell’email è visualizzato nella inbox del cliente prima dell’apertura. Pertanto, l’indicatore principe per stabilire quale riga susciti curiosità è l’Open Rate.'
          },
          {
            id: 'ex-3-5-3',
            type: 'multiple-choice',
            question: 'Cos’è la "Significatività Statistica" in un esperimento di A/B testing?',
            options: [
              { id: 'a', text: 'La popolarità del brand sui canali di informazione' },
              { id: 'b', text: 'La certezza matematica che la differenza di performance non sia dovuta al caso ma sia effettiva e replicabile' },
              { id: 'c', text: 'La quantità di righe salvate nel database delle metriche' },
              { id: 'd', text: 'Un valore espresso esclusivamente in euro generati' }
            ],
            correctAnswerId: 'b',
            explanation: 'Senza significatività, non puoi sapere se la variante b abbia vinto sul serio o se sia stato un mero colpo di fortuna casuale dovuto all’istante d’invio o a fluttuazioni momentanee.'
          }
        ]
      }
    ]
  },
  {
    id: 'mod-4',
    title: 'MODULO 4 — Journey & Marketing Automation',
    description: 'Imparare a progettare automatismi intelligenti basati sull’attivazione in tempo reale.',
    objective: 'Organizzare logiche condizionali se/allora per guidare il cliente nel suo percorso.',
    lessons: [
      {
        id: 'les-4-1',
        title: 'Anatomia di una Journey',
        objective: 'Definire criteri di ingresso, nodi, ramificazioni e criteri di uscita.',
        theory: 'Una Journey (percorso automatizzato) è un diagramma di flusso in cui un contatto si muove in base a regole predefinite.\nComponenti chiave:\n- Entry Criteria (Innesco): L’evento iniziale che fa entrare l’utente nel flusso (es. "Si registra sul sito").\n- Wait Step (Attesa): Pause controllate tra azioni (es. "Attendi 2 giorni").\n- Decision Split (Ramificazione): Regole condizionali se/allora (es. "Ha aperto la prima email?").\n- Exit Criteria (Uscita): Eventi che rimuovono subito l’utente dal viaggio (es. "Ha effettuato un acquisto").',
        example: 'In un flusso di recupero carrello, l’ingresso è "Abbandona carrello". L’uscita è "Ordina completato". Se l’utente compra dopo la prima email, esce subito e non riceverà il secondo sollecito.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-4-1-1',
            type: 'multiple-choice',
            question: 'Perché è assolutamente vitale implementare un rigoroso "Exit Criteria" (Criterio di uscita) in un flusso di carrello abbandonato?',
            options: [
              { id: 'a', text: 'Per accelerare i tempi di consegna dei pacchi' },
              { id: 'b', text: 'Per evitare che l’utente, dopo aver appena speso e acquistato, continui a ricevere irritanti email di sollecito ad acquistare' },
              { id: 'c', text: 'Per sbloccare il budget di campagna promozionale' },
              { id: 'd', text: 'I criteri d’uscita non sono opzioni gestite dai moderni CRM' }
            ],
            correctAnswerId: 'b',
            explanation: 'Corretto! Senza criteri di uscita istantanei, un utente che compra riceve solleciti successivi di acquisto per lo stesso articolo, facendoti apparire dilettantesco o sciatto.'
          },
          {
            id: 'ex-4-1-2',
            type: 'journey-builder',
            question: 'Costruisci i passi logici ordinati per un flusso di "Carrello Abbandonato".',
            journeyCorrectSteps: [
              'Attivatore: Carrello Abbandonato',
              'Attesa: 4 Ore',
              'Invia Email di Recupero con Carrello Dinamico',
              'Esci se l’utente conclude l’ordine'
            ],
            explanation: 'Grande! Il trigger rileva l’intento, la pausa evita di essere asfissianti istantaneamente, l’email ricorda con discrezione ed il criterio d’uscita protegge l’esperienza d’acquisto.'
          },
          {
            id: 'ex-4-1-3',
            type: 'true-false',
            question: 'In una journey, un innesco (Trigger) può essere scatenato esclusivamente ad ore fisse e stabilite manualmente.',
            options: [
              { id: 'true', text: 'Vero' },
              { id: 'false', text: 'Falso - Le automazioni moderne reagiscono a eventi real-time compiuti dall’utente' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. La vera forza del CRM Marketing sta nell’attivazione guidata da eventi istantanei dell’utente (es: clicca su un link, aggiunge un prodotto in tempo reale), slegati da cronologie manuali.'
          }
        ]
      },
      {
        id: 'les-4-2',
        title: 'Il Welcome Journey',
        objective: 'Ottimizzare l’onboarding dei nuovi contatti acquisiti.',
        theory: 'La serie di benvenuto (Welcome Journey) è la prima esperienza diretta che l’utente ha con il tuo brand dopo aver completato l’opt-in.\nRegole per un onboarding di successo:\n- Coinvolgere subito (invio email di benvenuto entro 5 minuti).\n- Presentare i valori del brand e cosa aspettarsi.\n- Segmentare le preferenze fin da subito (sondaggio iniziale).\n- Offrire un eventuale incentivo o magnete promesso alla registrazione.',
        example: 'Invece di mandare una marea di sconti tutti insieme, il primo giorno invii la storia del brand, il terzo offri utili consigli gratuiti e il sesto proponi la prima offerta promozionale.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-4-1-4', // changed keys to avoid duplication
            type: 'multiple-choice',
            question: 'Qual è il miglior tempismo per l’invio della primissima email di benvenuto post-registrazione?',
            options: [
              { id: 'a', text: 'Attendere esattamente 7 giorni per non sembrare insistenti' },
              { id: 'b', text: 'Immediatamente (entro pochi minuti) quando l’interesse dell’utente è al massimo' },
              { id: 'c', text: 'Ad un orario notturno fisso per tutto il database' },
              { id: 'd', text: 'A ridosso del primo weekend utile' }
            ],
            correctAnswerId: 'b',
            explanation: 'L’attenzione dell’utente cala vertiginosamente già dopo un’ora. Rispondere immediatamente consolida la connessione e offre un riscontro visivo dell’avvenuta iscrizione.'
          },
          {
            id: 'ex-4-1-5',
            type: 'true-false',
            question: 'È consigliabile pressare un lead appena convertito con 5 email promozionali di fila nei primi due giorni.',
            options: [
              { id: 'true', text: 'Vero - Bisogna monetizzare subito prima che si raffreddi' },
              { id: 'false', text: 'Falso - Provoca rabbia, reputazione spam elevata e repentine cancellazioni' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. L’overcommunication iniziale rovina i rapporti di fiducia. L’onboarding deve educare e incuriosire in modo progressivo e ponderato.'
          },
          {
            id: 'ex-4-1-6',
            type: 'multiple-choice',
            question: 'Quale azione inseriresti volentieri nella seconda email di benvenuto per arricchire il profilo del cliente?',
            options: [
              { id: 'a', text: 'La form per inserire i dati della carta di credito obbligatoriamente' },
              { id: 'b', text: 'Un micro-sondaggio interattivo o un link per personalizzare gli interessi di contenuto' },
              { id: 'c', text: 'Una diffida ad usare marchi simili' },
              { id: 'd', text: 'Nessuna, l’arricchimento dati non si effettua via email' }
            ],
            correctAnswerId: 'b',
            explanation: 'Chiedere agli utenti le proprie preferenze fin dall’inizio permette di segmentare le successive campagne di nutrimento, salvando i tassi di apertura sul lungo termine.'
          }
        ]
      },
      {
        id: 'les-4-3',
        title: 'Recupero Carrello Abbandonato',
        objective: 'Analizzare le dinamiche dietro la transazione mancata piú comune.',
        theory: 'Quasi il 70% dei carrelli digitali viene abbandonato prima del saldo. Il carrello abbandonato è la campagna automatica dal ROI più strabiliante in assoluto. \n\nStrategia ideale:\n- Inviare la prima email a distanza di 1-4 ore dall’azione (ricordando cordialmente il prodotto custodito).\n- Inviare una seconda email a distanza di 24-48 ore con recensioni e prove sociali per abbattere le ansie d’acquisto.\n- Solo in extremis (es. dopo 72 ore) inviare un coupon sconto a scadenza rapida per gli indecisi sensibili al prezzo.',
        example: 'Se metti lo sconto subito dopo 10 minuti di orologio, educo gli utenti ad abbandonare apposta i carrelli per ricevere un codice promozionale gratuito.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-4-3-1',
            type: 'multiple-choice',
            question: 'Qual è il rischio del posizionare un codice sconto prepotente nella primissima email dopo 15 minuti dall’abbandono del carrello?',
            options: [
              { id: 'a', text: 'L’utente non sa come applicarlo nel sito' },
              { id: 'b', text: 'Educa la clientela ad abbandonare volontariamente la spesa per forzare l’emissione di un coupon' },
              { id: 'c', text: 'Nessun rischio, è un dovere marketing' },
              { id: 'd', text: 'Il server d’invio blocca le transazioni' }
            ],
            correctAnswerId: 'b',
            explanation: 'Regalare profitti inutilmente a chi avrebbe comprato comunque entro un’ora erode i margini commerciali. La prima email deve fungere solo da promemoria ed accertamento di problemi tecnici.'
          },
          {
            id: 'ex-4-3-2',
            type: 'true-false',
            question: 'Nelle email di carrello abbandonato, mostrare l’immagine reale del prodotto esatto lasciato in carrello aumenta il CTR.',
            options: [
              { id: 'true', text: 'Vero - Ricalca perfettamente l’oggetto del desiderio' },
              { id: 'false', text: 'Falso - Le persone preferiscono immagini di stock neutre' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. Rievocare visivamente il prodotto esatto riduce la barriera cognitiva e stimola l’impulso d’acquisto che era stato sospeso.'
          },
          {
            id: 'ex-4-3-3',
            type: 'multiple-choice',
            question: 'Se un utente completa l’ordine prima che parta la seconda email del flusso, che comportamento deve assumere il CRM?',
            options: [
              { id: 'a', text: 'Inviare comunque l’email dicendo che ha fatto bene' },
              { id: 'b', text: 'Rimuovere istantaneamente l’utente dal flusso per merito dei criteri di uscita eseguiti' },
              { id: 'c', text: 'Mandargli la stessa email raddoppiando lo sconto per un ordine futuro' },
              { id: 'd', text: 'Revocare il suo consenso di marketing per prudenza' }
            ],
            correctAnswerId: 'b',
            explanation: 'Una volta rinfrescato l’ordine, l’obiettivo primario dell’automazione è raggiunto. L’utente esce immediatamente dal percorso d’incentivazione d’acquisto.'
          }
        ]
      },
      {
        id: 'les-4-4',
        title: 'Frequency Capping e Fatigue',
        objective: 'Definire le regole anti-inondazione per tutelare l’attenzione degli utenti.',
        theory: 'L’affaticamento dell’utente (Audience Fatigue) si verifica quando il destinatario riceve troppe comunicazioni in un lasso di tempo ridotto. Un bravo Journey Designer imposta all’interno del motore di automazione un "Frequency Capping": per esempio, impedisce che lo stesso contatto possa ricevere più di 1 email promozionale in un raggio di 48 ore, bloccando in automatico l’invio di campagne cumulative non urgenti.',
        example: 'Se Alessandro si trova contemporaneamente nel flusso "Welcome", nel flusso "Carrello Abbandonato" e parte la "Newsletter settimanale di sconti", senza frequency capping riceverebbe tre email nella stessa mattina di martedì.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-4-4-1',
            type: 'multiple-choice',
            question: 'Di fronte a flussi sovrapposti che tentano di contattare lo stesso cliente nella stessa giornata, cosa stabilisce la tolleranza del frequency capping?',
            options: [
              { id: 'a', text: 'Si dà sempre priorità alle email di sconti massimi di massa' },
              { id: 'b', text: 'Si applicano politiche di priorità, privilegiando l’invio transazionale o l’automazione comportamentale (come il carrello)' },
              { id: 'c', text: 'Si bloccano tutte le spedizioni per 30 giorni consecutivi' },
              { id: 'd', text: 'Nessun controllo, l’importante è inviare tutto' }
            ],
            correctAnswerId: 'b',
            explanation: 'Esatto! Le email transazionali o quelle basate sul comportamento ad alta rilevanza (carrello) convertono meglio e irritano meno l’utente rispetto a cataloghi commerciali improvvisi di massa.'
          },
          {
            id: 'ex-4-4-2',
            type: 'true-false',
            question: 'I tassi di unsubscribe salgono considerevolmente se si aumenta la frequenza di invio senza personalizzare il contenuto.',
            options: [
              { id: 'true', text: 'Vero - Più rumore inutile traduce in più cancellazioni' },
              { id: 'false', text: 'Falso - Più email equivalgono sempre a maggiore gradimento del brand' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. L’irrilevanza combinata con l’alta frequenza rappresenta un detonatore per i tassi di opt-out e per le segnalazioni di abuso/spam.'
          },
          {
            id: 'ex-4-4-3',
            type: 'multiple-choice',
            question: 'Un utente non apre o clicca su nessuna tua email da ormai 6 mesi interi. Quale azione strategica adotteresti?',
            options: [
              { id: 'a', text: 'Raddoppiare il numero di email inviate per tentare di stimolarlo' },
              { id: 'b', text: 'Inserirlo in una policy di Sunset (diminuire drasticamente la frequenza di invio fino all’eventuale archiviazione consensuale)' },
              { id: 'c', text: 'Modificare anagraficamente il suo nome con caratteri speciali' },
              { id: 'd', text: 'Inviare subito una contestazione legale' }
            ],
            correctAnswerId: 'b',
            explanation: 'La Sunset Policy preserva la salute dei filtri. Mandare tonnellate di messaggi a utenti freddi fa finire tutta la tua posta aziendale direttamente in spam.'
          }
        ]
      },
      {
        id: 'les-4-5',
        title: 'Reminder Personalizzato e Trigger',
        objective: 'Riconoscere l’importanza dei trigger comportamentali storici.',
        theory: 'I trigger sono interruttori automatici basati su comportamenti archiviati. A differenza degli invii programmati che scattano per tutti alle 10:00 del giovedì, i trigger comportamentali attendono nell’ombra che il cliente faccia qualcosa, per agire di conseguenza in base ad un preciso orizzonte temporale studiato analiticamente.',
        example: 'Un cliente visita la pagina di un servizio premium e si sofferma 3 minuti, ma non acquista. Il CRM rileva l’evento "Visita prolungata senza checkout" ed invia dopo 24 ore un approfondimento mirato su quel servizio.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-4-5-1',
            type: 'multiple-choice',
            question: 'Qual è un esempio sensato di "Reminder personalizzato basato su trigger"?',
            options: [
              { id: 'a', text: 'Mandare gli auguri di compleanno esattamente un mese prima della data di nascita' },
              { id: 'b', text: 'Inviare un promemoria per il rinnovo dell’abbonamento annuale 15 giorni prima della scadenza effettiva' },
              { id: 'c', text: 'Spingere l’acquisto di un cappotto invernale a metà mese di luglio' },
              { id: 'd', text: 'Mandare la stessa query SQL ad ogni utente iscritto' }
            ],
            correctAnswerId: 'b',
            explanation: 'Esatto. Un trigger di scadenza temporale anticipato (15 giorni prima) assiste convenientemente il cliente e garantisce ritorni ad altissima prevedibilità per il brand.'
          },
          {
            id: 'ex-4-5-2',
            type: 'true-false',
            question: 'La personalizzazione avanzata dei messaggi triggerati influisce positivamente sul CTR del marketing aziendale.',
            options: [
              { id: 'true', text: 'Vero' },
              { id: 'false', text: 'Falso - Le email impersonali convertono allo stesso modo' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. Un messaggio che richiama la specifica situazione o preferenze esatte del cliente attrae immediata attenzione di lettura e genera molta più fiducia d’acquisto.'
          },
          {
            id: 'ex-4-5-3',
            type: 'multiple-choice',
            question: 'In una campagna triggerata basata su "NPS negativo" (cliente insoddisfatto), qual è l’azione più saggia da far scattare via CRM?',
            options: [
              { id: 'a', text: 'Mandare subito una mail commerciale con sconto 5% tentando di rivendere' },
              { id: 'b', text: 'Inserire il contatto in un flusso prioritario di supporto con ricontatto personalizzato dal customer care' },
              { id: 'c', text: 'Richiedere l’opt-out forzato immediato' },
              { id: 'd', text: 'Ignorare il feedback negativo' }
            ],
            correctAnswerId: 'b',
            explanation: 'I clienti insoddisfatti pronti a detrarre il brand richiedono interventi correttivi immediati dal supporto ("Close the Loop"). Tentare di vendergli altro in quel preciso momento sarebbe insensato.'
          }
        ]
      }
    ]
  },
  {
    id: 'mod-5',
    title: 'MODULO 5 — Data Quality & Consent',
    description: 'Comprendere come anomalie sul dato, duplicati e consensi errati distruggono le performance di marketing.',
    objective: 'Individuare anomalie di allineamento e operare azioni preventive a tutela degli invii.',
    lessons: [
      {
        id: 'les-5-1',
        title: 'I Duplicati nel CRM',
        objective: 'Saper identificare ed analizzare record ridondanti per preservare l’univocità del cliente.',
        theory: 'La presenza di duplicati nel database CRM (es. lo stesso cliente inserito tre volte con email leggermente diverse o accounts scorrelati) provoca gravissimi risvolti strategici e spreco economico:\n1. Perdita della Single Customer View (la storia d’acquisto è frammentata su tre schede).\n2. Comunicazioni doppie e fastidiose per il cliente.\n3. Costi di licenza software gonfiati (molti tool fatturano in base al numero di righe record gestite).\n\nPer mitigare i duplicati si adottano "Merge Rules" basate sull’identificativo univoco (solitamente l’indirizzo email o il codice fiscale).',
        example: 'Giulia Bianchi si registra via e-commerce come "giulia.b77@yahoo.it" e poi via app come "giulia.bianchi@yahoo.it". Senza logiche di unificazione, il CRM la tratterà come due persone differenti.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-5-1-1',
            type: 'multiple-choice',
            question: 'Qual è una delle conseguenze peggiori della presenza frequente di record duplicati sullo stesso cliente?',
            options: [
              { id: 'a', text: 'Vengono generati codici promozionali errati all’infinito' },
              { id: 'b', text: 'La frammentazione dei dati storici impedisce di capire il reale valore complessivo speso (LTV) del cliente' },
              { id: 'c', text: 'Il database si disconnette fisicamente dai server aziendali' },
              { id: 'd', text: 'Resta bloccata la spedizione materiale dei prodotti' }
            ],
            correctAnswerId: 'b',
            explanation: 'Esatto! Avendo lo speso storico distribuito e frammentato in schede cliente parallele, nessun algoritmo potrà calcolare accuratamente l’RFM score reale della persona, inficiando la precisione dei segmenti.'
          },
          {
            id: 'ex-5-1-2',
            type: 'true-false',
            question: 'L’indirizzo email normalizzato in minuscolo è storicamente considerato una buona chiave primaria per arginare le duplicazioni d’identità digitali.',
            options: [
              { id: 'true', text: 'Vero - Aiuta a unificare in modo standard' },
              { id: 'false', text: 'Falso - Le maiuscole fanno sempre la differenza nelle chiavi' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. Normalizzare stringhe rimuovendo spazi a inizio/fine e trasformando in minuscolo evita che "Nome@Gmail.com" e "nome@gmail.com" vengano catalogati come contatti diversi.'
          },
          {
            id: 'ex-5-1-3',
            type: 'multiple-choice',
            question: 'Cosa si intende per operazione di "Merge" all’interno di un database di clienti?',
            options: [
              { id: 'a', text: 'L’eliminazione casuale di metà dei record per velocizzare il server' },
              { id: 'b', text: 'La fusione intelligente di due o più record duplicati in un unico profilo master, preservando la storia delle attività' },
              { id: 'c', text: 'La traduzione dei dati anagrafici in una lingua straniera' },
              { id: 'd', text: 'L’invio contemporaneo dello stesso messaggio' }
            ],
            correctAnswerId: 'b',
            explanation: 'Il Merge unisce i dati in un unico profilo Master, combinando lo storico degli ordini e salvaguardando il tracciamento dei consensi più recenti.'
          }
        ]
      },
      {
        id: 'les-5-2',
        title: 'Trattamento del Rimbalzo ed Igiene',
        objective: 'Rilevare record problematici ed effettuare la sanificazione dell’audience.',
        theory: 'L’igiene dell’audience (Audience Hygiene) richiede controlli cadenzati sul database. Indirizzi mal digitati, inbox spente da anni o caselle di posta temporanee degradano i tuoi numeri reali. Un CRM Specialist deve impostare filtri automatici per isolare e rimuovere subito dall’audience contatti contrassegnati da hard bounce reiterati o formati sintatticamente errati.',
        example: 'Filtrare indirizzi che non contengono la chiocciola "@" o che contengono domini palesemente errati come "gmaill.cm" evita di consumare inutilmente crediti d’invio ed esporsi a penalizzazioni.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-5-2-1',
            type: 'multiple-choice',
            question: 'Durante l’analisi del database, trovi un’email registrata come "paolo.lombardi-bounce@domain.com". Qual è la diagnosi dal punto di vista della Data Quality?',
            options: [
              { id: 'a', text: 'È un record perfetto da inserire subito nella campagna VIP' },
              { id: 'b', text: 'È un indirizzo email anomalo, molto probabilmente un contatto di test o un indirizzo di bounce temporaneo che necessita di isolamento strategico' },
              { id: 'c', text: 'I dati sono bloccati per motivi di sicurezza statale' },
              { id: 'd', text: 'L’indirizzo appartiene palesemente a un robot del browser' }
            ],
            correctAnswerId: 'b',
            explanation: 'Gli indirizzi contenenti diciture "bounce-test" o simili indicano anomalie d’iscrizione, sistemi automatizzati o vecchi tentativi di debug. Tenerli attivi in liste pulite abbassa artificialmente tutti i tassi d’apertura.'
          },
          {
            id: 'ex-5-2-2',
            type: 'true-false',
            question: 'La rimozione periodica di utenti disengaged (non reattivi a lungo termine) riduce le aperture ma migliora la reputazione IP aziendale.',
            options: [
              { id: 'true', text: 'Vero - Meno invii inutili aumentano i tassi relativi e la fiducia d’invio' },
              { id: 'false', text: 'Falso - Più email mandi a chiunque più i provider ti premieranno' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. Smettere di perseguitare chi ti ignora riduce drasticamente i reclami per spam e comunica ai server e provider (come Yahoo o Google) che la tua azienda invia solo a destinatari reattivi.'
          },
          {
            id: 'ex-5-2-3',
            type: 'multiple-choice',
            question: 'Qual è un sintomo visibile di scarsa "Audience Hygiene" in un’azienda che fa molti invii email?',
            options: [
              { id: 'a', text: 'I fatturati complessivi del sito sono raddoppiati' },
              { id: 'b', text: 'I tassi di apertura scendono costantemente verso lo zero mentre aumentano a dismisura le email inviate in totale' },
              { id: 'c', text: 'Aumento delle iscrizioni organiche tramite posizionamento SEO' },
              { id: 'd', text: 'Le query SQL girano più velocemente' }
            ],
            correctAnswerId: 'b',
            explanation: 'Se mandi sempre più email a un database logorato da inattività e indirizzi inesistenti, la tua deliverability sprofonderà, portando pian piano in spam anche i tuoi clienti più fedeli.'
          }
        ]
      },
      {
        id: 'les-5-3',
        title: 'Allineamento Consenso ed Audit',
        objective: 'Garantire che i consensi marketing siano sempre allineati tra i sistemi operativi.',
        theory: 'Un cliente può revocare il consenso da più canali: cliccando sulla newsletter, telefonando al supporto, modificando l’area personale del sito o tramite form cookie. Il CRM deve fungere da "Single Source of Truth" (unica fonte di verità): non appena un sistema rileva una revoca (Consent Status = Revoked/Opt-out), deve sincronizzare immediatamente lo stato su tutti i sistemi integrati.',
        example: 'Se un utente revoca il consenso parlando col supporto telefonico ma il CRM non si aggiorna prima dell’invio della newsletter automatica del giorno dopo, l’azienda commette un’irregolarità sanzionabile.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-5-3-1',
            type: 'multiple-choice',
            question: 'Cosa accade se un cliente revoca il consenso marketing via supporto, ma l’ERP aziendale e il motore CRM di mailing non sono sincronizzati in tempo reale?',
            options: [
              { id: 'a', text: 'Non accade nulla perché l’utente si troverà bene comunque' },
              { id: 'b', text: 'L’utente rischia di ricevere messaggi indesiderati, violando i suoi diritti legali ed esponendo l’azienda a cospicue sanzioni esterne' },
              { id: 'c', text: 'Il database si blocca in automatico rilevando l’anomalia finanziaria' },
              { id: 'd', text: 'Il budget di Meta Ads aumenta senza controllo' }
            ],
            correctAnswerId: 'b',
            explanation: 'Esatto. L’allineamento tempestivo dei consensi non è opzionale. È un requisito legale fondamentale che tutela l’utente ed evita sanzioni astronomiche da parte dei garanti della privacy.'
          },
          {
            id: 'ex-5-3-2',
            type: 'true-false',
            question: 'Il registro dei consensi (Consent log/Audit trail) deve conservare traccia di data, ora e fonte in cui l’utente ha fornito l’opt-in.',
            options: [
              { id: 'true', text: 'Vero - È fondamentale per dimostrare la conformità legale' },
              { id: 'false', text: 'Falso - Basta conservare solo l’indicatore booleano true/false' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. In caso di controlli o contenziosi legali, l’azienda deve saper comprovare come e quando sia stata espressa l’intenzione di opt-in, non basta una semplice spunta booleana sul database.'
          },
          {
            id: 'ex-5-3-3',
            type: 'multiple-choice',
            question: 'Cosa si intende per "Double Opt-In"?',
            options: [
              { id: 'a', text: 'Un utente che si iscrive inserendo due email diverse' },
              { id: 'b', text: 'Il processo per cui l’utente deve cliccare su un link di verifica inviato via email per confermare l’iscrizione' },
              { id: 'c', text: 'Un utente che sceglie di pagare il doppio per la spedizione dei pacchi veloce' },
              { id: 'd', text: 'Registrazione automatica su due piattaforme diverse contemporaneamente' }
            ],
            correctAnswerId: 'b',
            explanation: 'Il double opt-in protegge del tutto il tuo database da inserimenti errati o malevoli, assicurando che il proprietario della casella desideri effettivamente ricevere le tue comunicazioni.'
          }
        ]
      },
      {
        id: 'les-5-4',
        title: 'Dati Incompleti e Profilazione',
        objective: 'Gestire filtri intelligenti in presenza di campi vuoti o sconosciuti.',
        theory: 'Nessun database è perfetto. Spesso i profili contengono valori indefiniti o vuoti (Empty/Null) nei campi anagrafici fondamentali (es: città mancante, genere indefinito, genere d’acquisto sconosciuto). Un bravo specialista implementa la "Profilazione Progressiva" (raccogliere dati un pezzo alla volta durante i vari touchpoint) e nei flussi di personalizzazione definisce sempre un valore di fallback di rispetto.',
        example: 'Se imposti una personalizzazione d’oggetto con "Ciao {{first_name}}!", devi accertarti di dichiarare una stringa sostitutiva se il nome è nullo, es. "Ciao a te!". Vedere scritto l’antiestetico "Ciao NULL!" nella inbox distrugge la professionalità del brand.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-5-4-1',
            type: 'multiple-choice',
            question: 'Se stai inviando un’email altamente personalizzata in base alla città dell’utente, come dovresti gestire i profili in cui il campo "città" è vuoto nel database?',
            options: [
              { id: 'a', text: 'Bloccare la spedizione per tutti quanti i clienti' },
              { id: 'b', text: 'Usare una variante di ripiego (fallback) generica (es. "vicino a te") o escluderli prudentemente dalla personalizzazione geografica specifica' },
              { id: 'c', text: 'Inscrivere in modo arbitrario l’utente nella città capoluogo di regione' },
              { id: 'd', text: 'Lanciare una query SQL distruttiva' }
            ],
            correctAnswerId: 'b',
            explanation: 'L’uso del fallback salvaguarda l’esperienza. Escludere chi ha dati imperfetti per la personalizzazione mirata evita anomalie di visualizzazione palesi (es. "Punti vendita a NULL").'
          },
          {
            id: 'ex-5-4-2',
            type: 'true-false',
            question: 'La profilazione progressiva (Progressive Profiling) consiste nel tempestare il cliente con 20 domande personali obbligatorie al momento della prima registrazione.',
            options: [
              { id: 'true', text: 'Vero - Prima si sa tutto meglio è' },
              { id: 'false', text: 'Falso - Chiede piccoli dati un modulo alla volta nel corso delle interazioni future' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. Far compilare schemi infiniti all’inizio porta all’abbandono della registrazione. La profilazione progressiva diluisce le richieste nel tempo (es: chiedendo gli interessi solo dopo il primo acquisto).'
          },
          {
            id: 'ex-5-4-3',
            type: 'multiple-choice',
            question: 'Qual è un valore sostitutivo elegante (fallback string) da usare se la variabile "first_name" è assente nel database ed impieghi la personalizzazione dell’oggetto?',
            options: [
              { id: 'a', text: '"Null"' },
              { id: 'b', text: '"Cliente"' },
              { id: 'c', text: '"Amico del brand"' },
              { id: 'd', text: 'Lasciare lo spazio vuoto in modo che resti uno spazio doppio orribile' }
            ],
            correctAnswerId: 'c',
            explanation: 'Una formula rilassata e in linea con il brand come "amico del brand" o "iscritto speciale" camuffa elegantemente l’assenza del dato nominale nella scheda.'
          }
        ]
      },
      {
        id: 'les-5-5',
        title: 'Sunset Policy e Ciclo di Fine Vita',
        objective: 'Comprendere come scovare ed isolare i contatti giunti alla fine del ciclo vitale.',
        theory: 'Ogni database accumula nel tempo contatti improduttivi ("Dead Weight"). Gli utenti cambiano lavoro, abbandonano caselle email o semplicemente perdono interesse. La "Sunset Policy" definisce la fine del ciclo di vita del dato promozionale:\n- Definisce chi è "freddo" (es. nessuna apertura o clic da oltre 180 giorni).\n- Riduce la frequenza di invio su questi contatti.\n- Tenta un ultimo invio emotivo di salvataggio ("Ci manchi molto").\n- In caso di silenzio persistente, cancella o archivia irrevocabilmente il record promozionale.',
        example: 'Alessandro non risponde dal 2025. Nel maggio 2026 l’azienda esegue la Sunset Policy eliminandolo per sempre dai sistemi di invio attivi, risanando la deliverability dell’intera infrastruttura.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-5-5-1',
            type: 'multiple-choice',
            question: 'Che impatto produce sul business una Sunset Policy implementata correttamente e in modo rigoroso?',
            options: [
              { id: 'a', text: 'Fa crollare i ricavi aziendali del 50%' },
              { id: 'b', text: 'Eura i server eliminando contatti disconnessi, abbassando i costi del software del CRM e massimizzando i click-through-rate' },
              { id: 'c', text: 'Incrementa il tasso di duplicazione dei record anagrafici' },
              { id: 'd', text: 'Comporta il fallimento del posizionamento geografico degli utenti IT' }
            ],
            correctAnswerId: 'b',
            explanation: 'La Sunset Policy depura l’audience. Ridurre gli invii inerti taglia drasticamente le licenze d’uso dei provider CRM e solleva la percentuale di engagement effettivo mostrata alla reputazione globale.'
          },
          {
            id: 'ex-5-5-2',
            type: 'true-false',
            question: 'La Sunset Policy rappresenta una pratica sconsigliata perché riduce il conteggio totale grezzo (Vanity) delle righe nel database contatti.',
            options: [
              { id: 'true', text: 'Vero - Più righe aggregate fanno sempre scena nei report' },
              { id: 'false', text: 'Falso - L’eccellenza sta nella reattività e pulizia effettiva del dato, non nei numeri di facciata' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. Vantarsi di avere "1 milione di iscritti" in cui solo il 5% apre i messaggi è fallimentare e anti-economico. Meglio 100.000 iscritti con l’80% di tassi di risposta motivati d’acquisto.'
          },
          {
            id: 'ex-5-5-3',
            type: 'multiple-choice',
            question: 'Qual è il messaggio ideale per dare il via alla primissima fase di una Sunset Policy?',
            options: [
              { id: 'a', text: '"Abbiamo caricato un catalogo di 400 pagine, leggilo subito!"' },
              { id: 'b', text: '"Alessandro, ci manchi. Ricevi ancora volentieri le nostre email o preferisci dirci addio con un clic?"' },
              { id: 'c', text: '"Acquista subito o ti cancelliamo la registrazione sul portale"' },
              { id: 'd', text: 'Un’email completamente priva di collegamenti o di testo' }
            ],
            correctAnswerId: 'b',
            explanation: 'Le campagne d’addio offrono dignità e trasparenza alla relazione. Un’email basata sull’assertività dà all’utente l’opzione di riattivarsi volontariamente o congedarsi serenamente senza generare stress.'
          }
        ]
      }
    ]
  }
];
