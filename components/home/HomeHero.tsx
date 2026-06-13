"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ExternalLink, Mail } from "lucide-react";
import { hero, siteConfig } from "@/data/content";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" as const, delay },
});

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const companyLogos = [
  { src: "/logos/aon.png",      alt: "Aon",      w: 64,  h: 30 },
  { src: "/logos/tellabs.png",  alt: "Tellabs",  w: 76,  h: 30 },
  { src: "/logos/ge.png",       alt: "GE",       w: 44,  h: 44 },
  { src: "/logos/deloitte.png", alt: "Deloitte", w: 78,  h: 30 },
  { src: "/logos/siemens.jpg",  alt: "Siemens",  w: 88,  h: 30 },
];

export default function HomeHero() {
  return (
    <section className="pt-24 pb-16 px-6" style={{ background: "var(--bg)" }}>
      <div
        className="grid gap-12 items-start lg-grid-cols-2"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        {/* Left column — identity card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <div
            className="rounded-xl overflow-hidden"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            {/* Photo top + info below */}
            <div className="flex items-stretch gap-0">
              {/* Photo column */}
              <div
                className="flex-shrink-0 flex items-center justify-center p-6"
                style={{ background: "var(--surface-alt)", borderRight: "1px solid var(--border)", minWidth: 180 }}
              >
                <div className="rounded-full overflow-hidden" style={{ width: 200, height: 200, border: "3px solid var(--border)" }}>
                  <Image src={siteConfig.profilePhoto} alt="Nehal Naik" width={200} height={200} className="object-cover w-full h-full" />
                </div>
              </div>
              {/* Info column */}
              <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <div className="font-semibold text-[20px] mb-0.5" style={{ color: "var(--text-1)", fontFamily: "var(--font-lora), Georgia, serif" }}>
                    {siteConfig.name}
                  </div>
                  <div className="text-[13px] mb-5" style={{ color: "var(--text-2)" }}>{siteConfig.title}</div>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-2 text-[13px]" style={{ color: "var(--text-2)" }}>
                      <MapPin size={14} style={{ color: "var(--text-3)", flexShrink: 0 }} />Chicago, IL
                    </div>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-[13px] hover:opacity-70 transition-opacity" style={{ color: "var(--navy)" }}>
                      <Mail size={14} />{siteConfig.email}
                    </a>
                    <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] hover:opacity-70 transition-opacity" style={{ color: "var(--navy)" }}>
                      <LinkedinIcon size={14} />linkedin.com/in/nehal-k-naik<ExternalLink size={10} style={{ color: "var(--text-3)" }} />
                    </a>
                    <a href={siteConfig.mitCredential} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] hover:opacity-70 transition-opacity" style={{ color: "var(--navy)" }}>
                      <Image src="/logos/mit-badge.jpg" alt="MIT" width={14} height={14} className="rounded-sm object-contain" />MIT AI/ML Credential<ExternalLink size={10} style={{ color: "var(--text-3)" }} />
                    </a>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium" style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", color: "var(--green)" }}>
                    <span className="rounded-full animate-pulse-dot" style={{ width: 6, height: 6, background: "var(--green)", display: "inline-block" }} />Open to Opportunities
                  </div>
                </div>
              </div>
            </div>
            {/* Company logos strip */}
            <div className="px-6 py-5" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="text-[10px] tracking-widest uppercase mb-3" style={{ color: "var(--text-3)", fontFamily: "var(--font-geist-mono), monospace" }}>Previously at</p>
              <div className="flex items-center gap-5 flex-wrap">
                {companyLogos.map((logo) => (
                  <Image key={logo.alt} src={logo.src} alt={logo.alt} width={logo.w} height={logo.h} className="object-contain hover:opacity-100 transition-opacity" style={{ maxHeight: 38, opacity: 0.65 }} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right column — text */}
        <div>
          <motion.p {...fade(0)} className="label mb-4">
            {hero.eyebrow}
          </motion.p>

          <motion.h1 {...fade(0.06)} className="display mb-6">
            {hero.headlineLine1}{" "}
            <br />
            <span style={{ color: "var(--navy)" }}>{hero.headlineLine2}</span>
          </motion.h1>

          <motion.p
            {...fade(0.12)}
            className="text-[16px] leading-[1.75] mb-8"
            style={{ color: "var(--text-2)", maxWidth: 480 }}
          >
            {hero.body}
          </motion.p>

          <motion.div {...fade(0.18)} className="flex items-center gap-4 flex-wrap mb-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[14px] font-medium text-white transition-colors"
              style={{ background: "var(--navy)", height: 44 }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--navy-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--navy)")}
            >
              {hero.cta1}
            </Link>
            <Link
              href="/contact"
              className="text-[14px] font-medium transition-colors"
              style={{ color: "var(--navy)" }}
            >
              {hero.cta2} →
            </Link>
          </motion.div>

          {/* Credential pills */}
          <motion.div {...fade(0.24)}>
            <p className="label mb-3">Certified &amp; Credentialed</p>
            <div className="flex flex-wrap gap-2">
              {hero.credentials.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-full text-[12px] font-medium"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-2)",
                    background: "var(--surface)",
                    fontFamily: "var(--font-geist-mono), monospace",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
