import React from 'react';
import { 
  Trophy, 
  BookOpen, 
  TrendingUp, 
  AlertCircle, 
  MapPin, 
  Sparkles, 
  Flame, 
  FolderLock, 
  FolderKey 
} from 'lucide-react';
import { UserProgress, Module, Lesson, BusinessCase, Badge } from '../types';
import { curriculum } from '../data/curriculum';
import { businessCases } from '../data/businessCases';

// Import badges configuration to show in dashboard
const ALL_BADGES: Badge[] = [
  { id: 'crm-rookie', name: 'CRM Rookie', description: 'Completa la tua primissima lezione.', requirement: 'Completa 1 lezione', iconName: 'Compass' },
  { id: 'seg-starter', name: 'Segmentation Starter', description: 'Supera le basi della segmentazione di campagna.', requirement: 'Completa Modulo 2 Lezione 1', iconName: 'Grid' },
  { id: 'aud-builder', name: 'Audience Builder', description: 'Progetta audience e filtri di esclusione perfetti.', requirement: 'Completa Modulo 2 intero', iconName: 'Sparkles' },
  { id: 'camp-analyst', name: 'Campaign Analyst', description: 'Interpreta i KPI e scopri le vanity metrics.', requirement: 'Completa Modulo 3 intero', iconName: 'TrendingUp' },
  { id: 'jrny-designer', name: 'Journey Designer', description: 'Costruisci flussi e percorsi di benvenuto.', requirement: 'Completa Modulo 4 intero', iconName: 'MapPin' },
  { id: 'data-guardian', name: 'Data Quality Guardian', description: 'Risolvi problemi di dati sporchi e record duplicati.', requirement: 'Completa Modulo 5 intero', iconName: 'AlertCircle' },
  { id: 'consent-chk', name: 'Consent Checker', description: 'Gestisci il consenso marketing e le disiscrizioni.', requirement: 'Completa lezione Consenso', iconName: 'Shield' },
  { id: 'case-solver', name: 'Business Case Solver', description: 'Risolvi con successo il tuo primo caso di business.', requirement: 'Risolvi 1 Business Case', iconName: 'BookOpen' },
  { id: 'crm-strategist', name: 'CRM Strategist', description: 'Completa tutti ed i 5 casi di business dell’arena.', requirement: 'Risolvi tutti i 5 casi', iconName: 'Trophy' }
];

interface DashboardProps {
  progress: UserProgress;
  onNavigateToLesson: (lessonId: string) => void;
  onNavigateToBusinessCase: (caseId: string) => void;
  setTab: (tab: string) => void;
}

