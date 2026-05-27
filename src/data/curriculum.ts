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
      }
    ]
  }
];
