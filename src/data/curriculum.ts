import { Module } from '../types';

export const curriculum: Module[] = [
  // ==========================================
  // MODULO 1 — CRM Foundations
  // ==========================================
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
        theory: 'Il CRM Marketing non è solo un software, ma una strategia aziendale basata sui dati dei clienti. L’obiettivo principale è raccogliere, organizzare e utilizzare le informazioni per costruire relazioni durature e generare profitto. Si passa da una comunicazione di massa ("one-to-many") a una comunicazione mirata ("one-to-one") basata sul comportamento dell’utente.',
        example: 'Invece di inviare uno sconto generico su scarpe da corsa a tutto il database, il CRM Specialist invia la promozione SOLO a chi ha visualizzato scarpe da corsa sul sito negli ultimi 7 giorni.',
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
            explanation: 'Il CRM Marketing mira alla rilevanza. Personalizzare i messaggi aumenta retention e vendite.'
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
            explanation: 'Falso. Il software è solo lo strumento; i processi e la strategia sono il motore.'
          },
          {
            id: 'ex-1-1-3',
            type: 'matching',
            question: 'Abbina i concetti del CRM alle loro corrette definizioni pratiche.',
            pairs: [
              { id: 'p1', concept: 'One-to-One Marketing', definition: 'Inviare messaggi personalizzati in base allo specifico comportamento.' },
              { id: 'p2', concept: 'Single Customer View', definition: 'L’unificazione di tutti i touchpoint e dati in un’unica scheda profilo.' },
              { id: 'p3', concept: 'CRM Campaign', definition: 'Un’iniziativa strutturata mirata a un segmento specifico.' }
            ],
            explanation: 'La Single Customer View unisce tutti i silos di dati per permettere un marketing One-to-one.'
          }
        ]
      },
      {
        id: 'les-1-2',
        title: 'Customer Lifecycle Stages',
        objective: 'Memorizzare e distinguere le fasi strategiche del ciclo di vita del cliente.',
        theory: 'Il Customer Lifecycle indica gli stadi attraversati da una persona: 1. Lead (Interessato), 2. Prospect (Intenzione alta), 3. Active Customer (Acquisto recente), 4. Inactive Customer (Dormiente), 5. Loyal Customer (Ricorrente ad alto valore).',
        example: 'Un utente che scarica un PDF è un Lead. Se ha completato 3 ordini negli ultimi 4 mesi, è un Loyal Customer.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-1-2-1',
            type: 'multiple-choice',
            question: 'Un iscritto alla newsletter completa il suo primo ordine. Qual è la sua nuova fase?',
            options: [
              { id: 'a', text: 'Resta un Lead' },
              { id: 'b', text: 'Diventa un Active Customer (New)' },
              { id: 'c', text: 'Diventa Loyal Customer' },
              { id: 'd', text: 'Diventa Inactive' }
            ],
            correctAnswerId: 'b',
            explanation: 'Il primo acquisto trasforma il Lead in un Nuovo Cliente Attivo.'
          },
          {
            id: 'ex-1-2-3',
            type: 'ordering',
            question: 'Ordina gli stadi del ciclo di vita del cliente dal primo contatto all’eccellenza.',
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
            explanation: 'Il viaggio ideale porta l’utente dall’interesse iniziale fino a diventare promotore del brand.'
          }
        ]
      },
      {
        id: 'les-1-3',
        title: 'Tipi di Dati CRM',
        objective: 'Classificare i dati in anagrafici, comportamentali e transazionali.',
        theory: 'I dati si dividono in: Anagrafici (Chi è: nome, età, città), Transazionali (Cosa acquista: storico ordini, scontrino medio) e Comportamentali (Cosa fa: clic, visite al sito, carrelli abbandonati).',
        example: 'Genere: Donna (Anagrafico). Ha speso 200€ ieri (Transazionale). Ha aperto l’email (Comportamentale).',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-1-3-1',
            type: 'multiple-choice',
            question: 'In quale categoria rientra l’evento "Cliccato sul link promozionale"?',
            options: [
              { id: 'a', text: 'Anagrafico' },
              { id: 'b', text: 'Transazionale' },
              { id: 'c', text: 'Comportamentale' }
            ],
            correctAnswerId: 'c',
            explanation: 'Le interazioni digitali tracciano l’engagement, quindi sono comportamentali.'
          }
        ]
      },
      {
        id: 'les-1-4',
        title: 'Touchpoint & Customer Journey',
        objective: 'Comprendere come i touchpoint disegnano il viaggio del cliente.',
        theory: 'Un Touchpoint è qualsiasi punto di contatto brand/utente (sito, social, assistenza). La Customer Journey è la mappatura di questi contatti. Se l’utente si blocca in un punto, si crea una "leakage" (perdita).',
        example: 'Visita sito -> Email Benvenuto -> Acquisto app -> Ticket Assistenza. Sono 4 touchpoint della Journey.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-1-4-2',
            type: 'true-false',
            question: 'L’assistenza post-vendita non è un touchpoint utile per il CRM Marketing.',
            options: [
              { id: 'true', text: 'Vero' },
              { id: 'false', text: 'Falso' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. Evitare di mandare sconti a chi ha un ticket urgente aperto è un esempio di ottimo CRM.'
          }
        ]
      },
      {
        id: 'les-1-5',
        title: 'Consenso & Privacy',
        objective: 'Comprendere l’importanza del consenso (Opt-in) nel marketing.',
        theory: 'Senza consenso esplicito (GDPR Opt-in) non si può fare marketing. Le caselle pre-spuntate sono illegali. L’Opt-out (disiscrizione) è un diritto inalienabile e deve richiedere un solo clic. Email transazionali (es. ricevute) non richiedono l’opt-in marketing.',
        example: 'Se mando promozioni a un utente disiscritto, commetto un illecito e distruggo la deliverability.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-1-5-1',
            type: 'multiple-choice',
            question: 'Cosa prevede il GDPR sulle spunte di iscrizione?',
            options: [
              { id: 'a', text: 'Devono essere pre-selezionate' },
              { id: 'b', text: 'Devono richiedere un’azione attiva (no caselle pre-spuntate)' },
              { id: 'c', text: 'Non servono' }
            ],
            correctAnswerId: 'b',
            explanation: 'Il consenso deve essere inequivocabile e attivo.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // MODULO 2 — Segmentation & Audience
  // ==========================================
  {
    id: 'mod-2',
    title: 'MODULO 2 — Segmentation & Audience',
    description: 'Imparare a raggruppare i clienti in segmenti utili per massimizzare la precisione e il ROI.',
    objective: 'Sviluppare abilità logiche per progettare audience rilevanti ed evitare sprechi.',
    lessons: [
      {
        id: 'les-2-1',
        title: 'Basi della Segmentazione',
        objective: 'Apprendere la differenza tra liste statiche e liste dinamiche.',
        theory: 'Liste Statiche: Elenchi fissi inseriti manualmente (es. "Evento 2026"). Segmenti Dinamici: Gruppi che si aggiornano in tempo reale in base a regole. Se le regole combaciano, entri; se non combaciano più, esci in automatico.',
        example: 'Segmento: "Spesa > 500€". Appena un utente spende il 501esimo euro, entra da solo nel segmento.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-2-1-2',
            type: 'segment-builder',
            question: 'Costruisci il segmento "Nuovi Iscritti Raggiungibili".',
            targetSegmentCriteria: [
              { field: 'signup_date', operator: '>=', value: '30 giorni fa' },
              { field: 'lifecycle_stage', operator: '==', value: 'Lead' },
              { field: 'marketing_consent', operator: '==', value: 'true' }
            ],
            explanation: 'Data recente, status di Lead e, soprattutto, opt-in valido.'
          }
        ]
      },
      {
        id: 'les-2-2',
        title: 'Includere vs Escludere',
        objective: 'Sviluppare la capacità di ripulire un’audience.',
        theory: 'Definire chi includere è facile, definire chi ESCLUDERE salva l’azienda. Se fai una promozione aggressiva per trovare nuovi clienti, devi escludere chi ha appena comprato a prezzo pieno.',
        example: 'Includi: Lead. Escludi: Chi ha già acquistato o ha ticket di supporto aperti.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-2-2-1',
            type: 'multiple-choice',
            question: 'Offerta "Sconto Primo Acquisto". Quale audience configuri?',
            options: [
              { id: 'a', text: 'Tutto il database' },
              { id: 'b', text: 'Includi i Lead; escludi chi ha già concluso almeno un ordine' }
            ],
            correctAnswerId: 'b',
            explanation: 'Offrire sconti di benvenuto a clienti storici brucia i margini di profitto.'
          }
        ]
      },
      {
        id: 'les-2-3',
        title: 'Campagne Winback e Riattivazione',
        objective: 'Analizzare le regole logiche per scovare clienti dormienti.',
        theory: 'Campagna Winback = riattivare chi non compra da molto. Regole auree: Ha fatto ordini in passato + L’ultimo risale a più di X giorni + Consenso attivo. È più economico riattivare che acquisire a freddo.',
        example: 'Last Purchase Date < 180 days AND Orders > 0 AND Unsubscribed = false.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-2-3-3',
            type: 'segment-builder',
            question: 'Seleziona le condizioni per "Clienti Dormienti ad Alto Valore".',
            targetSegmentCriteria: [
              { field: 'total_spend', operator: '>', value: '1000' },
              { field: 'last_purchase_date', operator: '<', value: '3 mesi fa' },
              { field: 'marketing_consent', operator: '==', value: 'true' }
            ],
            explanation: 'Alto valore (spesa > 1000) e dormienza (acquisto distante).'
          }
        ]
      },
      {
        id: 'les-2-4',
        title: 'Segmentazione per Valore: RFM',
        objective: 'Comprendere come funziona la segmentazione RFM.',
        theory: 'RFM: Recency (giorni dall’ultimo ordine), Frequency (quanti ordini totali), Monetary (valore totale speso). È il modello matematico supremo per scovare i VIP e i clienti a rischio abbandono.',
        example: 'Score "5-5-5" = Compra spesso, ha comprato ieri, spende un patrimonio (Champion).',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-2-4-3',
            type: 'multiple-choice',
            question: 'Come tratteresti un cliente RFM "5-1-1" (Appena arrivato, compra poco)?',
            options: [
              { id: 'a', text: 'Come un sostenitore storico' },
              { id: 'b', text: 'Con una journey di onboarding e nurturing' }
            ],
            correctAnswerId: 'b',
            explanation: 'È un nuovo utente. Ha bisogno di essere educato al brand per fare il secondo ordine.'
          }
        ]
      },
      {
        id: 'les-2-5',
        title: 'Prevenire l\'Opt-Out',
        objective: 'Gestire il churn con Preference Center e Frequency Capping.',
        theory: 'Troppe email = Disiscrizione. Invece di far fuggire le persone, offri un "Preference Center" dove possono scegliere di ricevere meno messaggi. Usa la "Supression List" per i reclami Spam.',
        example: 'L’utente seleziona "Mandatemi email solo 1 volta al mese" anziché cliccare Unsubscribe.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-2-5-1',
            type: 'multiple-choice',
            question: 'Cos’è un Preference Center?',
            options: [
              { id: 'a', text: 'Pagina dove modulare la frequenza e i temi delle comunicazioni' },
              { id: 'b', text: 'Il centralino clienti' }
            ],
            correctAnswerId: 'a',
            explanation: 'Salva l’iscrizione permettendo di personalizzare l’esperienza.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // MODULO 3 — Campaign & Analytics
  // ==========================================
  {
    id: 'mod-3',
    title: 'MODULO 3 — Analytics & KPI',
    description: 'Imparare a interpretare KPI reali e monitorare la salute delle campagne CRM.',
    objective: 'Saper prendere decisioni basate sui dati, superando le vanity metrics.',
    lessons: [
      {
        id: 'les-3-1',
        title: 'Open Rate e CTOR',
        objective: 'Calcolare e comprendere CTR e Click-to-Open Rate.',
        theory: 'Open Rate = Aperte / Recapitate (misura l’Oggetto). CTR = Clic / Recapitate. CTOR = Clic / Aperte (misura il reale interesse per il design e l’offerta interna).',
        example: '1000 email inviate. 500 aperte. 50 clic. CTOR = (50/500)*100 = 10%.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-3-1-1',
            type: 'kpi-calculator',
            question: 'Calcola il CTOR. Email Recapitate: 2000, Aperte: 800, Clic: 160.',
            kpiFormulaData: { numbers: { recapitate: 2000, aperte: 800, clic: 160 }, targetKpi: 'CTOR', correctValue: 20, unit: '%' },
            explanation: '(160 / 800) * 100 = 20%.'
          }
        ]
      },
      {
        id: 'les-3-2',
        title: 'Business Metriche vs Vanity',
        objective: 'Privilegiare i ricavi rispetto alle apparenze.',
        theory: 'Le Vanity Metrics (es. aperture) gratificano ma non pagano gli stipendi (specie con le pre-aperture di Apple Mail). Le Business Metrics (Revenue, Conversion Rate, ROI) indicano il reale successo.',
        example: 'Campagna con 50% di Open Rate ma 0 vendite è peggio di una con 15% di Open e 50 transazioni.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-3-2-2',
            type: 'true-false',
            question: 'L’impatto dell’Apple Mail Privacy Protection (MPP) ha reso il Tasso di Apertura meno affidabile.',
            options: [
              { id: 'true', text: 'Vero - Apple pre-apre le email gonfiando il dato' },
              { id: 'false', text: 'Falso - L’Open Rate è matematicamente esatto' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. Da iOS 15, i bot scaricano i pixel in automatico. Il focus va spostato su Clic e Vendite.'
          }
        ]
      },
      {
        id: 'les-3-3',
        title: 'Bounce Rate e Deliverability',
        objective: 'Effetto dei rimbalzi (Hard e Soft) sui server.',
        theory: 'Soft Bounce: Problema temporaneo (casella piena). Hard Bounce: Errore definitivo (email finta/chiusa). Gli Hard Bounce vanno eliminati subito in blacklist per proteggere la reputazione (Deliverability).',
        example: '"a.rossi@gmailll.com" (errore dominio) genera un Hard Bounce.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-3-3-1',
            type: 'multiple-choice',
            question: 'Cosa fare con un "Hard Bounce"?',
            options: [
              { id: 'a', text: 'Riprovare l’invio domani' },
              { id: 'b', text: 'Escluderlo definitivamente per salvare la Deliverability' }
            ],
            correctAnswerId: 'b',
            explanation: 'Inviare email a indirizzi inesistenti ti fa etichettare come Spammer.'
          }
        ]
      },
      {
        id: 'les-3-4',
        title: 'Calcolo del ROI',
        objective: 'Acquisire dimestichezza con il Return on Investment.',
        theory: 'Formula ROI: [(Ricavi - Costi) / Costi] * 100. I costi devono includere fee software e coupon regalati.',
        example: 'Costo totale 500€. Vendite 2500€. ROI = [(2500 - 500) / 500] * 100 = 400%.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-3-4-1',
            type: 'kpi-calculator',
            question: 'Calcola il ROI. Costo: 1000€. Ricavi diretti: 6000€.',
            kpiFormulaData: { numbers: { ricavi: 6000, costi: 1000 }, targetKpi: 'ROI', correctValue: 500, unit: '%' },
            explanation: '[(6000 - 1000) / 1000] * 100 = 500%.'
          }
        ]
      },
      {
        id: 'les-3-5',
        title: 'A/B Testing',
        objective: 'Disegnare test comparativi robusti.',
        theory: 'L’A/B Test confronta due versioni variando UN SOLO elemento alla volta (solo Oggetto o solo Bottone). Serve "Significatività Statistica" per evitare falsi positivi casuali.',
        example: 'Mandi la Versione A al 10% e la B al 10%. La vincente va al restante 80%.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-3-5-1',
            type: 'multiple-choice',
            question: 'Perché cambiare un solo elemento alla volta in un test?',
            options: [
              { id: 'a', text: 'Per isolare la causa esatta della variazione di performance' },
              { id: 'b', text: 'Perché il software esplode' }
            ],
            correctAnswerId: 'a',
            explanation: 'Se cambi titolo e colore contemporaneamente, non saprai mai quale modifica ha causato la vittoria.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // MODULO 4 — Journey & Automation
  // ==========================================
  {
    id: 'mod-4',
    title: 'MODULO 4 — Journey & Automation',
    description: 'Imparare a progettare automatismi intelligenti basati sull’attivazione in tempo reale.',
    objective: 'Organizzare logiche condizionali se/allora per guidare il cliente.',
    lessons: [
      {
        id: 'les-4-1',
        title: 'Anatomia di una Journey',
        objective: 'Criteri di ingresso, nodi e uscite.',
        theory: 'Componenti: Trigger (Innesco in tempo reale), Wait Step (Attesa), Decision Split (Diramazioni), Exit Criteria (Criteri di uscita immediata se l’obiettivo è raggiunto).',
        example: 'Entra se: Abbandona Carrello. Esci se: Acquisto = True.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-4-1-2',
            type: 'journey-builder',
            question: 'Costruisci i passi per il "Carrello Abbandonato".',
            journeyCorrectSteps: [
              'Attivatore: Carrello Abbandonato',
              'Attesa: 4 Ore',
              'Invia Email di Recupero',
              'Esci se conclude l’ordine'
            ],
            explanation: 'Intercettare l’intento, pausare, inviare e pulire.'
          }
        ]
      },
      {
        id: 'les-4-2',
        title: 'Welcome Journey',
        objective: 'Ottimizzare l’onboarding post-iscrizione.',
        theory: 'La prima email (entro pochi minuti) ha il tasso di apertura più alto della storia del cliente. Va usata per presentare i valori, erogare l’eventuale lead magnet e NON pressare alla vendita feroce.',
        example: 'Giorno 1: Storia e Valori. Giorno 3: Social Proof (Recensioni). Giorno 6: Prima promo dedicata.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-4-2-1',
            type: 'multiple-choice',
            question: 'Miglior tempismo per l’email di benvenuto?',
            options: [
              { id: 'a', text: 'Entro pochi minuti dall’iscrizione' },
              { id: 'b', text: 'Dopo 7 giorni' }
            ],
            correctAnswerId: 'a',
            explanation: 'Battere il ferro finché è caldissimo.'
          }
        ]
      },
      {
        id: 'les-4-3',
        title: 'Carrello Abbandonato Strategico',
        objective: 'Dinamiche dietro la transazione mancata.',
        theory: 'Non regalare sconti subito! Il 70% della gente abbandona per distrazione. Prima email (1-4h) è un promemoria "Hai scordato questo". Seconda (24h) elimina le ansie (Trust). Terza (48h) inserisce lo sconto a scadenza.',
        example: 'Sconto istantaneo educa i clienti ad abbandonare sempre il carrello appositamente.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-4-3-1',
            type: 'multiple-choice',
            question: 'Rischio dello sconto a soli 10 minuti dall’abbandono?',
            options: [
              { id: 'a', text: 'Educa il database ad abbandonare volontariamente per forzare il coupon' },
              { id: 'b', text: 'Nessun rischio' }
            ],
            correctAnswerId: 'a',
            explanation: 'Evita di bruciare margini su utenti che avrebbero completato comunque.'
          }
        ]
      },
      {
        id: 'les-4-4',
        title: 'Frequency Capping',
        objective: 'Tutelare l’attenzione degli utenti.',
        theory: 'Audience Fatigue si previene col Frequency Capping: impostare un limite di max X email/SMS promozionali a settimana per utente. Le email transazionali o triggerate (es. carrello) scavalcano questa regola.',
        example: 'Se l’utente è nel flusso di Benvenuto, il CRM blocca l’invio della Newsletter settimanale massiva per non sovrapporsi.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-4-4-2',
            type: 'true-false',
            question: 'L’irrilevanza combinata all’alta frequenza distrugge il database.',
            options: [
              { id: 'true', text: 'Vero' },
              { id: 'false', text: 'Falso' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. È la ricetta per lo Spam Complaint immediato.'
          }
        ]
      },
      {
        id: 'les-4-5',
        title: 'Trigger Comportamentali',
        objective: 'Anticipare i bisogni analizzando il comportamento.',
        theory: 'I trigger reagiscono. Rispetto alle "Blast" massive, inviano il messaggio perfetto nel momento di massimo intento.',
        example: 'Utente visualizza la pagina "Prezzi VIP" ma non fa upgrade. Trigger a 24h: "Vantaggi di diventare VIP".',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-4-5-1',
            type: 'multiple-choice',
            question: 'Esempio di trigger di scadenza ad alta conversione?',
            options: [
              { id: 'a', text: 'Promemoria di rinnovo abbonamento 15 giorni prima della scadenza' },
              { id: 'b', text: 'Mandare gli auguri 4 mesi in ritardo' }
            ],
            correctAnswerId: 'a',
            explanation: 'Assiste l’utente nel momento del bisogno esatto.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // MODULO 5 — Data Quality & Consent
  // ==========================================
  {
    id: 'mod-5',
    title: 'MODULO 5 — Data Quality & Consent',
    description: 'Come anomalie sul dato, duplicati e consensi errati distruggono le performance.',
    objective: 'Individuare anomalie di allineamento e sanificare l’audience.',
    lessons: [
      {
        id: 'les-5-1',
        title: 'Duplicati e Merge',
        objective: 'Preservare la Single Customer View.',
        theory: 'Clienti duplicati sfalsano i valori RFM, generano spam involontario e costano in licenze. Serve una chiave primaria (es. Email in minuscolo) per fare un "Merge" intelligente delle schede.',
        example: 'Mario rossi (ID 1: Speso 50€) e mario rossi (ID 2: Speso 200€) fusi diventano un unico ID (Speso 250€).',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-5-1-1',
            type: 'multiple-choice',
            question: 'Conseguenza dei record duplicati?',
            options: [
              { id: 'a', text: 'Frammentazione dati e invii doppi fastidiosi' },
              { id: 'b', text: 'Accelerazione del server' }
            ],
            correctAnswerId: 'a',
            explanation: 'Distrugge la misurazione della LifeTime Value.'
          }
        ]
      },
      {
        id: 'les-5-2',
        title: 'Igiene dell’Audience',
        objective: 'Rilevare record problematici e bot.',
        theory: 'Indirizzi "role-based" (info@, admin@) o trappole (spamhaus) abbattono la deliverability. Isolali tramite segmenti di esclusione permanenti.',
        example: 'Filtrare indirizzi con typo comuni (@gmaill.com).',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-5-2-2',
            type: 'true-false',
            question: 'Mandare messaggi a inattivi prolungati migliora la reputazione IP.',
            options: [
              { id: 'true', text: 'Vero' },
              { id: 'false', text: 'Falso - Degrada drasticamente la reputazione' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. I provider di posta penalizzano chi invia ad audience morte.'
          }
        ]
      },
      {
        id: 'les-5-3',
        title: 'Allineamento Consenso',
        objective: 'Sincronizzazione della Single Source of Truth.',
        theory: 'Se l’utente disdice il consenso in negozio, il CRM deve saperlo in tempo reale per non mandare newsletter. Il log del consenso deve salvare: IP, timestamp e URL di opt-in in caso di ispezioni.',
        example: 'Double Opt-In garantisce che la persona sia reale e padrona dell’inbox.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-5-3-3',
            type: 'multiple-choice',
            question: 'Cos’è il Double Opt-in?',
            options: [
              { id: 'a', text: 'L’utente deve confermare cliccando su un link arrivato via email' },
              { id: 'b', text: 'Iscriversi due volte' }
            ],
            correctAnswerId: 'a',
            explanation: 'Verifica la proprietà della casella e blocca bot e typo.'
          }
        ]
      },
      {
        id: 'les-5-4',
        title: 'Fallback e Dati Vuoti',
        objective: 'Gestire la profilazione imperfetta.',
        theory: 'Non tutto è compilato. Se chiami un utente per Nome e il campo è Null, appare "Ciao Null". Usa i Fallback (valori di riserva). Usa il Progressive Profiling per chiedere dati poco per volta, non subito.',
        example: 'Fallback di First_Name: "Ciao Friend!".',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-5-4-3',
            type: 'multiple-choice',
            question: 'Valore sostitutivo se manca il nome?',
            options: [
              { id: 'a', text: '"Amico del brand" o "Appassionato"' },
              { id: 'b', text: 'Lasciare vuoto' }
            ],
            correctAnswerId: 'a',
            explanation: 'Maschera elegantemente l’assenza del dato.'
          }
        ]
      },
      {
        id: 'les-5-5',
        title: 'Sunset Policy',
        objective: 'Il ciclo di fine vita del dato.',
        theory: 'Riconoscere i contatti morti (Nessun clic/apertura da >180 giorni). Tenta un’ultima campagna di risveglio "Ci manchi", poi archiviali definitivamente per snellire i costi e salvare la reputazione.',
        example: 'Disiscrivere attivamente dal marketing chi ignora da 6 mesi.',
        xpReward: 50,
        exercises: [
          {
            id: 'ex-5-5-1',
            type: 'multiple-choice',
            question: 'Vantaggio reale della Sunset Policy?',
            options: [
              { id: 'a', text: 'Elimina i pesi morti, alza i KPI e riduce i costi software' },
              { id: 'b', text: 'Fa sembrare piccolo il brand' }
            ],
            correctAnswerId: 'a',
            explanation: 'Qualità vince sulla quantità (Vanity Metrics).'
          }
        ]
      }
    ]
  },

  // ==========================================
  // MODULO 6 — Advanced Retention & Loyalty
  // ==========================================
  {
    id: 'mod-6',
    title: 'MODULO 6 — Advanced Retention & Loyalty',
    description: 'Superare la dipendenza dagli sconti creando programmi fedeltà, referral loops e gamification.',
    objective: 'Progettare strategie scalabili per massimizzare il Customer Lifetime Value (CLV) preservando la marginalità aziendale.',
    lessons: [
      {
        id: 'les-6-1',
        title: 'Loyalty Programs (Punti vs Tiers)',
        objective: 'Progettare le meccaniche base di un programma fedeltà moderno.',
        theory: 'Un programma fedeltà serve a incentivare il comportamento ricorrente. \n- Modello a Punti: Spend/Earn classico (es. 1€ = 1 punto).\n- Modello a Livelli (Tiers): Status basati sulla spesa annuale (es. Bronze, Silver, Gold). Introduce la gamification (FOMO di perdere il livello l’anno successivo).\n- Rewards Esperienziali vs Transazionali: Non offrire solo il "-10%". I VIP vogliono vantaggi esclusivi (spedizione gratis a vita, accesso anticipato ai saldi, servizio clienti prioritario).',
        example: 'Sephora Beauty Insider usa Tiers. Arrivare a "Rouge" dà diritto ad eventi privati e tester esclusivi, status symbol immensamente superiore allo sconto nudo.',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-6-1-1',
            type: 'multiple-choice',
            question: 'Quale tra questi è un "Benefit Esperienziale" tipico di un livello Loyalty VIP?',
            options: [
              { id: 'a', text: 'Un coupon del 5% su un carrello di 200€' },
              { id: 'b', text: 'L’accesso anticipato di 48h ad una nuova collezione in tiratura limitata' },
              { id: 'c', text: 'Ricevere punti doppi solo la domenica' },
              { id: 'd', text: 'Pagare la spedizione il doppio per avere tracking avanzato' }
            ],
            correctAnswerId: 'b',
            explanation: 'I vantaggi esperienziali creano status, scarsità e valore percepito altissimo a costo quasi zero per l’azienda, rispetto all’erosione continua del margine data dagli sconti.'
          },
          {
            id: 'ex-6-1-2',
            type: 'true-false',
            question: 'Nel modello Loyalty a "Tiers" (Livelli), declassare l’utente se non mantiene la spesa minima richiesta l’anno successivo disincentiva completamente l’acquisto.',
            options: [
              { id: 'true', text: 'Vero - L’utente si offende e abbandona' },
              { id: 'false', text: 'Falso - Genera Loss Aversion (Paura di perdere lo status) che accelera la conversione di fine anno' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. Le email di "Tier Downgrade Warning" (es: "Ti mancano 50€ per mantenere il livello Gold!") hanno tassi di conversione stratosferici per via della psicologia avversa alle perdite.'
          },
          {
            id: 'ex-6-1-3',
            type: 'matching',
            question: 'Abbina la tipologia di Loyalty Reward alla sua meccanica.',
            pairs: [
              { id: 'p1', concept: 'Earn & Burn', definition: 'L’utente accumula valuta virtuale da convertire in sconti fisici al checkout.' },
              { id: 'p2', concept: 'Tier Status', definition: 'Sblocca benefit permanenti solo superando soglie di spesa annuali cumulate.' },
              { id: 'p3', concept: 'Paid Membership', definition: 'Modello Prime: pagare un canone anticipato per saltare i requisiti ed avere benefit immediati.' }
            ],
            explanation: 'Comprendere l’architettura dei reward differenzia i modelli base da quelli ad alte prestazioni (es: Amazon Prime).'
          }
        ]
      },
      {
        id: 'les-6-2',
        title: 'Referral Marketing (MGM)',
        objective: 'Strutturare automazioni di acquisizione virale a basso CAC.',
        theory: 'Member Get Member (MGM) o Referral: Trasformare i clienti attuali in micro-influencer del brand. \nLa regola aurea è il "Double-Sided Reward": offrire un premio incentivante SIA a chi invita (Advocate), SIA all’amico invitato (Friend).\nCriticità CRM: Prevenzione antifrode. Il flusso deve triggerare la ricompensa per l’Advocate SOLO quando l’amico ha effettivamente pagato l’ordine o superato i giorni di reso legale.',
        example: '"Invita un amico: lui riceve 15€ sul primo ordine. Appena lui acquista, tu ricevi 15€!". Un Win-Win automatizzato gestito via CRM con link tracciati.',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-6-2-1',
            type: 'multiple-choice',
            question: 'In una campagna di Referral "Double-Sided", per evitare frodi al CRM, quando va erogato il premio all’utente che ha effettuato l’invito?',
            options: [
              { id: 'a', text: 'Immediatamente non appena l’amico inserisce l’indirizzo email' },
              { id: 'b', text: 'Solo dopo che l’amico invitato ha concretizzato un ordine valido e pagato' },
              { id: 'c', text: 'Dopo 365 giorni solari' },
              { id: 'd', text: 'Prima che l’amico accetti l’invito' }
            ],
            correctAnswerId: 'b',
            explanation: 'Rilasciare ricompense prima del pagamento genera frodi di massa (auto-inviti da email fittizie per raccogliere coupon).'
          },
          {
            id: 'ex-6-2-2',
            type: 'ordering',
            question: 'Ordina cronologicamente i passaggi sicuri di un flusso automatizzato Member-Get-Member.',
            orderedSteps: [
              'Il Cliente Master riceve e condivide il suo link personale',
              'L’Amico clicca e atterra sulla landing page inserendo la sua mail',
              'L’Amico riceve il codice "Benvenuto10" e completa il primo acquisto',
              'Il CRM verifica il pagamento dell’Amico e sblocca il premio per il Cliente Master'
            ],
            initialStepsOrder: [
              'Il CRM verifica il pagamento dell’Amico e sblocca il premio per il Cliente Master',
              'Il Cliente Master riceve e condivide il suo link personale',
              'L’Amico riceve il codice "Benvenuto10" e completa il primo acquisto',
              'L’Amico clicca e atterra sulla landing page inserendo la sua mail'
            ],
            explanation: 'La convalida asincrona (verifica del pagamento a valle) è il cuore del referral sostenibile.'
          }
        ]
      },
      {
        id: 'les-6-3',
        title: 'Churn Involontario e Dunning',
        objective: 'Salvare i clienti in abbonamento dal fallimento dei pagamenti.',
        theory: 'Nel business in abbonamento (Subscription/SaaS), il Churn non è sempre una disdetta volontaria.\nIl Churn Involontario avviene quando il pagamento fallisce (carta scaduta, massimale superato). Per evitarlo, il CRM innesca i flussi di "Dunning" (recupero crediti automatizzato):\n1. Pre-Dunning: Email 15 giorni prima della scadenza della carta di credito.\n2. Grace Period: Giorni extra concessi per non spegnere subito il servizio al primo fallimento.\n3. Retry automatizzati e messaggi in-app per richiedere l’aggiornamento dei dati di fatturazione.',
        example: 'Spotify non ti spegne la musica appena la transazione mensile fallisce. Ti concede un Grace Period e ti manda un’email con oggetto urgente "Azione richiesta: Aggiorna metodo di pagamento".',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-6-3-1',
            type: 'multiple-choice',
            question: 'Qual è lo scopo principale di un flusso di "Pre-Dunning"?',
            options: [
              { id: 'a', text: 'Offrire un anno di abbonamento gratuito preventivo' },
              { id: 'b', text: 'Avvisare l’utente proattivamente che la sua carta in archivio sta per scadere (es. nel mese successivo), prevenendo un futuro pagamento fallito' },
              { id: 'c', text: 'Richiedere recensioni a 5 stelle sull’app' },
              { id: 'd', text: 'Cancellare forzatamente l’account in anticipo' }
            ],
            correctAnswerId: 'b',
            explanation: 'Anticipare l’evento di scadenza del mezzo di pagamento previene l’attrito della sospensione tecnica del servizio.'
          },
          {
            id: 'ex-6-3-2',
            type: 'true-false',
            question: 'Sospendere i servizi istantaneamente al primo tentativo fallito di pagamento è una Best Practice nel mercato SaaS per educare il cliente.',
            options: [
              { id: 'true', text: 'Vero - Tolleranza zero accelera l’incasso' },
              { id: 'false', text: 'Falso - Usare un Grace Period (Periodo di Grazia) preserva la customer experience e recupera il fatturato in autonomia' }
            ],
            correctAnswerId: 'false',
            explanation: 'Spesso le banche rifiutano le transazioni per errori di rete momentanei (Soft decline). Concedere 3-5 giorni per risolvere senza causare disservizi fa la differenza tra un utente arrabbiato e uno felice.'
          }
        ]
      },
      {
        id: 'les-6-4',
        title: 'Zero-Party Data & Preference Center',
        objective: 'Comprendere e raccogliere informazioni fornite esplicitamente dal cliente.',
        theory: 'Mentre i First-Party Data si tracciano in modo indiretto (es. storico ordini, navigazione sul tuo sito), gli ZERO-PARTY DATA sono informazioni che l’utente cede in modo diretto, esplicito e consapevole al brand.\nStrumenti per raccoglierli: Quiz, Sondaggi, Onboarding interattivi, Preference Center.\nRaccolta volontaria in cambio di personalizzazione iper-rilevante.',
        example: 'Un brand cosmetico mostra un form "Dicci il tuo tipo di pelle e ricevi la routine perfetta". L’utente clicca "Pelle Grassa". Quel dato è uno Zero-Party Data inserito a database, oro puro per la successiva automazione CRM.',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-6-4-1',
            type: 'multiple-choice',
            question: 'Perché gli Zero-Party Data offrono tassi di conversione infinitamente superiori nelle campagne CRM?',
            options: [
              { id: 'a', text: 'Perché sono comprati illegalmente e quindi più completi' },
              { id: 'b', text: 'Perché riflettono le preferenze e le intenzioni dichiarate intenzionalmente e direttamente dall’utente, eliminando ogni necessità di presupposizione algoritmica' },
              { id: 'c', text: 'Perché costano meno per chi compra traffico paid' },
              { id: 'd', text: 'Zero-Party significa che non hanno alcun valore commerciale' }
            ],
            correctAnswerId: 'b',
            explanation: 'Se un utente ti dice "Sono vegetariano", sai con certezza assoluta cosa offrirgli. Non devi più "indovinare" guardando a quali prodotti ha cliccato storicamente.'
          },
          {
            id: 'ex-6-4-2',
            type: 'true-false',
            question: 'Acquistare un database esterno di email fredde da una terza parte equivale a raccogliere Zero-Party Data.',
            options: [
              { id: 'true', text: 'Vero - Zero Party significa dati degli altri' },
              { id: 'false', text: 'Falso - Quelli sono Third-Party Data (Spesso tossici o illegali nel CRM)' }
            ],
            correctAnswerId: 'false',
            explanation: 'Il CRM eccelle solo con First o Zero Party. I dati comprati esternamente (Third Party) violano la logica del consenso e rovinano la Deliverability quasi istantaneamente.'
          }
        ]
      },
      {
        id: 'les-6-5',
        title: 'VIP Management & Clienteling',
        objective: 'Disegnare esperienze esclusive per la porzione superiore del database.',
        theory: 'Legge di Pareto del CRM: Il 20% (o meno) dei tuoi utenti genera l’80% del profitto.\nQuando la segmentazione individua i clienti "Balena" (altissimo LTV), l’automazione standard non basta più. Si passa al "Clienteling": affiancare un essere umano (Customer Success o Personal Shopper) ai dati del CRM, per fornire un’esperienza assistita One-to-One d’élite (chiamate, regali di compleanno fisici, inviti ad anteprime fisiche).',
        example: 'Un utente ha speso 50.000€ l’anno scorso in abbigliamento. Invece della newsletter automatica di sconto del 10%, il CRM genera un task per lo store manager, che telefona per invitare l’utente a provare capi in area lounge chiusa al pubblico.',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-6-5-1',
            type: 'multiple-choice',
            question: 'Che cosa definisce il concetto avanzato di "Clienteling"?',
            options: [
              { id: 'a', text: 'Usare i dati del CRM per abilitare gli addetti vendita (fisici o virtuali) a creare relazioni umane iper-personalizzate con clienti chiave' },
              { id: 'b', text: 'Chiudere gli account di chi spende troppo poco' },
              { id: 'c', text: 'Sostituire completamente i venditori umani con chatbot AI di basso livello' },
              { id: 'd', text: 'Inviare email massive 3 volte al giorno ai VIP' }
            ],
            correctAnswerId: 'a',
            explanation: 'Il Clienteling è il ponte tra intelligenza dei dati (CRM) ed empatia umana (Store Associate). Usa il dato per orchestrare l’interazione umana dove l’automazione sarebbe troppo fredda.'
          },
          {
            id: 'ex-6-5-2',
            type: 'true-false',
            question: 'I clienti VIP solitamente abbandonano il brand se non ricevono costanti email con sconti sui prezzi.',
            options: [
              { id: 'true', text: 'Vero - Lo sconto è l’unica leva per i ricchi' },
              { id: 'false', text: 'Falso - I VIP cercano esclusività, servizio eccellente, riconoscimento di status e risparmio di tempo, non guerre di prezzo' }
            ],
            correctAnswerId: 'false',
            explanation: 'Nel lusso e nei servizi ad alto valore, la leva sconto squalifica il brand. Il tempo e il trattamento prioritario sono le vere valute di scambio.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // MODULO 7 — Omnichannel Orchestration
  // ==========================================
  {
    id: 'mod-7',
    title: 'MODULO 7 — Omnichannel Orchestration',
    description: 'Integrare SMS, WhatsApp, Push Notifications e Email senza infastidire l’utente e cannibalizzare i canali.',
    objective: 'Imparare a usare il canale giusto, per il messaggio giusto, valutando urgenza e costi transazionali.',
    lessons: [
      {
        id: 'les-7-1',
        title: 'La Piramide dei Canali (Costi vs Urgenza)',
        objective: 'Comprendere il peso strategico ed economico di ogni touchpoint di comunicazione.',
        theory: 'L’Omnicanalità non significa "inviare lo stesso messaggio ovunque". \nI canali si basano su due vettori: Costo di invio e Urgenza/Attenzione.\n- Email: Costo irrisorio. Lettura asincrona. Ottima per newsletter lunghe, cataloghi, ricevute.\n- SMS: Costo molto alto per unità. Lettura entro 3 minuti (urgenza altissima). Ideale per OTP (password), ritardi treni o offerte flash last-minute (Black Friday 2 ore).\n- Push (App): Costo zero. Urgenza media/alta. Richiede lo scaricamento di un’app proprietaria.',
        example: 'Inviare la fattura mensile via SMS a 10.000 clienti ti costerebbe 600€ inutilmente (il testo è asettico). Inviarla via email costa 0.05€.',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-7-1-1',
            type: 'multiple-choice',
            question: 'Stai gestendo una flotta aerea. C’è un ritardo drammatico del volo al Gate. Quale canale CRM usi in priorità?',
            options: [
              { id: 'a', text: 'Aggiorni il feed RSS del sito corporate' },
              { id: 'b', text: 'Una notifica SMS diretta e Push App per intercettare lo sguardo del passeggero entro pochi secondi' },
              { id: 'c', text: 'Un’email grafica con immagini HD dei tramonti della destinazione' },
              { id: 'd', text: 'Inviare un modulo cartaceo al domicilio dell’utente' }
            ],
            correctAnswerId: 'b',
            explanation: 'Altissima urgenza e bisogno vitale dell’informazione richiedono canali "Intrusivi" con 98% di Open Rate nei primi 3 minuti come l’SMS.'
          },
          {
            id: 'ex-7-1-2',
            type: 'matching',
            question: 'Abbina lo strumento CRM al suo scenario d’uso d’eccellenza.',
            pairs: [
              { id: 'p1', concept: 'Email Marketing', definition: 'Riepilogo e storytelling editoriale settimanale. Asincrono e visivo.' },
              { id: 'p2', concept: 'SMS Messaging', definition: 'Promozione flash lampo con link unico, alto costo d’invio.' },
              { id: 'p3', concept: 'In-App Message', definition: 'Onboarding a un utente che sta usando il software in tempo reale sul momento.' }
            ],
            explanation: 'Email per il nutrimento asincrono, SMS per l’impatto immediato esterno, In-App per guidare contestualmente all’utilizzo.'
          }
        ]
      },
      {
        id: 'les-7-2',
        title: 'Cross-Channel Capping e Decision Split',
        objective: 'Gestire la ridondanza logica tra touchpoint per tutelare l’ecosistema.',
        theory: 'La peggior esperienza omnicanale è ricevere lo stesso sollecito in triplice copia.\nNel Journey Builder, si usano regole logiche di priorità ("Decision Splits") per interrogare i consensi dell’utente: "Questo utente ha installato la nostra App? Se sì -> Push (costo 0). Se no -> Invia SMS (costo 5 centesimi)."\nQuesto azzera lo spreco di budget e le segnalazioni per disturbo persistente.',
        example: 'Flusso di Spedizione Inoltrata: Se c’è l’opt-in SMS, lo comunico via SMS e fermo l’Email. Oppure, mando l’Email con il tracking; se non la apre in 6 ore, gli invio un SMS di rinforzo.',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-7-2-1',
            type: 'journey-builder',
            question: 'Configura un flusso intelligente di sollecito rinnovo per non bruciare budget.',
            journeyCorrectSteps: [
              'Attivatore: Mancano 3 giorni alla scadenza abbonamento',
              'Controlla Consenso Canale: Ha opt-in per App Push?',
              'Se Sì -> Invia Push Notification Gratuita e Termina. Se No -> Passa al blocco sotto',
              'Invia Email di sollecito transazionale e Termina'
            ],
            explanation: 'Spingere l’interazione sui canali a costo zero (Push) preserva le marginalità, mantenendo i canali a pagamento come backup in un albero decisionale if/then.'
          },
          {
            id: 'ex-7-2-2',
            type: 'true-false',
            question: 'La vera Omnicanalità si ottiene premendo invia nello stesso momento esatto su Email, Messaggi Testo, Push e Social Ads.',
            options: [
              { id: 'true', text: 'Vero - Significa bombardare ovunque' },
              { id: 'false', text: 'Falso - L’orchestrazione garantisce che l’utente continui l’esperienza da dove l’ha lasciata su un altro canale, senza inutili doppioni persecutori' }
            ],
            correctAnswerId: 'false',
            explanation: 'Il concetto chiave è l’orchestrazione (Orchestration). I canali si "passano il testimone", non urlano insieme sovrapponendosi.'
          }
        ]
      },
      {
        id: 'les-7-3',
        title: 'WhatsApp Business API',
        objective: 'Conoscere le ferree regole anti-spam dell’ecosistema Meta (WhatsApp).',
        theory: 'WhatsApp ha tassi di apertura astronomici ma Meta (Facebook) impone blocchi severi:\n1. Non puoi inviare quello che vuoi. I primi messaggi (Business-Initiated) devono usare dei "Template" pre-approvati da Meta.\n2. La Regola delle 24 Ore (Customer Care Window): Se l’utente ti scrive (User-Initiated), hai 24 ore di tempo per rispondergli liberamente. Scadute le 24 ore, la conversazione si chiude e per riaprirla devi pagare per un nuovo template ufficiale.',
        example: 'Un cliente scrive su WhatsApp "Dov’è il mio ordine?". Rispondi in 5 minuti con un messaggio libero e non paghi la fee premium. Passano 3 giorni: vuoi chiedergli come si è trovato, devi pagare la tassa e mandare un "Utility Template" approvato in revisione.',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-7-3-1',
            type: 'multiple-choice',
            question: 'Cosa accade se un’azienda prova a inviare messaggi promozionali a freddo su WhatsApp Business senza usare template pre-approvati?',
            options: [
              { id: 'a', text: 'Vengono convertiti in messaggi vocali' },
              { id: 'b', text: 'La piattaforma API di Meta blocca l’invio o revoca l’account per violazione delle policy antispam' },
              { id: 'c', text: 'Passano ma costano di meno' },
              { id: 'd', text: 'Diventano invisibili ai minori' }
            ],
            correctAnswerId: 'b',
            explanation: 'Meta controlla attivamente che i brand non usino WA come fosse una casella email fredda. Il Quality Score dell’account dipende dal feedback negativo degli utenti (che se ti bloccano troppo in fretta chiudono il tuo account aziendale).'
          },
          {
            id: 'ex-7-3-2',
            type: 'true-false',
            question: 'La finestra temporale (Customer Care Window) di WhatsApp Business API dura 7 giorni dalla prima interazione dell’utente.',
            options: [
              { id: 'true', text: 'Vero - Lunga durata per supporto lento' },
              { id: 'false', text: 'Falso - Dura categoricamente 24 ore' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. Dura 24 ore solari. È stata concepita per forzare i brand a fornire un supporto clienti iper-reattivo ed evitare silenzi o follow-up di spam successivi.'
          }
        ]
      },
      {
        id: 'les-7-4',
        title: 'In-App Messages e Web Push',
        objective: 'Gestire il coinvolgimento contestuale e real-time.',
        theory: 'Mentre l’Email ti cerca a casa, gli In-App Messages e le notifiche In-Browser si materializzano MENTRE sei nel negozio. \n- Web Push: Mostrano notifiche su Chrome/Safari (alto tasso di opt-out se chiesti al secondo zero).\n- In-App Messages: Modal popup o banner a comparsa dentro l’app aziendale. Sono eccellenti per far scoprire nuove funzioni software (Feature Adoption) o dare codici sconto in stile Exit-Intent se l’utente fa per chiudere la pagina carrello.',
        example: 'L’utente apre la tua SaaS. Un modale grafico (In-app Message) copre il centro dello schermo dicendo: "Novità: Da oggi esporti in PDF in un clic!". Non è un’email, è contestuale all’uso dello strumento.',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-7-4-1',
            type: 'multiple-choice',
            question: 'Qual è il difetto più grande e comune nell’implementazione delle notifiche Web Push su un sito e-commerce?',
            options: [
              { id: 'a', text: 'Costano troppo per l’hosting del dominio' },
              { id: 'b', text: 'Visualizzare il prompt nativo del browser (Richiesta Autorizzazione) al secondo 0 della primissima visita, garantendo che il 99% dei visitatori clicchi su "Blocca" per infastidimento' },
              { id: 'c', text: 'Sono visibili solo nei giorni festivi' },
              { id: 'd', text: 'Si traducono in righe di codice errate' }
            ],
            correctAnswerId: 'b',
            explanation: 'Il momento esatto della richiesta (Opt-in Prompt Timing) è vitale. Se chiedi autorizzazioni push prima che l’utente abbia capito chi sei, ti bruci permanentemente il consenso sul suo browser.'
          },
          {
            id: 'ex-7-4-2',
            type: 'true-false',
            question: 'I messaggi In-App possono raggiungere anche utenti che hanno bloccato del tutto le Notifiche Push di sistema sul loro smartphone.',
            options: [
              { id: 'true', text: 'Vero - Poiché risiedono dentro l’applicazione in esecuzione e non sul centro notifiche di iOS/Android' },
              { id: 'false', text: 'Falso - Le impostazioni Push bloccano tutto l’ecosistema visivo' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. Gli In-App messagges eludono le barriere del sistema operativo proprio perché sono renderizzati in real-time dal codice dell’app solo mente l’utente vi è attivamente dentro e la sta visualizzando.'
          }
        ]
      },
      {
        id: 'les-7-5',
        title: 'Offline to Online (O2O)',
        objective: 'Tracciare l’utente dalla porta del negozio fisico alle piattaforme digitali.',
        theory: 'Il limite di molti brand storici è il silo informativo: online sanno tutto, offline (nei negozi su strada) il cliente spende migliaia di euro restando anonimo o pagando in contanti.\nSi usa la strategia O2O (Offline-to-Online) nel CRM: \n1. Raccolta dati al POS (Checkout in negozio tramite tessere virtuali da wallet).\n2. Offrire lo Scontrino Digitale (e-Receipt) via email per catturare la prima mail transazionale.\n3. Prenotazioni servizi su portale.',
        example: 'Entri da Nike. Compri scarpe. Il commesso chiede: "Vuoi lo scontrino di carta che sbiadisce, o te lo invio subito via mail assieme ai 100 punti del nostro club?". Eccellente transizione O2O nel database.',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-7-5-1',
            type: 'multiple-choice',
            question: 'Perché l’invio dello Scontrino Digitale in cassa (e-Receipt) è una manovra CRM d’eccellenza?',
            options: [
              { id: 'a', text: 'Salva tonnellate di carta e contemporaneamente funge da leva altissima e logica per convincere l’utente offline a cedere un’email autentica all’azienda, per arricchire la Single Customer View' },
              { id: 'b', text: 'Rende più lenta la fila in cassa così le persone guardano altri scaffali' },
              { id: 'c', text: 'Il governo vieta l’emissione di scontrini classici cartacei dal 2010' },
              { id: 'd', text: 'Trasforma i punti RFM in transazioni anonime' }
            ],
            correctAnswerId: 'a',
            explanation: 'È il miglior "Cavallo di Troia" etico del mondo fisico per innescare un utente offline all’interno dei funnel di marketing e ritenzione digitale (Email Benvenuto).'
          }
        ]
      }
    ]
  },

  // ==========================================
  // MODULO 8 — Advanced Analytics & B2B CRM
  // ==========================================
  {
    id: 'mod-8',
    title: 'MODULO 8 — Advanced Analytics & B2B CRM',
    description: 'Comprendere metriche finanziarie vitali, analisi di coorte e padroneggiare il passaggio da Marketing a Sales nel B2B.',
    objective: 'Saper parlare la lingua dei CFO per difendere i budget CRM, e allineare il Marketing con il reparto Vendite.',
    lessons: [
      {
        id: 'les-8-1',
        title: 'Analisi di Coorte (Cohort Analysis)',
        objective: 'Comprendere la salute della retention scindendo il pubblico per periodi temporali di attivazione.',
        theory: 'Un business che analizza gli iscritti in aggregato ("Tutti gli utenti trattati uguali") non capisce i veri problemi di churn.\nLa Cohort Analysis raggruppa gli utenti per il mese o periodo di prima acquisizione (es: "Coorte Ottobre 2025" vs "Coorte Novembre Black Friday").\nPermette di scoprire che: I clienti acquisiti durante sconti pesanti tendono ad abbandonare subito dopo il Mese 1, mentre i clienti acquisiti in periodi privi di sconti (Marzo) rimangono fedeli per 12 mesi.',
        example: 'Se guardi un grafico a matrice triangolare (Heatmap di Retention), potrai osservare se le modifiche al prodotto o ai prezzi fatte a Gennaio hanno migliorato i tassi di sopravvivenza al terzo mese per la "Coorte di Gennaio" rispetto all’anno precedente.',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-8-1-1',
            type: 'multiple-choice',
            question: 'Quale Insight di business fondamentale offre tipicamente una sana Analisi di Coorte nel CRM?',
            options: [
              { id: 'a', text: 'Il numero preciso di server AWS su cui gira il database master' },
              { id: 'b', text: 'Comprendere l’effetto della stagionalità, mostrando se gli utenti iscritti con campagne super-scontate restano fedeli nei mesi successivi o "muoiono" (churnano) velocemente rispetto ai normo-acquisiti' },
              { id: 'c', text: 'Mostra i colori che preferiscono le donne a Natale' },
              { id: 'd', text: 'Misura lo scroll tracking sui banner della home page' }
            ],
            correctAnswerId: 'b',
            explanation: 'Le coorti smascherano la qualità reale dell’acquisizione nel tempo. Spesso i mesi in cui entrano più clienti (BFCM) sono anche quelli che sfornano le coorti col Lifetime Value a lungo termine peggiore del calendario.'
          },
          {
            id: 'ex-8-1-2',
            type: 'true-false',
            question: 'Nelle tabelle di Cohort Analysis per retention, è perfettamente normale e fisiologico che al "Mese 0" (Mese d’acquisizione) il valore sia sempre indicizzato al 100%.',
            options: [
              { id: 'true', text: 'Vero - Poiché tutti quelli acquisiti esistono per definizione' },
              { id: 'false', text: 'Falso - Dovrebbe partire da 0 e salire nel tempo' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. La dimensione iniziale del gruppo parte sempre intatta al 100% nel Mese 0. L’analisi osserva di mese in mese quale percentuale di quel gruppo primordiale resta attiva (es: Mese 1 = 40%, Mese 2 = 25%).'
          }
        ]
      },
      {
        id: 'les-8-2',
        title: 'Metriche Finanziarie (CAC vs LTV)',
        objective: 'Dimostrare la redditività degli sforzi di ritenzione rispetto a quelli acquisitivi (Paid Ads).',
        theory: 'Il CRM esiste primariamente per abbassare la dipendenza dai costi pubblicitari e rendere i clienti redditizi a lungo termine.\n- CAC (Customer Acquisition Cost): Quanto spendiamo in Marketing/Sales per ottenere 1 nuovo cliente pagante.\n- LTV o CLV (Customer Lifetime Value): Il margine di profitto totale che un cliente genera durante l’intero arco di vita con noi.\nRegola del business sano SaaS o E-com: Il rapporto LTV:CAC deve essere superiore a 3:1. (Il cliente deve rendere almeno il triplo di quello che è costato portarlo in casa).',
        example: 'Spendiamo 50€ su Facebook per far comprare a Marco un prodotto che lascia un margine netto di 20€. Se lui non compra più niente nella sua vita, l’azienda fallisce (ha perso 30€). Se il CRM invia comunicazioni automatiche eccellenti e gli fa completare altri 4 ordini da 20€ di margine negli anni, il LTV sale a 100€ (Ratio 100/50 = 2:1).',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-8-2-1',
            type: 'kpi-calculator',
            question: 'Calcola il rapporto LTV/CAC. Spendi 40€ per acquisire un cliente. Nel suo ciclo di vita con te, lui spende totali 600€ sui quali tu hai un Margine Netto di Profitto percentuale del 20% (120€). (Rispondi con l’intero moltiplicatore X)',
            kpiFormulaData: { numbers: { ltvMargine: 120, costoAcquisizione: 40 }, targetKpi: 'LTV:CAC Ratio (X)', correctValue: 3, unit: 'x' },
            explanation: 'Se il Margine a vita è 120€ e ti costa 40€ acquisirlo, il rapporto è di 3 a 1 (120 / 40 = 3). Un business in perfetta salute che fa fruttare i dollari spesi.'
          },
          {
            id: 'ex-8-2-2',
            type: 'true-false',
            question: 'Il CRM Marketing impatta direttamente e in modo quasi esclusivo sul CAC abbassandolo alla fonte dai canali paid, ma non può alterare il valore LTV nel corso degli anni successivi.',
            options: [
              { id: 'true', text: 'Vero - Il marketing serve solo ad acquisire a basso costo via Google' },
              { id: 'false', text: 'Falso - È l’esatto opposto. Il CRM non manipola il costo paid in ingresso (CAC), ma è l’unico motore che spinge gli acquisti ripetuti successivi moltiplicando di fatto il LTV storico (Numeratore)' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. Il CRM Marketing inizia a performare al massimo "dopo" che l’acquisizione primaria si è conclusa. Il focus principale dei team Retention è far gonfiare in modo aggressivo il Lifetime Value prolungando gli ordini nel tempo e cross-vendendo accessori.'
          }
        ]
      },
      {
        id: 'les-8-3',
        title: 'B2B CRM & Lead Scoring',
        objective: 'Comprendere logiche di conversione lunghe basate sul punteggio del contatto.',
        theory: 'Nel settore B2B (vendita alle aziende di software o grossi macchinari), l’acquisto richiede mesi e passaggi complessi da buyer diversi. I "Lead" sono freddi all’inizio.\nIl CRM implementa logiche algoritmiche di "Lead Scoring" (Assegnazione automatica di un punteggio per dedurre quanto è interessato il contatto a comprare).\nSi basano su due Assi:\n- Qualità Demografica (Es: E’ un Direttore IT? +50 Punti. E’ uno Studente stagista? -100 Punti).\n- Coinvolgimento Comportamentale (Es: Ha aperto l’email? +5 Punti. Ha scaricato un Prezziario PDF? +20 Punti. Non visita sito da mesi? -15 Punti (Decadimento/Decay).',
        example: 'L’amministratore delegato Paolo scarica il whitepaper di un grosso ERP aziendale. Il suo punteggio CRM passa da 0 a 70 in 15 minuti netti, scatenando un Alert sul cruscotto operativo dell’agente di vendita designato.',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-8-3-1',
            type: 'multiple-choice',
            question: 'A cosa serve principalmente il meccanismo matematico del "Lead Scoring" in un database con migliaia di anagrafiche B2B?',
            options: [
              { id: 'a', text: 'Ad inviare sconti e coupon transazionali di fine stagione sulla base del genere maschile/femminile' },
              { id: 'b', text: 'A prioritizzare scientificamente i contatti, permettendo al team dei venditori (Sales) di chiamare telefonicamente solo quei pochi contatti "Caldi" che presentano punteggi di chiara intenzione d’acquisto, snellendo il lavoro a freddo inutile' },
              { id: 'c', text: 'Ad accorpare indirizzi duplicati nel medesimo nucleo cittadino o regione' },
              { id: 'd', text: 'A calcolare i tassi d’apertura delle newsletter automatiche' }
            ],
            correctAnswerId: 'b',
            explanation: 'Senza Lead Scoring, un venditore chiamerebbe i contatti in ordine alfabetico perdendo ore preziose. Il punteggio filtra la "spazzatura" e i curiosi, isolando le trattative reali mature e pronte.'
          },
          {
            id: 'ex-8-3-2',
            type: 'true-false',
            question: 'Nel calcolo del Lead Scoring è consigliato implementare regole di decadimento temporale (Time-Decay) che abbassano il punteggio se l’utente resta inattivo per settimane consecutive.',
            options: [
              { id: 'true', text: 'Vero - Il silenzio indica raffreddamento dell’interesse ed il punteggio deve rispecchiarlo per realismo temporale' },
              { id: 'false', text: 'Falso - Un punteggio accumulato non deve mai retrocedere per policy di stabilità anagrafica' }
            ],
            correctAnswerId: 'true',
            explanation: 'Vero. L’interesse nel mondo B2B decade velocemente se una persona valuta un competitor avverso. Se aveva 90 punti a Giugno ma a Settembre non fa accessi, non può più essere un Lead Bollente intatto sul cruscotto dei commerciali.'
          }
        ]
      },
      {
        id: 'les-8-4',
        title: 'MQL vs SQL (Smarketing Alignment)',
        objective: 'Disciplinare il momento esatto in cui un contatto passa dal mondo Marketing al mondo Vendite.',
        theory: 'L’allineamento "Smarketing" (Sales + Marketing) previene il caos aziendale definendo il passaggio del testimone o Funnel Handoff.\n- MQL (Marketing Qualified Lead): Il team Marketing certifica (tramite automazioni o il lead score > 50) che il lead è in target e ben educato sul problema (Es: Scarica i manuali e segue il blog). L’utente passa al Sales Team.\n- SQL (Sales Qualified Lead): Il venditore lo chiama o analizza, e certifica di persona (Budget autorizzato e autorità idonea) che questa è una trattativa seria con elevata probabilità di sfociare in chiusura di deal e contratto commerciale imminente.',
        example: 'Un impiegato si iscrive per scaricare un e-book (Lead). Poi segue tre webinar nel mese sulle funzionalità (diventa MQL ad alto score e balza al team sales). Il venditore lo chiama e scopre che non hanno budget di spesa quest’anno. Il lead NON diventa un SQL e viene rispedito in area Nurturing marketing in coda per il 2027.',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-8-4-1',
            type: 'ordering',
            question: 'Metti nel giusto ordine di qualificazione (dal contatto base alla chiusura finale) i principali stadi operativi per un CRM B2B integrato.',
            orderedSteps: [
              'Subscriber/Lead Base (Interessato ma acerbo o incognito)',
              'MQL (Marketing Qualified Lead - Educato e maturo coi Punteggi Alti)',
              'SQL (Sales Qualified Lead - Il commerciale conferma potenziale d’acquisto e budget aperto)',
              'Closed Won (Trattativa commerciale chiusa, contratto firmato e primo fatturato incassato)'
            ],
            initialStepsOrder: [
              'SQL (Sales Qualified Lead - Il commerciale conferma potenziale d’acquisto e budget aperto)',
              'Subscriber/Lead Base (Interessato ma acerbo o incognito)',
              'Closed Won (Trattativa commerciale chiusa, contratto firmato e primo fatturato incassato)',
              'MQL (Marketing Qualified Lead - Educato e maturo coi Punteggi Alti)'
            ],
            explanation: 'L’imbuto (Funnel) B2B restringe sempre di più il campo. Si passa da contatti "caldi" secondo gli algoritmi digitali (MQL) a vere opportunità di business certificate dall’umano (SQL) pronte a fatturare.'
          },
          {
            id: 'ex-8-4-2',
            type: 'multiple-choice',
            question: 'Qual è una classica problematica che nasce dall’assenza di un chiaro SLA (Service Level Agreement) o regole condivise tra Marketing e Vendite (Smarketing)?',
            options: [
              { id: 'a', text: 'I venditori accusano il marketing di passargli lead "spazzatura", e il marketing accusa i venditori di ignorare o bruciare i buoni contatti forniti col sudore' },
              { id: 'b', text: 'I lead vengono automaticamente trasferiti ai database dell’antitrust del governo europeo senza possibilità di rimedio' },
              { id: 'c', text: 'Tutti quanti iniziano a farsi sconti iperbolici sui prezzi senza alcun controllo o approvazione formale superiore' },
              { id: 'd', text: 'Diminuiscono i costi legati alle spedizioni merci su camion' }
            ],
            correctAnswerId: 'a',
            explanation: 'Il conflitto primordiale. Se Marketing non sa cosa definisce un "Lead Buono" per il Sales Team (es. Non è stato deciso a monte un punteggio limite valido), scattano frustrazioni croniche e dita puntate in riunione mensile sulla qualità percepita.'
          }
        ]
      },
      {
        id: 'les-8-5',
        title: 'Predictive AI in CRM',
        objective: 'Padroneggiare l’avvento del Machine Learning per decisioni di marketing anticipatorie e su larga scala.',
        theory: 'I vecchi CRM erano solo "Reattivi" (Mandavano email *dopo* che accadeva un evento trigger). I CRM moderni sono "Predittivi" o Proattivi.\nSfruttando oceani di Big Data (First Party storici) i modelli AI del CRM calcolano:\n- Send Time Optimization (STO): Analizza quando tu individualmente apri le email e le recapita esplicitamente in quel quarto d’ora, utente per utente.\n- Propensity Models: "Probabilità di acquisto nei prossimi 7 giorni" (se >80%, NON inviare sconti inutili) o "Rischio Churn prossimo trimestre" (se >90%, invia subito intervento Customer Success manuale).',
        example: 'Invece di segmentare i "Clienti VIP", generi dinamicamente l’audience con l’AI CRM: "Includi tutti i contatti con pCLV (Predictive Customer Lifetime Value) superiore a 5000€ per i prossimi dodici mesi solari futuri". Agisci sul futuro, non sul passato.',
        xpReward: 100,
        exercises: [
          {
            id: 'ex-8-5-1',
            type: 'multiple-choice',
            question: 'Quale incredibile e tangibile vantaggio porta la funzione di S.T.O (Send Time Optimization) in un invio massivo da 1 milione di iscritti newsletter?',
            options: [
              { id: 'a', text: 'Elimina l’attesa in coda dei provider permettendo invii illegali illimitati o sanzionati dal GDPR globale' },
              { id: 'b', text: 'Ogni utente nel cluster riceverà il massivo all’orario esatto in cui statisticamente lo vede o lo legge abitualmente. Ad Alessandro arriva alle 08:00 (mentre è in treno). A Marta arriva alle 22:30 (mentre naviga prima di dormire). Incrementando l’apertura aggregata globale.' },
              { id: 'c', text: 'Le email passano per fusi orari asiatici non crittografati che non impattano i dati metrici dei CRM' },
              { id: 'd', text: 'Fa risparmiare budget abbassando le fee dei provider email in base al traffico limitato serale' }
            ],
            correctAnswerId: 'b',
            explanation: 'Svincola il Marketing Manager dalla perenne e inutile riunione: "Qual è il giorno o l’ora migliore universale per inviare l’email?" L’AI deduce un tempo ottimizzato personalizzato (micro-moment) su scale non operabili a mano.'
          },
          {
            id: 'ex-8-5-2',
            type: 'true-false',
            question: 'I modelli predittivi CRM (es. Propensity to Churn) hanno la presunzione di leggere la mente dell’utente al 100% in modo esatto scartando i dati transazionali.',
            options: [
              { id: 'true', text: 'Vero - Usano chip neurali traccianti sui telefoni in forma esatta senza errare' },
              { id: 'false', text: 'Falso - Sono modelli probabilistici, statistiche derivate dall’analisi matematica di migliaia di pattern storici di decadimento dei First-party data simili che si ripetono in loop.' }
            ],
            correctAnswerId: 'false',
            explanation: 'Falso. L’AI predittiva non è magia o mind-reading; è un calcolo delle probabilità statistico addestrato (trained) sulle matrici di comportamenti storici in ingresso raccolti tramite i touchpoint.'
          }
        ]
      }
    ]
  }
];