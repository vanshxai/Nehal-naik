"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { aboutBlurb } from "@/data/content";

export default function HomeAbout() {
  return (
    <section className="py-20 px-6" style={{ background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 680 }}>
          <motion.p
            className="label mb-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Background
          </motion.p>
          <motion.h2
            className="h2-serif mb-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.06 }}
          >
            {aboutBlurb.headline}
          </motion.h2>
          {aboutBlurb.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="text-[15px] leading-[1.75] mb-4"
              style={{ color: "var(--text-2)" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
            >
              {p}
            </motion.p>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.22 }}
          >
            <Link
              href="/resume"
              className="text-[14px] font-medium transition-colors"
              style={{ color: "var(--navy)" }}
            >
              Read full resume →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
