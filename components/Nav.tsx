"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const links = [
  { href: "/", label: "Nehal Naik" },
  { href: "/resume", label: "Resume" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const mqHandler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", mqHandler);

    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", mqHandler);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) setOpen(false);
    document.body.style.overflow = open && !isDesktop ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, isDesktop]);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200 no-print",
          scrolled
            ? "bg-[var(--surface)] border-b border-[var(--border)]"
            : "bg-[var(--bg)] border-b border-[var(--border)]"
        )}
        style={{ borderBottomColor: scrolled ? "#C8C4BC" : "var(--border)" }}
      >
        <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-serif text-[18px] font-semibold text-[var(--navy)] tracking-tight hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            Nehal Naik
          </Link>

          {/* Desktop nav links */}
          {isDesktop && (
            <div className="flex items-center gap-1">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={clsx(
                      "px-4 py-1.5 text-[13px] font-medium transition-colors rounded relative",
                      active
                        ? "text-[var(--navy)]"
                        : "text-[var(--text-2)] hover:text-[var(--text-1)]"
                    )}
                    style={active ? {
                      textDecoration: "underline",
                      textDecorationColor: "var(--navy)",
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                    } : {}}
                  >
                    {l.label.toUpperCase()}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Right: availability chip + hamburger */}
          <div className="flex items-center gap-3">
            {isDesktop && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[12px] font-medium text-[var(--text-2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse-dot" />
                Available
              </div>
            )}
            {!isDesktop && (
              <button
                onClick={() => setOpen(!open)}
                className="p-1.5 text-[var(--text-2)]"
                aria-label="Toggle menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {!isDesktop && (
        <div
          className={clsx(
            "fixed inset-0 z-40 bg-[var(--surface)] flex flex-col justify-center items-center gap-6 transition-all duration-200",
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-medium text-[var(--text-1)] hover:text-[var(--navy)] transition-colors"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-2 text-sm text-[var(--text-3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
            Available for opportunities
          </div>
        </div>
      )}
    </>
  );
}
