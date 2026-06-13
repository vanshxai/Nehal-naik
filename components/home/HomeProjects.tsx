"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/content";

export default function HomeProjects() {
  const preview = projects.slice(0, 3);

  return (
    <section
      className="py-20 px-6"
      style={{ background: "var(--surface-alt)", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="label mb-4">AI Work</p>
          <h2 className="h2-serif">Selected AI work.</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {preview.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/portfolio"
            className="text-[14px] font-medium transition-colors"
            style={{ color: "var(--navy)" }}
          >
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div
      className="rounded-xl p-6 transition-all duration-200 group cursor-pointer"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--navy)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
    >
      <div className="flex items-start gap-4">
        {/* Thumbnail */}
        <div className="rounded-lg flex-shrink-0 overflow-hidden" style={{ width: 80, height: 80, border: "1px solid var(--border)" }}>
          <Image src={project.image} alt={project.title} width={80} height={80} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
            <span
              className="text-[11px] px-2 py-0.5 rounded"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                background: "var(--navy-tint)",
                color: "var(--navy)",
              }}
            >
              {project.tag}
            </span>
          </div>
          <h3 className="text-[16px] font-medium mb-1" style={{ color: "var(--text-1)" }}>
            {project.title}
          </h3>
          <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-2)" }}>
            {project.body}
          </p>
        </div>
      </div>
    </div>
  );
}
