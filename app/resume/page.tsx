import type { Metadata } from "next";
import ResumeContent from "@/components/resume/ResumeContent";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional background, experience, and credentials for Nehal Naik — AI/ML Technology Leader.",
};

export default function ResumePage() {
  return <ResumeContent />;
}
