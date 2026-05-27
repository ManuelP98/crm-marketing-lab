import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  HelpCircle,
  X,
  Sparkles,
  Award,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  Calculator,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Lesson, Exercise } from '../types';

interface LessonPageProps {
  lesson: Lesson;
  onBack: () => void;
  onCompleteLesson: (lessonId: string, xpGained: number) => void;
}

const DEFAULT_SEGMENT_OPTIONS: Record<string, string[]> = {
  signup_date: ['7 giorni fa', '30 giorni fa', '90 giorni fa'],
  lifecycle_stage: ['Lead', 'Prospect', 'Active Customer', 'Inactive Customer', 'Loyal Customer'],
  marketing_consent: ['true', 'false'],
  unsubscribed: ['false', 'true'],
  total_spend: ['500', '1000', '2000'],
  last_purchase_date: ['30 giorni fa', '3 mesi fa', '6 mesi fa'],
  country: ['Italy', 'France', 'Germany', 'Spain'],
  source: ['Google Ads', 'LinkedIn', 'Organic SE', 'Referral', 'Webinar'],
  status: ['New', 'Contacted', 'Qualified', 'Unqualified']
};

const getSegmentValues = (exercise: Exercise, field: string, fallbackValue: string) => {
  return exercise.segmentOptions?.values?.[field] ?? DEFAULT_SEGMENT_OPTIONS[field] ?? [fallbackValue];
};

const getFallbackJourneyStepPool = (steps: string[] = []) => {
  if (steps.length <= 1) return steps;
  return [...steps.slice(1), steps[0]];
};

