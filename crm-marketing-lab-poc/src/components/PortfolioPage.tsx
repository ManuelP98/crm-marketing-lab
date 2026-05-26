import React from 'react';
import { 
  Award, 
  FileCheck, 
  Sparkles, 
  TrendingUp, 
  FolderLock, 
  Briefcase, 
  Tags, 
  CheckCircle, 
  ExternalLink 
} from 'lucide-react';
import { UserProgress } from '../types';

interface PortfolioPageProps {
  progress: UserProgress;
  setTab: (tab: string) => void;
}

export default function PortfolioPage({ progress, setTab }: PortfolioPageProps) {
  const completedCases = progress.portfolio;

  return (
    <div className="space-y-6" id="crm-portfolio-mode">
      {/* Intro section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Portfolio Mode</h2>
          <p className="text-slate-500 text-sm mt-1">
            Visualizza le schede riepilogative dei casi risolti. Usale per dimostrare le tue competenze reali nei colloqui di lavoro.
          </p>
        </div>

        <div className="bg-indigo-50/60 border border-indigo-250/50 px-4 py-2.5 rounded-xl text-xs text-indigo-900 shrink-0">
          Superati: <strong className="text-indigo-900 font-bold">{completedCases.length} su 5 casi</strong>
        </div>
      </div>

      {completedCases.length === 0 ? (
        /* Empty layout */
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-xl mx-auto space-y-5">
          <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
            <Briefcase size={28} />
          </div>
          
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-slate-950 font-sans tracking-tight">Il tuo portfolio è ancora vuoto</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Completa con successo le sfide nell’<b>Arena dei Casi di Business</b>. Per ciascun caso risolto correttamente, verrà generata una scheda riepilogativa professionale con i tuoi insight e raccomandazioni.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setTab('business-case-arena')}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-5 rounded-lg text-xs transition-all cursor-pointer"
            >
              Vai alla Business Arena
            </button>
          </div>
        </div>
      ) : (
        /* GRID OF COMPLETED SHEETS */
        <div className="space-y-8">
          <p className="text-xs text-slate-450 italic">
            *Queste schede riepilogative testimoniano la tua capacità di formulare diagnosi e raccomandazioni analitiche di fronte a scenari complessi del CRM Marketing.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {completedCases.map((pCase) => {
              return (
                <div 
                  key={pCase.id}
                  className="bg-white rounded-2xl border-2 border-slate-900 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all relative"
                >
                  {/* Executive Header banner */}
                  <div className="bg-slate-900 text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div>
                      <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
                        CRM MARKETING LAB — CASE STUDY SUMMARY
                      </span>
                      <h3 className="text-md font-bold tracking-tight text-white mt-1">
                        {pCase.title}
                      </h3>
                    </div>
                    
                    <div className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded font-mono uppercase flex items-center gap-1 shrink-0">
                      <CheckCircle size={12} className="fill-emerald-500 text-slate-900" />
                      {pCase.isExcellent ? 'VALUTAZIONE ECCELLENTE' : 'COMMITTATO'}
                    </div>
                  </div>

                  {/* Body grid content */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* Scenario briefing */}
                    <div className="md:col-span-5 space-y-4">
                      <div>
                        <h4 className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                          CONTESTO STRATEGICO (SCENARIO)
                        </h4>
                        <p className="text-xs text-slate-655 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-150">
                          {pCase.scenario}
                        </p>
                      </div>

                      <div className="pt-2">
                        <h4 className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-2">
                          COMPETENZE E CAPABILITÀ COMPROVATE
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {pCase.skillsProven.map((skill, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="bg-emerald-50 text-emerald-800 text-[10px] px-2.5 py-1 rounded-md border border-emerald-100 font-bold font-mono"
                            >
                              # {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Solutions layout & User logic entered */}
                    <div className="md:col-span-7 space-y-4.5 border-t md:border-t-0 md:border-l border-slate-150 md:pl-6 pt-4 md:pt-0">
                      
                      <div>
                        <h4 className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                          RISOLUZIONE SELEZIONATA (CONCLUSIONE ANALITICA)
                        </h4>
                        <p className="text-xs text-slate-950 font-semibold leading-relaxed bg-slate-900 text-white p-3.5 rounded-lg border">
                          {pCase.userAnswerText}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                          ANALISI EFFETTUATA ED INSIGHTS GENERATI (PROGETTO CANDIDATO)
                        </h4>
                        <div className="space-y-2">
                          {pCase.insightsGenerated.map((insight, iIdx) => (
                            <div key={iIdx} className="flex gap-2 text-xs leading-relaxed text-slate-702">
                              <span className="text-emerald-555 font-bold text-emerald-600 shrink-0">❖</span>
                              <span>{insight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-1.5">
                          RACCOMANDAZIONI OPERATIVE FINALI
                        </h4>
                        <div className="space-y-1.5">
                          {pCase.recommendations.map((rec, rIdx) => (
                            <div key={rIdx} className="flex gap-2 text-xs text-slate-651 italic">
                              <span className="text-emerald-600 font-bold font-mono">→</span>
                              <span>{rec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Footer certifying bar */}
                  <div className="px-6 py-3 bg-slate-50 border-t border-slate-150 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] text-slate-400 font-mono gap-1.5">
                    <span>REGISTRATO IL: <b>{pCase.dateCompleted}</b></span>
                    <span>CERTIFICAZIONE: <b>CRM-MKT-ID-{pCase.id.toUpperCase()}</b></span>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
