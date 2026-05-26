import React from 'react';
import { 
  Compass, 
  Map, 
  Database, 
  Award, 
  Briefcase, 
  TrendingUp, 
  LogOut, 
  Flame, 
  Grid 
} from 'lucide-react';
import { UserProgress } from '../types';

interface SidebarProps {
  currentTab: string;
  setTab: (tab: string) => void;
  progress: UserProgress;
  onResetProgress: () => void;
}

export default function Sidebar({ currentTab, setTab, progress, onResetProgress }: SidebarProps) {
  const currentLevel = Math.floor(progress.xp / 150) + 1;
  const xpInCurrentLevel = progress.xp % 150;
  const percentToNextLevel = Math.min(100, Math.floor((xpInCurrentLevel / 150) * 100));

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Compass },
    { id: 'learning-path', label: 'Learning Path', icon: Map },
    { id: 'practice-lab', label: 'Practice Lab', icon: Database },
    { id: 'business-case-arena', label: 'Business Case Arena', icon: Briefcase },
    { id: 'portfolio', label: 'Portfolio Mode', icon: TrendingUp },
    { id: 'badges', label: 'Progressi & Badge', icon: Award },
  ];

  return (
    <aside className="hidden md:flex w-64 bg-white text-[#1f2937] flex-col h-screen sticky top-0 border-r border-slate-200" id="crm-sidebar">
      {/* App Header branding */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#f97316] rounded-xl flex items-center justify-center shadow-md shadow-orange-500/25 animate-pulse">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
          </div>
          <div>
            <h1 className="font-extrabold text-lg tracking-tight text-[#121c2a] font-display">CRM Lab</h1>
            <p className="text-[10px] text-[#f97316] font-mono tracking-wider font-bold">ACADEMY & ARENA</p>
          </div>
        </div>
      </div>

      {/* Gamified stats bar */}
      <div className="p-5 border-b border-orange-100 bg-[#fff7ed]/50">
        <div className="flex items-center justify-between mb-2 text-[10px] font-mono text-slate-500 font-bold tracking-wider">
          <span>LIVELLO {currentLevel}</span>
          <span className="flex items-center gap-1 text-[#f97316] font-bold">
            <Flame size={13} className="fill-[#f97316] text-[#f97316]" /> {progress.streak} GG STREAK
          </span>
        </div>
        <div className="w-full bg-[#fed7aa]/20 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-[#f97316] h-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(249,115,22,0.4)] rounded-full" 
            style={{ width: `${percentToNextLevel}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-1.5 text-[10px] text-slate-500 font-mono">
          <span>{progress.xp} XP</span>
          <span>{150 - xpInCurrentLevel} XP al Liv. {currentLevel + 1}</span>
        </div>
      </div>

      {/* Menu Options */}
      <nav className="flex-1 py-6 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-semibold tracking-wide transition-all border-l-4 outline-none ${
                isActive 
                  ? 'bg-[#fff7ed] text-[#f97316] border-[#f97316] font-bold font-display shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-[#121c2a] border-transparent'
              }`}
              id={`sidebar-link-${item.id}`}
            >
              <IconComponent size={16} className={isActive ? 'text-[#f97316]' : 'text-slate-400'} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer controls */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/50">
        <button
          onClick={onResetProgress}
          className="w-full flex items-center justify-center gap-2 text-[11px] font-mono font-bold text-slate-500 hover:text-red-600 py-2 border border-slate-200 hover:border-red-200 rounded-md transition-colors bg-white hover:bg-red-50 cursor-pointer"
          id="btn-reset-data"
        >
          <LogOut size={12} />
          <span>Reset Progressi</span>
        </button>
        <div className="mt-3 text-center text-[9px] font-mono text-slate-400 font-medium">
          CRM LAB MVP v1.2.0 • PRO
        </div>
      </div>
    </aside>
  );
}
