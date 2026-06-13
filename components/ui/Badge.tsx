import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "surface" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "accent", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center font-mono text-[11px] font-medium px-2.5 py-1 rounded-md tracking-wide",
        {
          "bg-[var(--accent-dim)] text-[var(--accent)]": variant === "accent",
          "bg-[var(--surface-2)] text-[var(--text-2)]": variant === "surface",
          "border border-[var(--border)] text-[var(--text-3)]": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
