import React from 'react';
import { 
  Lock, 
  CheckCircle2, 
  Play, 
  MapPin, 
  BookOpen, 
  Bookmark, 
  Check, 
  ChevronRight, 
  X, 
  AlertTriangle 
} from 'lucide-react';
import { Module, Lesson, UserProgress } from '../types';
import { curriculum } from '../data/curriculum';

interface LearningPathProps {
  progress: UserProgress;
  onSelectLesson: (lesson: Lesson) => void;
}

export default function LearningPath({ progress, onSelectLesson }: LearningPathProps) {
const unlockAll = new URLSearchParams(window.location.search).get('demo') === 'unlocked';  
  // Helper to determine module completion percentage
  const getModuleCompletion = (modId: string) => {
    const mod = curriculum.find(m => m.id === modId);
    if (!mod) return 0;
    const completedCount = mod.lessons.filter(les => progress.completedLessons.includes(les.id)).length;
    return Math.floor((completedCount / mod.lessons.length) * 100);
  };

  // Helper to check if a module is unlocked
  // "Un modulo si sbloccano progressivamente. Un modulo si sblocca quando l’utente completa almeno il 70% del modulo precedente."
  // Since each previous module has 5 lessons, 70% is 3.5, which practically means completing at least 4 lessons.
  const isModuleUnlocked = (modIndex: number) => {
    if (unlockAll) return true;
    if (modIndex === 0) return true;
    const previousModule = curriculum[modIndex - 1];
    const previousCompletedCount = previousModule.lessons.filter(les => progress.completedLessons.includes(les.id)).length;
    return (previousCompletedCount / previousModule.lessons.length) >= 0.7;
  };

  return (
    <div className="space-y-8" id="crm-learning-path">
      {/* Introduction text */}
      <div className="border-b border-orange-100 pb-6">
        <h2 className="text-3xl font-extrabold text-[#121c2a] tracking-tight font-display">CRM Learning Path</h2>
        <p className="text-slate-600 text-sm mt-1">
          Completa le lezioni interattive per acquisire XP e sbloccare i moduli successivi. Fai progredire il tuo piano.
        </p>
      </div>

      <div className="space-y-12">
        {curriculum.map((mod, modIdx) => {
          const unlocked = isModuleUnlocked(modIdx);
          const completionPercent = getModuleCompletion(mod.id);
          const completedLessonsInMod = mod.lessons.filter(l => progress.completedLessons.includes(l.id)).length;

          return (
            <div 
              key={mod.id} 
              className={`p-6 rounded-xl border transition-all ${
                unlocked 
                  ? 'bg-white border-slate-200 shadow-sm' 
                  : 'bg-slate-100/60 border-slate-250 text-slate-500 select-none'
              }`}
              id={`module-${mod.id}`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-5 border-b border-slate-100">
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono uppercase tracking-wider ${
                      unlocked ? 'bg-orange-50 text-[#f97316] border border-[#fed7aa]' : 'bg-slate-200 text-slate-500'
                    }`}>
                      {mod.title.split(' — ')[0]}
                    </span>
                    {!unlocked && (
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium font-mono">
                        <Lock size={12} /> Bloccato (Completa il 70% del modulo precedente)
                      </span>
                    )}
                  </div>
                  
                  <h3 className={`text-xl font-extrabold font-display ${unlocked ? 'text-[#121c2a]' : 'text-slate-400'}`}>
                    {mod.title.split(' — ')[1] || mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">{mod.description}</p>
                </div>

                {unlocked && (
                  <div className="text-right shrink-0">
                    <div className="text-[10px] font-mono font-bold text-slate-500 mb-1.5 uppercase tracking-wide">
                      COMPLETAMENTO MODULO
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-28 bg-[#fff7ed] h-2 rounded-full overflow-hidden border border-[#fed7aa]">
                        <div 
                          className="bg-[#f97316] h-full transition-all duration-300 rounded-full"
                          style={{ width: `${completionPercent}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-[#f97316]">{completionPercent}%</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-1 font-mono font-bold uppercase tracking-wider">
                      {completedLessonsInMod} su {mod.lessons.length} lezioni superate
                    </p>
                  </div>
                )}
              </div>

              {/* Grid of lessons */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                {mod.lessons.map((lesson, lesIdx) => {
                  const lessonCompleted = progress.completedLessons.includes(lesson.id);
                  const isFirstIncomplete = !lessonCompleted && (lesIdx === 0 || progress.completedLessons.includes(mod.lessons[lesIdx - 1]?.id));
                  
                  return (
                    <div
                      key={lesson.id}
                      onClick={() => unlocked && onSelectLesson(lesson)}
                      className={`rounded-xl border p-4 transition-all relative flex flex-col justify-between ${
                        !unlocked 
                          ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-50' 
                          : lessonCompleted
                            ? 'bg-emerald-50 hover:bg-emerald-100/60 border-emerald-300 cursor-pointer text-emerald-800 hover:shadow-sm' 
                            : isFirstIncomplete 
                              ? 'bg-[#fff7ed]/80 border-[#f97316] shadow-active-orange cursor-pointer hover:bg-[#fff7ed] scale-[1.01] hover:scale-[1.03] text-[#121c2a] border-b-2' 
                              : 'bg-white border-slate-200 cursor-pointer hover:border-[#fed7aa] hover:bg-[#fff7ed]/20 text-[#121c2a]'
                      }`}
                      id={`lesson-card-${lesson.id}`}
                    >
                      <div>
                        {/* Interactive top flag */}
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wide">
                            LEZIONE {lesIdx + 1}
                          </span>
                          {lessonCompleted ? (
                            <CheckCircle2 size={16} className="text-emerald-600 fill-emerald-600/10 shrink-0" />
                          ) : unlocked && isFirstIncomplete ? (
                            <span className="bg-[#f97316] text-white font-mono text-[8px] font-bold px-1.5 py-0.5 rounded uppercase shrink-0 font-display shadow-sm">
                              ATTIVA
                            </span>
                          ) : null}
                        </div>

                        {/* Header Title */}
                        <h4 className={`font-bold text-xs line-clamp-2 min-h-8 mb-2 font-display uppercase tracking-tight leading-snug ${
                          !unlocked ? 'text-slate-400' : lessonCompleted ? 'text-emerald-950 font-extrabold' : 'text-slate-800'
                        }`}>
                          {lesson.title}
                        </h4>
                        <p className={`text-[10px] line-clamp-3 mb-4 leading-relaxed ${
                          lessonCompleted ? 'text-emerald-800/80' : 'text-slate-600 font-medium'
                        }`}>
                          {lesson.objective}
                        </p>
                      </div>

                      {/* Lesson activation controls */}
                      <div className={`flex justify-between items-center mt-2 pt-2 border-t ${
                        lessonCompleted ? 'border-emerald-200/50' : 'border-slate-100'
                      }`}>
                        <span className={`text-[10px] font-bold font-mono ${
                          lessonCompleted ? 'text-emerald-700 font-bold' : 'text-[#f97316]'
                        }`}>
                          +{lesson.xpReward} XP
                        </span>
                        {unlocked && (
                          <span className={`text-[10px] font-bold hover:underline flex items-center gap-1 font-display uppercase tracking-wider ${
                            lessonCompleted ? 'text-emerald-700' : 'text-[#f97316] hover:text-[#e0620d]'
                          }`}>
                            {lessonCompleted ? 'Ripeti' : 'Studia'} <ChevronRight size={12} />
                          </span>
                        )}
                      </div>

                      {/* Locked cover layout overlay */}
                      {!unlocked && (
                        <div className="absolute inset-0 bg-slate-100/40 rounded-xl flex items-center justify-center">
                          <Lock size={14} className="text-slate-400" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
