import type { Metadata } from "next";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "AI/ML solutions built for Risk, Insurance, and Finance — RAG, NLP, predictive modeling, and more.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
