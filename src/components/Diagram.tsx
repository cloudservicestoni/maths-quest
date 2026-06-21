/*
 * Venn + conversion-ladder diagrams as React SVG.
 * One <Diagram spec={...}/> entry point; switches on spec.type.
 */
import type { DiagramSpec } from '../types/content';

function Single({ label, inside, outside }: { label: string; inside?: number; outside?: number }) {
  return (
    <svg viewBox="0 0 340 210" role="img" aria-label="Single-circle Venn diagram">
      <rect x="2" y="2" width="336" height="206" rx="10" fill="none" stroke="#cbd5e1" />
      <circle cx="150" cy="105" r="78" fill="#6366f1" fillOpacity="0.12" stroke="#6366f1" />
      <text x="150" y="40" className="vd-label" textAnchor="middle">{label}</text>
      {inside != null && <text x="150" y="115" className="vd-num">{inside}</text>}
      {outside != null && <text x="300" y="195" className="vd-num">{outside}</text>}
    </svg>
  );
}

function Venn2({ setA, setB, onlyA, both, onlyB, outside }:
  { setA: string; setB: string; onlyA: number; both: number; onlyB: number; outside: number }) {
  return (
    <svg viewBox="0 0 340 210" role="img" aria-label="Two-circle Venn diagram">
      <rect x="2" y="2" width="336" height="206" rx="10" fill="none" stroke="#cbd5e1" />
      <circle cx="130" cy="100" r="74" fill="#6366f1" fillOpacity="0.12" stroke="#6366f1" />
      <circle cx="210" cy="100" r="74" fill="#10b981" fillOpacity="0.12" stroke="#10b981" />
      <text x="86" y="42" className="vd-label">{setA}</text>
      <text x="250" y="42" className="vd-label">{setB}</text>
      <text x="100" y="106" className="vd-num">{onlyA}</text>
      <text x="170" y="106" className="vd-num">{both}</text>
      <text x="240" y="106" className="vd-num">{onlyB}</text>
      <text x="170" y="196" className="vd-num">{outside}</text>
    </svg>
  );
}

function Venn2Labelled({ setA, setB }: { setA: string; setB: string }) {
  return (
    <svg viewBox="0 0 340 210" role="img" aria-label="Two-circle Venn diagram with region names">
      <rect x="2" y="2" width="336" height="206" rx="10" fill="none" stroke="#cbd5e1" />
      <circle cx="130" cy="100" r="76" fill="#6366f1" fillOpacity="0.12" stroke="#6366f1" />
      <circle cx="210" cy="100" r="76" fill="#10b981" fillOpacity="0.12" stroke="#10b981" />
      <text x="84" y="40" className="vd-label">{setA}</text>
      <text x="252" y="40" className="vd-label">{setB}</text>
      <text x="92" y="104" className="vd-region">only {setA}</text>
      <text x="170" y="100" className="vd-region">both</text>
      <text x="170" y="114" className="vd-region">({setA} &amp; {setB})</text>
      <text x="248" y="104" className="vd-region">only {setB}</text>
      <text x="300" y="198" className="vd-region">neither</text>
    </svg>
  );
}

function Venn3Labelled({ setA, setB, setC }: { setA: string; setB: string; setC: string }) {
  return (
    <svg viewBox="0 0 340 210" role="img" aria-label="Three-circle Venn diagram with region names">
      <rect x="2" y="2" width="336" height="206" rx="10" fill="none" stroke="#cbd5e1" />
      <circle cx="130" cy="86" r="64" fill="#6366f1" fillOpacity="0.12" stroke="#6366f1" />
      <circle cx="210" cy="86" r="64" fill="#10b981" fillOpacity="0.12" stroke="#10b981" />
      <circle cx="170" cy="146" r="64" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" />
      <text x="86" y="40" className="vd-label">{setA}</text>
      <text x="248" y="40" className="vd-label">{setB}</text>
      <text x="170" y="205" className="vd-label">{setC}</text>
      <text x="104" y="74" className="vd-region">{setA} only</text>
      <text x="236" y="74" className="vd-region">{setB} only</text>
      <text x="170" y="172" className="vd-region">{setC} only</text>
      <text x="170" y="62" className="vd-region">{setA}&amp;{setB}</text>
      <text x="118" y="124" className="vd-region">{setA}&amp;{setC}</text>
      <text x="222" y="124" className="vd-region">{setB}&amp;{setC}</text>
      <text x="170" y="106" className="vd-region">all 3</text>
    </svg>
  );
}

