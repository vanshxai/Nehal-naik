import { clsx } from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({ children, className, hover = false, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={clsx(
        "rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-xl hover:shadow-[var(--accent)]/5 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
