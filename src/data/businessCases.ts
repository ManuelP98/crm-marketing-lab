import { BusinessCase } from '../types';

export const businessCases: BusinessCase[] = [
  {
    id: 'case-1',
    title: 'Caso 1 — Budget Allocation',
    scenario: 'Il team marketing deve pianificare la spesa pubblicitaria del prossimo trimestre. Al momento, si confrontano due canali principali: Google Ads (CAMP-001) e LinkedIn (CAMP-002). Google Ads ha generato un forte volume grezzo di Lead a costi apparentemente convenienti. Al contrario, LinkedIn ha generato un numero inferiore di contatti ma dichiara una qualità di contatti di profilo business eccellente. Il CMO ti chiede un’analisi per decidere dove convogliare l’80% del budget a disposizione.',
    managerRequest: '“Facciamo molti più lead con Google Ads e spendiamo meno! Dovremmo chiudere LinkedIn e spostare tutti i soldi lì, giusto? Verifichi i nostri dati analitici del CRM prima di firmare la delibera.”',
    availableData: [
      'Visualizzare tabella Leads (controllando sorgente e Lead Score)',
      'Visualizzare tabella Campaigns (paragonando Budget speso e leads registrati)',
      'Visualizzare tabella Opportunities (analizzando quanti deal sono arrivati a Closed Won ed i relativi importi)'
    ],
    analyticalObjective: 'Confrontare non solo il Volume dei Lead generati, ma il Lead Score medio, la quantità di Opportunità commerciali generate ad esso collegate e la Revenue effettiva contrattualizzata (Closed Won).',
    suggestedTools: ['Query Leads per canale', 'Somma Opportunity Amount per Campaign', 'Calcolo Costo per Lead Qualificato'],
    analysisArea: 'Lead Quality & Bottom of Funnel Revenue',
    options: [
      {
        id: 'opt-a',
        label: 'A',
        text: 'Confermare l’opinione del CMO: Google Ads fa più contatti (45 vs 25) e costa meno di budget. Va incrementata la spesa su Google Ads chiudendo LinkedIn.',
        isCorrect: false,
      },
      {
        id: 'opt-b',
        label: 'B',
        text: 'Consigliare di allocare il budget prioritariamente su LinkedIn. Sebbene LinkedIn generi meno lead totali (25), essi registrano un Lead Score medio superlativo (circa 88), hanno generato opportunità Closed Won monumentali (es: OPP-004 da 35.000€), portando il fatturato tracciato a 35.000€+ a fronte di soli 4.200€ spesi su LinkedIn, mentre Google Ads ha registrato un ROI ed un tasso di conversione finale in vendite significativamente più risicato (deal Closed Won da soli 800€).',
        isCorrect: true,
      },
      {
        id: 'opt-c',
        label: 'C',
        text: 'Dividere il budget equamente al 50/50 senza motivare analiticamente, per non scontentare nessuno dei gestori delle campagne estere.',
        isCorrect: false,
      }
    ],
    explanation: 'Risposta eccellente. Guardando i soli lead registrati (dati anagrafici d’ingresso), Google Ads vince 45 a 25. Ma analizzando i dati transazionali e le opportunità collegate nel CRM, LinkedIn ha generato deal Closed Won di proporzioni enormi (es. LEAD-008 collegato a OPP-004 ha generato ben 35.000€ di ricavo!), mentre Google Ads ha convertito quasi a vuoto. Questo dimostra come le vanity metrics (volume contatti) ingannino, mentre i dati reali del CRM salvano i bilanci aziendali.',
    caveat: 'Attenzione: i canali B2B ad alto costo per contatto (CPL) hanno cicli di vendita più lunghi ( sales cycle ) ma scontrini medi capaci di ripagare enormemente gli investimenti iniziali rispetto ad acquisizioni massive di profili poco profilati.',
    nextRecommendedAnalysis: 'Analizzare il tempo medio di chiusura (Velocity Rate) delle opportunità aperte per ciascun canale d’origine.',
    xpReward: 150
  },
  {
    id: 'case-2',
    title: 'Caso 2 — Reactivation Campaign',
    scenario: 'Il CRM Director della catena e-commerce intende lanciare una massiccia campagna promozionale mirata al risveglio (Reactivation / Winback) dei contatti dormienti in occasione della primavera. Ha a disposizione un piccolo budget d’invio per SMS/Email ad alte prestazioni. Ti viene richiesto di isolare nel database dei clienti simulati il segmento perfetto che garantisca il massimo delle probabilità di riacquisto nel pieno rispetto della legge sulla privacy.',
    managerRequest: '“Trova il segmento di clienti da risvegliare. Vogliamo colpire persone che conoscono la qualità dei nostri articoli, che hanno speso molto in passato, ma che dormono da mesi. Ricordati che dobbiamo tassativamente rispettare il GDPR e le disiscrizioni.”',
    availableData: [
      'Tabella Customers (filtri su spesa cumulativa, data ultimo acquisto, consensi legali)',
      'Tabella Orders (storico degli importi per ciascuna anagrafica)',
      'Tabella Consents (controllo esplicito su stato Granted/Revoked)'
    ],
    analyticalObjective: 'Costruire un’audience dinamica che isoli i clienti dormienti ad alto valore storico (RFM addormentati), escludendo categoricamente chi ha revocato il consenso di marketing o risulta "unsubscribed" nel database.',
    suggestedTools: ['Segment Builder con condizioni multiple', 'Filtro di Esclusione Privacy', 'Ordinamento per Spesa Totale (LTV)'],
    analysisArea: 'Advanced Audience Segmentation & Retention',
    options: [
      {
        id: 'opt-a',
        label: 'A',
        text: 'Inviare la newsletter promozionale a tutti i clienti registrati prima del 2025, senza verificare i consensi marketing per non restringere il totale inviato.',
        isCorrect: false,
      },
      {
        id: 'opt-b',
        label: 'B',
        text: 'Selezionare i clienti con spend complessivo elevato (es. total_spend > 500€), che non acquistano da almeno 3/6 mesi (es. last_purchase_date antecedente o nullo dal 2025), aventi marketing_consent = true e unsubscribed = false (es. Alessandro Rossi CUST-001 o Giulia Bianchi CUST-002 se inattive, ma escludendo tassativamente Matteo Colombo CUST-005 che si è disiscritto).',
        isCorrect: true,
      },
      {
        id: 'opt-c',
        label: 'C',
        text: 'Estrarre solo i clienti che non hanno mai speso nulla (total_spend = 0) e che si sono disiscritti, inserendo un codice sconto del 90% per convincerli a riaprire la posta.',
        isCorrect: false,
      }
    ],
    explanation: 'Risposta corretta. Questo segmento risponde perfettamente alla logica di business e privacy: isola utenti caldi storicamente ad alto spend (LTV alto), intercetta l’inattività temporanea (Recency bassa) ed applica con rigorosa precisione legale il filtro del consenso di marketing (marketing_consent = true) e la non disiscrizione (unsubscribed = false). Gli utenti disiscritti come CUST-005 o CUST-012 non devono per alcun motivo ricevere sollecitazioni commerciali.',
    caveat: 'Contattare utenti che si sono espressamente disiscritti o che hanno revocato i consensi non solo distrugge la credibilità del brand ma viola direttamente leggi severe (es. sanzioni GDPR fino al 4% del fatturato annuo).',
    nextRecommendedAnalysis: 'Impostare un A/B test sull’oggetto dell’email di riattivazione, offrendo a metà del campione la spedizione gratuita ed all’altra metà uno sconto fisso del 15%.',
    xpReward: 150
  },
  {
    id: 'case-3',
    title: 'Caso 3 — Email Engagement Drop',
    scenario: 'I report statistici del CRM Manager mostrano un brusco e preoccupante calo del Click-Through Rate (CTR) medio nelle newsletter inviate nell’ultimo mese (crollato dallo standard 3.5% a uno scarno 0.8%). Il team sta deliberando se rifare daccapo l’intero impianto grafico del brand o se cambiare la piattaforma software d’invio ritenendola responsabile del calo.',
    managerRequest: '“I nostri iscritti non cliccano più! Il widget o il codice email sono difettosi, o forse il server d’invio inserisce le nostre email in spam? Svela la causa di questo tracollo.”',
    availableData: [
      'Visualizzare tabella Email_Events (paragonando eventi di tipo sent, open, click e bounce per campagna)',
      'Analizzare l’Open Rate (Aperture/Recapitate) correlato al CTR (Clic/Recapitate)'
    ],
    analyticalObjective: 'Diagnosticare dove risiede l’anomalia del funnel di lettura dell’email. Se il Tasso di Apertura (Open Rate) è alto ma il CTOR (Clic su Aperte) è basso, il problema è interno (contenuto, pertinenza dell’offerta, design del bottone d’azione), non legato al server.',
    suggestedTools: ['Tabella Pivot Email_Events', 'Confronto Open Rate vs CTOR', 'Scomposizione per Canale/Segmento'],
    analysisArea: 'Performance Diagnostic & Content Relevance',
    options: [
      {
        id: 'opt-a',
        label: 'A',
        text: 'Attribuire subito la colpa al server o al codice HTML difettoso dei caroselli e proporre il cambio immediato di piattaforma fornitori.',
        isCorrect: false,
      },
      {
        id: 'opt-b',
        label: 'B',
        text: 'Isolare anzitutto le metriche: se l’Open Rate è rimasto elevato (es. 40%), significa che la posta arriva ed è aperta (quindi niente problemi di spam o server). Se il crollo riguarda puramente il CTOR (clic sulle sole aperture, sceso al 2%), la diagnosi evidenzia che l’oggetto ha promesso qualcosa di interessante ma il contenuto interno era non pertinente per il segmento o la Call To Action (bottone di acquisto) era poco visibile o disallineata.',
        isCorrect: true,
      },
      {
        id: 'opt-c',
        label: 'C',
        text: 'Eliminare tutti i link interni dalle prossime email in modo da far salire fittiziamente il tasso di apertura puro (Open Rate).',
        isCorrect: false,
      }
    ],
    explanation: 'Risposta straordinaria! Da analista esperto sai scomporre i problemi dividendo le metriche e le loro aree di influenza. Se la posta fosse finita in spam, l’Open Rate sarebbe sprofondato vicino allo zero. Un Open rate preservato con tassi di clic morenti certifica una discrepanza concettuale tra la promessa iniziale dell’oggetto ordinatoci e l’offerta interna giudicata poco memorabile o inadatta al target prescelto.',
    caveat: 'La deliverability si difende preservando l’ingaggio dei lettori. Inviare messaggi noiosi ad utenti che aprono ma poi non cliccano mai e cestinano subito allena gli algoritmi di posta a deviare i tuoi messaggi futuri in categorie Promozioni o Spam.',
    nextRecommendedAnalysis: 'Testare una newsletter semplificata a puro testo (senza immagini pesanti) dedicata ad un solo argomento focale ad alta pertinenza comportamentale.',
    xpReward: 150
  },
  {
    id: 'case-4',
    title: 'Caso 4 — Funnel Leakage',
    scenario: 'I dati complessivi del marketing aziendale mostrano segnali contrastanti: il volume assoluto dei nuovi contatti (Leads) generati dal dipartimento acquisizione ha registrato un lusinghiero +50% grazie al traffico a pagamento. Tuttavia, il volume dei contratti commerciali effettivamente conclusi e firmati dal team vendite (Closed Won) è in costante flessione (-20%). Il VP of Sales accusa il marketing di portare "contatti spazzatura" (bad leads).',
    availableData: [
      'Tabella Leads (esame della provenienza dei lead e dei relativi punteggi di validità Lead Score)',
      'Tabella Opportunities (percentuale di conversione da Discovery a Closed Won)'
    ],
    managerRequest: '“I nostri addetti alle vendite passano tutto il giorno a telefonare a contatti estranei che non sanno chi siamo e non hanno intenzione di spendere. Da dove provengono questi lead e perché si fermano all’inizio del funnel?”',
    analyticalObjective: 'Individuare la causa di inefficacia nel passaggio del testimone tra Marketing e Sales, studiando la distribuzione dei Lead Score in base ai canali promozionali di provenienza delle anagrafiche.',
    suggestedTools: ['Filtro Lead Score medio per Source', 'Calcolo conversion rate Lead-to-Opportunity', 'Analisi delle opportunità aperte su Cold Outreach'],
    analysisArea: 'Lead Scoring Alignment & Funnel Conversion',
    options: [
      {
        id: 'opt-a',
        label: 'A',
        text: 'Sviluppare un sistema per raddoppiare gli invii automatici di promozione a qualsiasi contatto appena inserito nel CRM, ignorando i venditori.',
        isCorrect: false,
      },
      {
        id: 'opt-b',
        label: 'B',
        text: 'Evidenziare che l’aumento del 50% dei lead proviene da canali "freddi" o non allineati (es. form esterne disadorne o cold outreach senza educazione preventiva), i quali registrano un Lead Score bassissimo (es. LEAD-007 con score 15, status Unqualified), intasando l’attività commerciale con profili privi d’intento. Consigliare di stabilire una soglia minima di sblocco (MQL ad es. Score > 60) prima di passare il contatto ai venditori, inserendo i lead freddi in una Journey automatica di nutrimento (Nurturing).',
        isCorrect: true,
      },
      {
        id: 'opt-c',
        label: 'C',
        text: 'Licenziare parte dei venditori accusandoli di scarsa produttività e chiudere le vendite telefoniche affidandoci unicamente a bot automatici d’e-commerce.',
        isCorrect: false,
      }
    ],
    explanation: 'Risoluzione da vero leader. Aumentare il volume di lead (MQL) senza un filtro di qualificazione (Lead Scoring) distrugge l’operatività dei venditori (Sales). Nel CRM, definire regole basate su punteggi di comportamento (es. scaricare materiali di approfondimento, visitare i prezzi) garantisce che i venditori ricevano solo contatti "caldi", nutrendo i restanti con sequenze di benvenuto mirate fino a quando non saranno maturi.',
    caveat: 'La frizione tra Marketing e Sales si risolve istituendo un patto formale (SLA - Service Level Agreement) che stabilisce l’esatto punteggio analitico che promuove un contatto da semplice Lead a contatto pronto per l’azione di vendita.',
    nextRecommendedAnalysis: 'Esaminare la performance dell’automazione "B2B Leads Nurturing Path" e programmarne la riattivazione per preparare i lead freddi.',
    xpReward: 150
  },
  {
    id: 'case-5',
    title: 'Caso 5 — Journey Optimization',
    scenario: 'La Journey automatizzata "B2C Welcome Onboarding" (JRN-001) progettata dal team vanta tassi di apertura astronomici (60%), ma un tasso di conversione finale all’acquisto ridotto ad un infinitesimale 0.2%. Il team intende distruggere totalmente l’architettura dei messaggi per ricominciare da zero. Ti chiedono un parere strategico accurato per raddrizzare la rotta salvando il lavoro già svolto.',
    managerRequest: '“La journey di benvenuto è un disastro! Non compra nessuno dopo i nostri scritti. Dobbiamo eliminare tutte le email storiche e scriverne di nuove, oppure c’è un ingranaggio fuori posto che non riusciamo a decifrare?”',
    availableData: [
      'Mappa dei flussi e del timing delle Journey (visualizzabili nella scheda Journeys)',
      'Controllo degli step ed exit criteria attivati sui clienti'
    ],
    analyticalObjective: 'Valutare l’equilibrio logico e di tempo degli step della Journey. Se gli utenti aprono con gioia, il copywriting ed il magnete attirano l’attenzione, ma il blocco sta nella transizione dell’intento (offerta mancante, attesa troppo lunga tra le email o mancanza di urgenza ed inviti espliciti all’azione promozionale).',
    suggestedTools: ['Ispezione Step delle Journey', 'Analisi dei tassi di disiscrizione lungo il flusso', 'Modellizzazione di un Reminder post-onboarding'],
    analysisArea: 'Marketing Automation Architecture & Conversion UX',
    options: [
      {
        id: 'opt-a',
        label: 'A',
        text: 'Concordare con l’azzeramento totale: quando la conversione è insoddisfacente, l’unica strada percorribile è riscrivere l’intero archivio delle email da capo.',
        isCorrect: false,
      },
      {
        id: 'opt-b',
        label: 'B',
        text: 'Intervenire in modo mirato senza distruggere la journey. Visto che il tasso d’apertura è ottimo (60%), la comunicazione iniziale piace. L’analisi deve concentrarsi sul "Cosa succede dopo": inserire dopo la prima email informativa un Wait Step calibrato (es. 2-3 giorni max per battere il ferro caldo), seguito da una Call To Action esplicita d’acquisto con sconto di benvenuto a tempo, inserendo recensioni di garanzia, e presidiando il rientro con un’email di reminder calibrata prima della scadenza.',
        isCorrect: true,
      },
      {
        id: 'opt-c',
        label: 'C',
        text: 'Modificare la journey eliminando l’Email di Benvenuto iniziale e inviando direttamente una notifica d’acquisto obbligatoria senza alcuna presentazione.',
        isCorrect: false,
      }
    ],
    explanation: 'Risposta eccezionale! Ricordati che cancellare e rifare costa mesi di sforzi e rischia di eliminare quello che stava funzionando (il copywriting degli oggetti delle email, certificato dal 60% d’apertura). Identificare che il problema risiede nella transizione logico-commerciale dei passaggi successivi e nel timing ti consente di sbloccare le conversioni con innesti localizzati chirurgici e ad alto impatto.',
    caveat: 'Nelle welcome journey, i primi 7 giorni dalla registrazione possiedono un potenziale di conversione 8 volte superiore a qualsiasi altro periodo del ciclo di vita. Dilazionare i solleciti o scordare offerte dedicate in questa rampa di lancio vanifica gli sforzi di lead generation complessivi.',
    nextRecommendedAnalysis: 'Esaminare l’Exit Criteria correlato: assicurarsi che il contatto venga automaticamente rimosso dalla welcome journey nel secondo esatto in cui transa ed effettua il primo ordine sul sito.',
    xpReward: 150
  }
];
