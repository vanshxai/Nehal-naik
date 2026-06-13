import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/data/content";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="no-print border-t border-[var(--border)] bg-[var(--surface-alt)] py-6 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-3" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        <span className="text-[13px] text-[var(--text-3)]">
          © {new Date().getFullYear()} Nehal Naik
        </span>
        <span className="text-[13px] text-[var(--text-3)] hidden" style={{ display: "block" }}>
          Committed to responsible AI development
        </span>
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-3)] hover:text-[var(--navy)] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[var(--text-3)] hover:text-[var(--navy)] transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
