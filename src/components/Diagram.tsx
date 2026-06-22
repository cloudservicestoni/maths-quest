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

function Angle({ degrees, label }: { degrees: number; label?: string }) {
  const vx = 90, vy = 130, baseLen = 125, rayLen = 95, r = 34;
  const rad = (degrees * Math.PI) / 180;
  const ex = vx + rayLen * Math.cos(rad);
  const ey = vy - rayLen * Math.sin(rad);
  const arcEndX = vx + r * Math.cos(rad);
  const arcEndY = vy - r * Math.sin(rad);
  const bis = rad / 2;
  const lx = vx + (r + 20) * Math.cos(bis);
  const ly = vy - (r + 20) * Math.sin(bis);
  return (
    <svg viewBox="0 0 240 150" role="img" aria-label={`Angle of ${degrees} degrees`}>
      <line x1={vx} y1={vy} x2={vx + baseLen} y2={vy} stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
      <line x1={vx} y1={vy} x2={ex} y2={ey} stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
      <path d={`M ${vx + r} ${vy} A ${r} ${r} 0 0 0 ${arcEndX} ${arcEndY}`} fill="none" stroke="#ec4899" strokeWidth="2" />
      <circle cx={vx} cy={vy} r="3" fill="#0f172a" />
      <text x={lx} y={ly} className="vd-num" fontSize="15">{label ?? `${degrees}°`}</text>
    </svg>
  );
}

function BarChart({ title, yLabel, yMax, bars }: {
  title?: string; yLabel?: string; yMax: number;
  bars: { label: string; value: number }[];
}) {
  const ML = 44, MR = 12, MT = 28, MB = 38;
  const W = 340, H = 210;
  const cW = W - ML - MR;
  const cH = H - MT - MB;
  const n = bars.length;
  const bW = Math.min(34, (cW / n) * 0.55);
  const gap = (cW - n * bW) / (n + 1);
  const COLS = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#0ea5e9', '#f97316', '#8b5cf6', '#14b8a6'];
  const ticks = 5;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Bar chart'}>
      {title && <text x={W / 2} y={16} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e1b4b">{title}</text>}
      <line x1={ML} y1={MT} x2={ML} y2={MT + cH} stroke="#94a3b8" strokeWidth="1.5" />
      <line x1={ML} y1={MT + cH} x2={ML + cW} y2={MT + cH} stroke="#94a3b8" strokeWidth="1.5" />
      {Array.from({ length: ticks + 1 }, (_, i) => {
        const val = (yMax * i) / ticks;
        const y = MT + cH - (cH * i) / ticks;
        return (
          <g key={i}>
            {i > 0 && <line x1={ML} y1={y} x2={ML + cW} y2={y} stroke="#e2e8f0" strokeWidth="0.8" strokeDasharray="3,3" />}
            <text x={ML - 5} y={y + 4} textAnchor="end" fontSize="9" fill="#64748b">{val}</text>
          </g>
        );
      })}
      {bars.map((bar, i) => {
        const bH = (bar.value / yMax) * cH;
        const x = ML + gap + i * (bW + gap);
        const y = MT + cH - bH;
        const cx = x + bW / 2;
        return (
          <g key={i}>
            <rect x={x} y={y} width={bW} height={bH} fill={COLS[i % COLS.length]} fillOpacity="0.85" rx="2" />
            <text x={cx} y={y - 4} textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e1b4b">{bar.value}</text>
            <text x={cx} y={MT + cH + 14} textAnchor="middle" fontSize="8.5" fill="#475569">{bar.label}</text>
          </g>
        );
      })}
      {yLabel && (
        <text x={8} y={MT + cH / 2} textAnchor="middle" fontSize="9" fill="#64748b"
          transform={`rotate(-90,8,${MT + cH / 2})`}>{yLabel}</text>
      )}
    </svg>
  );
}

function TriangleAngles({ a, b, c }: { a: string; b: string; c: string }) {
  // A = top, B = bottom-left, C = bottom-right
  return (
    <svg viewBox="0 0 240 160" role="img" aria-label="Triangle with labelled angles">
      <polygon points="120,25 30,135 210,135" fill="#6366f1" fillOpacity="0.1" stroke="#6366f1" strokeWidth="3" strokeLinejoin="round" />
      <text x="120" y="58" className="vd-num" fontSize="15" textAnchor="middle">{a}</text>
      <text x="64" y="122" className="vd-num" fontSize="15" textAnchor="middle">{b}</text>
      <text x="176" y="122" className="vd-num" fontSize="15" textAnchor="middle">{c}</text>
    </svg>
  );
}

function LabelledRect({ width, height, unit = 'cm', label }: {
  width: number; height: number; unit?: string; label?: string;
}) {
  const VW = 340, VH = 200;
  const ML = 25, MR = 70, MT = 30, MB = 35;
  const availW = VW - ML - MR;
  const availH = VH - MT - MB;
  const ratio = width / height;
  let rW: number, rH: number;
  if (ratio > availW / availH) {
    rW = availW; rH = rW / ratio;
  } else {
    rH = availH; rW = rH * ratio;
  }
  const rx = ML + (availW - rW) / 2;
  const ry = MT + (availH - rH) / 2;
  return (
    <svg viewBox={`0 0 ${VW} ${VH}`} role="img" aria-label={label ?? `Rectangle ${width} by ${height}`}>
      {label && <text x={VW / 2} y={16} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e1b4b">{label}</text>}
      <rect x={rx} y={ry} width={rW} height={rH} fill="#14b8a615" stroke="#14b8a6" strokeWidth="2.5" rx="2" />
      <polyline points={`${rx + 10},${ry + rH} ${rx + 10},${ry + rH - 10} ${rx},${ry + rH - 10}`} fill="none" stroke="#14b8a6" strokeWidth="1.5" />
      <text x={rx + rW / 2} y={ry + rH + 22} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e1b4b">
        {width} {unit}
      </text>
      <text x={rx + rW + 14} y={ry + rH / 2 + 5} textAnchor="start" fontSize="13" fontWeight="bold" fill="#1e1b4b">
        {height} {unit}
      </text>
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
    case 'angle': inner = <Angle {...spec.data} />; break;
    case 'triangleAngles': inner = <TriangleAngles {...spec.data} />; break;
    case 'barChart': inner = <BarChart {...spec.data} />; break;
    case 'rect': inner = <LabelledRect {...spec.data} />; break;
  }
  return <div className="diagram">{inner}</div>;
}
