"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/content";

export default function PortfolioContent() {
  return (
    <>
      {/* Intro */}
      <section
        className="px-6 pt-24 pb-14"
        style={{ background: "var(--surface-alt)", borderBottom: "1px solid var(--border)" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="label mb-4">AI Solution Portfolio</p>
          <h1 className="h2-serif mb-4" style={{ maxWidth: 560 }}>
            Responsible AI in practice.
          </h1>
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-2)", maxWidth: 600 }}>
            Each project is grounded in the{" "}
            <a
              href="https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "var(--navy)" }}
            >
              NIST AI Risk Management Framework
            </a>{" "}
            — built to be transparent, accountable, and fit for production in regulated industries.
          </p>
        </div>
      </section>

      {/* Project list */}
      <section className="px-6 py-16" style={{ background: "var(--bg)" }}>
        <div className="flex flex-col gap-5" style={{ maxWidth: 1100, margin: "0 auto" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

function PortfolioCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div
      className="rounded-xl transition-all duration-200 group"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        padding: "28px 32px",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--navy)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
    >
      <div className="flex gap-6 items-start flex-wrap">
        {/* Thumbnail */}
        <div
          className="rounded-lg flex-shrink-0 overflow-hidden"
          style={{ width: 120, minHeight: 160, background: "var(--navy-tint)", border: "1px solid var(--border)" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={120}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1" style={{ minWidth: 260 }}>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span
              className="px-2 py-0.5 rounded text-[11px]"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                background: "var(--navy-tint)",
                color: "var(--navy)",
              }}
            >
              {project.tag}
            </span>
          </div>

          <h3 className="text-[18px] font-medium mb-2" style={{ color: "var(--text-1)" }}>
            {project.title}
          </h3>

          <p className="text-[14px] leading-relaxed mb-4" style={{ color: "var(--text-2)" }}>
            {project.body}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded"
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 11,
                  background: "var(--surface-alt)",
                  color: "var(--text-3)",
                  border: "1px solid var(--border)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors"
              style={{ color: "var(--navy)" }}
            >
              View project
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
