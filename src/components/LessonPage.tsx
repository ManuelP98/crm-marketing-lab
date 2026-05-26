import React, { useState } from 'react';
import { 
  ArrowLeft, 
  HelpCircle, 
  Check, 
  X, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Shuffle, 
  ChevronRight, 
  ArrowUp, 
  ArrowDown, 
  Play, 
  Calculator, 
  Layers 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Lesson, Exercise, ExerciseOption, MatchPair, SegmentCondition } from '../types';

interface LessonPageProps {
  lesson: Lesson;
  onBack: () => void;
  onCompleteLesson: (lessonId: string, xpGained: number) => void;
}

export default function LessonPage({ lesson, onBack, onCompleteLesson }: LessonPageProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);

  // States for matching exercise
  const [matchSelection, setMatchSelection] = useState<Record<string, string>>({}); // { conceptId: definitionId }
  const [activeConceptId, setActiveConceptId] = useState<string | null>(null);

  // States for ordering exercise
  const [orderedSteps, setOrderedSteps] = useState<string[]>([]);
  const [hasStartedOrdering, setHasStartedOrdering] = useState(false);

  // States for segment builder exercise
  const [segmentBuilderValues, setSegmentBuilderValues] = useState<Record<string, string>>({});

  // States for journey builder exercise
  const [journeySteps, setJourneySteps] = useState<string[]>([]);

  // States for KPI calculator exercise
  const [kpiInputValue, setKpiInputValue] = useState<string>('');

  // Lessons end state
  const [lessonFinished, setLessonFinished] = useState(false);

  const currentExercise: Exercise = lesson.exercises[currentExerciseIndex];

  // Initialize helper states for specific exercise types on render
  React.useEffect(() => {
    if (!currentExercise) return;
    
    setSelectedAnswerId(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setIncorrectAttempts(0);

    if (currentExercise.type === 'matching' && currentExercise.pairs) {
      setMatchSelection({});
      setActiveConceptId(null);
    }

    if (currentExercise.type === 'ordering' && currentExercise.initialStepsOrder) {
      setOrderedSteps([...currentExercise.initialStepsOrder]);
      setHasStartedOrdering(true);
    }

    if (currentExercise.type === 'segment-builder') {
      const initialVals: Record<string, string> = {};
      currentExercise.targetSegmentCriteria?.forEach(c => {
        initialVals[c.field] = '';
      });
      setSegmentBuilderValues(initialVals);
    }

    if (currentExercise.type === 'journey-builder' && currentExercise.journeyStepPool) {
      // Shuffle step pool for interaction
      setJourneySteps([]);
    }

    if (currentExercise.type === 'kpi-calculator') {
      setKpiInputValue('');
    }

  }, [currentExerciseIndex, lesson.id]);

  // Multiple Choice / True-False submission
  const handleSelectOption = (optId: string) => {
    if (isAnswered) return;
    setSelectedAnswerId(optId);
  };

  const handleVerifyChoice = () => {
    if (!selectedAnswerId) return;
    const correct = selectedAnswerId === currentExercise.correctAnswerId;
    setIsCorrect(correct);
    setIsAnswered(true);
    if (!correct) setIncorrectAttempts(prev => prev + 1);
  };

  // Matching interaction
  const handleSelectConcept = (conceptId: string) => {
    if (isAnswered) return;
    setActiveConceptId(conceptId);
  };

  const handleSelectDefinition = (defId: string) => {
    if (isAnswered || !activeConceptId) return;
    setMatchSelection(prev => ({
      ...prev,
      [activeConceptId]: defId
    }));
    setActiveConceptId(null);
  };

  const handleClearMatch = (conceptId: string) => {
    if (isAnswered) return;
    setMatchSelection(prev => {
      const next = { ...prev };
      delete next[conceptId];
      return next;
    });
  };

  const handleVerifyMatching = () => {
    if (!currentExercise.pairs) return;
    let allCorrect = true;
    currentExercise.pairs.forEach(p => {
      if (matchSelection[p.id] !== p.id) {
        allCorrect = false;
      }
    });

    setIsCorrect(allCorrect);
    setIsAnswered(true);
    if (!allCorrect) setIncorrectAttempts(prev => prev + 1);
  };

  // Ordering interaction
  const handleMoveStep = (index: number, direction: 'up' | 'down') => {
    if (isAnswered) return;
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= orderedSteps.length) return;

    const copy = [...orderedSteps];
    const temp = copy[index];
    copy[index] = copy[targetIdx];
    copy[targetIdx] = temp;
    setOrderedSteps(copy);
  };

  const handleVerifyOrdering = () => {
    if (!currentExercise.orderedSteps) return;
    let ok = true;
    for (let i = 0; i < currentExercise.orderedSteps.length; i++) {
      if (orderedSteps[i] !== currentExercise.orderedSteps[i]) {
        ok = false;
        break;
      }
    }
    setIsCorrect(ok);
    setIsAnswered(true);
    if (!ok) setIncorrectAttempts(prev => prev + 1);
  };

  // Segment Builder interaction
  const handleSegmentSelect = (field: string, val: string) => {
    if (isAnswered) return;
    setSegmentBuilderValues(prev => ({
      ...prev,
      [field]: val
    }));
  };

  const handleVerifySegment = () => {
    if (!currentExercise.targetSegmentCriteria) return;
    let ok = true;
    currentExercise.targetSegmentCriteria.forEach(criteria => {
      const userVal = segmentBuilderValues[criteria.field];
      if (userVal !== criteria.value) {
        ok = false;
      }
    });
    setIsCorrect(ok);
    setIsAnswered(true);
    if (!ok) setIncorrectAttempts(prev => prev + 1);
  };

  // Journey Builder Interaction (ordering specific steps pool)
  const handleTogglePoolStep = (step: string) => {
    if (isAnswered) return;
    if (journeySteps.includes(step)) {
      setJourneySteps(prev => prev.filter(s => s !== step));
    } else {
      setJourneySteps(prev => [...prev, step]);
    }
  };

  const handleVerifyJourney = () => {
    if (!currentExercise.journeyCorrectSteps) return;
    let ok = journeySteps.length === currentExercise.journeyCorrectSteps.length;
    if (ok) {
      for (let i = 0; i < journeySteps.length; i++) {
        if (journeySteps[i] !== currentExercise.journeyCorrectSteps[i]) {
          ok = false;
          break;
        }
      }
    }
    setIsCorrect(ok);
    setIsAnswered(true);
    if (!ok) setIncorrectAttempts(prev => prev + 1);
  };

  // KPI Calculator interaction
  const handleVerifyKpi = () => {
    if (!currentExercise.kpiFormulaData) return;
    const numericVal = parseFloat(kpiInputValue.replace('%', '').trim());
    const ok = numericVal === currentExercise.kpiFormulaData.correctValue;
    setIsCorrect(ok);
    setIsAnswered(true);
    if (!ok) setIncorrectAttempts(prev => prev + 1);
  };

  // Next movement controller
  const handleNext = () => {
    if (currentExerciseIndex < lesson.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    } else {
      setLessonFinished(true);
    }
  };

  const handleCompleteCurrentLesson = () => {
    onCompleteLesson(lesson.id, lesson.xpReward);
  };

  const progressPercentage = Math.round(((currentExerciseIndex + (isAnswered ? 1 : 0)) / lesson.exercises.length) * 100);

  return (
    <div className="max-w-5xl mx-auto space-y-6" id={`lesson-workspace-${lesson.id}`}>
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-[#f97316] transition-all uppercase cursor-pointer"
          id="btn-lesson-back"
        >
          <ArrowLeft size={14} /> Torna Al Percorso
        </button>

        <span className="text-xs text-slate-500 font-mono font-semibold uppercase tracking-wide">
          LEZIONE: <b className="text-[#f97316] font-display">{lesson.title}</b>
        </span>
      </div>

      {/* Progress display */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
        <div className="flex justify-between items-center text-xs font-mono">
          <span className="text-slate-500 font-bold uppercase">PROGRESSO DI LEZIONE</span>
          <span className="text-[#f97316] font-extrabold font-mono">{progressPercentage}%</span>
        </div>
        <div className="w-full bg-[#fed7aa]/20 h-2.5 rounded-full overflow-hidden">
          <div 
            className="bg-[#f97316] h-full transition-all duration-300 rounded-full" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {!lessonFinished ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT: Micro Theory Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-slate-400 font-extrabold text-xs uppercase tracking-wider font-mono">
                <Layers size={16} className="text-[#f97316]" />
                <span>Micro-Teoria</span>
              </div>
              <h3 className="text-lg font-extrabold text-[#121c2a] font-display tracking-tight leading-snug">{lesson.title}</h3>
              <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-line bg-[#f8f9ff]/70 p-4 rounded-xl border border-[#dee9fc] font-sans font-semibold">
                {lesson.theory}
              </p>
            </div>

            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-250 space-y-2 relative overflow-hidden shadow-sm">
              <span className="text-[10px] bg-emerald-100 border border-emerald-300 text-emerald-800 font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Scenario CRM Caso d'uso
              </span>
              <p className="text-xs text-emerald-950 italic leading-relaxed pt-1.5 font-sans font-semibold">
                "{lesson.example}"
              </p>
              <Sparkles className="absolute right-4 bottom-4 text-emerald-400/10" size={32} />
            </div>
          </div>

          {/* RIGHT: Active Exercise Panel */}
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center font-mono text-xs pb-3 border-b border-slate-100">
              <span className="text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5 font-mono">
                <HelpCircle size={15} className="text-[#f97316]" /> Esercizio {currentExerciseIndex + 1} di {lesson.exercises.length}
              </span>
              <span className="text-[#f97316] font-bold font-mono uppercase">Tipo: {currentExercise.type}</span>
            </div>

            <div>
              <p className="font-extrabold text-sm text-[#121c2a] font-display tracking-tight leading-relaxed mb-4">
                {currentExercise.question}
              </p>
              {currentExercise.instructions && (
                <p className="text-xs text-slate-505 text-slate-500 font-medium italic mb-4">
                  {currentExercise.instructions}
                </p>
              )}
            </div>

            {/* Renderers dynamically by Type */}
            <div className="space-y-3">
              
              {/* RENDERER: MULTIPLE CHOICE */}
              {(currentExercise.type === 'multiple-choice' || currentExercise.type === 'true-false') && currentExercise.options && (
                <div className="space-y-2.5">
                  {currentExercise.options.map((opt) => {
                    const isSelected = selectedAnswerId === opt.id;
                    return (
                      <button
                        key={opt.id}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(opt.id)}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs font-bold transition-all flex items-start gap-3 cursor-pointer ${
                          isAnswered
                            ? opt.id === currentExercise.correctAnswerId
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                              : isSelected
                                ? 'bg-red-50 border-red-400 text-red-850 text-red-800 font-bold'
                                : 'bg-slate-50 border-slate-200 text-slate-400'
                            : isSelected
                              ? 'bg-[#fff7ed] border-[#f97316] text-[#f97316] shadow-active-orange scale-[1.01]'
                              : 'bg-white border-slate-200 hover:border-[#fed7aa] text-[#121c2a] hover:bg-[#fff7ed]/10 shadow-sm'
                        }`}
                        id={`ex-option-${opt.id}`}
                      >
                        <span className="bg-slate-100 border border-slate-250 w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-mono font-bold text-[10px] text-slate-600 shadow-sm">
                          {opt.id.toUpperCase()}
                        </span>
                        <span>{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* RENDERER: MATCHING EXERCISE */}
              {currentExercise.type === 'matching' && currentExercise.pairs && (
                <div className="space-y-4">
                  <p className="text-[11px] text-slate-500 font-semibold font-sans">Clicca su un concetto a sinistra, quindi abbinalo cliccando su una definizione a destra.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Concepts */}
                    <div className="space-y-2">
                      <h5 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Concetti</h5>
                      {currentExercise.pairs.map((p) => {
                        const matchedDefId = matchSelection[p.id];
                        const matchedDefText = currentExercise.pairs?.find(pair => pair.id === matchedDefId)?.definition;
                        const isSelectedConcept = activeConceptId === p.id;

                        return (
                          <div key={p.id} className="space-y-1">
                            <button
                              type="button"
                              disabled={isAnswered}
                              onClick={() => handleSelectConcept(p.id)}
                              className={`w-full text-left p-3 rounded-lg border text-xs font-bold cursor-pointer transition-all ${
                                isSelectedConcept 
                                  ? 'bg-[#f97316] border-orange-700 text-white shadow-active-orange' 
                                  : matchedDefId 
                                    ? 'bg-slate-100 border-slate-200 text-slate-500' 
                                    : 'bg-white border-slate-200 hover:border-[#fed7aa] text-[#121c2a] hover:bg-[#fff7ed]/20'
                              }`}
                            >
                              {p.concept}
                            </button>
                            {matchedDefId && (
                              <div className="flex items-center justify-between px-3 py-1.5 bg-[#fff7ed] rounded-md text-[10px] text-orange-950 border border-[#fed7aa]">
                                <span className="line-clamp-1 italic font-semibold">Abbinato: {matchedDefText}</span>
                                {!isAnswered && (
                                  <button onClick={() => handleClearMatch(p.id)} className="text-red-500 font-bold hover:text-red-650 cursor-pointer">
                                    <X size={12} />
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Right Definitions Scrambled */}
                    <div className="space-y-2">
                      <h5 className="text-xs font-bold text-slate-454 text-slate-400 font-mono uppercase tracking-wider">Definizioni</h5>
                      {currentExercise.pairs.map((p) => {
                        const isMatched = Object.values(matchSelection).includes(p.id);
                        return (
                          <button
                            key={p.id}
                            type="button"
                            disabled={isAnswered || isMatched}
                            onClick={() => handleSelectDefinition(p.id)}
                            className={`w-full text-left p-3 rounded-lg border text-[11px] leading-relaxed transition-all cursor-pointer ${
                              isMatched 
                                ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50' 
                                : activeConceptId 
                                  ? 'bg-orange-50 hover:bg-orange-100 border-[#fed7aa] text-[#f97316] font-bold font-sans' 
                                  : 'bg-white border-slate-200 text-slate-700 hover:border-[#fed7aa]/80 hover:bg-[#fff7ed]/10 shadow-sm font-semibold'
                            }`}
                          >
                            {p.definition}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* RENDERER: ORDERING STEP EXERCISE */}
              {currentExercise.type === 'ordering' && (
                <div className="space-y-2.5">
                  <p className="text-[11px] text-slate-500 font-sans font-semibold">Usa i pulsanti Su/Giù per sistemare gli step nella sequenza logica corretta.</p>
                  {orderedSteps.map((step, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 bg-white border border-slate-200 rounded-xl flex justify-between items-center text-xs font-sans shadow-sm font-semibold"
                    >
                      <div className="flex items-center gap-3">
                        <span className="bg-[#fff7ed] w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] text-[#f97316] border border-[#fed7aa] shadow-inner font-mono">
                          {idx + 1}
                        </span>
                        <span className="font-extrabold text-[#121c2a]">{step}</span>
                      </div>
                      
                      {!isAnswered && (
                        <div className="flex gap-1">
                          <button
                            type="button"
                            disabled={idx === 0}
                            onClick={() => handleMoveStep(idx, 'up')}
                            className="p-1 px-2 text-slate-600 border border-slate-250 hover:bg-[#fff7ed] disabled:opacity-20 rounded cursor-pointer"
                          >
                            <ArrowUp size={12} />
                          </button>
                          <button
                            type="button"
                            disabled={idx === orderedSteps.length - 1}
                            onClick={() => handleMoveStep(idx, 'down')}
                            className="p-1 px-2 text-slate-600 border border-slate-250 hover:bg-[#fff7ed] disabled:opacity-20 rounded cursor-pointer"
                          >
                            <ArrowDown size={12} />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* RENDERER: SEGMENT BUILDER EXERCISE */}
              {currentExercise.type === 'segment-builder' && currentExercise.targetSegmentCriteria && currentExercise.segmentOptions && (
                <div className="bg-[#f8f9ff] p-4 rounded-xl border border-[#dee9fc] space-y-4 shadow-sm">
                  <h5 className="text-[11px] font-bold text-[#f97316] uppercase tracking-wide font-mono">
                    Segment Rule Engine (Filtri)
                  </h5>
                  
                  <div className="space-y-3.5">
                    {currentExercise.targetSegmentCriteria.map((crit, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                        {/* Selector label */}
                        <div className="w-full sm:w-1/4">
                          <span className="font-mono bg-white text-[#f97316] px-2 py-1 rounded font-bold border border-[#fed7aa] shadow-sm">
                            {crit.field}
                          </span>
                        </div>
                        
                        {/* Operator label */}
                        <div className="w-full sm:w-1/6 font-mono text-center text-emerald-600 font-bold">
                          {crit.operator}
                        </div>

                        {/* Value Dropdown selector */}
                        <div className="w-full sm:w-7/12">
                          <select
                            disabled={isAnswered}
                            value={segmentBuilderValues[crit.field] || ''}
                            onChange={(e) => handleSegmentSelect(crit.field, e.target.value)}
                            className="w-full p-2 bg-white border border-slate-300 rounded-md shadow-sm font-semibold text-xs text-slate-800 focus:outline-none focus:border-[#f97316] font-sans"
                          >
                            <option value="" className="text-slate-400 font-medium">-- Seleziona Regola Valore --</option>
                            {currentExercise.segmentOptions?.values[crit.field]?.map((v, vIdx) => (
                              <option key={vIdx} value={v}>{v}</option>
                            )) || <option value={crit.value}>{crit.value}</option>}
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* RENDERER: JOURNEY BUILDER POOL EXERCISE */}
              {currentExercise.type === 'journey-builder' && currentExercise.journeyStepPool && (
                <div className="space-y-4">
                  <div className="border border-slate-200 p-4 rounded-xl bg-[#fff7ed]/35 space-y-2 shadow-sm">
                    <h5 className="text-xs font-bold text-slate-500 font-mono uppercase">Flow canvas</h5>
                    {journeySteps.length === 0 ? (
                      <p className="text-xs text-slate-400 italic text-center py-4">Seleziona gli step sotto per infilarli ordinatamente nel canvas...</p>
                    ) : (
                      <div className="flex flex-col gap-2">
                        {journeySteps.map((step, idx) => (
                          <div key={idx} className="bg-[#fff7ed] border border-[#fed7aa] text-orange-950 text-xs p-2.5 rounded-lg flex justify-between items-center shadow-sm font-semibold">
                            <span>{idx + 1}. {step}</span>
                            {!isAnswered && (
                              <button onClick={() => handleTogglePoolStep(step)} className="text-red-500 font-bold hover:text-red-650 cursor-pointer">
                                <X size={12} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {!isAnswered && (
                    <div className="space-y-2">
                      <h5 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider font-semibold">Seleziona gli Step a Disposizione:</h5>
                      <div className="flex flex-wrap gap-2">
                        {currentExercise.journeyStepPool.map((step) => {
                          const isAdded = journeySteps.includes(step);
                          return (
                            <button
                              key={step}
                              disabled={isAdded}
                              onClick={() => handleTogglePoolStep(step)}
                              className={`text-[11px] p-2 rounded-lg border transition-all cursor-pointer ${
                                isAdded 
                                  ? 'bg-slate-100 text-slate-400 border-transparent cursor-not-allowed opacity-50' 
                                  : 'bg-white border-slate-200 text-slate-700 hover:border-[#fed7aa] hover:bg-[#fff7ed]/20 shadow-sm font-semibold'
                              }`}
                            >
                              + {step}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* RENDERER: KPI CALCULATOR EXERCISE */}
              {currentExercise.type === 'kpi-calculator' && currentExercise.kpiFormulaData && (
                <div className="bg-[#f8f9ff] p-4 rounded-xl border border-[#dee9fc] space-y-4 shadow-sm">
                  <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-705 shadow-sm">
                    <Calculator className="text-[#f97316] shrink-0" size={16} />
                    <div>
                      <span className="font-mono text-slate-500 uppercase font-bold text-[10px]">Dati di calcolo:</span>
                      <div className="flex flex-wrap gap-3 mt-1.5">
                        {Object.entries(currentExercise.kpiFormulaData.numbers).map(([k, v]) => (
                          <span key={k} className="bg-[#fff7ed] border border-[#fed7aa] text-[#f97316] px-2 py-0.5 rounded text-[11px] font-mono font-bold">
                            {k}: <b className="text-orange-950">{v}</b>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <span className="text-xs font-bold text-[#121c2a] font-mono">
                      VALORE DEL {currentExercise.kpiFormulaData.targetKpi} ({currentExercise.kpiFormulaData.unit}):
                    </span>
                    <div className="relative flex-1 w-full">
                      <input
                        type="text"
                        disabled={isAnswered}
                        placeholder="Inserisci valore numerico intero"
                        value={kpiInputValue}
                        onChange={(e) => setKpiInputValue(e.target.value)}
                        className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:border-[#f97316] font-mono text-center shadow-sm"
                      />
                      <span className="absolute right-3.5 top-2.5 text-xs font-bold text-slate-400">
                        {currentExercise.kpiFormulaData.unit}
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Answer feedback panels */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`p-4 rounded-xl border flex gap-3 text-xs leading-relaxed shadow-sm ${
                    isCorrect 
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium font-sans' 
                      : 'bg-red-50 border-red-300 text-red-950 font-medium font-sans'
                  }`}
                >
                  <span className="shrink-0 pt-0.5">
                    {isCorrect ? (
                      <span className="bg-emerald-600 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs shadow-sm">✓</span>
                    ) : (
                      <span className="bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs shadow-sm">✗</span>
                    )}
                  </span>
                  <div>
                    <h5 className="font-extrabold mb-1 font-display tracking-wider uppercase">{isCorrect ? 'ECCELLENTE!' : 'RISPOSTA DA PERFEZIONARE'}</h5>
                    <p className="text-xs font-semibold">{currentExercise.explanation}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Verify/Continue controls */}
            <div className="flex justify-end pt-4 border-t border-slate-100">
              {!isAnswered ? (
                <button
                  type="button"
                  onClick={() => {
                    if (currentExercise.type === 'multiple-choice' || currentExercise.type === 'true-false') {
                      handleVerifyChoice();
                    } else if (currentExercise.type === 'matching') {
                      handleVerifyMatching();
                    } else if (currentExercise.type === 'ordering') {
                      handleVerifyOrdering();
                    } else if (currentExercise.type === 'segment-builder') {
                      handleVerifySegment();
                    } else if (currentExercise.type === 'journey-builder') {
                      handleVerifyJourney();
                    } else if (currentExercise.type === 'kpi-calculator') {
                      handleVerifyKpi();
                    }
                  }}
                  disabled={
                    (currentExercise.type === 'multiple-choice' && !selectedAnswerId) ||
                    (currentExercise.type === 'true-false' && !selectedAnswerId) ||
                    (currentExercise.type === 'matching' && Object.keys(matchSelection).length < (currentExercise.pairs?.length || 0)) ||
                    (currentExercise.type === 'segment-builder' && Object.values(segmentBuilderValues).some(v => v === '')) ||
                    (currentExercise.type === 'journey-builder' && journeySteps.length === 0) ||
                    (currentExercise.type === 'kpi-calculator' && kpiInputValue.trim() === '')
                  }
                  className="bg-[#f97316] hover:bg-[#e0620d] border-b-2 border-orange-700 text-white text-xs font-display font-bold px-6 py-2.5 rounded-md disabled:opacity-40 transition-all cursor-pointer uppercase tracking-widest shadow-sm active:translate-y-[1px]"
                  id="btn-lesson-verify"
                >
                  Verifica Risposta
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-emerald-600 hover:bg-emerald-500 border-b-2 border-emerald-800 text-white text-xs font-display font-bold px-6 py-2.5 rounded-md transition-all flex items-center gap-1.5 cursor-pointer uppercase tracking-widest shadow-sm active:translate-y-[1px]"
                  id="btn-lesson-continue"
                >
                  Continua <ChevronRight size={14} />
                </button>
              )}
            </div>
          </div>

        </div>
      ) : (
        /* SBLOCCO / COMPILATION SCHEDA FINALE */
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-xl border border-[#fed7aa] shadow-active-orange max-w-lg mx-auto text-center space-y-6 relative overflow-hidden backdrop-blur-md"
          id="lesson-success-card"
        >
          <div className="w-16 h-16 bg-orange-100 text-[#f97316] rounded-full flex items-center justify-center mx-auto border border-[#fed7aa] animate-bounce shadow-sm">
            <Award size={36} className="text-[#f97316] fill-orange-500/10" />
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl font-extrabold text-[#121c2a] font-display tracking-tight">Lezione Completata!</h3>
            <p className="text-[#f97316] text-xs font-bold font-mono uppercase tracking-widest">Nuove competenze acquisite con orgoglio</p>
          </div>

          <div className="p-5 bg-[#fff7ed] border border-[#fed7aa] rounded-xl space-y-2 shadow-sm">
            <span className="text-[10px] font-mono text-orange-700 uppercase tracking-widest block font-bold">RICOMPENSA</span>
            <h4 className="text-3xl font-black text-[#f97316] font-display tracking-tight">
              +{lesson.xpReward} <span className="text-xs text-[#121c2a]">XP</span>
            </h4>
            <p className="text-[10px] text-orange-850 font-semibold">Punti accreditati in cassa progressi.</p>
          </div>

          <div className="text-left space-y-2.5 max-w-sm mx-auto">
            <h5 className="text-[10px] font-mono text-slate-505 text-slate-500 uppercase tracking-wider font-bold">Concept Sbloccati:</h5>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-orange-100/50 text-orange-800 text-[10px] px-2.5 py-1 rounded border border-[#fed7aa] font-bold font-sans">✓ {lesson.title} Master</span>
              <span className="bg-orange-100/50 text-orange-800 text-[10px] px-2.5 py-1 rounded border border-[#fed7aa] font-bold font-sans">✓ CRM Analyst Focus</span>
              <span className="bg-[#f8f9ff] text-slate-700 text-[10px] px-2.5 py-1 rounded border border-slate-200 font-bold font-sans">✓ Professional insight proven</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleCompleteCurrentLesson}
              className="w-full bg-emerald-600 hover:bg-emerald-500 border-b-2 border-emerald-800 text-white font-extrabold uppercase font-display tracking-wide py-3 px-6 rounded-md text-xs transition-colors cursor-pointer shadow-md"
              id="btn-lesson-return-path"
            >
              Accredita Punti & Torna Al Path
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
