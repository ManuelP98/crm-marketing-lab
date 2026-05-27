import React, { useState } from 'react';
import { 
  Building, 
  HelpCircle, 
  Briefcase, 
  FileText, 
  Lock, 
  CheckCircle, 
  Sparkles, 
  Terminal, 
  Layers, 
  BookOpen, 
  Database,
  ArrowRight,
  ClipboardList,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BusinessCase, UserProgress, PortfolioCase } from '../types';
import { businessCases } from './../data/businessCases';
import { mockCrmData } from '../data/mockCrmData';

interface BusinessCaseArenaProps {
  progress: UserProgress;
  onSolveCase: (portfolioCase: PortfolioCase, bCase: BusinessCase, isExcellent: boolean) => void;
  activeCaseIdFromDashboard: string | null;
  clearActiveCaseIdFromDashboard: () => void;
}

export default function BusinessCaseArena({ 
  progress, 
  onSolveCase, 
  activeCaseIdFromDashboard,
  clearActiveCaseIdFromDashboard 
}: BusinessCaseArenaProps) {
  const [selectedCase, setSelectedCase] = useState<BusinessCase | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [userReasoning, setUserReasoning] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [activeDataTab, setActiveDataTab] = useState<'customers' | 'leads' | 'campaigns' | 'opportunities'>('customers');

  // Trigger from dashboard recommended action
  React.useEffect(() => {
    if (activeCaseIdFromDashboard) {
      const match = businessCases.find(c => c.id === activeCaseIdFromDashboard);
      if (match) {
        setSelectedCase(match);
        // Clear variables
        setSelectedOptionId(null);
        setUserReasoning('');
        setShowResult(false);
      }
      clearActiveCaseIdFromDashboard();
    }
  }, [activeCaseIdFromDashboard]);

  const completedCount = progress.completedLessons.length;

  const isCaseUnlocked = (index: number) => {
    if (index === 0) return true;
    return completedCount >= index * 4;
  };

  const currentCaseIdx = selectedCase ? businessCases.findIndex(c => c.id === selectedCase.id) : -1;

  const handleVerifyCaseAnswer = () => {
    if (!selectedCase || !selectedOptionId) return;

    const optSelected = selectedCase.options.find(o => o.id === selectedOptionId);
    const correct = optSelected ? optSelected.isCorrect : false;

    setIsAnswerCorrect(correct);
    setShowResult(true);

    if (correct) {
      // Determine if reasoning is high-quality (excellent reward)
      const isExcellent = userReasoning.trim().length > 60;
      
      // Skills extraction based on Case ID
      let skills = ['Analisi CRM', 'Data Driven Decision'];
      if (selectedCase.id === 'case-1') skills = ['Budget Allocation', 'ROI Optimization', 'LTV Analysis'];
      if (selectedCase.id === 'case-2') skills = ['GDPR Compliance', 'Database Hygiene', 'RFM Segmentation'];
      if (selectedCase.id === 'case-3') skills = ['CTOR Optimization', 'Email Quality Diagnosis', 'Performance Marketing'];
      if (selectedCase.id === 'case-4') skills = ['Lead Scoring', 'Funnel Friction Reduction', 'SLA alignment'];
      if (selectedCase.id === 'case-5') skills = ['Journey Mapping', 'Frequency Capping', 'Automated Welcomes'];

      const portfolioEntry: PortfolioCase = {
        id: selectedCase.id,
        title: selectedCase.title,
        dateCompleted: new Date().toISOString().split('T')[0],
        scenario: selectedCase.scenario,
        userAnswerText: optSelected ? optSelected.text : '',
        isExcellent,
        insightsGenerated: [
          `Riscontrato problema chiave nell'area: ${selectedCase.analysisArea}.`,
          `Rilevato comportamento delle metriche principali del DB.`,
          userReasoning.slice(0, 150) + (userReasoning.length > 150 ? '...' : '')
        ],
        recommendations: [
          `Attivare la raccomandazione strategica consigliata per il business.`,
          `Sondare gli impatti della Sunset Policy e dei criteri di sblocco delle notifiche CRM.`
        ],
        skillsProven: skills
      };

      onSolveCase(portfolioEntry, selectedCase, isExcellent);
    }
  };

  return (
    <div className="space-y-6" id="crm-business-arena">
      <AnimatePresence mode="wait">
        {!selectedCase ? (
          /* LIST OF BUSINESS CASES SCREEN */
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#121c2a] tracking-tight font-display">Business Case Arena</h2>
              <p className="text-slate-500 text-sm mt-1">
                Sfide professionali avanzate. Risolvi i problemi esposti dai direttori analizzando dati ed estraendo raccomandazioni.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessCases.map((bCase, index) => {
                const unlocked = isCaseUnlocked(index);
                const completed = progress.completedBusinessCases.includes(bCase.id);

                return (
                  <div
                    key={bCase.id}
                    className={`bg-white rounded-xl border p-5 flex flex-col justify-between min-h-[260px] md:h-[280px] shadow-sm relative overflow-hidden transition-all ${
                      completed 
                        ? 'border-[#00b251]/30 bg-[#00b251]/5 text-[#006e2f]' 
                        : unlocked 
                          ? 'border-slate-200 hover:border-[#f97316] hover:shadow-active-orange text-slate-800' 
                          : 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                          CASO {index + 1}
                        </span>
                        {completed ? (
                          <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm font-mono">
                            RISOLTO
                          </span>
                        ) : !unlocked ? (
                          <span className="text-slate-400 flex items-center gap-1.5 text-xs font-mono font-bold">
                            <Lock size={12} className="text-slate-400" /> BLOCKED
                          </span>
                        ) : (
                          <span className="bg-orange-50 text-[#f97316] border border-[#fed7aa] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm font-mono">
                            DISPONIBILE
                          </span>
                        )}
                      </div>

                      <h3 className="text-md font-extrabold text-[#121c2a] font-sans tracking-tight leading-snug">
                        {bCase.title.split(' — ')[1] || bCase.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 line-clamp-4 leading-relaxed font-sans font-medium">
                        {bCase.scenario}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center mt-3">
                      <span className="text-[#f97316] font-extrabold text-xs font-mono">
                        {completed ? 'Portfolio Generato' : bCase.xpReward + ' XP in premio'}
                      </span>
                      
                      {completed ? (
                        <button
                          onClick={() => { setSelectedCase(bCase); setSelectedOptionId(null); setUserReasoning(''); setShowResult(true); }}
                          className="text-slate-700 font-bold border border-slate-200 hover:bg-slate-50 text-[11px] px-3 py-1.5 rounded-md cursor-pointer font-sans transition-colors"
                        >
                          Riesamina Caso
                        </button>
                      ) : unlocked ? (
                        <button
                          onClick={() => setSelectedCase(bCase)}
                          className="bg-[#f97316] text-white font-bold hover:bg-[#e0620d] border-b-2 border-orange-700 text-[11px] px-4 py-1.5 rounded-md flex items-center gap-1 cursor-pointer transition-all shadow-sm active:translate-y-[1px] font-sans"
                        >
                          Analizza <ArrowRight size={12} />
                        </button>
                      ) : (
                        <span className="text-[10px] text-slate-500 font-mono italic">
                          Richiede {index * 4} lezioni completate
                        </span>
                      )}
                    </div>

                    {!unlocked && (
                      <div className="absolute inset-0 bg-slate-50/95 rounded-xl flex flex-col items-center justify-center text-center p-4">
                        <Lock size={22} className="text-[#f97316]" />
                        <p className="text-xs text-slate-800 font-bold mt-2 font-mono uppercase tracking-wide">COMPLETA {index * 4} LEZIONI</p>
                        <p className="text-[10px] text-slate-500 font-medium">Progresso attuale: {completedCount} lezioni</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          /* ACTIVE SOLVER SCREEN */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
            id={`solver-case-${selectedCase.id}`}
          >
            {/* Header controls inside case */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-b border-slate-205 pb-4">
              <button
                onClick={() => { setSelectedCase(null); setShowResult(false); }}
                className="flex items-center gap-1.5 text-xs font-sans font-bold text-slate-500 hover:text-[#f97316] transition-all uppercase cursor-pointer"
              >
                ← Esci e Torna All'Arena
              </button>

              <span className="text-[10px] sm:text-xs text-[#f97316] font-mono font-bold uppercase tracking-wider leading-relaxed">
                {selectedCase.title}
              </span>
            </div>

            {/* Split panels: Left: problem + data grids helper | Right: Question and answer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* LEFT COLUMN: SCENARIO + DATA EXPLORER ACCORDION */}
              <div className="lg:col-span-6 space-y-5">
                <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 font-bold text-xs text-slate-700 uppercase font-mono tracking-wider border-b border-slate-100 pb-2">
                    <ClipboardList className="text-[#f97316]" size={16} />
                    <span>Scenario del Problema</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#121c2a] tracking-tight leading-snug">{selectedCase.title}</h3>
                  <p className="text-xs text-slate-650 text-slate-600 leading-relaxed whitespace-pre-line bg-[#f8f9ff] p-4 rounded-xl border border-[#dee9fc] font-sans font-medium">
                    {selectedCase.scenario}
                  </p>
                  
                  <div className="rounded-xl border border-amber-300 bg-amber-50/50 p-4 space-y-1.5 leading-relaxed shadow-sm animate-fadeIn">
                    <span className="font-mono text-[9px] font-bold text-amber-700 bg-amber-100/60 border border-amber-200 px-2 py-0.5 rounded-full block w-fit">
                      Richiesta Direzione (CMO/VP)
                    </span>
                    <p className="text-xs text-[#584237] font-bold italic mt-1.5">
                      "{selectedCase.managerRequest}"
                    </p>
                  </div>
                </div>

                {/* HELPER: Sandboxed database views inside cases for extraction */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="flex items-center gap-2 font-bold text-xs text-slate-700 uppercase font-mono tracking-wider">
                      <Database className="text-[#f97316]" size={16} /> Database Esplora-Campione
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono italic">Sandbox Dati CRM</span>
                  </div>

                  <p className="text-[10px] text-slate-500 font-sans font-medium">
                    Utilizza questi pannelli per estrapolare le metriche utili a supportare la tua risposta analitica.
                  </p>

                  {/* Tabs mini inside helper */}
                  <div className="flex gap-2.5 border-b border-slate-100 py-1 overflow-x-auto">
                    {[
                      { id: 'customers', label: 'Customers' },
                      { id: 'leads', label: 'Leads' },
                      { id: 'campaigns', label: 'Campaigns' },
                      { id: 'opportunities', label: 'Opportunities' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveDataTab(tab.id as any)}
                        className={`text-[10px] font-bold font-mono tracking-wider px-2 py-1 border-b cursor-pointer transition-colors ${
                          activeDataTab === tab.id 
                            ? 'border-[#f97316] text-[#f97316]' 
                            : 'border-transparent text-slate-400 hover:text-[#f97316]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* MINI TABLE RENDERING */}
                  <div className="overflow-auto max-h-[180px] bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-[10px]/relaxed shadow-inner">
                    {activeDataTab === 'customers' && (
                      <table className="w-full text-left font-mono">
                        <thead>
                          <tr className="border-b border-orange-100 text-slate-500 font-bold uppercase tracking-wider text-[9px]">
                            <th className="p-1">ID</th>
                            <th className="p-1">Nome</th>
                            <th className="p-1">Stage</th>
                            <th className="p-1">Unsub</th>
                            <th className="p-1 text-right">Speso</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          {mockCrmData.customers.slice(0, 7).map(c => (
                            <tr key={c.customer_id} className="hover:bg-slate-100/55 transition-colors">
                              <td className="p-1 font-extrabold text-[#f97316]">{c.customer_id}</td>
                              <td className="p-1 font-sans font-bold text-slate-800">{c.first_name} {c.last_name[0]}.</td>
                              <td className="p-1 font-sans">
                                <span className="bg-[#fff7ed] text-[#f97316] font-bold text-[9px] px-1.5 py-0.5 rounded border border-[#fed7aa]">{c.lifecycle_stage}</span>
                              </td>
                              <td className="p-1 font-bold">{c.unsubscribed ? 'SI' : 'NO'}</td>
                              <td className="p-1 text-right font-bold text-slate-900">{c.total_spend}€</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                    {activeDataTab === 'leads' && (
                      <table className="w-full text-left font-mono">
                        <thead>
                          <tr className="border-b border-orange-100 text-slate-500 font-bold uppercase tracking-wider text-[9px]">
                            <th className="p-1">ID</th>
                            <th className="p-1">Source</th>
                            <th className="p-1 text-center font-bold">Score</th>
                            <th className="p-1 text-right">Stima</th>
                            <th className="p-1">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          {mockCrmData.leads.slice(0, 7).map(l => (
                            <tr key={l.lead_id} className="hover:bg-slate-100/55 transition-colors">
                              <td className="p-1 font-extrabold text-[#f97316]">{l.lead_id}</td>
                              <td className="p-1 font-sans font-bold text-slate-800">{l.source}</td>
                              <td className="p-1 text-center font-sans font-extrabold text-orange-950 bg-orange-50 px-1 py-0.2 rounded border border-[#fed7aa] text-[#f97316] font-bold">{l.lead_score}</td>
                              <td className="p-1 text-right font-bold text-slate-900">{l.estimated_value}€</td>
                              <td className="p-1 font-sans">
                                <span className="bg-slate-100 text-slate-700 font-bold text-[9px] px-1.5 py-0.5 rounded border border-slate-200">{l.status}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                    {activeDataTab === 'campaigns' && (
                      <table className="w-full text-left font-mono">
                        <thead>
                          <tr className="border-b border-orange-100 text-slate-500 font-bold uppercase tracking-wider text-[9px]">
                            <th className="p-1">ID</th>
                            <th className="p-1">Campagna</th>
                            <th className="p-1">Canale</th>
                            <th className="p-1 text-right">Budget</th>
                            <th className="p-1 text-right">Ricavi</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700 font-mono">
                          {mockCrmData.campaigns.map(camp => (
                            <tr key={camp.campaign_id} className="hover:bg-slate-100/55 transition-colors">
                              <td className="p-1 font-extrabold text-[#f97316]">{camp.campaign_id}</td>
                              <td className="p-1 font-sans font-bold text-slate-800">{camp.campaign_name}</td>
                              <td className="p-1 font-sans font-bold text-slate-800">{camp.channel}</td>
                              <td className="p-1 text-right text-slate-705 font-medium">{camp.budget}€</td>
                              <td className="p-1 text-right font-extrabold text-[#006e2f]">{camp.revenue || 0}€</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                    {activeDataTab === 'opportunities' && (
                      <table className="w-full text-left font-mono">
                        <thead>
                          <tr className="border-b border-orange-100 text-slate-500 font-bold uppercase tracking-wider text-[9px]">
                            <th className="p-1">ID</th>
                            <th className="p-1">Lead ID</th>
                            <th className="p-1">Stage</th>
                            <th className="p-1 text-right">Importo</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-705 text-slate-700">
                          {mockCrmData.opportunities.map(opp => (
                            <tr key={opp.opportunity_id} className="hover:bg-[#fff7ed]/40 transition-colors">
                              <td className="p-1 font-bold text-[#f97316]">{opp.opportunity_id}</td>
                              <td className="p-1">{opp.lead_id}</td>
                              <td className="p-1 font-sans font-bold">
                                <span className="bg-[#fff7ed]/80 text-[#f97316] text-[9px] px-1.5 py-0.5 rounded border border-[#fed7aa] font-bold">{opp.stage}</span>
                              </td>
                              <td className="p-1 text-right font-bold text-slate-950">{opp.amount}€</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: INTERACTIVE FORM FOR SUBMISSION */}
              <div className="lg:col-span-6 bg-slate-900/40 p-5 md:p-6 rounded-2xl border border-slate-800 shadow-md space-y-6">
                <div>
                  <span className="text-[9px] text-slate-500 font-mono font-bold uppercase tracking-wider block mb-1">
                    OBIETTIVO ANALISTA (MQL/SQL TARGET)
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                    {selectedCase.analyticalObjective}
                  </p>
                </div>

                {/* Opzioni di risposta */}
                <div className="space-y-3.5">
                  <h4 className="text-xs font-bold text-slate-700 uppercase font-mono border-b border-slate-100 pb-2">
                    Identifica la Diagnosi / Raccomandazione corretta:
                  </h4>
                  {selectedCase.options.map((opt) => {
                    const isSelected = selectedOptionId === opt.id;
                    return (
                      <button
                        key={opt.id}
                        disabled={showResult}
                        onClick={() => setSelectedOptionId(opt.id)}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs font-medium font-sans transition-all flex items-start gap-3.5 cursor-pointer ${
                          showResult
                            ? opt.isCorrect
                              ? 'bg-emerald-50 border-[#00b251] text-[#006e2f] font-semibold shadow-sm'
                              : isSelected
                                ? 'bg-red-50 border-red-500 text-red-700 border'
                                : 'bg-slate-50/50 border-slate-100 text-slate-400'
                            : isSelected
                              ? 'bg-[#fff7ed] border-[#f97316] text-[#9d4300] font-semibold shadow-sm'
                              : 'bg-slate-50/50 border-slate-200 hover:border-slate-350 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <span className="bg-slate-100 border border-slate-200 w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-mono font-bold text-[9px] text-slate-500">
                          {opt.label}
                        </span>
                        <span className="leading-relaxed">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Scrittura della Motivazione e Ragionamento (obbligatorio) */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-700 uppercase">
                    <span>Espone il tuo Ragionamento / Insight Analitico:</span>
                    <span className="text-[10px] text-slate-400 font-mono">Minimo 60 caratteri</span>
                  </div>
                  <textarea
                    disabled={showResult}
                    value={userReasoning}
                    onChange={(e) => setUserReasoning(e.target.value)}
                    placeholder="Esempio: Spiega i dati analitici che ti hanno guidato. 'Esaminando i closed_won per ciascuna campagna LinkedIn...'"
                    className="w-full h-32 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-[#f97316] transition-colors font-sans"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>Fornisci un ragionamento ben articolato per meritare la qualifica "Eccellente".</span>
                    <span className={userReasoning.length >= 60 ? 'text-[#f97316] font-bold' : 'text-slate-400'}>
                      {userReasoning.length} caratteri inseriti
                    </span>
                  </div>
                </div>

                {/* Results/Feedback section */}
                {showResult && (
                  <div className={`p-4 rounded-xl border space-y-3 text-xs leading-relaxed ${
                    isAnswerCorrect 
                      ? 'bg-emerald-50 border-[#00b251]/30 text-[#006e2f]' 
                      : 'bg-red-50 border-red-200 text-red-900'
                  }`}>
                    <div className="flex items-center gap-2">
                      {isAnswerCorrect ? (
                        <CheckCircle size={18} className="text-[#00b251] shrink-0" />
                      ) : (
                        <X size={18} className="text-red-500 shrink-0" />
                      )}
                      <h5 className="font-extrabold font-mono uppercase text-sm tracking-wide">
                        {isAnswerCorrect ? 'Caso Risolto con Successo!' : 'Conclusione non corretta'}
                      </h5>
                    </div>
                    
                    <p className="font-semibold text-slate-700">{selectedCase.explanation}</p>
                    
                    {isAnswerCorrect && (
                      <div className="pt-2.5 border-t border-slate-200/60 space-y-2.5 text-[11px] text-slate-600 font-sans">
                        <p className="leading-relaxed">
                          <b className="font-mono text-[#f97316] uppercase text-[9px] bg-[#fff7ed] border border-[#fed7aa] rounded px-1.5 py-0.5 mr-1 tracking-wider inline-block">La Voce dell'Esperto:</b> {selectedCase.caveat}
                        </p>
                        <p className="leading-relaxed">
                          <b className="font-mono text-emerald-700 uppercase text-[9px] bg-emerald-55 bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5 mr-1 tracking-wider inline-block">Analisi Successiva:</b> {selectedCase.nextRecommendedAnalysis}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Submission bottom actions controls */}
                <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => { setSelectedCase(null); setShowResult(false); }}
                    className="text-slate-500 hover:text-[#f97316] text-xs font-sans font-bold uppercase transition-colors cursor-pointer"
                  >
                    Annulla
                  </button>

                  {!showResult ? (
                    <button
                      disabled={!selectedOptionId || userReasoning.trim().length === 0}
                      onClick={handleVerifyCaseAnswer}
                      className="w-full sm:w-auto bg-[#f97316] text-white hover:bg-[#e0620d] border-b-2 border-orange-700 text-xs font-sans font-bold px-5 py-3 sm:py-2.5 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-center shadow-sm active:translate-y-[1px] transition-all uppercase tracking-wide"
                    >
                      Sottoponi Analisi alla Direzione
                    </button>
                  ) : (
                    <button
                      onClick={() => { setSelectedCase(null); setShowResult(false); }}
                      className="w-full sm:w-auto bg-[#00b251] text-white hover:bg-[#009641] border-b-2 border-emerald-800 text-xs font-sans font-bold px-6 py-3 sm:py-2.5 rounded-lg block cursor-pointer transition-colors shadow-sm uppercase tracking-wide"
                    >
                      Torna all'Arena
                    </button>
                  )}
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
