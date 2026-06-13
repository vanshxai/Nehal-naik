"use client";
import { useState } from "react";
import { Mail } from "lucide-react";
import { siteConfig } from "@/data/content";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 8,
  border: "1px solid var(--border)",
  background: "var(--surface)",
  color: "var(--text-1)",
  fontSize: 15,
  outline: "none",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 500,
  color: "var(--text-3)",
  marginBottom: 6,
};

export default function ContactContent() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", subject: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="px-6 pt-24 pb-16"
      style={{ background: "var(--bg)", minHeight: "100vh" }}
    >
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <p className="label mb-4">Contact</p>
        <h1 className="h2-serif mb-3">Let&apos;s talk.</h1>
        <p className="text-[15px] leading-relaxed mb-10" style={{ color: "var(--text-2)" }}>
          Open to advisory, leadership, and consulting engagements in AI/ML, Risk, and Insurance technology.
        </p>

        {status === "success" ? (
          <div
            className="rounded-xl p-8 text-center"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <div className="text-[15px] font-medium mb-2" style={{ color: "var(--text-1)" }}>
              Message received.
            </div>
            <div className="text-[14px]" style={{ color: "var(--text-2)" }}>
              I&apos;ll get back to you within 24 hours.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* First + Last */}
            <div className="grid sm-grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>First Name</label>
                <input
                  type="text"
                  required
                  style={inputStyle}
                  placeholder="Jane"
                  value={form.firstName}
                  onChange={e => setForm({ ...form, firstName: e.target.value })}
                />
              </div>
              <div>
                <label style={labelStyle}>Last Name</label>
                <input
                  type="text"
                  required
                  style={inputStyle}
                  placeholder="Smith"
                  value={form.lastName}
                  onChange={e => setForm({ ...form, lastName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                required
                style={inputStyle}
                placeholder="jane@company.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label style={labelStyle}>Subject</label>
              <input
                type="text"
                required
                style={inputStyle}
                placeholder="Advisory engagement, leadership role, project…"
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
              />
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                required
                rows={5}
                style={{ ...inputStyle, resize: "vertical" }}
                placeholder="Tell me about the opportunity…"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
            </div>

            {status === "error" && (
              <p className="text-[13px]" style={{ color: "#DC2626" }}>
                Something went wrong. Please email me directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-lg text-[14px] font-medium text-white transition-colors"
              style={{ background: status === "loading" ? "var(--text-3)" : "var(--navy)", cursor: status === "loading" ? "wait" : "pointer" }}
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}

        {/* Direct contact */}
        <div className="mt-10 pt-8 flex flex-col gap-3" style={{ borderTop: "1px solid var(--border)" }}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2.5 text-[14px] transition-colors"
            style={{ color: "var(--navy)" }}
          >
            <Mail size={16} />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-[14px] transition-colors"
            style={{ color: "var(--navy)" }}
          >
            <LinkedinIcon size={16} />
            linkedin.com/in/nehal-k-naik
          </a>
        </div>
      </div>
    </div>
  );
}
