import { Module } from '../types';

export const curriculum: Module[] = [
  {
    id: 'mod-1',
    title: 'MODULO 1 — CRM Foundations',
    description: 'Capire ecosistema CRM, ciclo di vita cliente, touchpoint, dati e consenso.',
    objective: 'Costruire le basi teoriche del CRM Marketing.',
    lessons: [
      { id: 'les-1-1', title: 'Cos’è il CRM Marketing', objective: 'Comprendere lo scopo reale del CRM lato marketing.', theory: 'Il CRM Marketing non è solo un software, ma una strategia basata sui dati dei clienti. L’obiettivo è raccogliere, organizzare e usare informazioni per costruire relazioni durature e generare profitto. Si passa da comunicazioni di massa a comunicazioni mirate basate su comportamento, valore e fase del cliente.', example: 'Invece di inviare uno sconto generico a tutto il database, il CRM Specialist invia la promozione solo a chi ha visualizzato una categoria specifica negli ultimi 7 giorni.', xpReward: 50, exercises: [
        { id: 'ex-1-1-1', type: 'multiple-choice', question: 'Qual è l’obiettivo primario del CRM Marketing?', options: [{ id: 'a', text: 'Inviare più email possibile' }, { id: 'b', text: 'Costruire relazioni rilevanti e durature basate sui dati' }, { id: 'c', text: 'Sostituire Google Ads' }, { id: 'd', text: 'Fare solo SQL' }], correctAnswerId: 'b', explanation: 'Il CRM Marketing mira alla rilevanza e alla relazione nel tempo.' },
        { id: 'ex-1-1-2', type: 'true-false', question: 'Il CRM Marketing coincide solo con una licenza software.', options: [{ id: 'true', text: 'Vero' }, { id: 'false', text: 'Falso' }], correctAnswerId: 'false', explanation: 'Il software è solo lo strumento: servono strategia, processi e dati.' },
        { id: 'ex-1-1-3', type: 'matching', question: 'Abbina i concetti CRM alle definizioni.', pairs: [{ id: 'p1', concept: 'One-to-One Marketing', definition: 'Messaggi personalizzati in base al comportamento.' }, { id: 'p2', concept: 'Single Customer View', definition: 'Unificazione dei dati cliente in una scheda profilo.' }, { id: 'p3', concept: 'CRM Campaign', definition: 'Iniziativa mirata a uno specifico segmento.' }], explanation: 'La Single Customer View abilita campagne mirate e personalizzazione.' }
      ] },
      { id: 'les-1-2', title: 'Customer Lifecycle Stages', objective: 'Distinguere le fasi del ciclo di vita cliente.', theory: 'Il Customer Lifecycle descrive le fasi della relazione: Lead, Prospect, Active Customer, Inactive Customer e Loyal Customer. Ogni fase richiede obiettivi e messaggi diversi.', example: 'Chi scarica un PDF è Lead. Chi acquista da poco è Active Customer. Chi compra spesso e spende molto è Loyal Customer.', xpReward: 50, exercises: [
        { id: 'ex-1-2-1', type: 'multiple-choice', question: 'Un iscritto completa il primo ordine. Qual è la nuova fase?', options: [{ id: 'a', text: 'Lead' }, { id: 'b', text: 'Active Customer New' }, { id: 'c', text: 'Loyal Customer' }, { id: 'd', text: 'Inactive' }], correctAnswerId: 'b', explanation: 'Il primo acquisto trasforma il lead in cliente attivo.' },
        { id: 'ex-1-2-2', type: 'ordering', question: 'Ordina gli stadi dal primo contatto alla fidelizzazione.', orderedSteps: ['Lead / Subscriber', 'Active Customer New', 'Active Customer Repeat', 'Loyal Customer'], initialStepsOrder: ['Loyal Customer', 'Active Customer New', 'Lead / Subscriber', 'Active Customer Repeat'], explanation: 'Il percorso va dall’interesse iniziale alla ripetizione e fedeltà.' }
      ] },
      { id: 'les-1-3', title: 'Tipi di Dati CRM', objective: 'Classificare dati anagrafici, comportamentali e transazionali.', theory: 'I dati CRM si dividono in: anagrafici, cioè chi è il cliente; comportamentali, cioè cosa fa; transazionali, cioè cosa acquista e quanto spende.', example: 'Città è dato anagrafico. Clic email è dato comportamentale. Valore ordine è dato transazionale.', xpReward: 50, exercises: [
        { id: 'ex-1-3-1', type: 'multiple-choice', question: 'Il clic su una newsletter è un dato...', options: [{ id: 'a', text: 'Anagrafico' }, { id: 'b', text: 'Transazionale' }, { id: 'c', text: 'Comportamentale' }], correctAnswerId: 'c', explanation: 'I clic indicano comportamento e engagement.' }
      ] },
      { id: 'les-1-4', title: 'Touchpoint & Customer Journey', objective: 'Comprendere come i touchpoint formano la journey.', theory: 'Un touchpoint è ogni punto di contatto tra utente e brand. La customer journey è la sequenza di questi contatti. Mappare la journey serve a capire dove l’utente avanza o si blocca.', example: 'Sito → form → email welcome → acquisto → ticket assistenza.', xpReward: 50, exercises: [
        { id: 'ex-1-4-1', type: 'true-false', question: 'L’assistenza post-vendita non è un touchpoint utile per il CRM.', options: [{ id: 'true', text: 'Vero' }, { id: 'false', text: 'Falso' }], correctAnswerId: 'false', explanation: 'Il customer care è centrale per retention, soddisfazione e segmentazione.' }
      ] },
      { id: 'les-1-5', title: 'Consenso & Privacy', objective: 'Comprendere opt-in, opt-out e limiti del marketing.', theory: 'Senza consenso marketing valido non si possono inviare comunicazioni promozionali. L’opt-out deve essere semplice e rispettato. Le email transazionali hanno logiche diverse dalle DEM commerciali.', example: 'Inviare promozioni a un utente disiscritto danneggia legalità, reputazione e deliverability.', xpReward: 50, exercises: [
        { id: 'ex-1-5-1', type: 'multiple-choice', question: 'Cosa prevede il consenso corretto?', options: [{ id: 'a', text: 'Caselle pre-selezionate' }, { id: 'b', text: 'Azione attiva e inequivocabile' }, { id: 'c', text: 'Nessun consenso' }], correctAnswerId: 'b', explanation: 'Il consenso deve essere volontario, specifico e attivo.' }
      ] }
    ]
  },
  {
    id: 'mod-2',
    title: 'MODULO 2 — Segmentation & Audience',
    description: 'Creare segmenti utili, precisi e rispettosi dei consensi.',
    objective: 'Progettare audience rilevanti ed evitare sprechi.',
    lessons: [
      { id: 'les-2-1', title: 'Basi della Segmentazione', objective: 'Distinguere liste statiche e segmenti dinamici.', theory: 'Le liste statiche sono elenchi fissi. I segmenti dinamici si aggiornano in base a regole: se un cliente soddisfa i criteri entra, se non li soddisfa più esce.', example: 'Segmento Spesa > 500€: appena un utente supera la soglia entra automaticamente.', xpReward: 50, exercises: [
        { id: 'ex-2-1-1', type: 'segment-builder', question: 'Costruisci il segmento Nuovi Iscritti Raggiungibili.', targetSegmentCriteria: [{ field: 'signup_date', operator: '>=', value: '30 giorni fa' }, { field: 'lifecycle_stage', operator: '==', value: 'Lead' }, { field: 'marketing_consent', operator: '==', value: 'true' }], explanation: 'Servono iscrizione recente, status Lead e consenso valido.' }
      ] },
      { id: 'les-2-2', title: 'Includere vs Escludere', objective: 'Pulire l’audience con regole di esclusione.', theory: 'Una buona audience non definisce solo chi includere, ma anche chi escludere: clienti già convertiti, unsubscribed, record con ticket critici o dati non validi.', example: 'Per uno sconto primo acquisto includi lead, escludi clienti già acquirenti.', xpReward: 50, exercises: [
        { id: 'ex-2-2-1', type: 'multiple-choice', question: 'Offerta primo acquisto: quale audience?', options: [{ id: 'a', text: 'Tutto il database' }, { id: 'b', text: 'Lead con consenso, esclusi clienti già acquirenti' }], correctAnswerId: 'b', explanation: 'Lo sconto primo acquisto va a chi non ha ancora comprato.' }
      ] },
      { id: 'les-2-3', title: 'Campagne Winback', objective: 'Identificare clienti dormienti riattivabili.', theory: 'Il winback mira a riattivare clienti che hanno comprato in passato ma non acquistano da tempo. È più efficiente concentrarsi su clienti con valore storico e consenso attivo.', example: 'High value + ultimo acquisto > 90 giorni + marketing_consent true.', xpReward: 50, exercises: [
        { id: 'ex-2-3-1', type: 'segment-builder', question: 'Seleziona Clienti Dormienti ad Alto Valore.', targetSegmentCriteria: [{ field: 'total_spend', operator: '>', value: '1000' }, { field: 'last_purchase_date', operator: '<', value: '3 mesi fa' }, { field: 'marketing_consent', operator: '==', value: 'true' }], explanation: 'Alto valore e inattività recente definiscono un buon target winback.' }
      ] },
      { id: 'les-2-4', title: 'Segmentazione RFM', objective: 'Capire Recency, Frequency e Monetary.', theory: 'RFM misura quanto recentemente, quanto spesso e quanto valore genera un cliente. È utile per distinguere champion, nuovi clienti, clienti a rischio e dormienti ad alto valore.', example: '5-5-5 indica un cliente recente, frequente e ad alto valore.', xpReward: 50, exercises: [
        { id: 'ex-2-4-1', type: 'multiple-choice', question: 'RFM 5-1-1 indica...', options: [{ id: 'a', text: 'Cliente storico VIP' }, { id: 'b', text: 'Nuovo cliente recente da nutrire' }], correctAnswerId: 'b', explanation: 'Recency alta ma frequency e monetary basse indicano onboarding/nurturing.' }
      ] },
      { id: 'les-2-5', title: 'Prevenire l’Opt-Out', objective: 'Usare preference center e frequency capping.', theory: 'Troppa frequenza genera disiscrizioni. Un preference center permette di scegliere temi e frequenza. Il frequency capping limita la pressione comunicativa.', example: 'L’utente sceglie una email al mese invece di disiscriversi.', xpReward: 50, exercises: [
        { id: 'ex-2-5-1', type: 'multiple-choice', question: 'Cos’è un Preference Center?', options: [{ id: 'a', text: 'Pagina per modulare frequenza e temi' }, { id: 'b', text: 'Centralino clienti' }], correctAnswerId: 'a', explanation: 'Il preference center riduce opt-out e aumenta rilevanza.' }
      ] }
    ]
  },
  {
    id: 'mod-3',
    title: 'MODULO 3 — Analytics & KPI',
    description: 'Interpretare KPI reali e superare le vanity metrics.',
    objective: 'Prendere decisioni basate sui dati.',
    lessons: [
      { id: 'les-3-1', title: 'Open Rate e CTOR', objective: 'Calcolare e interpretare CTOR.', theory: 'Open Rate = aperture / recapitate. CTR = clic / recapitate. CTOR = clic / aperture e misura meglio quanto contenuto e offerta convincono chi ha aperto.', example: '800 aperture e 160 clic danno CTOR 20%.', xpReward: 50, exercises: [
        { id: 'ex-3-1-1', type: 'kpi-calculator', question: 'Calcola il CTOR. Aperte: 800, Clic: 160.', kpiFormulaData: { numbers: { aperte: 800, clic: 160 }, targetKpi: 'CTOR', correctValue: 20, unit: '%' }, explanation: '(160 / 800) * 100 = 20%.' }
      ] },
      { id: 'les-3-2', title: 'Business Metrics vs Vanity', objective: 'Privilegiare conversioni e revenue.', theory: 'Le vanity metrics sembrano buone ma non bastano. Le business metrics collegano le campagne a valore, conversioni, ordini e marginalità.', example: 'Open rate alto con zero vendite non è un successo.', xpReward: 50, exercises: [
        { id: 'ex-3-2-1', type: 'true-false', question: 'Apple Mail Privacy Protection rende l’open rate meno affidabile.', options: [{ id: 'true', text: 'Vero' }, { id: 'false', text: 'Falso' }], correctAnswerId: 'true', explanation: 'Le pre-aperture possono gonfiare il dato di apertura.' }
      ] },
      { id: 'les-3-3', title: 'Bounce Rate e Deliverability', objective: 'Distinguere soft e hard bounce.', theory: 'Soft bounce è temporaneo, hard bounce è definitivo. Gli hard bounce vanno esclusi per proteggere reputazione e deliverability.', example: 'Un dominio email inesistente genera hard bounce.', xpReward: 50, exercises: [
        { id: 'ex-3-3-1', type: 'multiple-choice', question: 'Cosa fare con un hard bounce?', options: [{ id: 'a', text: 'Riprovare sempre' }, { id: 'b', text: 'Escluderlo definitivamente' }], correctAnswerId: 'b', explanation: 'Continuare a inviare a indirizzi inesistenti danneggia la reputazione.' }
      ] },
      { id: 'les-3-4', title: 'Calcolo del ROI', objective: 'Calcolare ritorno sull’investimento.', theory: 'ROI = [(Ricavi - Costi) / Costi] * 100. Nel CRM i costi includono sconti, fee, produzione e piattaforme.', example: 'Ricavi 6000 e costi 1000 danno ROI 500%.', xpReward: 50, exercises: [
        { id: 'ex-3-4-1', type: 'kpi-calculator', question: 'Calcola il ROI. Ricavi: 6000€, Costi: 1000€.', kpiFormulaData: { numbers: { ricavi: 6000, costi: 1000 }, targetKpi: 'ROI', correctValue: 500, unit: '%' }, explanation: '[(6000 - 1000) / 1000] * 100 = 500%.' }
      ] },
      { id: 'les-3-5', title: 'A/B Testing', objective: 'Disegnare test robusti.', theory: 'Un A/B test confronta due versioni variando un solo elemento alla volta. Cambiare più elementi impedisce di capire cosa ha causato il risultato.', example: 'Testi due subject line, non subject e layout insieme.', xpReward: 50, exercises: [
        { id: 'ex-3-5-1', type: 'multiple-choice', question: 'Perché cambiare un solo elemento?', options: [{ id: 'a', text: 'Per isolare la causa della variazione' }, { id: 'b', text: 'Perché il software lo impone' }], correctAnswerId: 'a', explanation: 'Isolare la variabile permette di apprendere dal test.' }
      ] }
    ]
  },
  {
    id: 'mod-4',
    title: 'MODULO 4 — Journey & Automation',
    description: 'Progettare automatismi intelligenti e condizionali.',
    objective: 'Costruire journey con trigger, attese, split e uscite.',
    lessons: [
      { id: 'les-4-1', title: 'Anatomia di una Journey', objective: 'Capire trigger, wait, split ed exit.', theory: 'Una journey include trigger, attese, decision split ed exit criteria. Gli exit criteria evitano comunicazioni inutili dopo la conversione.', example: 'Entra se abbandona carrello, esci se acquista.', xpReward: 50, exercises: [
        { id: 'ex-4-1-1', type: 'journey-builder', question: 'Costruisci il flusso Carrello Abbandonato.', journeyStepPool: ['Attivatore: Carrello Abbandonato', 'Attesa: 4 Ore', 'Invia Email di Recupero', 'Esci se conclude l’ordine'], journeyCorrectSteps: ['Attivatore: Carrello Abbandonato', 'Attesa: 4 Ore', 'Invia Email di Recupero', 'Esci se conclude l’ordine'], explanation: 'Trigger, pausa, messaggio, uscita se conversione.' }
      ] },
      { id: 'les-4-2', title: 'Welcome Journey', objective: 'Ottimizzare onboarding post-iscrizione.', theory: 'La prima comunicazione dopo l’iscrizione ha grande attenzione. Serve a presentare valore, confermare aspettative e avviare la relazione.', example: 'Giorno 1 valori, giorno 3 social proof, giorno 6 offerta dedicata.', xpReward: 50, exercises: [
        { id: 'ex-4-2-1', type: 'multiple-choice', question: 'Miglior tempismo welcome email?', options: [{ id: 'a', text: 'Entro pochi minuti' }, { id: 'b', text: 'Dopo 7 giorni' }], correctAnswerId: 'a', explanation: 'L’interesse è massimo subito dopo l’iscrizione.' }
      ] },
      { id: 'les-4-3', title: 'Carrello Abbandonato Strategico', objective: 'Evitare sconti prematuri.', theory: 'Non conviene offrire sconti immediati. Prima si prova promemoria, poi rassicurazioni, poi incentivo se serve.', example: 'Uno sconto dopo 10 minuti educa ad abbandonare per ottenere coupon.', xpReward: 50, exercises: [
        { id: 'ex-4-3-1', type: 'multiple-choice', question: 'Rischio dello sconto immediato?', options: [{ id: 'a', text: 'Educa ad abbandonare per coupon' }, { id: 'b', text: 'Nessun rischio' }], correctAnswerId: 'a', explanation: 'Brucia margine su utenti che forse avrebbero acquistato comunque.' }
      ] },
      { id: 'les-4-4', title: 'Frequency Capping', objective: 'Limitare pressione comunicativa.', theory: 'Il frequency capping limita quante comunicazioni un utente riceve in un periodo. Evita fatigue, spam complaint e unsubscribe.', example: 'Se un utente è nella welcome journey, blocchi newsletter massive sovrapposte.', xpReward: 50, exercises: [
        { id: 'ex-4-4-1', type: 'true-false', question: 'Alta frequenza e irrilevanza distruggono il database.', options: [{ id: 'true', text: 'Vero' }, { id: 'false', text: 'Falso' }], correctAnswerId: 'true', explanation: 'È una delle principali cause di opt-out.' }
      ] },
      { id: 'les-4-5', title: 'Trigger Comportamentali', objective: 'Reagire al massimo intento.', theory: 'I trigger comportamentali inviano messaggi nel momento in cui un comportamento segnala interesse o bisogno.', example: 'Visita pagina prezzi VIP → follow-up sui vantaggi entro 24h.', xpReward: 50, exercises: [
        { id: 'ex-4-5-1', type: 'multiple-choice', question: 'Esempio di trigger utile?', options: [{ id: 'a', text: 'Promemoria rinnovo prima della scadenza' }, { id: 'b', text: 'Auguri in ritardo' }], correctAnswerId: 'a', explanation: 'Il trigger risponde a un bisogno reale e tempestivo.' }
      ] }
    ]
  },
  {
    id: 'mod-5',
    title: 'MODULO 5 — Data Quality & Consent',
    description: 'Capire come dati sporchi e consensi errati rovinano performance.',
    objective: 'Sanificare audience e proteggere qualità del dato.',
    lessons: [
      { id: 'les-5-1', title: 'Duplicati e Merge', objective: 'Preservare Single Customer View.', theory: 'I duplicati frammentano valore, storico e consensi. Il merge intelligente usa chiavi come email normalizzata per riunire i record.', example: 'Due Mario Rossi con 50€ e 200€ diventano un unico profilo da 250€.', xpReward: 50, exercises: [
        { id: 'ex-5-1-1', type: 'multiple-choice', question: 'Conseguenza dei duplicati?', options: [{ id: 'a', text: 'Frammentazione dati e invii doppi' }, { id: 'b', text: 'Performance migliori' }], correctAnswerId: 'a', explanation: 'I duplicati distorcono LTV e comunicazioni.' }
      ] },
      { id: 'les-5-2', title: 'Igiene dell’Audience', objective: 'Escludere record problematici.', theory: 'Email role-based, trap, typo e inattivi lunghi danneggiano deliverability. Serve pulizia preventiva.', example: 'Bloccare gmaill.com e info@ generici in campagne massive.', xpReward: 50, exercises: [
        { id: 'ex-5-2-1', type: 'true-false', question: 'Inviare a inattivi lunghi migliora reputazione IP.', options: [{ id: 'true', text: 'Vero' }, { id: 'false', text: 'Falso' }], correctAnswerId: 'false', explanation: 'I provider penalizzano invii a audience morte.' }
      ] },
      { id: 'les-5-3', title: 'Allineamento Consenso', objective: 'Sincronizzare opt-in e opt-out.', theory: 'Il consenso deve avere una fonte affidabile e aggiornata. Se un utente revoca consenso, ogni sistema deve saperlo.', example: 'Double opt-in conferma proprietà della casella email.', xpReward: 50, exercises: [
        { id: 'ex-5-3-1', type: 'multiple-choice', question: 'Cos’è double opt-in?', options: [{ id: 'a', text: 'Conferma tramite link email' }, { id: 'b', text: 'Iscriversi due volte manualmente' }], correctAnswerId: 'a', explanation: 'Verifica consenso e proprietà dell’inbox.' }
      ] },
      { id: 'les-5-4', title: 'Fallback e Dati Vuoti', objective: 'Gestire profili incompleti.', theory: 'Campi nulli possono rovinare personalizzazioni. I fallback sono valori di riserva quando manca un dato.', example: 'Se first_name manca, usare “Ciao!” invece di “Ciao Null”.', xpReward: 50, exercises: [
        { id: 'ex-5-4-1', type: 'multiple-choice', question: 'Fallback se manca il nome?', options: [{ id: 'a', text: 'Un saluto neutro' }, { id: 'b', text: 'Lasciare Null' }], correctAnswerId: 'a', explanation: 'Il fallback evita errori visibili.' }
      ] },
      { id: 'les-5-5', title: 'Sunset Policy', objective: 'Gestire contatti morti.', theory: 'La sunset policy identifica contatti senza engagement prolungato, tenta una riattivazione finale e poi archivia o sopprime.', example: 'Nessun clic/apertura da 180 giorni → campagna “ci manchi” → soppressione se nessuna risposta.', xpReward: 50, exercises: [
        { id: 'ex-5-5-1', type: 'multiple-choice', question: 'Vantaggio della sunset policy?', options: [{ id: 'a', text: 'Riduce pesi morti e protegge reputazione' }, { id: 'b', text: 'Diminuisce qualità KPI' }], correctAnswerId: 'a', explanation: 'Meglio pochi contatti sani che molti inattivi tossici.' }
      ] }
    ]
  },
  {
    id: 'mod-6',
    title: 'MODULO 6 — Advanced Retention & Loyalty',
    description: 'Superare la dipendenza dagli sconti con loyalty, referral e clienteling.',
    objective: 'Massimizzare CLV preservando marginalità.',
    lessons: [
      { id: 'les-6-1', title: 'Loyalty Programs', objective: 'Progettare punti, tiers e benefit.', theory: 'I programmi loyalty incentivano comportamento ricorrente. I punti creano accumulo, i tiers creano status e loss aversion. I reward esperienziali spesso valgono più degli sconti.', example: 'Accesso anticipato a collezione limitata può valere più di un 5% di sconto.', xpReward: 100, exercises: [
        { id: 'ex-6-1-1', type: 'multiple-choice', question: 'Quale benefit è esperienziale?', options: [{ id: 'a', text: 'Coupon 5%' }, { id: 'b', text: 'Accesso anticipato a collezione limitata' }, { id: 'c', text: 'Punti doppi' }], correctAnswerId: 'b', explanation: 'Status e scarsità creano valore percepito con basso costo.' },
        { id: 'ex-6-1-2', type: 'matching', question: 'Abbina reward e meccanica.', pairs: [{ id: 'p1', concept: 'Earn & Burn', definition: 'Accumulo punti convertibili in vantaggi.' }, { id: 'p2', concept: 'Tier Status', definition: 'Benefit basati su soglie annuali.' }, { id: 'p3', concept: 'Paid Membership', definition: 'Canone per ottenere benefit immediati.' }], explanation: 'Ogni modello loyalty usa leve psicologiche diverse.' }
      ] },
      { id: 'les-6-2', title: 'Referral Marketing', objective: 'Strutturare referral sostenibili.', theory: 'Il referral trasforma clienti in advocate. Il modello double-sided premia sia chi invita sia l’amico. Il premio va erogato solo dopo conversione valida per evitare frodi.', example: 'Invita un amico: lui riceve 15€, tu ricevi 15€ dopo il suo acquisto.', xpReward: 100, exercises: [
        { id: 'ex-6-2-1', type: 'multiple-choice', question: 'Quando premiare chi invita?', options: [{ id: 'a', text: 'Alla semplice email dell’amico' }, { id: 'b', text: 'Dopo ordine valido e pagato' }], correctAnswerId: 'b', explanation: 'Premiare prima del pagamento genera auto-inviti e frodi.' },
        { id: 'ex-6-2-2', type: 'ordering', question: 'Ordina il flusso referral.', orderedSteps: ['Cliente condivide link personale', 'Amico inserisce email', 'Amico completa primo acquisto', 'CRM verifica pagamento e sblocca premio'], initialStepsOrder: ['CRM verifica pagamento e sblocca premio', 'Cliente condivide link personale', 'Amico completa primo acquisto', 'Amico inserisce email'], explanation: 'La verifica del pagamento protegge il programma.' }
      ] },
      { id: 'les-6-3', title: 'Churn Involontario e Dunning', objective: 'Recuperare pagamenti falliti.', theory: 'Nel subscription business il churn può derivare da pagamento fallito. I flussi dunning avvisano prima della scadenza carta, concedono grace period e richiedono aggiornamento metodo di pagamento.', example: 'Carta scaduta → email pre-dunning → grace period → retry.', xpReward: 100, exercises: [
        { id: 'ex-6-3-1', type: 'multiple-choice', question: 'Scopo del pre-dunning?', options: [{ id: 'a', text: 'Avvisare prima della scadenza carta' }, { id: 'b', text: 'Cancellare subito account' }], correctAnswerId: 'a', explanation: 'Previene il fallimento del pagamento.' }
      ] },
      { id: 'les-6-4', title: 'Zero-Party Data', objective: 'Raccogliere preferenze dichiarate.', theory: 'Gli zero-party data sono informazioni che l’utente fornisce direttamente e consapevolmente. Sono preziosi perché riducono l’incertezza e aumentano rilevanza.', example: 'Quiz pelle grassa/secca in un brand cosmetico.', xpReward: 100, exercises: [
        { id: 'ex-6-4-1', type: 'multiple-choice', question: 'Perché gli zero-party data convertono bene?', options: [{ id: 'a', text: 'Sono comprati da terzi' }, { id: 'b', text: 'Sono preferenze dichiarate direttamente' }], correctAnswerId: 'b', explanation: 'Non devi indovinare: l’utente dichiara cosa vuole.' }
      ] },
      { id: 'les-6-5', title: 'VIP Management & Clienteling', objective: 'Gestire clienti ad altissimo valore.', theory: 'Il clienteling combina dati CRM e relazione umana per offrire esperienze ad alta personalizzazione ai VIP. Non tutto deve essere automatizzato.', example: 'Task allo store manager per invitare un top spender a un evento privato.', xpReward: 100, exercises: [
        { id: 'ex-6-5-1', type: 'multiple-choice', question: 'Cos’è il clienteling?', options: [{ id: 'a', text: 'Uso dati CRM per relazioni umane personalizzate' }, { id: 'b', text: 'Email massive ai VIP' }], correctAnswerId: 'a', explanation: 'È il ponte tra dati e relazione umana.' }
      ] }
    ]
  },
  {
    id: 'mod-7',
    title: 'MODULO 7 — Omnichannel Orchestration',
    description: 'Integrare email, SMS, WhatsApp, push e canali fisici.',
    objective: 'Scegliere canale giusto in base a urgenza, costo e contesto.',
    lessons: [
      { id: 'les-7-1', title: 'Piramide dei Canali', objective: 'Valutare costo e urgenza dei canali.', theory: 'Omnicanale non significa inviare ovunque. Email è economica e asincrona, SMS è costoso e urgente, push è economico ma richiede app.', example: 'Ritardo volo: SMS/push. Newsletter catalogo: email.', xpReward: 100, exercises: [
        { id: 'ex-7-1-1', type: 'multiple-choice', question: 'Ritardo drammatico al gate: canale prioritario?', options: [{ id: 'a', text: 'Feed RSS' }, { id: 'b', text: 'SMS e Push' }, { id: 'c', text: 'Email grafica lunga' }], correctAnswerId: 'b', explanation: 'Alta urgenza richiede canali immediati.' },
        { id: 'ex-7-1-2', type: 'matching', question: 'Abbina canale e uso.', pairs: [{ id: 'p1', concept: 'Email', definition: 'Storytelling asincrono e contenuti lunghi.' }, { id: 'p2', concept: 'SMS', definition: 'Messaggi urgenti e costosi.' }, { id: 'p3', concept: 'In-App', definition: 'Guida contestuale durante l’uso.' }], explanation: 'Ogni canale ha costo, intensità e contesto diversi.' }
      ] },
      { id: 'les-7-2', title: 'Cross-Channel Capping', objective: 'Evitare ridondanza tra canali.', theory: 'La vera orchestrazione evita doppioni. Si usano decision split per scegliere il canale migliore: se ha app push, usa push; altrimenti email o SMS.', example: 'Prima push gratuita, poi email backup se non disponibile.', xpReward: 100, exercises: [
        { id: 'ex-7-2-1', type: 'journey-builder', question: 'Configura un flusso rinnovo senza sprechi.', journeyStepPool: ['Attivatore: Mancano 3 giorni alla scadenza', 'Controlla opt-in Push', 'Se sì invia Push e termina', 'Se no invia Email e termina'], journeyCorrectSteps: ['Attivatore: Mancano 3 giorni alla scadenza', 'Controlla opt-in Push', 'Se sì invia Push e termina', 'Se no invia Email e termina'], explanation: 'Prioritizzare canali a costo zero preserva margine.' }
      ] },
      { id: 'les-7-3', title: 'WhatsApp Business API', objective: 'Conoscere template e finestra 24h.', theory: 'WhatsApp ha alta attenzione ma policy rigide. I messaggi business-initiated richiedono template approvati. Se l’utente scrive, la finestra customer care dura 24 ore.', example: 'Dopo 3 giorni devi usare un template approvato per riaprire conversazione.', xpReward: 100, exercises: [
        { id: 'ex-7-3-1', type: 'true-false', question: 'La finestra WhatsApp customer care dura 7 giorni.', options: [{ id: 'true', text: 'Vero' }, { id: 'false', text: 'Falso' }], correctAnswerId: 'false', explanation: 'Dura 24 ore.' }
      ] },
      { id: 'les-7-4', title: 'In-App Messages e Web Push', objective: 'Usare messaggi contestuali.', theory: 'In-app e web push agiscono mentre l’utente è in contesto. Il timing della richiesta opt-in è cruciale: chiederla subito spesso brucia il consenso.', example: 'Messaggio in-app per annunciare una nuova funzione mentre l’utente usa il prodotto.', xpReward: 100, exercises: [
        { id: 'ex-7-4-1', type: 'multiple-choice', question: 'Errore comune nelle web push?', options: [{ id: 'a', text: 'Chiedere opt-in al secondo zero' }, { id: 'b', text: 'Aspettare contesto utile' }], correctAnswerId: 'a', explanation: 'Chiedere troppo presto porta al blocco permanente.' }
      ] },
      { id: 'les-7-5', title: 'Offline to Online', objective: 'Collegare negozio fisico e CRM digitale.', theory: 'O2O porta dati offline nel CRM: tessere wallet, e-receipt, prenotazioni e identificazione POS. Serve a evitare clienti offline anonimi.', example: 'Scontrino digitale via email in cambio di punti club.', xpReward: 100, exercises: [
        { id: 'ex-7-5-1', type: 'multiple-choice', question: 'Perché l’e-receipt è utile?', options: [{ id: 'a', text: 'Raccoglie email reale e arricchisce profilo' }, { id: 'b', text: 'Rende più lenta la cassa' }], correctAnswerId: 'a', explanation: 'È una leva etica per collegare acquisto fisico e profilo CRM.' }
      ] }
    ]
  },
  {
    id: 'mod-8',
    title: 'MODULO 8 — Advanced Analytics & B2B CRM',
    description: 'Metriche finanziarie, coorti, lead scoring, sales alignment e AI CRM.',
    objective: 'Parlare la lingua business e allineare marketing, vendite e dati.',
    lessons: [
      { id: 'les-8-1', title: 'Cohort Analysis', objective: 'Analizzare retention per periodo di acquisizione.', theory: 'La cohort analysis raggruppa utenti per periodo di acquisizione e misura come restano attivi nel tempo. Permette di confrontare qualità di acquisizione e retention tra campagne o mesi.', example: 'Coorte Black Friday: tanti clienti ma retention bassa dopo mese 1.', xpReward: 100, exercises: [
        { id: 'ex-8-1-1', type: 'multiple-choice', question: 'Cosa mostra una cohort analysis?', options: [{ id: 'a', text: 'Numero server database' }, { id: 'b', text: 'Qualità e retention dei gruppi acquisiti nel tempo' }], correctAnswerId: 'b', explanation: 'Le coorti mostrano se gruppi acquisiti in momenti diversi restano attivi.' },
        { id: 'ex-8-1-2', type: 'true-false', question: 'Nel mese 0 di una coorte retention il valore parte normalmente da 100%.', options: [{ id: 'true', text: 'Vero' }, { id: 'false', text: 'Falso' }], correctAnswerId: 'true', explanation: 'Al mese 0 tutti gli utenti della coorte sono presenti per definizione.' }
      ] },
      { id: 'les-8-2', title: 'CAC vs LTV', objective: 'Leggere sostenibilità economica.', theory: 'CAC è il costo per acquisire un cliente. LTV/CLV è il valore generato dal cliente nel tempo. Un rapporto LTV:CAC sano indica che la retention ripaga l’acquisizione.', example: 'CAC 40€, margine lifetime 120€: rapporto 3x.', xpReward: 100, exercises: [
        { id: 'ex-8-2-1', type: 'kpi-calculator', question: 'Calcola LTV/CAC. LTV margine 120€, CAC 40€.', kpiFormulaData: { numbers: { ltvMargine: 120, costoAcquisizione: 40 }, targetKpi: 'LTV:CAC Ratio', correctValue: 3, unit: 'x' }, explanation: '120 / 40 = 3x.' }
      ] },
      { id: 'les-8-3', title: 'B2B CRM & Lead Scoring', objective: 'Capire scoring demografico e comportamentale.', theory: 'Nel B2B il ciclo è lungo. Il lead scoring assegna punti per fit demografico e segnali comportamentali. Serve a decidere quando passare un lead al sales.', example: 'Direttore IT +50, download pricing +20, inattività -15.', xpReward: 100, exercises: [
        { id: 'ex-8-3-1', type: 'multiple-choice', question: 'Quale segnale aumenta il lead score?', options: [{ id: 'a', text: 'Download del pricing PDF' }, { id: 'b', text: 'Nessuna visita da 12 mesi' }], correctAnswerId: 'a', explanation: 'Scaricare un pricing segnala intenzione commerciale.' }
      ] },
      { id: 'les-8-4', title: 'MQL, SQL e Sales Alignment', objective: 'Distinguere passaggi marketing-sales.', theory: 'MQL è un lead qualificato dal marketing. SQL è accettato o qualificato dalle vendite. Il passaggio richiede criteri chiari e SLA, altrimenti i lead caldi decadono.', example: 'Lead score > 80 + richiesta demo → MQL, poi sales follow-up entro 24h.', xpReward: 100, exercises: [
        { id: 'ex-8-4-1', type: 'true-false', question: 'Un MQL è automaticamente un cliente.', options: [{ id: 'true', text: 'Vero' }, { id: 'false', text: 'Falso' }], correctAnswerId: 'false', explanation: 'È qualificato dal marketing, ma deve ancora essere lavorato e convertito.' }
      ] },
      { id: 'les-8-5', title: 'AI Predictive CRM', objective: 'Capire modelli predittivi applicati al CRM.', theory: 'L’AI predittiva usa dati storici per stimare probabilità: churn risk, next best offer, propensione all’acquisto, lead conversion. Non legge la mente: calcola pattern statistici.', example: 'Un modello segnala clienti con alta probabilità di churn in base a calo engagement e tempo dall’ultimo acquisto.', xpReward: 100, exercises: [
        { id: 'ex-8-5-1', type: 'multiple-choice', question: 'Cosa fa un modello di churn prediction?', options: [{ id: 'a', text: 'Prevede con certezza il futuro' }, { id: 'b', text: 'Stima probabilità di abbandono su pattern storici' }], correctAnswerId: 'b', explanation: 'È una stima probabilistica basata sui dati, non una certezza.' }
      ] }
    ]
  }
];
