import { useState, useEffect, useRef, useCallback } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area, ReferenceLine, Cell } from "recharts";

const AMBER = "#BA7517";
const AMBER_LIGHT = "#FAEEDA";
const AMBER_MID = "#EF9F27";
const NAVY = "#185FA5";
const NAVY_LIGHT = "#E6F1FB";
const TEAL = "#1D9E75";
const TEAL_LIGHT = "#E1F5EE";
const CORAL = "#D85A30";
const CORAL_LIGHT = "#FAECE7";
const GRAY = "#888780";

function factorial(n) {
  if (n <= 1) return 1;
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}
function binomCoeff(n, k) {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1);
  return r;
}
function binomPMF(n, k, p) {
  return binomCoeff(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}
function poissonPMF(lambda, k) {
  return Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k);
}
function normalPDF(x, mu, sigma) {
  return Math.exp(-0.5 * ((x - mu) / sigma) ** 2) / (sigma * Math.sqrt(2 * Math.PI));
}
function erf(x) {
  const t = 1 / (1 + 0.3275911 * Math.abs(x));
  const poly = t * (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429))));
  const res = 1 - poly * Math.exp(-x * x);
  return x >= 0 ? res : -res;
}
function normalCDF(x, mu = 0, sigma = 1) {
  return 0.5 * (1 + erf((x - mu) / (sigma * Math.sqrt(2))));
}

function TeachBox({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: `0.5px solid ${AMBER}`, borderRadius: 10, marginTop: 12, overflow: "hidden" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: "100%", background: AMBER_LIGHT, border: "none", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, color: "#633806", fontWeight: 500 }}
      >
        <span>💡 {title}</span>
        <span style={{ fontSize: 18, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>›</span>
      </button>
      {open && (
        <div style={{ padding: "12px 14px", background: "var(--color-background-primary)", fontSize: 13.5, color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
          {children}
        </div>
      )}
    </div>
  );
}

function FormulaBox({ children }) {
  return (
    <div style={{ background: "var(--color-background-secondary)", border: `0.5px solid var(--color-border-tertiary)`, borderRadius: 8, padding: "10px 14px", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-text-primary)", margin: "8px 0" }}>
      {children}
    </div>
  );
}

function StatRow({ label, value, color }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: "0.5px solid var(--color-border-tertiary)", fontSize: 13.5 }}>
      <span style={{ color: "var(--color-text-secondary)" }}>{label}</span>
      <span style={{ fontWeight: 500, color: color || "var(--color-text-primary)" }}>{value}</span>
    </div>
  );
}

function SectionCard({ title, children }) {
  return (
    <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
      <h3 style={{ fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 600, color: NAVY, marginBottom: 16, marginTop: 0 }}>{title}</h3>
      {children}
    </div>
  );
}

function SliderRow({ label, value, min, max, step = 0.01, onChange, format }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 4 }}>
        <span>{label}</span>
        <span style={{ fontWeight: 500, color: "var(--color-text-primary)" }}>{format ? format(value) : value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(parseFloat(e.target.value))} style={{ width: "100%" }} />
    </div>
  );
}

// ─── FOUNDATIONS SECTION ───────────────────────────────────────────────────

function BasicProbability() {
  const [pA, setPa] = useState(0.5);
  const [pB, setPb] = useState(0.4);
  const [pAB, setPab] = useState(0.2);
  const safePab = Math.min(pAB, pA, pB);
  const union = pA + pB - safePab;

  return (
    <SectionCard title="Basic Probability Rules">
      <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", marginTop: 0 }}>Visualizing P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</p>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 240px" }}>
          <SliderRow label="P(A)" value={pA} min={0} max={1} onChange={setPa} format={v => (v * 100).toFixed(0) + "%"} />
          <SliderRow label="P(B)" value={pB} min={0} max={1} onChange={setPb} format={v => (v * 100).toFixed(0) + "%"} />
          <SliderRow label="P(A ∩ B)" value={pAB} min={0} max={Math.min(pA, pB)} step={0.01} onChange={setPab} format={v => (v * 100).toFixed(0) + "%"} />
          <div style={{ marginTop: 12, padding: "10px", background: NAVY_LIGHT, borderRadius: 8 }}>
            <div style={{ fontSize: 13, color: NAVY, fontWeight: 500, marginBottom: 4 }}>P(A ∪ B) = {(union * 100).toFixed(1)}%</div>
            <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>= {(pA*100).toFixed(0)}% + {(pB*100).toFixed(0)}% − {(safePab*100).toFixed(0)}%</div>
          </div>
        </div>
        <div style={{ flex: "1 1 200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 220 140" width="220" height="140">
            <ellipse cx="80" cy="70" rx="65" ry="50" fill={NAVY} fillOpacity={0.15} stroke={NAVY} strokeWidth={1.5} />
            <ellipse cx="140" cy="70" rx="65" ry="50" fill={AMBER} fillOpacity={0.15} stroke={AMBER} strokeWidth={1.5} />
            <ellipse cx="110" cy="70" rx="30" ry="35" fill={TEAL} fillOpacity={0.25} />
            <text x="60" y="74" textAnchor="middle" fontSize="13" fill={NAVY} fontWeight="500">A</text>
            <text x="160" y="74" textAnchor="middle" fontSize="13" fill={AMBER} fontWeight="500">B</text>
            <text x="110" y="74" textAnchor="middle" fontSize="11" fill={TEAL} fontWeight="500">A∩B</text>
          </svg>
        </div>
      </div>
      <TeachBox title="What does this diagram show?">
        <strong>P(A)</strong> is the probability of event A. <strong>P(B)</strong> is the probability of event B. The overlapping region is <strong>P(A ∩ B)</strong> — both events occurring. The union P(A ∪ B) counts A <em>or</em> B but must subtract the overlap to avoid double-counting it.
      </TeachBox>
    </SectionCard>
  );
}

