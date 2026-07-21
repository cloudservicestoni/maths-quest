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

/* ── 2D polygon shape data (viewBox "0 0 240 180") ─────────────────────── */
const S2D: Record<string, {
  pts: string;
  ra?: string[];            // right-angle polyline point strings
  ticks?: number[][];       // tick mark endpoints [x1,y1,x2,y2]
  sym?: number[][];         // symmetry line endpoints [x1,y1,x2,y2]
}> = {
  equilateral: {
    pts: '120,15 20,165 220,165',
    ticks: [[63,86,77,94],[120,158,120,172],[163,94,177,86]],
    sym: [[120,15,120,168],[20,165,170,90],[220,165,70,90]],
  },
  isosceles: {
    pts: '120,18 42,163 198,163',
    ticks: [[88,94,74,87],[166,87,152,94]],
    sym: [[120,18,120,163]],
  },
  scalene: { pts: '45,20 18,155 205,148' },
  right: {
    pts: '35,20 35,158 198,158',
    ra: ['35,148 45,148 45,158'],
  },
  square: {
    pts: '70,30 170,30 170,150 70,150',
    ra: ['80,30 80,40 70,40','160,30 160,40 170,40','160,150 160,140 170,140','80,150 80,140 70,140'],
    ticks: [[120,22,120,38],[162,90,178,90],[120,142,120,158],[62,90,78,90]],
    sym: [[120,22,120,158],[62,90,178,90],[70,30,170,150],[170,30,70,150]],
  },
  rectangle: {
    pts: '28,58 212,58 212,132 28,132',
    ra: ['38,58 38,68 28,68','202,58 202,68 212,68','202,132 202,122 212,122','38,132 38,122 28,122'],
    sym: [[120,50,120,140],[20,95,220,95]],
  },
  parallelogram: {
    pts: '72,38 210,38 168,152 30,152',
    ticks: [[141,30,141,46],[99,144,99,160],[59,98,44,92],[197,98,182,92]],
  },
  rhombus: {
    pts: '120,18 212,90 120,162 28,90',
    ticks: [[170,49,162,60],[170,132,162,121],[70,132,78,121],[70,49,78,60]],
    sym: [[28,90,212,90],[120,10,120,170]],
  },
  trapezium: { pts: '78,38 162,38 210,155 30,155' },
  kite: {
    pts: '120,18 196,88 120,165 44,88',
    ticks: [[163,48,153,58],[77,48,87,58]],
    sym: [[120,18,120,165]],
  },
  pentagon: {
    pts: '120,20 193,73 166,156 74,156 47,73',
    sym: [[120,20,120,156]],
  },
  hexagon: {
    pts: '191,90 156,28 84,28 49,90 84,152 156,152',
    sym: [[120,20,120,160],[49,90,191,90],[156,28,84,152],[84,28,156,152],[174,59,66,121],[174,121,66,59]],
  },
  octagon: { pts: '183,63 146,26 94,26 57,63 57,117 94,154 146,154 183,117' },
};

function Shape2D({ shape, label, symmetryLines }: { shape: string; label?: string; symmetryLines?: boolean }) {
  const d = S2D[shape];
  if (!d) return null;
  const P = '#8b5cf6';
  return (
    <svg viewBox="0 0 240 180" role="img" aria-label={label ?? shape}>
      {symmetryLines && d.sym?.map((t, i) => (
        <line key={i} x1={t[0]} y1={t[1]} x2={t[2]} y2={t[3]}
          stroke="#ec4899" strokeWidth="1.5" strokeDasharray="6,4" strokeOpacity="0.8" />
      ))}
      <polygon points={d.pts} fill={P} fillOpacity="0.12" stroke={P} strokeWidth="2.5" strokeLinejoin="round" />
      {d.ra?.map((pts, i) => (
        <polyline key={i} points={pts} fill="none" stroke={P} strokeWidth="1.5" />
      ))}
      {d.ticks?.map((t, i) => (
        <line key={i} x1={t[0]} y1={t[1]} x2={t[2]} y2={t[3]} stroke={P} strokeWidth="2" strokeLinecap="round" />
      ))}
      {label && (
        <text x="120" y="175" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e1b4b">{label}</text>
      )}
    </svg>
  );
}

