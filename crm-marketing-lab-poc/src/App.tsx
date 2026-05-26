import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LearningPath from './components/LearningPath';
import LessonPage from './components/LessonPage';
import PracticeLab from './components/PracticeLab';
import BusinessCaseArena from './components/BusinessCaseArena';
import PortfolioPage from './components/PortfolioPage';
import BadgeGrid from './components/BadgeGrid';
import { UserProgress, Lesson, BusinessCase, PortfolioCase, Badge } from './types';
import { curriculum } from './data/curriculum';
import { businessCases } from './data/businessCases';
import { Trophy, Sparkles, X, Medal, Compass, Map, Database, Briefcase, TrendingUp, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LOCAL_STORAGE_KEY = 'crm_marketing_lab_progress_v2';

const INITIAL_PROGRESS: UserProgress = {
  xp: 0,
  streak: 2, // Start with a active streak to reward immediate retention!
  lastActiveDate: new Date().toISOString().split('T')[0],
  completedLessons: [],
  unlockedModules: ['mod-1'],
  completedBusinessCases: [],
  unlockedBadges: [],
  weakestSkills: ['Audience Segmentation', 'Funnel Analytics'],
  portfolio: []
};

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(INITIAL_PROGRESS);
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  
  // Dashboard-to-case helper trigger
  const [activeCaseId, setActiveCaseId] = useState<string | null>(null);

  // New badge popup modal notifier
  const [justUnlockedBadge, setJustUnlockedBadge] = useState<Badge | null>(null);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Streak calculation helper
        const today = new Date().toISOString().split('T')[0];
        let currentStreak = parsed.streak || 1;
        
        if (parsed.lastActiveDate) {
          const lastActive = new Date(parsed.lastActiveDate);
          const currentDate = new Date(today);
          const diffTime = Math.abs(currentDate.getTime() - lastActive.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          if (diffDays === 1) {
            // Keep streak and increment
            currentStreak = parsed.streak;
          } else if (diffDays > 1) {
            // Broke streak, reset to 1
            currentStreak = 1;
          }
        }
        
        setProgress({
          ...parsed,
          streak: currentStreak,
          lastActiveDate: today
        });
      } catch (err) {
        console.error('Errore nel caricamento della cronologia locale:', err);
      }
    }
  }, []);

  // Save to local storage helper
  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProgress));
  };

  // Check and award badges dynamically
  const checkForNewBadges = (updatedProgress: UserProgress, origin: 'lesson' | 'case') => {
    const unlockedNow = [...updatedProgress.unlockedBadges];
    const newlyAwardedIds: string[] = [];

    const awardBadge = (id: string) => {
      if (!unlockedNow.includes(id)) {
        unlockedNow.push(id);
        newlyAwardedIds.push(id);
      }
    };

    // Rule 1: CRM Rookie (Complete first lesson overall)
    if (updatedProgress.completedLessons.length >= 1) {
      awardBadge('crm-rookie');
    }

    // Rule 2: Consent Checker (Supera lezione Consenso: mod 1 les 5)
    if (updatedProgress.completedLessons.includes('les-1-5')) {
      awardBadge('consent-chk');
    }

    // Rule 3: Segmentation Starter (Supera Modulo 2 Lezione 1: les-2-1)
    if (updatedProgress.completedLessons.includes('les-2-1')) {
      awardBadge('seg-starter');
    }

    // Rule 4: Audience Builder (Completa tutto il modulo 2)
    const mod2Lezioni = curriculum.find(m => m.id === 'mod-2')?.lessons.map(l => l.id) || [];
    const completedMod2 = mod2Lezioni.length > 0 && mod2Lezioni.every(id => updatedProgress.completedLessons.includes(id));
    if (completedMod2) {
      awardBadge('aud-builder');
    }

    // Rule 5: Campaign Analyst (Completa tutto il modulo 3)
    const mod3Lezioni = curriculum.find(m => m.id === 'mod-3')?.lessons.map(l => l.id) || [];
    const completedMod3 = mod3Lezioni.length > 0 && mod3Lezioni.every(id => updatedProgress.completedLessons.includes(id));
    if (completedMod3) {
      awardBadge('camp-analyst');
    }

    // Rule 6: Journey Designer (Completa tutto il modulo 4)
    const mod4Lezioni = curriculum.find(m => m.id === 'mod-4')?.lessons.map(l => l.id) || [];
    const completedMod4 = mod4Lezioni.length > 0 && mod4Lezioni.every(id => updatedProgress.completedLessons.includes(id));
    if (completedMod4) {
      awardBadge('jrny-designer');
    }

    // Rule 7: Data Quality Guardian (Completa tutto il modulo 5)
    const mod5Lezioni = curriculum.find(m => m.id === 'mod-5')?.lessons.map(l => l.id) || [];
    const completedMod5 = mod5Lezioni.length > 0 && mod5Lezioni.every(id => updatedProgress.completedLessons.includes(id));
    if (completedMod5) {
      awardBadge('data-guardian');
    }

    // Rule 8: Business Case Solver (Completa almeno 1 business case)
    if (updatedProgress.completedBusinessCases.length >= 1) {
      awardBadge('case-solver');
    }

    // Rule 9: CRM Strategist (Completa tutti i 5 business case)
    if (updatedProgress.completedBusinessCases.length >= 5) {
      awardBadge('crm-strategist');
    }

    if (newlyAwardedIds.length > 0) {
      // Find badge specs of first awarded to show in popup
      const firstAwardId = newlyAwardedIds[0];
      const allBadgeSpecs = [
        { id: 'crm-rookie', name: 'CRM Rookie', description: 'Completa la tua primissima lezione.' },
        { id: 'seg-starter', name: 'Segmentation Starter', description: 'Supera le basi della segmentazione.' },
        { id: 'aud-builder', name: 'Audience Builder', description: 'Custodisci il segreto del targeting.' },
        { id: 'camp-analyst', name: 'Campaign Analyst', description: 'Domina le metriche delle e-mail di retention.' },
        { id: 'jrny-designer', name: 'Journey Designer', description: 'Progetta i percorsi di onboarding automatici.' },
        { id: 'data-guardian', name: 'Data Quality Guardian', description: 'Riconosci record anomali e duplicati.' },
        { id: 'consent-chk', name: 'Consent Checker', description: 'Allinea i consensi anagrafici e rispetta il GDPR.' },
        { id: 'case-solver', name: 'Business Case Solver', description: 'Proponi raccomandazioni strategiche vincenti.' },
        { id: 'crm-strategist', name: 'CRM Strategist', description: 'Completa tutti ed i 5 casi di business dell’arena.' }
      ];
      const match = allBadgeSpecs.find(b => b.id === firstAwardId);
      if (match) {
        setJustUnlockedBadge({
          ...match,
          requirement: '',
          iconName: 'Trophy'
        });
      }
    }

    return unlockedNow;
  };

  // Handler for Lesson Completion
  const handleCompleteLesson = (lessonId: string, xpGained: number) => {
    const isFirstTime = !progress.completedLessons.includes(lessonId);
    let completed = [...progress.completedLessons];
    if (isFirstTime) {
      completed.push(lessonId);
    }

    // Add extra streak bonus if daily
    const bonusXp = isFirstTime ? xpGained : 15; // repeat receives 15 XP
    const nextTotalXp = progress.xp + bonusXp;

    // Sblocca moduli successivi dynamically
    const unlockedMods = [...progress.unlockedModules];
    curriculum.forEach((mod, idx) => {
      if (idx > 0 && !unlockedMods.includes(mod.id)) {
        const prevMod = curriculum[idx - 1];
        const prevCompletedCount = prevMod.lessons.filter(l => completed.includes(l.id)).length;
        if ((prevCompletedCount / prevMod.lessons.length) >= 0.7) {
          unlockedMods.push(mod.id);
        }
      }
    });

    // Recalculate weakest skills to give feedback
    let weak: string[] = [];
    if (completed.length < 5) {
      weak = ['Segmentation Criteria', 'Advanced Journeys'];
    } else if (completed.length < 12) {
      weak = ['Deliverability Hygiene', 'Funnel Qualification'];
    } else if (completed.length < 20) {
      weak = ['A/B Test Confidence', 'Sunset Policy Management'];
    } else {
      weak = [];
    }

    const todayDate = new Date().toISOString().split('T')[0];

    const updatedProgress: UserProgress = {
      ...progress,
      xp: nextTotalXp,
      completedLessons: completed,
      unlockedModules: unlockedMods,
      weakestSkills: weak,
      lastActiveDate: todayDate
    };

    // Run badge analyzer
    const badges = checkForNewBadges(updatedProgress, 'lesson');
    updatedProgress.unlockedBadges = badges;

    saveProgress(updatedProgress);
    setSelectedLesson(null);
    setActiveTab('learning-path');
  };

  // Handler for Business Case Resolution
  const handleSolveBusinessCase = (portfolioCase: PortfolioCase, bCase: BusinessCase, isExcellent: boolean) => {
    const isFirstTime = !progress.completedBusinessCases.includes(bCase.id);
    let completedCases = [...progress.completedBusinessCases];
    if (isFirstTime) {
      completedCases.push(bCase.id);
    }

    // Reward points
    const rewardXP = isExcellent ? bCase.xpReward + 50 : bCase.xpReward;
    const nextTotalXp = progress.xp + rewardXP;

    // Put into portfolio
    let nextPortfolio = [...progress.portfolio];
    if (!nextPortfolio.some(p => p.id === bCase.id)) {
      nextPortfolio.push(portfolioCase);
    }

    const updatedProgress: UserProgress = {
      ...progress,
      xp: nextTotalXp,
      completedBusinessCases: completedCases,
      portfolio: nextPortfolio
    };

    // Run badge analyzer
    const badges = checkForNewBadges(updatedProgress, 'case');
    updatedProgress.unlockedBadges = badges;

    saveProgress(updatedProgress);
  };

  const handleResetProgress = () => {
    if (window.confirm('Vuoi davvero resettare la tua cronologia? Perderai tutti gli XP, i badge sbloccati ed i casi di business nel tuo Portfolio.')) {
      setProgress(INITIAL_PROGRESS);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      setActiveTab('dashboard');
      setSelectedLesson(null);
      setJustUnlockedBadge(null);
    }
  };

  // Dashboard recommended redirections
  const handleNavigateToLesson = (lessonId: string) => {
    // Find lesson in curriculum
    let foundLesson: Lesson | null = null;
    for (const mod of curriculum) {
      const match = mod.lessons.find(l => l.id === lessonId);
      if (match) {
        foundLesson = match;
        break;
      }
    }

    if (foundLesson) {
      setSelectedLesson(foundLesson);
    }
  };

  const handleNavigateToBusinessCase = (caseId: string) => {
    setActiveCaseId(caseId);
    setActiveTab('business-case-arena');
  };

  const mobileMenuItems = [
    { id: 'dashboard', label: 'Home', icon: Compass },
    { id: 'learning-path', label: 'Path', icon: Map },
    { id: 'practice-lab', label: 'Lab', icon: Database },
    { id: 'business-case-arena', label: 'Case', icon: Briefcase },
    { id: 'portfolio', label: 'Portfolio', icon: TrendingUp },
    { id: 'badges', label: 'Badge', icon: Award },
  ];

  return (
    <div className="flex bg-[#fff7ed]/35 min-h-screen text-[#1f2937] font-sans" id="crm-app-container">
      
      {/* Sidebar on Left of Screen */}
      <Sidebar 
        currentTab={activeTab} 
        setTab={(tab) => {
          setActiveTab(tab);
          setSelectedLesson(null); // Clear active lessons
        }}
        progress={progress}
        onResetProgress={handleResetProgress}
      />

      {/* Main Panel Content Area */}
      <main className="flex-1 p-4 pb-24 md:p-10 overflow-y-auto max-w-7xl mx-auto space-y-6">
        
        {/* Render active lesson view or general tabs */}
        {selectedLesson ? (
          <LessonPage 
            lesson={selectedLesson} 
            onBack={() => setSelectedLesson(null)}
            onCompleteLesson={handleCompleteLesson}
          />
        ) : (
          <>
            {activeTab === 'dashboard' && (
              <Dashboard 
                progress={progress}
                onNavigateToLesson={handleNavigateToLesson}
                onNavigateToBusinessCase={handleNavigateToBusinessCase}
                setTab={setActiveTab}
              />
            )}

            {activeTab === 'learning-path' && (
              <LearningPath 
                progress={progress} 
                onSelectLesson={(lesson) => setSelectedLesson(lesson)}
              />
            )}

            {activeTab === 'practice-lab' && (
              <PracticeLab />
            )}

            {activeTab === 'business-case-arena' && (
              <BusinessCaseArena 
                progress={progress}
                onSolveCase={handleSolveBusinessCase}
                activeCaseIdFromDashboard={activeCaseId}
                clearActiveCaseIdFromDashboard={() => setActiveCaseId(null)}
              />
            )}

            {activeTab === 'portfolio' && (
              <PortfolioPage 
                progress={progress}
                setTab={setActiveTab}
              />
            )}

            {activeTab === 'badges' && (
              <BadgeGrid 
                progress={progress}
              />
            )}
          </>
        )}

      </main>


      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-orange-100 shadow-[0_-8px_24px_rgba(15,23,42,0.06)] px-2 py-2 grid grid-cols-6 gap-1">
        {mobileMenuItems.map((item) => {
          const Icon = item.icon;
          const active = activeTab === item.id && !selectedLesson;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSelectedLesson(null);
              }}
              className={`flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-[10px] font-bold transition-colors ${
                active ? 'bg-orange-50 text-[#f97316]' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon size={17} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* MODAL overlay notifier when newly unlocking badge */}
      <AnimatePresence>
        {justUnlockedBadge && (
          <div className="fixed inset-0 bg-[#121c2a]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="bg-white border border-[#fed7aa] rounded-xl p-8 max-w-md w-full shadow-active-orange text-center space-y-6 relative"
              id="new-badge-modal"
            >
              <button 
                onClick={() => setJustUnlockedBadge(null)}
                className="absolute right-4.5 top-4.5 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="w-20 h-20 bg-orange-500/10 border border-[#fed7aa] text-orange-500 rounded-xl flex items-center justify-center mx-auto">
                <Medal size={44} className="text-orange-500 fill-orange-500/10" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] bg-orange-100 border border-[#fed7aa] text-orange-600 font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  NUOVO TRAGUARDO SBLOCCATO!
                </span>
                <h3 className="text-2xl font-black text-[#1f2937] font-display tracking-tight">{justUnlockedBadge.name}</h3>
                <p className="text-xs text-slate-600 pr-4 pl-4">{justUnlockedBadge.description}</p>
              </div>

              <div className="bg-[#fff7ed] border border-[#fed7aa]/60 p-4 rounded-xl flex items-center justify-center gap-3 max-w-xs mx-auto">
                <Sparkles className="text-orange-500" size={18} />
                <span className="text-xs font-bold text-orange-700 font-mono uppercase tracking-wide">Competenza Certificata</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => { setJustUnlockedBadge(null); setActiveTab('badges'); }}
                  className="w-full bg-[#f97316] hover:bg-[#e0620d] border-b-2 border-[#b84c00] text-white font-bold py-3 px-6 rounded-md text-xs transition-all active:translate-y-[1px] cursor-pointer tracking-wider uppercase font-display shadow-sm hover:shadow"
                >
                  Vedi Collezione Badge
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
