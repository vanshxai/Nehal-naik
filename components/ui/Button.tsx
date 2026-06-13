"use client";
import { forwardRef } from "react";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, as: Tag = "button", href, ...props }, ref) => {
    const base =
      "inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] cursor-pointer";

    const variants = {
      primary:
        "bg-[var(--accent)] text-white hover:brightness-110 active:brightness-95 shadow-lg shadow-[var(--accent)]/20",
      ghost: "text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--surface-2)]",
      outline:
        "border border-[var(--border)] text-[var(--text-1)] hover:border-[var(--accent)] hover:text-[var(--accent)] bg-transparent",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-[15px]",
      lg: "px-7 py-3.5 text-base",
    };

    const cls = clsx(base, variants[variant], sizes[size], className);

    if (Tag === "a" && href) {
      return (
        <a href={href} className={cls} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={cls} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