function Shape3D({ shape, label }: { shape: string; label?: string }) {
  const C = '#8b5cf6', sw = 2.5, dsw = 1.8, DA = '5,4';
  let inner: React.ReactNode;
  switch (shape) {
    case 'cube':
      inner = <>
        <line x1="45" y1="80" x2="145" y2="80"/><line x1="145" y1="80" x2="145" y2="170"/>
        <line x1="145" y1="170" x2="45" y2="170"/><line x1="45" y1="170" x2="45" y2="80"/>
        <line x1="45" y1="80" x2="105" y2="46"/><line x1="145" y1="80" x2="205" y2="46"/>
        <line x1="105" y1="46" x2="205" y2="46"/><line x1="205" y1="46" x2="205" y2="136"/>
        <line x1="145" y1="170" x2="205" y2="136"/>
        <line x1="45" y1="170" x2="105" y2="136" strokeDasharray={DA} strokeWidth={dsw}/>
        <line x1="105" y1="46" x2="105" y2="136" strokeDasharray={DA} strokeWidth={dsw}/>
        <line x1="105" y1="136" x2="205" y2="136" strokeDasharray={DA} strokeWidth={dsw}/>
      </>;
      break;
    case 'cuboid':
      inner = <>
        <line x1="22" y1="80" x2="178" y2="80"/><line x1="178" y1="80" x2="178" y2="162"/>
        <line x1="178" y1="162" x2="22" y2="162"/><line x1="22" y1="162" x2="22" y2="80"/>
        <line x1="22" y1="80" x2="75" y2="48"/><line x1="178" y1="80" x2="231" y2="48"/>
        <line x1="75" y1="48" x2="231" y2="48"/><line x1="231" y1="48" x2="231" y2="130"/>
        <line x1="178" y1="162" x2="231" y2="130"/>
        <line x1="22" y1="162" x2="75" y2="130" strokeDasharray={DA} strokeWidth={dsw}/>
        <line x1="75" y1="48" x2="75" y2="130" strokeDasharray={DA} strokeWidth={dsw}/>
        <line x1="75" y1="130" x2="231" y2="130" strokeDasharray={DA} strokeWidth={dsw}/>
      </>;
      break;
    case 'triangular-prism':
      inner = <>
        <line x1="105" y1="45" x2="35" y2="165"/><line x1="35" y1="165" x2="165" y2="165"/>
        <line x1="165" y1="165" x2="105" y2="45"/>
        <line x1="105" y1="45" x2="170" y2="17"/><line x1="165" y1="165" x2="230" y2="137"/>
        <line x1="170" y1="17" x2="230" y2="137"/>
        <line x1="35" y1="165" x2="100" y2="137" strokeDasharray={DA} strokeWidth={dsw}/>
        <line x1="100" y1="137" x2="170" y2="17" strokeDasharray={DA} strokeWidth={dsw}/>
        <line x1="100" y1="137" x2="230" y2="137" strokeDasharray={DA} strokeWidth={dsw}/>
      </>;
      break;
    case 'square-pyramid':
      inner = <>
        <line x1="45" y1="168" x2="165" y2="168"/><line x1="165" y1="168" x2="215" y2="140"/>
        <line x1="45" y1="168" x2="130" y2="48"/><line x1="165" y1="168" x2="130" y2="48"/>
        <line x1="215" y1="140" x2="130" y2="48"/>
        <line x1="95" y1="140" x2="45" y2="168" strokeDasharray={DA} strokeWidth={dsw}/>
        <line x1="95" y1="140" x2="215" y2="140" strokeDasharray={DA} strokeWidth={dsw}/>
        <line x1="95" y1="140" x2="130" y2="48" strokeDasharray={DA} strokeWidth={dsw}/>
      </>;
      break;
    case 'tetrahedron':
      inner = <>
        <line x1="120" y1="48" x2="45" y2="170"/><line x1="120" y1="48" x2="180" y2="170"/>
        <line x1="120" y1="48" x2="210" y2="128"/>
        <line x1="45" y1="170" x2="180" y2="170"/><line x1="180" y1="170" x2="210" y2="128"/>
        <line x1="45" y1="170" x2="210" y2="128" strokeDasharray={DA} strokeWidth={dsw}/>
      </>;
      break;
    case 'cylinder':
      inner = <>
        <ellipse cx="130" cy="62" rx="80" ry="24" fill="none"/>
        <line x1="50" y1="62" x2="50" y2="155"/><line x1="210" y1="62" x2="210" y2="155"/>
        <path d="M 50,155 A 80,24 0 0 1 210,155" fill="none"/>
        <path d="M 50,155 A 80,24 0 0 0 210,155" fill="none" strokeDasharray={DA} strokeWidth={dsw}/>
      </>;
      break;
    case 'cone':
      inner = <>
        <line x1="50" y1="158" x2="130" y2="45"/><line x1="210" y1="158" x2="130" y2="45"/>
        <path d="M 50,158 A 80,24 0 0 1 210,158" fill="none"/>
        <path d="M 50,158 A 80,24 0 0 0 210,158" fill="none" strokeDasharray={DA} strokeWidth={dsw}/>
      </>;
      break;
    case 'pentagonal-prism':
      inner = <>
        <line x1="75" y1="65" x2="122" y2="100"/><line x1="122" y1="100" x2="104" y2="156"/>
        <line x1="104" y1="156" x2="46" y2="156"/><line x1="46" y1="156" x2="28" y2="100"/>
        <line x1="28" y1="100" x2="75" y2="65"/>
        <line x1="75" y1="65" x2="130" y2="40"/><line x1="122" y1="100" x2="177" y2="75"/>
        <line x1="104" y1="156" x2="159" y2="131"/>
        <line x1="130" y1="40" x2="177" y2="75"/><line x1="177" y1="75" x2="159" y2="131"/>
        <line x1="46" y1="156" x2="101" y2="131" strokeDasharray={DA} strokeWidth={dsw}/>
        <line x1="28" y1="100" x2="83" y2="75" strokeDasharray={DA} strokeWidth={dsw}/>
        <line x1="101" y1="131" x2="159" y2="131" strokeDasharray={DA} strokeWidth={dsw}/>
        <line x1="83" y1="75" x2="101" y2="131" strokeDasharray={DA} strokeWidth={dsw}/>
        <line x1="83" y1="75" x2="130" y2="40" strokeDasharray={DA} strokeWidth={dsw}/>
      </>;
      break;
    default:
      inner = null;
  }
  return (
    <svg viewBox="0 0 260 200" role="img" aria-label={label ?? shape}>
      <g stroke={C} strokeWidth={sw} strokeLinecap="round" fill="none">
        {inner}
      </g>
      {label && (
        <text x="130" y="196" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e1b4b">{label}</text>
      )}
    </svg>
  );
}