export default function Dashboard({ progress, onNavigateToLesson, onNavigateToBusinessCase, setTab }: DashboardProps) {
  const currentLevel = Math.floor(progress.xp / 150) + 1;
  const xpInCurrentLevel = progress.xp % 150;

  // Compute next recommended lesson
  let recommendedLesson: Lesson | null = null;
  let recommendedModule: Module | null = null;

  for (const mod of curriculum) {
    for (const les of mod.lessons) {
      if (!progress.completedLessons.includes(les.id)) {
        recommendedLesson = les;
        recommendedModule = mod;
        break;
      }
    }
    if (recommendedLesson) break;
  }

  // Fallback if all lessons are completed
  if (!recommendedLesson) {
    recommendedModule = curriculum[0];
    recommendedLesson = curriculum[0].lessons[0];
  }

  // Unlocked business cases (All unlocked, or progress sbs)
  const completedCount = progress.completedLessons.length;
  // Let's unlock business cases based on completed lessons. Say 1 case unlocks per 4 lessons completed, or they are all playable (progressive based on modules completed).
  // Let's unlock them progressively: Case 1 is unlocked. Case 2 requires 4 completed lessons, Case 3 requires 8, Case 4 requires 12, Case 5 requires 16.
  const getCaseUnlockStatus = (index: number) => {
    if (index === 0) return true;
    return completedCount >= index * 4;
  };

  const unlockedBadgesCount = progress.unlockedBadges.length;  return (
    <div className="space-y-8" id="crm-dashboard">
      {/* Header and Welcome */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-orange-100 pb-6">
        <div>
          <h2 className="text-3xl font-extrabold text-[#121c2a] tracking-tight font-display">CRM Marketing Lab</h2>
          <p className="text-slate-600 text-sm mt-1">
            Impara il Customer Relationship Marketing in modo pratico, mirato e guidato da dati reali.
          </p>
        </div>
        <div className="bg-[#fff7ed] border border-[#fed7aa] px-4 py-2.5 rounded-xl flex items-center gap-3 shadow-active-orange">
          <Sparkles className="text-[#f97316] shrink-0 animate-pulse" size={20} />
          <div className="text-sm font-semibold text-orange-950">
            Dedicato a futuri <strong className="text-[#f97316] font-bold">CRM Specialist & Analysts</strong>
          </div>
        </div>
      </div>

      {/* Grid of Key Gamified Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-xl border border-[#fed7aa] shadow-sm hover:shadow-active-orange transition-all flex items-center justify-between">
          <div className="p-3 bg-orange-100 text-[#f97316] rounded-xl">
            <Trophy size={24} className="fill-[#f97316]/10" />
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-500 font-mono font-bold tracking-wider uppercase">XP TOTALI</p>
            <h3 className="text-3xl font-black text-[#121c2a] mt-0.5 font-display">{progress.xp}</h3>
            <p className="text-[11px] text-orange-600 font-medium">Livello {currentLevel} raggiunto</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#fed7aa] shadow-sm hover:shadow-active-orange transition-all flex items-center justify-between">
          <div className="p-3 bg-red-100 text-red-600 rounded-xl">
            <Flame size={24} className="fill-red-600/10" />
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-500 font-mono font-bold tracking-wider uppercase">STREAK</p>
            <h3 className="text-3xl font-black text-[#121c2a] mt-0.5 font-display">{progress.streak} GG</h3>
            <p className="text-[11px] text-red-600 font-medium">Giorni consecutivi attivi</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#fed7aa] shadow-sm hover:shadow-active-orange transition-all flex items-center justify-between">
          <div className="p-3 bg-emerald-150 bg-emerald-100 text-emerald-600 rounded-xl">
            <BookOpen size={24} />
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-500 font-mono font-bold tracking-wider uppercase">LEZIONI COMPLETATE</p>
            <h3 className="text-2xl font-black text-[#121c2a] mt-0.5 font-display">{completedCount} / 25</h3>
            <p className="text-[11px] text-[#22c55e] font-semibold">
              {Math.floor((completedCount / 25) * 100)}% Completato
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#fed7aa] shadow-sm hover:shadow-active-orange transition-all flex items-center justify-between">
          <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
            <TrendingUp size={24} />
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-500 font-mono font-bold tracking-wider uppercase">PORTFOLIO & BADGE</p>
            <h3 className="text-3xl font-black text-[#121c2a] mt-0.5 font-display">
              {progress.portfolio.length} / {unlockedBadgesCount}
            </h3>
            <p className="text-[11px] text-indigo-600 font-medium">Casi risolti / Badge vinti</p>
          </div>
        </div>
      </div>

      {/* Main split sections: Recommended & Arena status */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
        
        {/* Left Column: Recommended Lesson Card, Skills */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Prossima Lezione consigliata */}
          {recommendedLesson && recommendedModule && (
            <div className="bg-white border border-[#fed7aa] p-6 rounded-xl shadow-active-orange relative overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-0.5">
              <div className="mr-20 z-10">
                <span className="bg-orange-55 bg-orange-100 text-[#f97316] border border-[#fed7aa] font-mono uppercase text-[10px] font-bold px-3 py-1 rounded-full">
                  Prossima Lezione Consigliata
                </span>
                <p className="text-xs text-slate-500 mt-4 font-mono tracking-wide uppercase font-bold">{recommendedModule.title}</p>
                <h3 className="text-xl font-bold mt-1 text-[#121c2a] font-display">{recommendedLesson.title}</h3>
                <p className="text-slate-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                  {recommendedLesson.objective}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex justify-between items-center z-10">
                <span className="text-xs text-[#f97316] font-mono font-bold">+ {recommendedLesson.xpReward} XP</span>
                <button
                  onClick={() => onNavigateToLesson(recommendedLesson!.id)}
                  className="bg-[#f97316] hover:bg-[#e0620d] border-b-2 border-[#b84c00] text-white text-xs font-bold font-display px-5 py-2.5 rounded-md transition-all active:translate-y-[1px] cursor-pointer tracking-wider uppercase shadow-sm"
                  id="btn-dash-start-lesson"
                >
                  Inizia ora →
                </button>
              </div>
              
              {/* Abs decoration icon */}
              <BookOpen className="absolute right-6 top-6 text-orange-200/20" size={64} />
            </div>
          )}

          {/* Skill piu deboli ed aree di miglioramento */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
              Aree di Miglioramento & Skill Focus
            </h4>
            
            <div className="space-y-3">
              {progress.weakestSkills.length > 0 ? (
                progress.weakestSkills.map((skill, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3.5 rounded-xl bg-[#fff7ed] border border-[#fed7aa] text-orange-950">
                    <div className="flex items-center gap-2.5">
                      <AlertCircle className="text-[#f97316] shrink-0" size={16} />
                      <span className="text-slate-800 text-xs font-bold">{skill}</span>
                    </div>
                    <button 
                      onClick={() => setTab('learning-path')} 
                      className="text-[11px] font-bold text-[#f97316] hover:text-[#e0620d] hover:underline cursor-pointer"
                    >
                      Ripassa Modulo
                    </button>
                  </div>
                ))
              ) : (
                <div className="p-4 rounded-xl bg-[#fff7ed]/40 border border-orange-100 text-center">
                  <p className="text-slate-600 text-xs font-medium">
                    Tutte le tue skill sono calibrate! Completa più lezioni per far emergere nuovi focus.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-2">
              <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2.5 font-mono">
                Competenze Sviluppate
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#f8f9ff]/80 text-slate-700 border border-slate-200 text-[10px] px-2.5 py-1.5 rounded-full font-mono font-bold shadow-sm">Customer Lifecycle</span>
                <span className="bg-[#f8f9ff]/80 text-slate-700 border border-slate-200 text-[10px] px-2.5 py-1.5 rounded-full font-mono font-bold shadow-sm">Marketing Consent</span>
                <span className="bg-[#f8f9ff]/80 text-slate-700 border border-slate-200 text-[10px] px-2.5 py-1.5 rounded-full font-mono font-bold shadow-sm">RFM Segmentation</span>
                <span className="bg-[#f8f9ff]/80 text-slate-700 border border-slate-200 text-[10px] px-2.5 py-1.5 rounded-full font-mono font-bold shadow-sm">A/B Testing</span>
                <span className="bg-[#f8f9ff]/80 text-slate-700 border border-slate-200 text-[10px] px-2.5 py-1.5 rounded-full font-mono font-bold shadow-sm">Email Deliverability</span>
                <span className="bg-[#f8f9ff]/80 text-slate-700 border border-slate-200 text-[10px] px-2.5 py-1.5 rounded-full font-mono font-bold shadow-sm">Automation Arch</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Business Case Arena Highlights */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                Business Case Arena
              </h4>
              <button 
                onClick={() => setTab('business-case-arena')}
                className="text-xs text-[#f97316] hover:text-[#e0620d] hover:underline font-bold cursor-pointer"
              >
                Vedi tutti
              </button>
            </div>
            
            <p className="text-xs text-slate-600 leading-relaxed">
              Mettiti alla prova come CRM Specialist. Esplora dati simulati e rispondi alle richieste dei manager.
            </p>

            <div className="space-y-3">
              {businessCases.slice(0, 3).map((bCase, index) => {
                const unlocked = getCaseUnlockStatus(index);
                const completed = progress.completedBusinessCases.includes(bCase.id);

                return (
                  <div 
                    key={bCase.id} 
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                      completed 
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                        : unlocked 
                          ? 'bg-[#f8f9ff] hover:bg-slate-50 border-slate-250 text-slate-800 shadow-sm hover:border-[#fed7aa]' 
                          : 'bg-slate-50 border-slate-100 text-slate-450 opacity-60'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 col-span-2">
                        <h5 className="font-bold text-xs text-[#121c2a]">{bCase.title}</h5>
                        {completed && (
                          <span className="bg-emerald-100 border border-emerald-300 text-emerald-700 text-[8px] px-1.5 py-0.2 rounded font-mono font-bold uppercase">
                            RISOLTO
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{bCase.analysisArea}</p>
                    </div>

                    <div>
                      {completed ? (
                        <button
                          onClick={() => setTab('portfolio')}
                          className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border border-emerald-250 text-[10px] font-bold px-3 py-1.5 rounded-md transition-colors cursor-pointer font-display uppercase tracking-wider"
                        >
                          Portfolio
                        </button>
                      ) : unlocked ? (
                        <button
                          onClick={() => onNavigateToBusinessCase(bCase.id)}
                          className="bg-[#f97316] hover:bg-[#e0620d] text-white text-[10px] font-medium font-display px-3 py-1.5 rounded-md transition-colors cursor-pointer uppercase tracking-wider shadow-sm"
                        >
                          Risolvi
                        </button>
                      ) : (
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                          <FolderLock size={12} className="opacity-60" /> Lock
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="p-3 bg-[#fff7ed] border border-[#fed7aa] rounded-xl text-xs text-orange-950 flex items-start gap-2.5 shadow-sm">
              <span className="bg-orange-100 border border-[#fed7aa] text-[#f97316] font-mono text-[9px] font-bold uppercase px-1.5 py-0.5 rounded shrink-0">
                INFO SBLOCCO
              </span>
              <p className="text-[11px] leading-relaxed text-orange-900">
                I casi avanzati nell’Arena si sbloccano completando lezioni sul Path (1 caso ogni 4 lezioni superate).
              </p>
            </div>
          </div>

          {/* Badges Preview panel */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                I Tuoi Badge Recenti
              </h4>
              <button 
                onClick={() => setTab('badges')}
                className="text-xs text-[#f97316] hover:text-[#e0620d] hover:underline font-bold cursor-pointer"
              >
                Collezione
              </button>
            </div>

            <div className="grid grid-cols-5 gap-2.5">
              {ALL_BADGES.slice(0, 5).map((badge) => {
                const isUnlocked = progress.unlockedBadges.includes(badge.id);

                return (
                  <div 
                    key={badge.id}
                    title={`${badge.name}: ${badge.description}`}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center border p-1 transition-all ${
                      isUnlocked 
                        ? 'bg-amber-500/5 border-amber-300 text-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.1)]' 
                        : 'bg-slate-50 border-slate-100 text-slate-400 opacity-50'
                    }`}
                  >
                    <Trophy size={18} className={isUnlocked ? 'text-amber-500 fill-amber-500/10' : 'opacity-20'} />
                    <span className="text-[8px] font-mono font-bold text-center truncate w-full mt-1.5 uppercase tracking-wide">
                      {badge.name.split(' ')[0]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
