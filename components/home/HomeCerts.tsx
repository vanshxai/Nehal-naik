"use client";
import Image from "next/image";
import { certifications } from "@/data/content";

function orgAbbr(issuer: string | null) {
  if (!issuer) return "CERT";
  const map: Record<string, string> = { "Google Cloud": "GC", "PMI": "PMI", "Scrum Alliance": "SA" };
  return map[issuer] ?? issuer.slice(0, 4).toUpperCase();
}

function orgColor(issuer: string | null) {
  const map: Record<string, string> = { "Google Cloud": "#4285F4", "PMI": "#003087", "Scrum Alliance": "#009A44" };
  return map[issuer ?? ""] ?? "#1B3A6B";
}

export default function HomeCerts() {
  const imageCerts = certifications.filter(c => c.image);
  const textCerts = certifications.filter(c => !c.image);

  return (
    <section className="py-16 px-6" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p className="label mb-4">Certifications &amp; Training</p>
        <h2 className="h2-serif mb-10">Certified &amp; credentialed.</h2>

        {/* Image certs — 3 per row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 28 }}>
          {imageCerts.map((cert) => (
            <div key={cert.name}>
              <div
                className="rounded-xl overflow-hidden mb-2"
                style={{ border: "1px solid var(--border)", aspectRatio: "1.1 / 1", background: "var(--surface)" }}
              >
                {cert.credentialLink ? (
                  <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", height: "100%" }}>
                    <Image src={cert.image!} alt={cert.name} width={600} height={545} className="w-full h-full object-contain" />
                  </a>
                ) : (
                  <Image src={cert.image!} alt={cert.name} width={600} height={545} className="w-full h-full object-contain" />
                )}
              </div>
              <div className="text-[13px] font-medium leading-snug" style={{ color: "var(--text-1)" }}>{cert.name}</div>
              <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 11, color: "var(--text-3)" }}>
                {[cert.issuer, cert.year].filter(Boolean).join(" · ")}
              </div>
            </div>
          ))}
        </div>

        {/* Text-only certs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {textCerts.map((cert) => (
            <div key={cert.name} className="flex items-center gap-3 rounded-lg p-3" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div
                className="rounded flex items-center justify-center flex-shrink-0 text-white"
                style={{ width: 44, height: 44, background: orgColor(cert.issuer), fontSize: 9, fontWeight: 600, textAlign: "center", padding: 4, lineHeight: 1.2 }}
              >
                {orgAbbr(cert.issuer)}
              </div>
              <div>
                <div className="text-[14px] font-medium" style={{ color: "var(--text-1)" }}>{cert.name}</div>
                <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 11, color: "var(--text-3)" }}>
                  {[cert.issuer, cert.year].filter(Boolean).join(" · ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