function ConditionalProbability() {
  const [tp, setTp] = useState(80);
  const [fp, setFp] = useState(20);
  const [fn, setFn] = useState(10);
  const [tn, setTn] = useState(90);
  const total = tp + fp + fn + tn;
  const diseasePos = tp + fn;
  const diseaseNeg = fp + tn;
  const testPos = tp + fp;
  const testNeg = fn + tn;
  const pDgTp = tp / testPos;
  const pDgTn = fn / testNeg;

  const CellInput = ({ value, onChange }) => (
    <input type="number" min={0} value={value}
      onChange={e => onChange(parseInt(e.target.value) || 0)}
      style={{ width: 60, textAlign: "center", fontFamily: "var(--font-sans)", fontSize: 14 }} />
  );

  return (
    <SectionCard title="Conditional Probability">
      <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", marginTop: 0 }}>
        Conditional probability answers: <em>given something happened, how likely is something else?</em>
      </p>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", fontSize: 13, margin: "0 auto", minWidth: 280 }}>
          <thead>
            <tr>
              <th style={{ padding: "8px 12px", borderBottom: "1.5px solid var(--color-border-secondary)" }}></th>
              <th style={{ padding: "8px 12px", borderBottom: "1.5px solid var(--color-border-secondary)", color: CORAL }}>Disease +</th>
              <th style={{ padding: "8px 12px", borderBottom: "1.5px solid var(--color-border-secondary)", color: TEAL }}>Disease −</th>
              <th style={{ padding: "8px 12px", borderBottom: "1.5px solid var(--color-border-secondary)", color: GRAY }}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "8px 12px", fontWeight: 500 }}>Test +</td>
              <td style={{ padding: "8px 12px", textAlign: "center", background: "#fff3e0" }}><CellInput value={tp} onChange={setTp} /></td>
              <td style={{ padding: "8px 12px", textAlign: "center", background: "#e8f5e9" }}><CellInput value={fp} onChange={setFp} /></td>
              <td style={{ padding: "8px 12px", textAlign: "center", color: GRAY }}>{testPos}</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 12px", fontWeight: 500 }}>Test −</td>
              <td style={{ padding: "8px 12px", textAlign: "center", background: "#fff3e0" }}><CellInput value={fn} onChange={setFn} /></td>
              <td style={{ padding: "8px 12px", textAlign: "center", background: "#e8f5e9" }}><CellInput value={tn} onChange={setTn} /></td>
              <td style={{ padding: "8px 12px", textAlign: "center", color: GRAY }}>{testNeg}</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 12px", color: GRAY }}>Total</td>
              <td style={{ padding: "8px 12px", textAlign: "center", color: CORAL, fontWeight: 500 }}>{diseasePos}</td>
              <td style={{ padding: "8px 12px", textAlign: "center", color: TEAL, fontWeight: 500 }}>{diseaseNeg}</td>
              <td style={{ padding: "8px 12px", textAlign: "center", fontWeight: 500 }}>{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
        <div style={{ flex: 1, background: CORAL_LIGHT, borderRadius: 8, padding: "10px 14px" }}>
          <div style={{ fontSize: 12, color: CORAL, marginBottom: 2 }}>P(Disease | Test +)</div>
          <div style={{ fontSize: 20, fontWeight: 600, color: CORAL }}>{(pDgTp * 100).toFixed(1)}%</div>
          <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Of positive tests, {(pDgTp*100).toFixed(1)}% have disease</div>
        </div>
        <div style={{ flex: 1, background: TEAL_LIGHT, borderRadius: 8, padding: "10px 14px" }}>
          <div style={{ fontSize: 12, color: TEAL, marginBottom: 2 }}>P(Disease | Test −)</div>
          <div style={{ fontSize: 20, fontWeight: 600, color: TEAL }}>{(pDgTn * 100).toFixed(1)}%</div>
          <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Of negative tests, {(pDgTn*100).toFixed(1)}% have disease</div>
        </div>
      </div>
      <TeachBox title="What is conditional probability?">
        P(Disease | Test+) reads "probability of disease <em>given</em> a positive test." Each cell counts people: TP = true positives, FP = false positives, FN = false negatives, TN = true negatives. Edit the cells to see how population characteristics change the probabilities.
      </TeachBox>
    </SectionCard>
  );
}

