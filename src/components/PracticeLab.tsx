import React, { useMemo, useState } from 'react';
import {
  BarChart3,
  CheckCircle2,
  Compass,
  Database,
  Filter,
  Mail,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Terminal,
  Users,
  XCircle,
} from 'lucide-react';
import { mockCrmData } from '../data/mockCrmData';

type EntityType = 'customers' | 'leads' | 'campaigns' | 'orders' | 'journeys';

type KpiTile = {
  label: string;
  value: string | number;
  desc: string;
};

const entityTabs: { id: EntityType; label: string; helper: string; icon: React.ElementType }[] = [
  { id: 'customers', label: 'Customer Base', helper: 'Segmentazione, consenso, valore', icon: Users },
  { id: 'leads', label: 'Lead Pipeline', helper: 'Source, score, stato commerciale', icon: Target },
  { id: 'campaigns', label: 'Campaigns', helper: 'Canali, budget, obiettivi', icon: Mail },
  { id: 'orders', label: 'Orders', helper: 'Acquisti, canali, categorie', icon: ShoppingBag },
  { id: 'journeys', label: 'Journeys', helper: 'Entry, exit, automation', icon: Compass },
];

const formatEuro = (value: number) => `${Math.round(value).toLocaleString('it-IT')}€`;

export default function PracticeLab() {
  const [activeEntity, setActiveEntity] = useState<EntityType>('customers');
  const [primaryFilter, setPrimaryFilter] = useState<string>('');
  const [secondaryFilter, setSecondaryFilter] = useState<string>('');
  const [thresholdFilter, setThresholdFilter] = useState<number>(0);
  const [analystMode, setAnalystMode] = useState<boolean>(false);

  const resetFilters = () => {
    setPrimaryFilter('');
    setSecondaryFilter('');
    setThresholdFilter(0);
  };

  const handleTabChange = (entity: EntityType) => {
    setActiveEntity(entity);
    resetFilters();
  };

  const primaryOptions = useMemo(() => {
    if (activeEntity === 'customers') {
      return Array.from(new Set(mockCrmData.customers.map(c => c.country))).map(value => ({ value, label: value }));
    }
    if (activeEntity === 'leads') {
      return Array.from(new Set(mockCrmData.leads.map(l => l.country))).map(value => ({ value, label: value }));
    }
    if (activeEntity === 'campaigns') {
      return Array.from(new Set(mockCrmData.campaigns.map(c => c.channel))).map(value => ({ value, label: value }));
    }
    if (activeEntity === 'orders') {
      return Array.from(new Set(mockCrmData.orders.map(o => o.product_category))).map(value => ({ value, label: value }));
    }
    return [];
  }, [activeEntity]);

  const secondaryOptions = useMemo(() => {
    if (activeEntity === 'customers') {
      return [
        { value: 'consent', label: 'Con consenso marketing' },
        { value: 'no-consent', label: 'Senza consenso marketing' },
        { value: 'active-sub', label: 'Iscritti attivi' },
        { value: 'unsubscribed', label: 'Disiscritti' },
      ];
    }
    if (activeEntity === 'leads') {
      return ['New', 'Contacted', 'Qualified', 'Unqualified'].map(value => ({ value, label: value }));
    }
    if (activeEntity === 'campaigns') {
      return Array.from(new Set(mockCrmData.campaigns.map(c => c.objective))).map(value => ({ value, label: value }));
    }
    if (activeEntity === 'orders') {
      return Array.from(new Set(mockCrmData.orders.map(o => o.channel))).map(value => ({ value, label: value }));
    }
    return [];
  }, [activeEntity]);

  const thresholdConfig = useMemo(() => {
    if (activeEntity === 'customers') return { label: 'Spesa minima / LTV', max: 3000, step: 50, field: 'total_spend' };
    if (activeEntity === 'leads') return { label: 'Valore stimato minimo', max: 2500, step: 50, field: 'estimated_value' };
    if (activeEntity === 'campaigns') return { label: 'Budget minimo', max: 6000, step: 100, field: 'budget' };
    if (activeEntity === 'orders') return { label: 'Valore ordine minimo', max: 1000, step: 25, field: 'order_value' };
    return { label: 'Nessuna soglia', max: 0, step: 1, field: '' };
  }, [activeEntity]);

  const filteredData = useMemo(() => {
    if (activeEntity === 'customers') {
      return mockCrmData.customers.filter(c => {
        const matchesCountry = primaryFilter ? c.country === primaryFilter : true;
        const matchesConsent = secondaryFilter === 'consent' ? c.marketing_consent : true;
        const matchesNoConsent = secondaryFilter === 'no-consent' ? !c.marketing_consent : true;
        const matchesActiveSubscription = secondaryFilter === 'active-sub' ? !c.unsubscribed : true;
        const matchesUnsubscribed = secondaryFilter === 'unsubscribed' ? c.unsubscribed : true;
        const matchesSpend = c.total_spend >= thresholdFilter;
        return matchesCountry && matchesConsent && matchesNoConsent && matchesActiveSubscription && matchesUnsubscribed && matchesSpend;
      });
    }

    if (activeEntity === 'leads') {
      return mockCrmData.leads.filter(l => {
        const matchesCountry = primaryFilter ? l.country === primaryFilter : true;
        const matchesStatus = secondaryFilter ? l.status === secondaryFilter : true;
        const matchesValue = l.estimated_value >= thresholdFilter;
        return matchesCountry && matchesStatus && matchesValue;
      });
    }

    if (activeEntity === 'campaigns') {
      return mockCrmData.campaigns.filter(campaign => {
        const matchesChannel = primaryFilter ? campaign.channel === primaryFilter : true;
        const matchesObjective = secondaryFilter ? campaign.objective === secondaryFilter : true;
        const matchesBudget = campaign.budget >= thresholdFilter;
        return matchesChannel && matchesObjective && matchesBudget;
      });
    }

    if (activeEntity === 'orders') {
      return mockCrmData.orders.filter(order => {
        const matchesCategory = primaryFilter ? order.product_category === primaryFilter : true;
        const matchesChannel = secondaryFilter ? order.channel === secondaryFilter : true;
        const matchesValue = order.order_value >= thresholdFilter;
        return matchesCategory && matchesChannel && matchesValue;
      });
    }

    return mockCrmData.journeys;
  }, [activeEntity, primaryFilter, secondaryFilter, thresholdFilter]);

  const calculatedKPIs = useMemo<KpiTile[]>(() => {
    if (activeEntity === 'customers') {
      const total = filteredData.length;
      const totalSpend = filteredData.reduce((acc, item) => acc + (item as any).total_spend, 0);
      const optIn = filteredData.filter(item => (item as any).marketing_consent).length;
      const unsubscribed = filteredData.filter(item => (item as any).unsubscribed).length;
      return [
        { label: 'Record filtrati', value: total, desc: 'Clienti nella selezione' },
        { label: 'Spesa media', value: formatEuro(total ? totalSpend / total : 0), desc: `${formatEuro(totalSpend)} totali` },
        { label: 'Opt-in rate', value: `${total ? Math.round((optIn / total) * 100) : 0}%`, desc: 'Consenso marketing valido' },
        { label: 'Opt-out rate', value: `${total ? Math.round((unsubscribed / total) * 100) : 0}%`, desc: 'Da escludere dalle DEM' },
      ];
    }

    if (activeEntity === 'leads') {
      const total = filteredData.length;
      const value = filteredData.reduce((acc, item) => acc + (item as any).estimated_value, 0);
      const avgScore = total ? Math.round(filteredData.reduce((acc, item) => acc + (item as any).lead_score, 0) / total) : 0;
      const qualified = filteredData.filter(item => (item as any).status === 'Qualified').length;
      return [
        { label: 'Lead filtrati', value: total, desc: 'Volume pipeline' },
        { label: 'Valore stimato medio', value: formatEuro(total ? value / total : 0), desc: `${formatEuro(value)} pipeline` },
        { label: 'Lead score medio', value: `${avgScore}/100`, desc: 'Qualità media' },
        { label: 'Qualified rate', value: `${total ? Math.round((qualified / total) * 100) : 0}%`, desc: `${qualified} lead sales-ready` },
      ];
    }

    if (activeEntity === 'campaigns') {
      const total = filteredData.length;
      const spend = filteredData.reduce((acc, item) => acc + (item as any).budget, 0);
      const revenue = filteredData.reduce((acc, item) => acc + ((item as any).revenue || 0), 0);
      return [
        { label: 'Campagne', value: total, desc: 'Campagne nella vista' },
        { label: 'Budget totale', value: formatEuro(spend), desc: 'Investimento pianificato' },
        { label: 'Revenue attribuita', value: formatEuro(revenue), desc: 'Valore simulato' },
        { label: 'ROAS indicativo', value: spend ? `${(revenue / spend).toFixed(1)}x` : '0x', desc: 'Revenue / budget' },
      ];
    }

    if (activeEntity === 'orders') {
      const total = filteredData.length;
      const revenue = filteredData.reduce((acc, item) => acc + (item as any).order_value, 0);
      return [
        { label: 'Ordini', value: total, desc: 'Transazioni filtrate' },
        { label: 'Revenue', value: formatEuro(revenue), desc: 'Valore transazionale' },
        { label: 'AOV', value: formatEuro(total ? revenue / total : 0), desc: 'Average order value' },
        { label: 'Canali attivi', value: new Set(filteredData.map(item => (item as any).channel)).size, desc: 'Touchpoint acquisto' },
      ];
    }

    return [
      { label: 'Journey', value: filteredData.length, desc: 'Flussi disponibili' },
      { label: 'Attive', value: filteredData.filter(item => (item as any).status === 'Active').length, desc: 'Automazioni live' },
      { label: 'Draft / Paused', value: filteredData.filter(item => (item as any).status !== 'Active').length, desc: 'Da revisionare' },
      { label: 'Obiettivo', value: 'Lifecycle', desc: 'Nurturing e retention' },
    ];
  }, [activeEntity, filteredData]);

  const sqlTranspiledQuery = useMemo(() => {
    let query = `SELECT *\nFROM ${activeEntity}`;
    const conditions: string[] = [];

    if (activeEntity === 'customers') {
      if (primaryFilter) conditions.push(`country = '${primaryFilter}'`);
      if (secondaryFilter === 'consent') conditions.push('marketing_consent = TRUE');
      if (secondaryFilter === 'no-consent') conditions.push('marketing_consent = FALSE');
      if (secondaryFilter === 'active-sub') conditions.push('unsubscribed = FALSE');
      if (secondaryFilter === 'unsubscribed') conditions.push('unsubscribed = TRUE');
      if (thresholdFilter > 0) conditions.push(`total_spend >= ${thresholdFilter}`);
    }

    if (activeEntity === 'leads') {
      if (primaryFilter) conditions.push(`country = '${primaryFilter}'`);
      if (secondaryFilter) conditions.push(`status = '${secondaryFilter}'`);
      if (thresholdFilter > 0) conditions.push(`estimated_value >= ${thresholdFilter}`);
    }

    if (activeEntity === 'campaigns') {
      if (primaryFilter) conditions.push(`channel = '${primaryFilter}'`);
      if (secondaryFilter) conditions.push(`objective = '${secondaryFilter}'`);
      if (thresholdFilter > 0) conditions.push(`budget >= ${thresholdFilter}`);
    }

    if (activeEntity === 'orders') {
      if (primaryFilter) conditions.push(`product_category = '${primaryFilter}'`);
      if (secondaryFilter) conditions.push(`channel = '${secondaryFilter}'`);
      if (thresholdFilter > 0) conditions.push(`order_value >= ${thresholdFilter}`);
    }

    if (conditions.length) query += `\nWHERE ${conditions.join('\n  AND ')}`;
    return `${query};`;
  }, [activeEntity, primaryFilter, secondaryFilter, thresholdFilter]);

  const primaryLabel = activeEntity === 'customers' || activeEntity === 'leads'
    ? 'Paese'
    : activeEntity === 'campaigns'
      ? 'Canale campagna'
      : activeEntity === 'orders'
        ? 'Categoria prodotto'
        : 'Filtro principale';

  const secondaryLabel = activeEntity === 'customers'
    ? 'Consenso / iscrizione'
    : activeEntity === 'leads'
      ? 'Status lead'
      : activeEntity === 'campaigns'
        ? 'Obiettivo campagna'
        : activeEntity === 'orders'
          ? 'Canale ordine'
          : 'Filtro secondario';

  return (
    <div className="space-y-6" id="crm-practice-lab">
      <section className="bg-white border border-orange-100 rounded-xl md:rounded-3xl p-5 md:p-6 shadow-sm overflow-hidden relative">
        <div className="absolute right-0 top-0 w-56 h-56 bg-orange-100/60 rounded-full blur-3xl translate-x-20 -translate-y-24" />
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
              <Sparkles size={13} /> Practice Lab
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#121c2a] tracking-tight font-display">Allena segmentazione, KPI e lettura dati</h2>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              Usa filtri visuali e KPI cards per esplorare dati CRM simulati. La vista SQL resta opzionale: serve solo a capire cosa succede “dietro” ai filtri.
            </p>
          </div>
          <button
            onClick={() => setAnalystMode(prev => !prev)}
            className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-xs font-bold transition-all cursor-pointer ${
              analystMode
                ? 'bg-[#121c2a] text-white border-[#121c2a] shadow-lg shadow-slate-900/10'
                : 'bg-white text-slate-700 border-orange-200 hover:border-orange-400 hover:text-orange-700'
            }`}
            id="btn-toggle-sql"
          >
            <Terminal size={15} />
            {analystMode ? 'Nascondi Data Analyst View' : 'Mostra Data Analyst View'}
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
        {entityTabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeEntity === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`text-left rounded-2xl border p-4 transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#fff7ed] border-[#f97316] shadow-active-orange'
                  : 'bg-white border-slate-200 hover:border-orange-200 hover:bg-orange-50/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? 'bg-[#f97316] text-white' : 'bg-slate-100 text-slate-500'}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#121c2a]">{tab.label}</p>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{tab.helper}</p>
                </div>
              </div>
            </button>
          );
        })}
      </section>

      {analystMode && (
        <section className="bg-[#121c2a] text-orange-100 rounded-xl md:rounded-3xl border border-slate-800 p-4 md:p-5 shadow-lg overflow-hidden relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-orange-300">
              <Terminal size={14} /> Data Analyst View
            </span>
            <span className="text-[10px] font-bold bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 px-2 py-1 rounded-full">READ ONLY</span>
          </div>
          <pre className="whitespace-pre-wrap break-words text-xs md:text-sm leading-relaxed font-mono text-orange-100">{sqlTranspiledQuery}</pre>
          <Database className="absolute right-6 bottom-5 text-white/5" size={84} />
        </section>
      )}

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {calculatedKPIs.map((tile, index) => (
          <div key={tile.label} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-active-orange transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{tile.label}</span>
              <BarChart3 size={16} className={index === 0 ? 'text-[#f97316]' : 'text-slate-400'} />
            </div>
            <div className="text-2xl font-black text-[#121c2a] font-display">{tile.value}</div>
            <p className="text-xs text-slate-500 mt-1">{tile.desc}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <aside className="lg:col-span-4 bg-white border border-orange-100 rounded-xl md:rounded-3xl p-5 shadow-sm space-y-5">
          <div className="flex items-center gap-2 font-extrabold text-sm text-[#121c2a]">
            <Filter size={17} className="text-[#f97316]" />
            Segment Builder visuale
          </div>

          {activeEntity !== 'journeys' ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{primaryLabel}</label>
                <select
                  value={primaryFilter}
                  onChange={(event) => setPrimaryFilter(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-700 outline-none transition-colors focus:border-[#f97316] focus:ring-4 focus:ring-orange-100"
                >
                  <option value="">Mostra tutti</option>
                  {primaryOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{secondaryLabel}</label>
                <select
                  value={secondaryFilter}
                  onChange={(event) => setSecondaryFilter(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-700 outline-none transition-colors focus:border-[#f97316] focus:ring-4 focus:ring-orange-100"
                >
                  <option value="">Mostra tutti</option>
                  {secondaryOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{thresholdConfig.label}</label>
                  <span className="text-xs font-black text-[#f97316]">{formatEuro(thresholdFilter)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={thresholdConfig.max}
                  step={thresholdConfig.step}
                  value={thresholdFilter}
                  onChange={(event) => setThresholdFilter(Number(event.target.value))}
                  className="w-full accent-[#f97316]"
                />
                <p className="text-[11px] text-slate-400">Filtro applicato sul campo <code className="font-mono text-slate-600">{thresholdConfig.field}</code>.</p>
              </div>

              <button
                onClick={resetFilters}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 cursor-pointer"
              >
                Pulisci filtri
              </button>
            </div>
          ) : (
            <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4 text-sm text-slate-600 leading-relaxed">
              Le journey rappresentano flussi procedurali: qui puoi leggerne entry ed exit criteria, mentre la costruzione guidata è nelle lezioni.
            </div>
          )}

          <div className="rounded-2xl bg-[#fff7ed] border border-[#fed7aa] p-4 flex gap-3 items-start">
            <ShieldCheck size={18} className="text-[#f97316] shrink-0 mt-0.5" />
            <p className="text-xs text-slate-600 leading-relaxed">
              Obiettivo: capire come cambiano audience e KPI quando modifichi criteri, consenso e soglie di valore.
            </p>
          </div>
        </aside>

        <main className="lg:col-span-8 bg-white border border-slate-200 rounded-xl md:rounded-3xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-slate-50/60">
            <div className="flex items-center gap-2">
              <Database size={16} className="text-[#f97316]" />
              <span className="text-sm font-extrabold text-[#121c2a]">Risultati filtrati</span>
            </div>
            <span className="text-xs font-bold text-slate-500">{filteredData.length} righe · sola lettura</span>
          </div>

          <div className="overflow-auto max-h-[520px]">
            {filteredData.length === 0 ? (
              <div className="min-h-[360px] flex flex-col items-center justify-center p-8 text-center text-slate-500 space-y-3">
                <Database size={36} className="text-orange-200" />
                <p className="text-sm font-semibold">Nessun record corrisponde ai filtri impostati.</p>
                <button onClick={resetFilters} className="text-sm font-bold text-[#f97316] hover:text-[#ea580c]">Azzera filtri</button>
              </div>
            ) : (
              <DataTable activeEntity={activeEntity} rows={filteredData as any[]} />
            )}
          </div>
        </main>
      </section>
    </div>
  );
}

function DataTable({ activeEntity, rows }: { activeEntity: EntityType; rows: any[] }) {
  if (activeEntity === 'customers') {
    return (
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="sticky top-0 bg-white border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-500">
          <tr>
            <th className="p-4">Cliente</th>
            <th className="p-4">Country</th>
            <th className="p-4">Lifecycle</th>
            <th className="p-4 text-right">Speso</th>
            <th className="p-4 text-center">Consenso</th>
            <th className="p-4 text-center">Opt-out</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map(customer => (
            <tr key={customer.customer_id} className="hover:bg-orange-50/30">
              <td className="p-4">
                <div className="font-bold text-[#121c2a]">{customer.first_name} {customer.last_name}</div>
                <div className="text-xs text-slate-500">{customer.email}</div>
              </td>
              <td className="p-4 font-semibold text-slate-600">{customer.country}</td>
              <td className="p-4"><StatusPill value={customer.lifecycle_stage} /></td>
              <td className="p-4 text-right font-mono font-bold text-slate-700">{formatEuro(customer.total_spend)}</td>
              <td className="p-4 text-center">{customer.marketing_consent ? <PositivePill label="Granted" /> : <NegativePill label="Revoked" />}</td>
              <td className="p-4 text-center">{customer.unsubscribed ? <NegativePill label="Out" /> : <PositivePill label="In" />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (activeEntity === 'leads') {
    return (
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="sticky top-0 bg-white border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-500">
          <tr>
            <th className="p-4">Lead</th>
            <th className="p-4">Source</th>
            <th className="p-4 text-center">Score</th>
            <th className="p-4 text-right">Valore stimato</th>
            <th className="p-4">Status</th>
            <th className="p-4">Campagna</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map(lead => (
            <tr key={lead.lead_id} className="hover:bg-orange-50/30">
              <td className="p-4 font-mono font-bold text-[#f97316]">{lead.lead_id}</td>
              <td className="p-4 font-semibold text-slate-700">{lead.source}</td>
              <td className="p-4 text-center">
                <div className="inline-flex items-center gap-2">
                  <div className="w-16 h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className={`h-full ${lead.lead_score >= 80 ? 'bg-emerald-500' : lead.lead_score >= 50 ? 'bg-amber-400' : 'bg-red-400'}`} style={{ width: `${lead.lead_score}%` }} />
                  </div>
                  <span className="font-mono font-bold">{lead.lead_score}</span>
                </div>
              </td>
              <td className="p-4 text-right font-mono font-bold">{formatEuro(lead.estimated_value)}</td>
              <td className="p-4"><StatusPill value={lead.status} /></td>
              <td className="p-4 text-xs font-mono text-slate-500">{lead.campaign_id || 'Organic'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (activeEntity === 'campaigns') {
    return (
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="sticky top-0 bg-white border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-500">
          <tr>
            <th className="p-4">Campagna</th>
            <th className="p-4">Canale</th>
            <th className="p-4">Obiettivo</th>
            <th className="p-4 text-right">Budget</th>
            <th className="p-4 text-right">Revenue</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map(campaign => (
            <tr key={campaign.campaign_id} className="hover:bg-orange-50/30">
              <td className="p-4">
                <div className="font-bold text-[#121c2a]">{campaign.campaign_name}</div>
                <div className="text-xs text-slate-500">{campaign.campaign_id}</div>
              </td>
              <td className="p-4 font-semibold text-slate-600">{campaign.channel}</td>
              <td className="p-4"><StatusPill value={campaign.objective} /></td>
              <td className="p-4 text-right font-mono font-bold">{formatEuro(campaign.budget)}</td>
              <td className="p-4 text-right font-mono font-bold text-emerald-700">{formatEuro(campaign.revenue || 0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (activeEntity === 'orders') {
    return (
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="sticky top-0 bg-white border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-500">
          <tr>
            <th className="p-4">Ordine</th>
            <th className="p-4">Cliente</th>
            <th className="p-4">Data</th>
            <th className="p-4 text-right">Importo</th>
            <th className="p-4">Categoria</th>
            <th className="p-4">Canale</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map(order => (
            <tr key={order.order_id} className="hover:bg-orange-50/30">
              <td className="p-4 font-mono font-bold text-[#f97316]">{order.order_id}</td>
              <td className="p-4 font-mono text-slate-500">{order.customer_id}</td>
              <td className="p-4 text-slate-600">{order.order_date}</td>
              <td className="p-4 text-right font-mono font-bold">{formatEuro(order.order_value)}</td>
              <td className="p-4 text-slate-700">{order.product_category}</td>
              <td className="p-4"><StatusPill value={order.channel} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <table className="w-full min-w-[780px] text-left text-sm">
      <thead className="sticky top-0 bg-white border-b border-slate-100 text-[11px] uppercase tracking-wider text-slate-500">
        <tr>
          <th className="p-4">Journey</th>
          <th className="p-4">Objective</th>
          <th className="p-4">Entry condition</th>
          <th className="p-4">Exit condition</th>
          <th className="p-4 text-center">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {rows.map(journey => (
          <tr key={journey.journey_id} className="hover:bg-orange-50/30">
            <td className="p-4">
              <div className="font-bold text-[#121c2a]">{journey.journey_name}</div>
              <div className="text-xs text-slate-500">{journey.journey_id}</div>
            </td>
            <td className="p-4 text-slate-600">{journey.objective}</td>
            <td className="p-4 text-xs text-slate-500 leading-relaxed">{journey.entry_condition}</td>
            <td className="p-4 text-xs text-slate-500 leading-relaxed">{journey.exit_condition}</td>
            <td className="p-4 text-center"><StatusPill value={journey.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function StatusPill({ value }: { value: string }) {
  const lower = value.toLowerCase();
  const variant = lower.includes('qualified') || lower.includes('active') || lower.includes('won') || lower.includes('high')
    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
    : lower.includes('unqualified') || lower.includes('lost') || lower.includes('inactive') || lower.includes('churn')
      ? 'bg-red-50 text-red-700 border-red-200'
      : lower.includes('prospect') || lower.includes('proposal') || lower.includes('nurturing')
        ? 'bg-blue-50 text-blue-700 border-blue-200'
        : 'bg-orange-50 text-orange-700 border-orange-200';
  return <span className={`inline-flex items-center px-2 py-1 rounded-full border text-[11px] font-bold ${variant}`}>{value}</span>;
}

function PositivePill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full border text-[11px] font-bold bg-emerald-50 text-emerald-700 border-emerald-200">
      <CheckCircle2 size={12} /> {label}
    </span>
  );
}

function NegativePill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full border text-[11px] font-bold bg-red-50 text-red-700 border-red-200">
      <XCircle size={12} /> {label}
    </span>
  );
}
