# CRM Marketing Lab — Local POC

CRM Marketing Lab è una web app didattica gamificata per allenarsi su CRM Marketing, customer lifecycle, segmentazione, campagne, journey, data quality e business case realistici.

L'app non è pensata come semplice trainer SQL: la parte dati è usata come supporto pratico per imparare a ragionare come CRM Specialist / CRM Analyst.

## Cosa contiene il POC

- Dashboard con XP, streak, lezioni completate, badge e prossima attività consigliata.
- Learning Path a moduli progressivi in stile percorso gamificato.
- Lezioni con micro-teoria, esercizi interattivi e feedback contestuale.
- Practice Lab visuale con dati CRM simulati, filtri, KPI cards e Data Analyst View opzionale.
- Business Case Arena con scenari realistici e risposta business motivata.
- Portfolio Mode che salva i casi completati come mini case study.
- Progressi salvati in `localStorage`.
- Nessun login, backend o API key richiesta.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS v4
- Lucide React
- Motion
- localStorage

## Avvio locale da VS Code

### 1. Installa Node.js

Installa Node.js LTS dal sito ufficiale. Dopo l'installazione, chiudi e riapri VS Code.

Verifica nel terminale:

```bash
node -v
npm -v
```

### 2. Apri il progetto

In VS Code:

```text
File > Open Folder
```

Apri la cartella del progetto, cioè quella che contiene `package.json`.

### 3. Installa dipendenze

```bash
npm install
```

### 4. Avvia la web app

```bash
npm run dev
```

Poi apri nel browser:

```text
http://localhost:3000
```

## Comandi utili

```bash
npm run dev       # avvia il server locale
npm run build     # genera la build di produzione
npm run preview   # visualizza la build
npm run lint      # controllo TypeScript
npm run typecheck # alias del controllo TypeScript
```

## Struttura progetto

```text
src/
  App.tsx
  main.tsx
  index.css
  types.ts
  components/
    Sidebar.tsx
    Dashboard.tsx
    LearningPath.tsx
    LessonPage.tsx
    PracticeLab.tsx
    BusinessCaseArena.tsx
    PortfolioPage.tsx
    BadgeGrid.tsx
  data/
    curriculum.ts
    businessCases.ts
    mockCrmData.ts
```

## Note POC

- I dati sono simulati e contenuti in `src/data/mockCrmData.ts`.
- Le lezioni sono definite in `src/data/curriculum.ts`.
- I business case sono definiti in `src/data/businessCases.ts`.
- La progressione è salvata nel browser; per resettarla usa il pulsante “Reset Progressi”.
- Non è richiesta nessuna chiave Gemini o API esterna.

## Miglioramenti già applicati in questa versione

- Rimosse dipendenze non usate da Gemini/Express per rendere il POC più leggero.
- Aggiornato README per uso locale da VS Code.
- Migliorato Practice Lab con UI più coerente arancione/bianco e focus visuale su segmentazione e KPI.
- Aggiunta navigazione mobile bottom-bar per rendere la web app più responsive.
- Sistemata configurazione Vite per localhost su porta 3000.
- Aggiornati metadata e `.env.example` per chiarire che non servono variabili obbligatorie.

## Prossimi step consigliati

1. Aggiungere più business case con difficoltà progressiva.
2. Aggiungere una modalità “Missione finale” alla fine di ogni modulo.
3. Rendere la Portfolio Mode esportabile in Markdown o PDF.
4. Aggiungere una sezione “Glossario CRM”.
5. Migliorare la validazione qualitativa delle risposte nei business case.