function ConversionChain({ units, factors }: { units: string[]; factors: number[] }) {
  const W = 340, boxW = 54, boxH = 38, top = 44;
  const n = units.length;
  const gap = n > 1 ? (W - n * boxW) / (n - 1) : 0;
  const cx = units.map((_, i) => i * (boxW + gap) + boxW / 2);
  return (
    <svg viewBox="0 0 340 122" role="img" aria-label="Unit conversion ladder">
      <defs>
        <marker id="ah" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#10b981" /></marker>
        <marker id="ah2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef4444" /></marker>
      </defs>
      {units.map((u, i) => (
        <g key={u + i}>
          <rect x={i * (boxW + gap)} y={top} width={boxW} height={boxH} rx="8" fill="#eef2ff" stroke="#6366f1" />
          <text x={cx[i]} y={top + 25} className="vd-num">{u}</text>
        </g>
      ))}
      {factors.map((f, i) => {
        const x1 = cx[i] + boxW / 2 - 4;
        const x2 = cx[i + 1] - boxW / 2 + 4;
        const mid = (x1 + x2) / 2;
        return (
          <g key={'f' + i}>
            <line x1={x1} y1={top - 4} x2={x2} y2={top - 4} stroke="#10b981" strokeWidth="2" markerEnd="url(#ah)" />
            <text x={mid} y={top - 10} className="vd-arrow" fill="#047857">×{f}</text>
            <line x1={x2} y1={top + boxH + 6} x2={x1} y2={top + boxH + 6} stroke="#ef4444" strokeWidth="2" markerEnd="url(#ah2)" />
            <text x={mid} y={top + boxH + 20} className="vd-arrow" fill="#b91c1c">÷{f}</text>
          </g>
        );
      })}
    </svg>
  );
}

function PercentBar({ percent, label }: { percent: number; label?: string }) {
  const p = Math.max(0, Math.min(100, percent));
  const fillW = (300 * p) / 100;
  return (
    <svg viewBox="0 0 340 70" role="img" aria-label={`Bar showing ${p} percent`}>
      <rect x="20" y="22" width="300" height="26" rx="13" fill="#fce7f3" stroke="#ec4899" />
      <rect x="20" y="22" width={fillW} height="26" rx="13" fill="#ec4899" />
      <text x="20" y="64" className="vd-region" textAnchor="start">0%</text>
      <text x="320" y="64" className="vd-region" textAnchor="end">100%</text>
      <text x="170" y="18" className="vd-arrow" fill="#be185d">{label ?? `${p}%`}</text>
    </svg>
  );
}

export default function Diagram({ spec }: { spec: DiagramSpec }) {
  let inner: React.ReactNode = null;
  switch (spec.type) {
    case 'single': inner = <Single {...spec.data} />; break;
    case 'venn2': inner = <Venn2 {...spec.data} />; break;
    case 'venn2Labelled': inner = <Venn2Labelled {...spec.data} />; break;
    case 'venn3Labelled': inner = <Venn3Labelled {...spec.data} />; break;
    case 'conversionChain': inner = <ConversionChain {...spec.data} />; break;
    case 'percentBar': inner = <PercentBar {...spec.data} />; break;
  }
  return <div className="diagram">{inner}</div>;
}