function BayesTheorem() {
  const [prev, setPrev] = useState(0.01);
  const [sens, setSens] = useState(0.9);
  const [spec, setSpec] = useState(0.95);

  const tp = prev * sens;
  const fp = (1 - prev) * (1 - spec);
  const fn = prev * (1 - sens);
  const tn = (1 - prev) * spec;
  const ppv = tp / (tp + fp);
  const npv = tn / (tn + fn);

  const barData = [
    { name: "PPV", value: +(ppv * 100).toFixed(1) },
    { name: "NPV", value: +(npv * 100).toFixed(1) },
    { name: "Sensitivity", value: +(sens * 100).toFixed(1) },
    { name: "Specificity", value: +(spec * 100).toFixed(1) },
  ];

  return (
    <SectionCard title="Bayes' Theorem Calculator">
      <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", marginTop: 0 }}>
        Bayes' Theorem answers: <em>given a positive test result, what's the probability a patient truly has the disease?</em>
      </p>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 220px" }}>
          <SliderRow label={`Prevalence (${(prev*100).toFixed(1)}%)`} value={prev} min={0.001} max={0.5} step={0.001} onChange={setPrev} format={v => (v*100).toFixed(1)+"%"} />
          <SliderRow label={`Sensitivity (${(sens*100).toFixed(0)}%)`} value={sens} min={0.01} max={1} onChange={setSens} format={v => (v*100).toFixed(0)+"%"} />
          <SliderRow label={`Specificity (${(spec*100).toFixed(0)}%)`} value={spec} min={0.01} max={1} onChange={setSpec} format={v => (v*100).toFixed(0)+"%"} />
          <FormulaBox>PPV = (Sens × Prev) / [(Sens × Prev) + (1−Spec)(1−Prev)]</FormulaBox>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <div style={{ flex: 1, background: CORAL_LIGHT, borderRadius: 8, padding: "10px", textAlign: "center" }}>
              <div style={{ fontSize: 11, color: CORAL }}>PPV</div>
              <div style={{ fontSize: 22, fontWeight: 600, color: CORAL }}>{(ppv * 100).toFixed(1)}%</div>
            </div>
            <div style={{ flex: 1, background: TEAL_LIGHT, borderRadius: 8, padding: "10px", textAlign: "center" }}>
              <div style={{ fontSize: 11, color: TEAL }}>NPV</div>
              <div style={{ fontSize: 22, fontWeight: 600, color: TEAL }}>{(npv * 100).toFixed(1)}%</div>
            </div>
          </div>
        </div>
        <div style={{ flex: "1 1 200px", height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 10, right: 10, bottom: 10, left: -10 }}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} unit="%" />
              <Tooltip formatter={v => v + "%"} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {barData.map((d, i) => <Cell key={i} fill={[CORAL, TEAL, NAVY, AMBER][i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <TeachBox title="What do the calculated values mean?">
        <strong>PPV (Positive Predictive Value)</strong>: of everyone who tests positive, what fraction actually has the disease? Critically depends on <em>prevalence</em>. A test that's 90% sensitive and 95% specific has a PPV of only ~15% when prevalence is 1%.<br /><br />
        <strong>NPV (Negative Predictive Value)</strong>: of everyone who tests negative, what fraction truly doesn't have the disease?
      </TeachBox>
    </SectionCard>
  );
}

function SensitivitySpecificity() {
  const [threshold, setThreshold] = useState(0.5);
  const [sens, setSens] = useState(0.85);
  const [spec, setSpec] = useState(0.85);

  const mu1 = 0.3, mu2 = 0.7;
  const sigma = 0.12;
  const pts = [];
  for (let x = 0; x <= 1; x += 0.01) {
    pts.push({
      x: +x.toFixed(2),
      healthy: +normalPDF(x, mu1, sigma).toFixed(4),
      diseased: +normalPDF(x, mu2, sigma).toFixed(4),
    });
  }

  const tp = 1 - normalCDF(threshold, mu2, sigma);
  const fn = normalCDF(threshold, mu2, sigma);
  const fp = 1 - normalCDF(threshold, mu1, sigma);
  const tn = normalCDF(threshold, mu1, sigma);

  return (
    <SectionCard title="Sensitivity & Specificity">
      <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", marginTop: 0 }}>
        Drag the threshold to see the trade-off between true positives and false positives.
      </p>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 240px" }}>
          <div style={{ height: 180 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={pts} margin={{ top: 5, right: 10, bottom: 5, left: -20 }}>
                <XAxis dataKey="x" tick={{ fontSize: 10 }} tickCount={5} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip formatter={(v, n) => [v.toFixed(3), n]} />
                <Area type="monotone" dataKey="healthy" fill={TEAL} stroke={TEAL} fillOpacity={0.4} name="Healthy" />
                <Area type="monotone" dataKey="diseased" fill={CORAL} stroke={CORAL} fillOpacity={0.4} name="Diseased" />
                <ReferenceLine x={threshold} stroke={NAVY} strokeWidth={2} strokeDasharray="4 2" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <SliderRow label={`Threshold: ${threshold.toFixed(2)}`} value={threshold} min={0.05} max={0.95} step={0.01} onChange={setThreshold} format={v => v.toFixed(2)} />
        </div>
        <div style={{ flex: "1 1 160px" }}>
          <StatRow label="Sensitivity (TP rate)" value={(tp * 100).toFixed(1) + "%"} color={CORAL} />
          <StatRow label="Specificity (TN rate)" value={(tn * 100).toFixed(1) + "%"} color={TEAL} />
          <StatRow label="False Positive rate" value={(fp * 100).toFixed(1) + "%"} color={AMBER} />
          <StatRow label="False Negative rate" value={(fn * 100).toFixed(1) + "%"} color={GRAY} />
        </div>
      </div>
      <TeachBox title="What are the four shaded regions?">
        Moving the threshold left → more sensitivity (catch more true disease) but more false positives. Moving right → more specificity (fewer false alarms) but miss more disease. This fundamental trade-off drives all diagnostic test design.
      </TeachBox>
    </SectionCard>
  );
}

// ─── DISTRIBUTIONS SECTION ─────────────────────────────────────────────────

function BinomialDist() {
  const [n, setN] = useState(20);
  const [p, setP] = useState(0.3);
  const data = [];
  for (let k = 0; k <= n; k++) {
    data.push({ k, prob: +binomPMF(n, k, p).toFixed(5) });
  }
  const mean = (n * p).toFixed(2);
  const sd = Math.sqrt(n * p * (1 - p)).toFixed(2);

  return (
    <SectionCard title="Binomial Distribution">
      <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", marginTop: 0 }}>
        Models the number of successes in <em>n</em> independent trials, each with probability <em>p</em>.
      </p>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 180px" }}>
          <SliderRow label="n (trials)" value={n} min={1} max={50} step={1} onChange={setN} format={v => v} />
          <SliderRow label="p (success prob)" value={p} min={0.01} max={0.99} step={0.01} onChange={setP} format={v => v.toFixed(2)} />
          <FormulaBox>P(X=k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ</FormulaBox>
          <StatRow label="Mean" value={mean} color={NAVY} />
          <StatRow label="Std dev" value={sd} color={AMBER} />
        </div>
        <div style={{ flex: "2 1 260px", height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
              <XAxis dataKey="k" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip formatter={v => (v * 100).toFixed(2) + "%"} labelFormatter={l => "k = " + l} />
              <Bar dataKey="prob" fill={NAVY} radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <TeachBox title="Where is the binomial used in public health?">
        Classic examples: number of patients who respond to treatment out of n patients, number of positive screening tests, number of vaccinated people who develop antibodies. When n is large and p is small, the Poisson distribution approximates the binomial.
      </TeachBox>
    </SectionCard>
  );
}

function NormalDist() {
  const [mu, setMu] = useState(0);
  const [sigma, setSigma] = useState(1);
  const [showZ, setShowZ] = useState(false);

  const pts = [];
  const lo = mu - 4 * sigma, hi = mu + 4 * sigma;
  const step = (hi - lo) / 200;
  for (let x = lo; x <= hi; x += step) {
    const xr = +x.toFixed(3);
    pts.push({
      x: xr,
      pdf: +normalPDF(xr, mu, sigma).toFixed(5),
      s1: Math.abs(xr - mu) <= sigma ? +normalPDF(xr, mu, sigma).toFixed(5) : 0,
      s2: Math.abs(xr - mu) <= 2 * sigma && Math.abs(xr - mu) > sigma ? +normalPDF(xr, mu, sigma).toFixed(5) : 0,
      s3: Math.abs(xr - mu) <= 3 * sigma && Math.abs(xr - mu) > 2 * sigma ? +normalPDF(xr, mu, sigma).toFixed(5) : 0,
    });
  }

  const zTable = [
    { z: "0.0", v: ".5000" }, { z: "0.5", v: ".6915" }, { z: "1.0", v: ".8413" },
    { z: "1.5", v: ".9332" }, { z: "1.65", v: ".9505" }, { z: "1.96", v: ".9750" },
    { z: "2.0", v: ".9772" }, { z: "2.33", v: ".9901" }, { z: "2.58", v: ".9951" }, { z: "3.0", v: ".9987" },
  ];

  return (
    <SectionCard title="Normal Distribution">
      <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", marginTop: 0 }}>
        The bell curve. Characterized by mean (μ) and standard deviation (σ).
      </p>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 180px" }}>
          <SliderRow label={`μ (mean) = ${mu.toFixed(1)}`} value={mu} min={-3} max={3} step={0.1} onChange={setMu} format={v => v.toFixed(1)} />
          <SliderRow label={`σ (std dev) = ${sigma.toFixed(1)}`} value={sigma} min={0.2} max={3} step={0.1} onChange={setSigma} format={v => v.toFixed(1)} />
          <div style={{ marginTop: 10, fontSize: 13 }}>
            <StatRow label="±1σ covers" value="68.3%" color={NAVY} />
            <StatRow label="±2σ covers" value="95.4%" color={AMBER} />
            <StatRow label="±3σ covers" value="99.7%" color={CORAL} />
          </div>
          <button onClick={() => setShowZ(z => !z)} style={{ marginTop: 10, fontSize: 12, color: NAVY, background: "none", border: `0.5px solid ${NAVY}`, borderRadius: 6, padding: "4px 10px", cursor: "pointer" }}>
            {showZ ? "Hide" : "Show"} z-score reference
          </button>
        </div>
        <div style={{ flex: "2 1 260px", height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={pts} margin={{ top: 5, right: 5, bottom: 5, left: -10 }}>
              <XAxis dataKey="x" tick={{ fontSize: 10 }} tickCount={7} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip formatter={v => v.toFixed(4)} />
              <Area type="monotone" dataKey="s1" fill={NAVY} stroke="none" fillOpacity={0.7} stackId="a" name="±1σ" />
              <Area type="monotone" dataKey="s2" fill={AMBER} stroke="none" fillOpacity={0.5} stackId="a" name="±2σ" />
              <Area type="monotone" dataKey="s3" fill={CORAL} stroke="none" fillOpacity={0.4} stackId="a" name="±3σ" />
              <Area type="monotone" dataKey="pdf" stroke={NAVY} fill="none" strokeWidth={2} name="PDF" />
              <ReferenceLine x={mu} stroke={GRAY} strokeDasharray="4 2" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      {showZ && (
        <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 6 }}>
          {zTable.map(row => (
            <div key={row.z} style={{ background: NAVY_LIGHT, borderRadius: 6, padding: "5px 9px", fontSize: 12 }}>
              <span style={{ color: NAVY, fontWeight: 500 }}>z={row.z}</span>
              <span style={{ color: "var(--color-text-secondary)", marginLeft: 4 }}>{row.v}</span>
            </div>
          ))}
        </div>
      )}
      <TeachBox title="Why does the normal distribution matter in public health?">
        Blood pressure, height, BMI, and many lab values are approximately normally distributed in populations. The 68-95-99.7 rule lets you quickly estimate what fraction of a population falls within 1, 2, or 3 standard deviations of the mean — useful for setting "normal ranges" on lab tests.
      </TeachBox>
    </SectionCard>
  );
}

function PoissonDist() {
  const [lambda, setLambda] = useState(3);
  const [cumul, setCumul] = useState(false);
  const maxK = Math.min(Math.ceil(lambda * 4), 40);
  const data = [];
  let cum = 0;
  for (let k = 0; k <= maxK; k++) {
    const p = poissonPMF(lambda, k);
    cum += p;
    data.push({ k, prob: +p.toFixed(5), cumul: +cum.toFixed(5) });
  }

  return (
    <SectionCard title="Poisson Distribution">
      <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", marginTop: 0 }}>
        Models the number of rare events occurring in a fixed interval of time or space.
      </p>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 180px" }}>
          <SliderRow label={`λ (rate) = ${lambda.toFixed(1)}`} value={lambda} min={0.1} max={15} step={0.1} onChange={setLambda} format={v => v.toFixed(1)} />
          <FormulaBox>P(X=k) = e⁻λ · λᵏ / k!</FormulaBox>
          <StatRow label="Mean = Variance" value={lambda.toFixed(1)} color={NAVY} />
          <StatRow label="Std dev" value={Math.sqrt(lambda).toFixed(2)} color={AMBER} />
          <button onClick={() => setCumul(c => !c)} style={{ marginTop: 10, fontSize: 12, color: NAVY, background: "none", border: `0.5px solid ${NAVY}`, borderRadius: 6, padding: "4px 10px", cursor: "pointer" }}>
            {cumul ? "Hide" : "Show"} cumulative probability
          </button>
        </div>
        <div style={{ flex: "2 1 260px", height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
              <XAxis dataKey="k" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip formatter={(v, n) => [(v * 100).toFixed(2) + "%", n]} />
              <Bar dataKey={cumul ? "cumul" : "prob"} fill={TEAL} radius={[2, 2, 0, 0]} name={cumul ? "Cumulative P" : "P(X=k)"} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <TeachBox title="Where is Poisson used in epidemiology?">
        Disease outbreaks, hospital admissions per hour, road accidents per mile. The key assumption: events are independent and rare relative to the opportunity space. When λ is large (say >30), the Poisson converges to a normal distribution.
      </TeachBox>
    </SectionCard>
  );
}

// ─── EPI STATS SECTION ─────────────────────────────────────────────────────

function RelativeRisk() {
  const [a, setA] = useState(40);
  const [b, setB] = useState(160);
  const [c, setC] = useState(10);
  const [d, setD] = useState(190);

  const exposed = a + b;
  const unexposed = c + d;
  const riskE = exposed > 0 ? a / exposed : 0;
  const riskU = unexposed > 0 ? c / unexposed : 0;
  const rr = riskU > 0 ? riskE / riskU : Infinity;
  const or = (b > 0 && c > 0) ? (a * d) / (b * c) : Infinity;
  const ar = riskE - riskU;
  const nnt = Math.abs(ar) > 0 ? 1 / Math.abs(ar) : Infinity;

  const barData = [
    { name: "Exposed", rate: +(riskE * 100).toFixed(1) },
    { name: "Unexposed", rate: +(riskU * 100).toFixed(1) },
  ];

  const Cell2 = ({ value, onChange }) => (
    <input type="number" min={0} value={value} onChange={e => onChange(parseInt(e.target.value) || 0)}
      style={{ width: 60, textAlign: "center", fontFamily: "var(--font-sans)", fontSize: 14 }} />
  );

  return (
    <SectionCard title="Relative Risk & Odds Ratios">
      <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", marginTop: 0 }}>
        Core measures of association between exposure and disease in a cohort study.
      </p>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 240px" }}>
          <table style={{ borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
            <thead>
              <tr>
                <th style={{ padding: "6px 10px", borderBottom: "1.5px solid var(--color-border-secondary)" }}></th>
                <th style={{ padding: "6px 10px", borderBottom: "1.5px solid var(--color-border-secondary)", color: CORAL }}>Disease +</th>
                <th style={{ padding: "6px 10px", borderBottom: "1.5px solid var(--color-border-secondary)", color: TEAL }}>Disease −</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "6px 10px", fontWeight: 500 }}>Exposed</td>
                <td style={{ padding: "6px 10px", textAlign: "center", background: "#fff3e0" }}><Cell2 value={a} onChange={setA} /></td>
                <td style={{ padding: "6px 10px", textAlign: "center", background: "#e8f5e9" }}><Cell2 value={b} onChange={setB} /></td>
              </tr>
              <tr>
                <td style={{ padding: "6px 10px", fontWeight: 500 }}>Unexposed</td>
                <td style={{ padding: "6px 10px", textAlign: "center", background: "#fff3e0" }}><Cell2 value={c} onChange={setC} /></td>
                <td style={{ padding: "6px 10px", textAlign: "center", background: "#e8f5e9" }}><Cell2 value={d} onChange={setD} /></td>
              </tr>
            </tbody>
          </table>
          <StatRow label="RR (Relative Risk)" value={isFinite(rr) ? rr.toFixed(2) : "∞"} color={CORAL} />
          <StatRow label="OR (Odds Ratio)" value={isFinite(or) ? or.toFixed(2) : "∞"} color={AMBER} />
          <StatRow label="AR (Attributable Risk)" value={(ar * 100).toFixed(1) + "%"} color={NAVY} />
          <StatRow label="NNT" value={isFinite(nnt) ? nnt.toFixed(1) : "∞"} color={TEAL} />
        </div>
        <div style={{ flex: "1 1 200px", height: 180 }}>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 4 }}>Disease Rate</div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 5, right: 5, bottom: 5, left: -10 }}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 10 }} unit="%" domain={[0, 100]} />
              <Tooltip formatter={v => v + "%"} />
              <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                <Cell fill={CORAL} />
                <Cell fill={TEAL} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <TeachBox title="RR vs OR — when does it matter?">
        <strong>RR</strong> is intuitive: exposed group is X times as likely to get disease. <strong>OR</strong> is used in case-control studies where RR can't be calculated. They converge when disease is rare (&lt;10%). NNT tells you how many people need treatment to prevent one bad outcome.
      </TeachBox>
    </SectionCard>
  );
}

function ConfidenceIntervals() {
  const [n, setN] = useState(100);
  const [prop, setProp] = useState(0.35);
  const [level, setLevel] = useState(0.95);
  const zVals = { 0.90: 1.645, 0.95: 1.96, 0.99: 2.576 };
  const z = zVals[level];
  const se = Math.sqrt(prop * (1 - prop) / n);
  const lo = Math.max(0, prop - z * se);
  const hi = Math.min(1, prop + z * se);

  const pvalData = [];
  for (let x = -4; x <= 4; x += 0.1) {
    const v = normalPDF(x);
    pvalData.push({
      x: +x.toFixed(2),
      pdf: +v.toFixed(5),
      reject: Math.abs(x) >= z ? +v.toFixed(5) : 0,
    });
  }

  return (
    <SectionCard title="Confidence Intervals & P-values">
      <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", marginTop: 0 }}>
        A confidence interval gives a range of plausible values for a population parameter.
      </p>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 200px" }}>
          <SliderRow label={`Sample size n = ${n}`} value={n} min={10} max={500} step={5} onChange={setN} format={v => v} />
          <SliderRow label={`Proportion = ${(prop*100).toFixed(0)}%`} value={prop} min={0.01} max={0.99} step={0.01} onChange={setProp} format={v => (v*100).toFixed(0)+"%"} />
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 6 }}>Confidence level</div>
            <div style={{ display: "flex", gap: 6 }}>
              {[0.90, 0.95, 0.99].map(l => (
                <button key={l} onClick={() => setLevel(l)}
                  style={{ flex: 1, padding: "5px 0", borderRadius: 6, border: `1px solid ${NAVY}`, background: level === l ? NAVY : "transparent", color: level === l ? "#fff" : NAVY, cursor: "pointer", fontSize: 12, fontFamily: "var(--font-sans)" }}>
                  {(l * 100).toFixed(0)}%
                </button>
              ))}
            </div>
          </div>
          <div style={{ background: NAVY_LIGHT, borderRadius: 8, padding: "10px", marginTop: 8 }}>
            <div style={{ fontSize: 12, color: NAVY, marginBottom: 4 }}>{(level*100).toFixed(0)}% Confidence Interval</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: NAVY }}>({(lo*100).toFixed(1)}%, {(hi*100).toFixed(1)}%)</div>
            <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 2 }}>Width: {((hi-lo)*100).toFixed(1)}pp · SE: {(se*100).toFixed(2)}%</div>
          </div>
        </div>
        <div style={{ flex: "2 1 240px", height: 200 }}>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 4 }}>Rejection regions (α = {(1-level).toFixed(2)})</div>
          <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={pvalData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
              <XAxis dataKey="x" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip formatter={v => v.toFixed(4)} />
              <Area type="monotone" dataKey="pdf" stroke={NAVY} fill={NAVY} fillOpacity={0.1} name="Normal" />
              <Area type="monotone" dataKey="reject" fill={CORAL} stroke={CORAL} fillOpacity={0.6} name="Reject H₀" />
              <ReferenceLine x={z} stroke={CORAL} strokeDasharray="3 2" />
              <ReferenceLine x={-z} stroke={CORAL} strokeDasharray="3 2" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <TeachBox title="What does 95% confidence actually mean?">
        It does <strong>not</strong> mean there's a 95% chance the true value is in this interval. It means: if we repeated this study many times and computed a CI each time, 95% of those intervals would contain the true population parameter. Wider CIs = less precision, but we can shrink them by increasing sample size.
      </TeachBox>
    </SectionCard>
  );
}

