"use client";
import { Mail, MapPin, Printer } from "lucide-react";
import { siteConfig, experience, education, skills } from "@/data/content";

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const companyLogoMap: Record<string, string> = {
  "Aon – Impact Forecasting": "/logos/aon.png",
  "Tellabs Inc.": "/logos/tellabs.png",
  "Deloitte & Touche Tax Tech": "/logos/deloitte.png",
  "GE Capital (SRM)": "/logos/ge.png",
  "Siemens Comm. S/W Ltd.": "/logos/siemens.jpg",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <div
        className="mb-4"
        style={{
          borderBottom: "2px solid var(--border)",
          paddingBottom: 8,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--text-3)",
          }}
        >
          {title}
        </p>
      </div>
      {children}
    </section>
  );
}

export default function ResumeContent() {
  return (
    <div
      className="px-6 pt-24 pb-16"
      style={{ background: "var(--bg)", minHeight: "100vh" }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
        {/* Print button */}
        <button
          onClick={() => window.print()}
          className="no-print absolute top-0 right-0 flex items-center gap-1.5 text-[12px] transition-colors"
          style={{ color: "var(--text-3)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text-2)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}
        >
          <Printer size={13} />
          Print this page
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 600,
              color: "var(--navy)",
              marginBottom: 6,
            }}
          >
            {siteConfig.name}
          </h1>
          <p className="text-[15px]" style={{ color: "var(--text-2)", marginBottom: 12 }}>
            Managing Director · Product Owner · AI Strategist
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap text-[13px]" style={{ color: "var(--text-2)" }}>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
              style={{ color: "var(--navy)" }}
            >
              <Mail size={13} />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
              style={{ color: "var(--navy)" }}
            >
              <LinkedinIcon size={13} />
              linkedin.com/in/nehal-k-naik
            </a>
            <span className="flex items-center gap-1.5" style={{ color: "var(--text-3)" }}>
              <MapPin size={13} />
              Chicago, IL
            </span>
          </div>
        </div>

        {/* Professional Experience */}
        <Section title="Professional Experience">
          {experience.map((job, i) => (
            <div key={i} className="mb-8">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                <div className="flex items-center gap-3">
                  {companyLogoMap[job.company] && (
                    <div className="flex-shrink-0 rounded flex items-center justify-center overflow-hidden"
                      style={{ width: 40, height: 40, background: "var(--surface-alt)", border: "1px solid var(--border)", padding: 4 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={companyLogoMap[job.company]}
                        alt={job.company}
                        style={{ width: 32, height: 32, objectFit: "contain" }}
                      />
                    </div>
                  )}
                  <div>
                    <span className="text-[16px] font-semibold" style={{ color: "var(--text-1)" }}>
                      {job.company}
                    </span>
                    <span className="mx-2" style={{ color: "var(--border)" }}>·</span>
                    <span className="text-[15px] font-medium" style={{ color: "var(--navy)" }}>
                      {job.role}
                    </span>
                  </div>
                </div>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, color: "var(--text-3)", flexShrink: 0 }}>
                  {job.dates} · {job.location}
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5" style={{ paddingLeft: 18 }}>
                {job.bullets.map((b, j) => (
                  <li key={j} className="text-[14px] leading-relaxed" style={{ color: "var(--text-2)", listStyleType: "disc" }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* Education */}
        <Section title="Education">
          {education.map((e, i) => (
            <div key={i} className="mb-4 flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="text-[15px] font-semibold" style={{ color: "var(--text-1)" }}>
                  {e.institution}
                </div>
                <div className="text-[14px]" style={{ color: "var(--navy)" }}>
                  {e.degree}
                </div>
                {e.note && (
                  <div className="text-[13px] mt-0.5" style={{ color: "var(--text-3)" }}>
                    {e.note}
                  </div>
                )}
              </div>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 12,
                  color: "var(--text-3)",
                  flexShrink: 0,
                }}
              >
                {e.dates}
              </span>
            </div>
          ))}
        </Section>

        {/* Skills */}
        <Section title="Technology Skills">
          <div className="flex flex-col gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p
                  className="text-[12px] font-medium mb-2"
                  style={{
                    color: "var(--text-3)",
                    textTransform: "capitalize",
                    letterSpacing: "0.04em",
                  }}
                >
                  {category === "ai" ? "AI / ML" : category.charAt(0).toUpperCase() + category.slice(1)}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-[12px]"
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        background: "var(--surface-alt)",
                        border: "1px solid var(--border)",
                        color: "var(--text-2)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