function ShapeGrid({ shapes, cols = 2 }: {
  shapes: Array<{ shape: string; label: string; symmetryLines?: boolean }>;
  cols?: number;
}) {
  const rows = Math.ceil(shapes.length / cols);
  const cW = 110, sH = 78, lH = 20, cH = sH + lH;
  const P = '#8b5cf6';
  return (
    <svg viewBox={`0 0 ${cols * cW} ${rows * cH}`} role="img" aria-label="Shape reference grid">
      {shapes.map((s, i) => {
        const d = S2D[s.shape];
        if (!d) return null;
        const cx = (i % cols) * cW, cy = Math.floor(i / cols) * cH;
        return (
          <g key={i}>
            <svg x={cx} y={cy} width={cW} height={sH} viewBox="0 0 240 180" preserveAspectRatio="xMidYMid meet">
              {s.symmetryLines && d.sym?.map((t, j) => (
                <line key={j} x1={t[0]} y1={t[1]} x2={t[2]} y2={t[3]}
                  stroke="#ec4899" strokeWidth="1.5" strokeDasharray="6,4" strokeOpacity="0.8" />
              ))}
              <polygon points={d.pts} fill={P} fillOpacity="0.12" stroke={P} strokeWidth="2.5" strokeLinejoin="round" />
              {d.ra?.map((pts, j) => (
                <polyline key={j} points={pts} fill="none" stroke={P} strokeWidth="1.5" />
              ))}
              {d.ticks?.map((t, j) => (
                <line key={j} x1={t[0]} y1={t[1]} x2={t[2]} y2={t[3]} stroke={P} strokeWidth="2" strokeLinecap="round" />
              ))}
            </svg>
            <text x={cx + cW / 2} y={cy + sH + 15} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e1b4b">{s.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function LShape({ outerW, outerH, notchW, notchH, unit = 'cm', hideDerived = false }: {
  outerW: number; outerH: number; notchW: number; notchH: number; unit?: string; hideDerived?: boolean;
}) {
  const VW = 340, VH = 230;
  const ML = 75, MR = 45, MT = 24, MB = 50;
  const availW = VW - ML - MR, availH = VH - MT - MB;
  const scale = Math.min(availW / outerW, availH / outerH);
  const sW = outerW * scale, sH = outerH * scale;
  const nW = notchW * scale, nH = notchH * scale;
  const ox = ML + (availW - sW) / 2, oy = MT + (availH - sH) / 2;
  const C = '#14b8a6', LB = '#1e1b4b', DIM = '#64748b', fs = 12;
  const lbl = (v: number) => `${v} ${unit}`;
  const pts = [
    `${ox},${oy}`,
    `${ox + sW - nW},${oy}`,
    `${ox + sW - nW},${oy + nH}`,
    `${ox + sW},${oy + nH}`,
    `${ox + sW},${oy + sH}`,
    `${ox},${oy + sH}`,
  ].join(' ');
  const cy = oy + sH / 2;
  const niy = oy + nH / 2;
  const rcy = oy + nH + (sH - nH) / 2;
  return (
    <svg viewBox={`0 0 ${VW} ${VH}`} role="img" aria-label="L-shaped compound shape">
      <polygon points={pts} fill={C} fillOpacity="0.12" stroke={C} strokeWidth="2.5" strokeLinejoin="round" />
      {/* left side */}
      <text x={ox - 20} y={cy} textAnchor="middle" fontSize={fs} fill={LB}
        transform={`rotate(-90 ${ox - 20} ${cy})`}>{lbl(outerH)}</text>
      {/* bottom */}
      <text x={ox + sW / 2} y={oy + sH + 24} textAnchor="middle" fontSize={fs} fill={LB}>{lbl(outerW)}</text>
      {/* top-left section */}
      <text x={ox + (sW - nW) / 2} y={oy - 8} textAnchor="middle" fontSize={fs} fill={hideDerived ? DIM : LB}>{hideDerived ? '?' : lbl(outerW - notchW)}</text>
      {/* notch left vertical — inside notch space */}
      <text x={ox + sW - nW + 20} y={niy} textAnchor="middle" fontSize={fs} fill={LB}
        transform={`rotate(-90 ${ox + sW - nW + 20} ${niy})`}>{lbl(notchH)}</text>
      {/* notch bottom — above inner step */}
      <text x={ox + sW - nW / 2} y={oy + nH - 8} textAnchor="middle" fontSize={fs} fill={LB}>{lbl(notchW)}</text>
      {/* right lower side */}
      <text x={ox + sW + 20} y={rcy} textAnchor="middle" fontSize={fs} fill={hideDerived ? DIM : LB}
        transform={`rotate(-90 ${ox + sW + 20} ${rcy})`}>{hideDerived ? '?' : lbl(outerH - notchH)}</text>
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
    case 'shape2d': inner = <Shape2D {...spec.data} />; break;
    case 'shape3d': inner = <Shape3D {...spec.data} />; break;
    case 'shapeGrid': inner = <ShapeGrid {...spec.data} />; break;
    case 'lshape': inner = <LShape {...spec.data} />; break;
  }
  return <div className="diagram">{inner}</div>;
}