export default function LessonPage({ lesson, onBack, onCompleteLesson }: LessonPageProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const [matchSelection, setMatchSelection] = useState<Record<string, string>>({});
  const [activeConceptId, setActiveConceptId] = useState<string | null>(null);
  const [orderedSteps, setOrderedSteps] = useState<string[]>([]);
  const [segmentBuilderValues, setSegmentBuilderValues] = useState<Record<string, string>>({});
  const [journeySteps, setJourneySteps] = useState<string[]>([]);
  const [kpiInputValue, setKpiInputValue] = useState('');
  const [lessonFinished, setLessonFinished] = useState(false);

  const currentExercise: Exercise = lesson.exercises[currentExerciseIndex];
  const journeyStepPool = currentExercise.journeyStepPool ?? getFallbackJourneyStepPool(currentExercise.journeyCorrectSteps);

  useEffect(() => {
    if (!currentExercise) return;

    setSelectedAnswerId(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setMatchSelection({});
    setActiveConceptId(null);
    setJourneySteps([]);
    setKpiInputValue('');

    if (currentExercise.type === 'ordering' && currentExercise.initialStepsOrder) {
      setOrderedSteps([...currentExercise.initialStepsOrder]);
    } else {
      setOrderedSteps([]);
    }

    if (currentExercise.type === 'segment-builder') {
      const initialValues: Record<string, string> = {};
      currentExercise.targetSegmentCriteria?.forEach((criteria) => {
        initialValues[criteria.field] = '';
      });
      setSegmentBuilderValues(initialValues);
    } else {
      setSegmentBuilderValues({});
    }
  }, [currentExerciseIndex, lesson.id, currentExercise]);

  const handleVerifyChoice = () => {
    if (!selectedAnswerId) return;
    setIsCorrect(selectedAnswerId === currentExercise.correctAnswerId);
    setIsAnswered(true);
  };

  const handleSelectDefinition = (definitionId: string) => {
    if (isAnswered || !activeConceptId) return;
    setMatchSelection((previous) => ({
      ...previous,
      [activeConceptId]: definitionId
    }));
    setActiveConceptId(null);
  };

  const handleVerifyMatching = () => {
    if (!currentExercise.pairs) return;
    const allCorrect = currentExercise.pairs.every((pair) => matchSelection[pair.id] === pair.id);
    setIsCorrect(allCorrect);
    setIsAnswered(true);
  };

  const handleMoveStep = (index: number, direction: 'up' | 'down') => {
    if (isAnswered) return;
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= orderedSteps.length) return;

    const copy = [...orderedSteps];
    const current = copy[index];
    copy[index] = copy[targetIndex];
    copy[targetIndex] = current;
    setOrderedSteps(copy);
  };

  const handleVerifyOrdering = () => {
    if (!currentExercise.orderedSteps) return;
    const allCorrect = currentExercise.orderedSteps.every((step, index) => orderedSteps[index] === step);
    setIsCorrect(allCorrect);
    setIsAnswered(true);
  };

  const handleVerifySegment = () => {
    if (!currentExercise.targetSegmentCriteria) return;
    const allCorrect = currentExercise.targetSegmentCriteria.every((criteria) => {
      return segmentBuilderValues[criteria.field] === criteria.value;
    });
    setIsCorrect(allCorrect);
    setIsAnswered(true);
  };

  const handleTogglePoolStep = (step: string) => {
    if (isAnswered) return;
    setJourneySteps((previous) => {
      if (previous.includes(step)) {
        return previous.filter((selectedStep) => selectedStep !== step);
      }
      return [...previous, step];
    });
  };

  const handleVerifyJourney = () => {
    if (!currentExercise.journeyCorrectSteps) return;
    const allCorrect =
      journeySteps.length === currentExercise.journeyCorrectSteps.length &&
      currentExercise.journeyCorrectSteps.every((step, index) => journeySteps[index] === step);
    setIsCorrect(allCorrect);
    setIsAnswered(true);
  };

  const handleVerifyKpi = () => {
    if (!currentExercise.kpiFormulaData) return;
    const numericValue = parseFloat(kpiInputValue.replace('%', '').trim());
    setIsCorrect(numericValue === currentExercise.kpiFormulaData.correctValue);
    setIsAnswered(true);
  };

  const handleVerify = () => {
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
  };

  const isVerifyDisabled = () => {
    if (currentExercise.type === 'multiple-choice' || currentExercise.type === 'true-false') {
      return !selectedAnswerId;
    }
    if (currentExercise.type === 'matching') {
      return Object.keys(matchSelection).length < (currentExercise.pairs?.length || 0);
    }
    if (currentExercise.type === 'segment-builder') {
      return Object.values(segmentBuilderValues).some((value) => value === '');
    }
    if (currentExercise.type === 'journey-builder') {
      return journeySteps.length === 0;
    }
    if (currentExercise.type === 'kpi-calculator') {
      return kpiInputValue.trim() === '';
    }
    return false;
  };

  const handleNext = () => {
    if (currentExerciseIndex < lesson.exercises.length - 1) {
      setCurrentExerciseIndex((previous) => previous + 1);
    } else {
      setLessonFinished(true);
    }
  };

  const progressPercentage = Math.round(((currentExerciseIndex + (isAnswered ? 1 : 0)) / lesson.exercises.length) * 100);

  return (
    <div className="max-w-5xl mx-auto space-y-5 md:space-y-6" id={`lesson-workspace-${lesson.id}`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-[#f97316] transition-all uppercase cursor-pointer"
          id="btn-lesson-back"
        >
          <ArrowLeft size={14} /> Torna Al Percorso
        </button>

        <span className="text-[10px] sm:text-xs text-slate-500 font-mono font-semibold uppercase tracking-wide leading-relaxed">
          LEZIONE: <b className="text-[#f97316] font-display">{lesson.title}</b>
        </span>
      </div>

      <div className="bg-white p-3.5 md:p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
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
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-slate-400 font-extrabold text-xs uppercase tracking-wider font-mono">
                <Layers size={16} className="text-[#f97316]" />
                <span>Micro-Teoria</span>
              </div>
              <h3 className="text-lg font-extrabold text-[#121c2a] font-display tracking-tight leading-snug">{lesson.title}</h3>
              <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-line bg-[#f8f9ff]/70 p-3.5 md:p-4 rounded-xl border border-[#dee9fc] font-sans font-semibold">
                {lesson.theory}
              </p>
            </div>

            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-250 space-y-2 relative overflow-hidden shadow-sm">
              <span className="text-[10px] bg-emerald-100 border border-emerald-300 text-emerald-800 font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Scenario CRM Caso d'uso
              </span>
              <p className="text-xs text-emerald-950 italic leading-relaxed pt-1.5 font-sans font-semibold">
                &quot;{lesson.example}&quot;
              </p>
              <Sparkles className="absolute right-4 bottom-4 text-emerald-400/10" size={32} />
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm space-y-5 md:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 font-mono text-xs pb-3 border-b border-slate-100">
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
                <p className="text-xs text-slate-500 font-medium italic mb-4">{currentExercise.instructions}</p>
              )}
            </div>

            <div className="space-y-3">
              {(currentExercise.type === 'multiple-choice' || currentExercise.type === 'true-false') && currentExercise.options && (
                <div className="space-y-2.5">
                  {currentExercise.options.map((option) => {
                    const isSelected = selectedAnswerId === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        disabled={isAnswered}
                        onClick={() => setSelectedAnswerId(option.id)}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs font-bold transition-all flex items-start gap-3 cursor-pointer ${
                          isAnswered
                            ? option.id === currentExercise.correctAnswerId
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                              : isSelected
                                ? 'bg-red-50 border-red-400 text-red-800 font-bold'
                                : 'bg-slate-50 border-slate-200 text-slate-400'
                            : isSelected
                              ? 'bg-[#fff7ed] border-[#f97316] text-[#f97316] shadow-active-orange scale-[1.01]'
                              : 'bg-white border-slate-200 hover:border-[#fed7aa] text-[#121c2a] hover:bg-[#fff7ed]/10 shadow-sm'
                        }`}
                      >
                        <span className="bg-slate-100 border border-slate-250 w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-mono font-bold text-[10px] text-slate-600 shadow-sm">
                          {option.id.toUpperCase()}
                        </span>
                        <span>{option.text}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {currentExercise.type === 'matching' && currentExercise.pairs && (
                <div className="space-y-4">
                  <p className="text-[11px] text-slate-500 font-semibold font-sans">
                    Clicca su un concetto a sinistra, quindi abbinalo a una definizione a destra.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h5 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Concetti</h5>
                      {currentExercise.pairs.map((pair) => {
                        const matchedDefinitionId = matchSelection[pair.id];
                        const matchedText = currentExercise.pairs?.find((candidate) => candidate.id === matchedDefinitionId)?.definition;
                        return (
                          <div key={pair.id} className="space-y-1">
                            <button
                              type="button"
                              disabled={isAnswered}
                              onClick={() => setActiveConceptId(pair.id)}
                              className={`w-full text-left p-3 rounded-lg border text-xs font-bold cursor-pointer transition-all ${
                                activeConceptId === pair.id
                                  ? 'bg-[#f97316] border-orange-700 text-white shadow-active-orange'
                                  : matchedDefinitionId
                                    ? 'bg-slate-100 border-slate-200 text-slate-500'
                                    : 'bg-white border-slate-200 hover:border-[#fed7aa] text-[#121c2a] hover:bg-[#fff7ed]/20'
                              }`}
                            >
                              {pair.concept}
                            </button>
                            {matchedDefinitionId && (
                              <div className="flex items-center justify-between px-3 py-1.5 bg-[#fff7ed] rounded-md text-[10px] text-orange-950 border border-[#fed7aa]">
                                <span className="line-clamp-1 italic font-semibold">Abbinato: {matchedText}</span>
                                {!isAnswered && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const next = { ...matchSelection };
                                      delete next[pair.id];
                                      setMatchSelection(next);
                                    }}
                                    className="text-red-500 font-bold hover:text-red-650 cursor-pointer"
                                  >
                                    <X size={12} />
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="space-y-2">
                      <h5 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Definizioni</h5>
                      {currentExercise.pairs.map((pair) => {
                        const isMatched = Object.values(matchSelection).includes(pair.id);
                        return (
                          <button
                            key={pair.id}
                            type="button"
                            disabled={isAnswered || isMatched}
                            onClick={() => handleSelectDefinition(pair.id)}
                            className={`w-full text-left p-3 rounded-lg border text-[11px] leading-relaxed transition-all cursor-pointer ${
                              isMatched
                                ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50'
                                : activeConceptId
                                  ? 'bg-orange-50 hover:bg-orange-100 border-[#fed7aa] text-[#f97316] font-bold font-sans'
                                  : 'bg-white border-slate-200 text-slate-700 hover:border-[#fed7aa]/80 hover:bg-[#fff7ed]/10 shadow-sm font-semibold'
                            }`}
                          >
                            {pair.definition}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {currentExercise.type === 'ordering' && (
                <div className="space-y-2.5">
                  <p className="text-[11px] text-slate-500 font-sans font-semibold">
                    Usa i pulsanti Su/Giù per sistemare gli step nella sequenza logica corretta.
                  </p>
                  {orderedSteps.map((step, index) => (
                    <div key={`${step}-${index}`} className="p-3 bg-white border border-slate-200 rounded-xl flex justify-between items-center text-xs font-sans shadow-sm font-semibold">
                      <div className="flex items-center gap-3">
                        <span className="bg-[#fff7ed] w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] text-[#f97316] border border-[#fed7aa] shadow-inner font-mono">
                          {index + 1}
                        </span>
                        <span className="font-extrabold text-[#121c2a]">{step}</span>
                      </div>
                      {!isAnswered && (
                        <div className="flex gap-1">
                          <button type="button" disabled={index === 0} onClick={() => handleMoveStep(index, 'up')} className="p-1 px-2 text-slate-600 border border-slate-250 hover:bg-[#fff7ed] disabled:opacity-20 rounded cursor-pointer">
                            <ArrowUp size={12} />
                          </button>
                          <button type="button" disabled={index === orderedSteps.length - 1} onClick={() => handleMoveStep(index, 'down')} className="p-1 px-2 text-slate-600 border border-slate-250 hover:bg-[#fff7ed] disabled:opacity-20 rounded cursor-pointer">
                            <ArrowDown size={12} />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {currentExercise.type === 'segment-builder' && currentExercise.targetSegmentCriteria && (
                <div className="bg-[#f8f9ff] p-4 rounded-xl border border-[#dee9fc] space-y-4 shadow-sm">
                  <h5 className="text-[11px] font-bold text-[#f97316] uppercase tracking-wide font-mono">
                    Segment Rule Engine (Filtri)
                  </h5>

                  <div className="space-y-3.5">
                    {currentExercise.targetSegmentCriteria.map((criteria, index) => (
                      <div key={`${criteria.field}-${index}`} className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                        <div className="w-full sm:w-1/4">
                          <span className="font-mono bg-white text-[#f97316] px-2 py-1 rounded font-bold border border-[#fed7aa] shadow-sm">
                            {criteria.field}
                          </span>
                        </div>

                        <div className="w-full sm:w-1/6 font-mono text-center text-emerald-600 font-bold">
                          {criteria.operator}
                        </div>

                        <div className="w-full sm:w-7/12">
                          <select
                            disabled={isAnswered}
                            value={segmentBuilderValues[criteria.field] || ''}
                            onChange={(event) =>
                              setSegmentBuilderValues((previous) => ({
                                ...previous,
                                [criteria.field]: event.target.value
                              }))
                            }
                            className="w-full p-2 bg-white border border-slate-300 rounded-md shadow-sm font-semibold text-xs text-slate-800 focus:outline-none focus:border-[#f97316] font-sans"
                          >
                            <option value="" className="text-slate-400 font-medium">-- Seleziona Regola Valore --</option>
                            {getSegmentValues(currentExercise, criteria.field, criteria.value).map((value, valueIndex) => (
                              <option key={`${criteria.field}-${value}-${valueIndex}`} value={value}>{value}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentExercise.type === 'journey-builder' && journeyStepPool.length > 0 && (
                <div className="space-y-4">
                  <div className="border border-slate-200 p-4 rounded-xl bg-[#fff7ed]/35 space-y-2 shadow-sm">
                    <h5 className="text-xs font-bold text-slate-500 font-mono uppercase">Flow canvas</h5>
                    {journeySteps.length === 0 ? (
                      <p className="text-xs text-slate-400 italic text-center py-4">Seleziona gli step sotto per inserirli nel canvas.</p>
                    ) : (
                      <div className="flex flex-col gap-2">
                        {journeySteps.map((step, index) => (
                          <div key={`${step}-${index}`} className="bg-[#fff7ed] border border-[#fed7aa] text-orange-950 text-xs p-2.5 rounded-lg flex justify-between items-center shadow-sm font-semibold">
                            <span>{index + 1}. {step}</span>
                            {!isAnswered && (
                              <button type="button" onClick={() => handleTogglePoolStep(step)} className="text-red-500 font-bold hover:text-red-650 cursor-pointer">
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
                      <h5 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Seleziona gli step disponibili:</h5>
                      <div className="flex flex-wrap gap-2">
                        {journeyStepPool.map((step) => {
                          const isAdded = journeySteps.includes(step);
                          return (
                            <button
                              key={step}
                              type="button"
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

              {currentExercise.type === 'kpi-calculator' && currentExercise.kpiFormulaData && (
                <div className="bg-[#f8f9ff] p-4 rounded-xl border border-[#dee9fc] space-y-4 shadow-sm">
                  <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 shadow-sm">
                    <Calculator className="text-[#f97316] shrink-0" size={16} />
                    <div>
                      <span className="font-mono text-slate-500 uppercase font-bold text-[10px]">Dati di calcolo:</span>
                      <div className="flex flex-wrap gap-3 mt-1.5">
                        {Object.entries(currentExercise.kpiFormulaData.numbers).map(([key, value]) => (
                          <span key={key} className="bg-[#fff7ed] border border-[#fed7aa] text-[#f97316] px-2 py-0.5 rounded text-[11px] font-mono font-bold">
                            {key}: <b className="text-orange-950">{value}</b>
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
                        placeholder="Inserisci valore numerico"
                        value={kpiInputValue}
                        onChange={(event) => setKpiInputValue(event.target.value)}
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
                    <h5 className="font-extrabold mb-1 font-display tracking-wider uppercase">
                      {isCorrect ? 'Eccellente!' : 'Risposta da perfezionare'}
                    </h5>
                    <p className="text-xs font-semibold">{currentExercise.explanation}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              {!isAnswered ? (
                <button
                  type="button"
                  onClick={handleVerify}
                  disabled={isVerifyDisabled()}
                  className="w-full sm:w-auto bg-[#f97316] hover:bg-[#e0620d] border-b-2 border-orange-700 text-white text-xs font-display font-bold px-6 py-3 sm:py-2.5 rounded-md disabled:opacity-40 transition-all cursor-pointer uppercase tracking-widest shadow-sm active:translate-y-[1px]"
                  id="btn-lesson-verify"
                >
                  Verifica Risposta
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 border-b-2 border-emerald-800 text-white text-xs font-display font-bold px-6 py-3 sm:py-2.5 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-widest shadow-sm active:translate-y-[1px]"
                  id="btn-lesson-continue"
                >
                  Continua <ChevronRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
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
            <p className="text-[#f97316] text-xs font-bold font-mono uppercase tracking-widest">Nuove competenze acquisite</p>
          </div>

          <div className="p-5 bg-[#fff7ed] border border-[#fed7aa] rounded-xl space-y-2 shadow-sm">
            <span className="text-[10px] font-mono text-orange-700 uppercase tracking-widest block font-bold">Ricompensa</span>
            <h4 className="text-3xl font-black text-[#f97316] font-display tracking-tight">
              +{lesson.xpReward} <span className="text-xs text-[#121c2a]">XP</span>
            </h4>
            <p className="text-[10px] text-orange-850 font-semibold">Punti accreditati nei progressi.</p>
          </div>

          <div className="text-left space-y-2.5 max-w-sm mx-auto">
            <h5 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">Concept sbloccati:</h5>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-orange-100/50 text-orange-800 text-[10px] px-2.5 py-1 rounded border border-[#fed7aa] font-bold font-sans">✓ {lesson.title} Master</span>
              <span className="bg-orange-100/50 text-orange-800 text-[10px] px-2.5 py-1 rounded border border-[#fed7aa] font-bold font-sans">✓ CRM Analyst Focus</span>
              <span className="bg-[#f8f9ff] text-slate-700 text-[10px] px-2.5 py-1 rounded border border-slate-200 font-bold font-sans">✓ Professional insight proven</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onCompleteLesson(lesson.id, lesson.xpReward)}
              className="w-full bg-emerald-600 hover:bg-emerald-500 border-b-2 border-emerald-800 text-white font-extrabold uppercase font-display tracking-wide py-3 px-6 rounded-md text-xs transition-colors cursor-pointer shadow-md"
              id="btn-lesson-return-path"
            >
              Accredita punti & torna al path
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