// ─── OUTBREAK / SIR MODEL ──────────────────────────────────────────────────

function SIRModel() {
  const [beta, setBeta] = useState(0.3);
  const [gamma, setGamma] = useState(0.1);
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState(0);
  const intervalRef = useRef(null);

  const N = 1000;
  const I0 = 1;
  const simData = useCallback(() => {
    const days = [];
    let S = N - I0, I = I0, R = 0;
    for (let t = 0; t <= 200; t++) {
      days.push({ t, S: Math.round(S), I: Math.round(I), R: Math.round(R) });
      const dS = -beta * S * I / N;
      const dR = gamma * I;
      const dI = -dS - dR;
      S += dS; I += dI; R += dR;
      if (I < 0.5) break;
    }
    return days;
  }, [beta, gamma]);

  const allData = simData();
  const displayData = allData.slice(0, step + 1);
  const R0 = beta / gamma;
  const herdThreshold = (1 - 1 / R0) * 100;

  useEffect(() => {
    setStep(allData.length - 1);
  }, [beta, gamma]);

  useEffect(() => {
    if (playing) {
      setStep(0);
      let s = 0;
      intervalRef.current = setInterval(() => {
        s++;
        setStep(s);
        if (s >= allData.length - 1) {
          clearInterval(intervalRef.current);
          setPlaying(false);
        }
      }, 30);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  return (
    <SectionCard title="SIR Model Simulation">
      <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", marginTop: 0 }}>
        The SIR model tracks Susceptible → Infectious → Recovered individuals over time.
      </p>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 200px" }}>
          <SliderRow label={`β (transmission rate) = ${beta.toFixed(2)}`} value={beta} min={0.05} max={1} step={0.01} onChange={v => { setBeta(v); setPlaying(false); }} format={v => v.toFixed(2)} />
          <SliderRow label={`γ (recovery rate) = ${gamma.toFixed(2)}`} value={gamma} min={0.01} max={0.5} step={0.01} onChange={v => { setGamma(v); setPlaying(false); }} format={v => v.toFixed(2)} />
          <div style={{ background: R0 > 1 ? CORAL_LIGHT : TEAL_LIGHT, borderRadius: 8, padding: "10px 14px", marginTop: 8 }}>
            <div style={{ fontSize: 12, color: R0 > 1 ? CORAL : TEAL }}>R₀ (basic reproduction number)</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: R0 > 1 ? CORAL : TEAL }}>{R0.toFixed(2)}</div>
            <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>{R0 > 1 ? "Epidemic grows" : "Epidemic fades"}</div>
          </div>
          {R0 > 1 && (
            <div style={{ background: NAVY_LIGHT, borderRadius: 8, padding: "8px 12px", marginTop: 8, fontSize: 12, color: NAVY }}>
              Herd immunity: <strong>{herdThreshold.toFixed(1)}%</strong> must be immune to stop spread
            </div>
          )}
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <button onClick={() => setPlaying(p => !p)}
              style={{ flex: 1, padding: "7px 0", borderRadius: 8, border: `1px solid ${NAVY}`, background: playing ? NAVY : "transparent", color: playing ? "#fff" : NAVY, cursor: "pointer", fontSize: 13, fontFamily: "var(--font-sans)" }}>
              {playing ? "⏸ Pause" : "▶ Play"}
            </button>
            <button onClick={() => { setPlaying(false); setStep(allData.length - 1); }}
              style={{ padding: "7px 14px", borderRadius: 8, border: `1px solid ${GRAY}`, background: "transparent", color: "var(--color-text-secondary)", cursor: "pointer", fontSize: 13, fontFamily: "var(--font-sans)" }}>
              Reset
            </button>
          </div>
        </div>
        <div style={{ flex: "2 1 280px", height: 240 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={displayData} margin={{ top: 5, right: 10, bottom: 5, left: -10 }}>
              <XAxis dataKey="t" tick={{ fontSize: 10 }} label={{ value: "Days", position: "insideBottom", offset: -3, fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip formatter={(v, n) => [v, n]} labelFormatter={l => "Day " + l} />
              <Line type="monotone" dataKey="S" stroke={NAVY} strokeWidth={2} dot={false} name="Susceptible" />
              <Line type="monotone" dataKey="I" stroke={CORAL} strokeWidth={2} dot={false} name="Infectious" />
              <Line type="monotone" dataKey="R" stroke={TEAL} strokeWidth={2} dot={false} name="Recovered" />
            </LineChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", fontSize: 12, marginTop: 4 }}>
            {[["Susceptible", NAVY], ["Infectious", CORAL], ["Recovered", TEAL]].map(([name, color]) => (
              <span key={name} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 16, height: 3, background: color, borderRadius: 2, display: "inline-block" }} />
                <span style={{ color: "var(--color-text-secondary)" }}>{name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <TeachBox title="How does R₀ drive epidemic dynamics?">
        R₀ is the average number of people one infected person spreads disease to in a fully susceptible population. R₀ = β/γ. When R₀ &gt; 1, each case generates more than one new case — exponential growth. Herd immunity requires enough people to be immune so the effective reproduction number Rₑ &lt; 1.
      </TeachBox>
    </SectionCard>
  );
}

// ─── MAIN APP ──────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "foundations", label: "Foundations", subtitle: "Core probability rules and diagnostic testing concepts used in public health." },
  { id: "distributions", label: "Distributions", subtitle: "Key distributions used to model health events and population data." },
  { id: "epi-stats", label: "Epi Stats", subtitle: "Measures of association and statistical inference in public health research." },
  { id: "outbreak", label: "Outbreak", subtitle: "Dynamic compartmental models for infectious disease epidemiology." },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("foundations");

  const navStyle = (id) => ({
    padding: "8px 16px",
    borderRadius: 8,
    border: "none",
    background: activeSection === id ? NAVY : "transparent",
    color: activeSection === id ? "#fff" : "var(--color-text-secondary)",
    cursor: "pointer",
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    fontWeight: activeSection === id ? 500 : 400,
    transition: "all 0.15s",
  });

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 2rem" }}>
      <h2 aria-hidden className="sr-only">Probability Theory in Public Health — Interactive Visual Guide</h2>

      {/* Header */}
      <div style={{ textAlign: "center", padding: "2rem 0 1.5rem", borderBottom: "0.5px solid var(--color-border-tertiary)", marginBottom: "1.5rem" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.12em", color: AMBER, textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>Interactive Visual Guide</div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: NAVY, margin: "0 0 8px" }}>
          Probability Theory in Public Health
        </h1>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0 }}>
          An interactive visual guide for undergraduate students
        </p>
      </div>

      {/* Nav */}
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: "1.5rem", padding: "6px", background: "var(--color-background-secondary)", borderRadius: 10 }}>
        {SECTIONS.map(s => (
          <button key={s.id} style={navStyle(s.id)} onClick={() => setActiveSection(s.id)}>
            {s.label}
          </button>
        ))}
      </div>

      {/* Section subtitle */}
      <div style={{ marginBottom: "1.25rem" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 600, color: NAVY, margin: "0 0 4px" }}>
          {SECTIONS.find(s => s.id === activeSection)?.label}
        </h2>
        <p style={{ fontSize: 13.5, color: "var(--color-text-secondary)", margin: 0 }}>
          {SECTIONS.find(s => s.id === activeSection)?.subtitle}
        </p>
      </div>

      {/* Content */}
      {activeSection === "foundations" && (
        <>
          <BasicProbability />
          <ConditionalProbability />
          <BayesTheorem />
          <SensitivitySpecificity />
        </>
      )}
      {activeSection === "distributions" && (
        <>
          <BinomialDist />
          <NormalDist />
          <PoissonDist />
        </>
      )}
      {activeSection === "epi-stats" && (
        <>
          <RelativeRisk />
          <ConfidenceIntervals />
        </>
      )}
      {activeSection === "outbreak" && (
        <>
          <SIRModel />
        </>
      )}
    </div>
  );
}
