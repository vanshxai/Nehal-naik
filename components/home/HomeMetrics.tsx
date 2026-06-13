"use client";
import { useEffect, useRef, useState } from "react";
import { metrics } from "@/data/content";

function CountUp({ value, active }: { value: string; active: boolean }) {
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!active) return;
    const num = parseInt(value.replace(/\D/g, ""));
    if (isNaN(num)) { setDisplay(value); return; }
    const suffix = value.replace(/\d/g, "");
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1400, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.floor(eased * num) + suffix);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, value]);
  return <>{display}</>;
}

export default function HomeMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{ background: "var(--surface-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div
        className="grid grid-cols-2 lg-grid-cols-4"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className="flex flex-col items-center text-center py-10 px-6"
            style={{
              borderRight: i < metrics.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <div
              className="mb-1"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 600,
                color: "var(--navy)",
                lineHeight: 1,
              }}
            >
              {m.value === "∞" ? "∞" : <CountUp value={m.value} active={active} />}
            </div>
            <div className="text-[14px] font-medium mb-1" style={{ color: "var(--text-1)" }}>
              {m.label}
            </div>
            <div className="text-[12px]" style={{ color: "var(--text-3)" }}>
              {m.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
