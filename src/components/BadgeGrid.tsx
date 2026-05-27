import React from 'react';
import { 
  Trophy, 
  Map, 
  Grid, 
  Sparkles, 
  TrendingUp, 
  MapPin, 
  AlertCircle, 
  BookOpen, 
  ShieldAlert, 
  CheckCircle,
  Flame
} from 'lucide-react';
import { Badge, UserProgress } from '../types';

interface BadgeGridProps {
  progress: UserProgress;
}

const BADGES_COLLECTION: Badge[] = [
  { id: 'crm-rookie', name: 'CRM Rookie', description: 'Completa la tua primissima lezione teorico-pratica.', requirement: 'Completa 1 lezione nel Path', iconName: 'Compass' },
  { id: 'seg-starter', name: 'Segmentation Starter', description: 'Supera le basi della segmentazione di campagna clienti.', requirement: 'Completa Modulo 2 Lezione 1', iconName: 'Grid' },
  { id: 'aud-builder', name: 'Audience Builder', description: 'Impara a filtrare e progettare audience ed esclusioni senza errori.', requirement: 'Completa Modulo 2 intero', iconName: 'Sparkles' },
  { id: 'camp-analyst', name: 'Campaign Analyst', description: 'Calcola i KPI di campagna, Open Rate, CTR e deliverability.', requirement: 'Completa Modulo 3 intero', iconName: 'TrendingUp' },
  { id: 'jrny-designer', name: 'Journey Designer', description: 'Progetta sequenze di benvenuto ed automazioni comportamentali.', requirement: 'Completa Modulo 4 intero', iconName: 'MapPin' },
  { id: 'data-guardian', name: 'Data Quality Guardian', description: 'Tratta record duplicati, e-mail sciatte e anomaly detection.', requirement: 'Completa Modulo 5 intero', iconName: 'AlertCircle' },
  { id: 'consent-chk', name: 'Consent Checker', description: 'Presidia il consenso marketing opt-in legalmente secondo il GDPR.', requirement: 'Completa la lezione di Consenso', iconName: 'ShieldAlert' },
  { id: 'case-solver', name: 'Business Case Solver', description: 'Risolvi una vera sfida di business formulando raccomandazioni reali.', requirement: 'Risolvi 1 Business Case nell’Arena', iconName: 'BookOpen' },
  { id: 'crm-strategist', name: 'CRM Strategist', description: 'Supera tutti ed i 5 casi reali proponendo soluzioni eccellenti.', requirement: 'Risolvi tutti i 5 casi dell’Arena', iconName: 'Trophy' }
];

export default function BadgeGrid({ progress }: BadgeGridProps) {
  
  // Lookup icon dynamically based on config
  const renderBadgeIcon = (iconName: string, isUnlocked: boolean) => {
    const size = 28;
    const className = isUnlocked ? 'text-amber-600 fill-amber-100 animate-pulse' : 'text-slate-300';
    
    switch (iconName) {
      case 'Grid': return <Grid size={size} className={className} />;
      case 'Sparkles': return <Sparkles size={size} className={className} />;
      case 'TrendingUp': return <TrendingUp size={size} className={className} />;
      case 'MapPin': return <MapPin size={size} className={className} />;
      case 'AlertCircle': return <AlertCircle size={size} className={className} />;
      case 'ShieldAlert': return <ShieldAlert size={size} className={className} />;
      case 'BookOpen': return <BookOpen size={size} className={className} />;
      case 'Trophy': return <Trophy size={size} className={className} />;
      default: return <Trophy size={size} className={className} />;
    }
  };

  const unlockedCount = progress.unlockedBadges.length;

  return (
    <div className="space-y-6" id="crm-badges-grid">
      {/* Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-orange-100 pb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#121c2a] tracking-tight font-display">Progressi & Badge</h2>
          <p className="text-slate-600 text-sm mt-1">
            Collezione delle certificazioni sbloccate completando le lezioni teorico-pratiche ed i casi della business arena.
          </p>
        </div>

        <div className="w-full md:w-auto bg-[#fff7ed] border border-[#fed7aa] px-4 py-2.5 rounded-xl text-xs text-[#f97316] font-extrabold shrink-0 flex items-center gap-2 shadow-sm uppercase font-mono">
          <Trophy size={16} className="fill-[#f97316]/10" /> Sbloccati: {unlockedCount} su {BADGES_COLLECTION.length} Badge
        </div>
      </div>

      {/* Grid of badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BADGES_COLLECTION.map((badge) => {
          const isUnlocked = progress.unlockedBadges.includes(badge.id);

          return (
            <div 
              key={badge.id}
              className={`rounded-xl border p-4 md:p-5 flex gap-4 transition-all ${
                isUnlocked 
                  ? 'border-[#fed7aa] bg-white shadow-[0_8px_16px_rgba(249,115,22,0.06)] hover:shadow-active-orange' 
                  : 'border-slate-200 bg-slate-50 text-slate-500 opacity-60'
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                isUnlocked 
                  ? 'bg-orange-100 border-[#fed7aa]' 
                  : 'bg-slate-200/55 border-slate-300'
              }`}>
                {renderBadgeIcon(badge.iconName, isUnlocked)}
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className={`text-sm font-extrabold truncate font-display ${isUnlocked ? 'text-[#121c2a]' : 'text-slate-400'}`}>
                    {badge.name}
                  </h3>
                  {isUnlocked ? (
                    <span className="text-[8px] font-mono font-bold text-orange-700 bg-orange-100 border border-[#fed7aa] px-1.5 py-0.5 rounded uppercase shrink-0">
                      Vinto ✓
                    </span>
                  ) : (
                    <span className="text-[8px] font-mono font-bold text-slate-500 bg-slate-200 border border-slate-300 px-1.5 py-0.5 rounded uppercase shrink-0">
                      Locked
                    </span>
                  )}
                </div>

                <p className={`text-[11px] leading-relaxed font-semibold h-8 line-clamp-2 ${isUnlocked ? 'text-slate-700' : 'text-slate-400'}`}>
                  {badge.description}
                </p>

                <div className={`pt-2 border-t mt-1 flex justify-between items-center text-[9px] font-mono ${
                  isUnlocked ? 'border-orange-100' : 'border-slate-200'
                }`}>
                  <span className="text-slate-400 font-bold uppercase">REQUISITO:</span>
                  <span className={isUnlocked ? 'text-[#f97316] font-bold' : 'text-slate-450'}>
                    {badge.requirement}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
