import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nehal Naik for advisory, leadership, and consulting engagements.",
};

export default function ContactPage() {
  return <ContactContent />;
}
