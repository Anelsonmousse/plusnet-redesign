import type { Metadata } from "next";
import AuthPanel from "@/components/AuthPanel";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata: Metadata = { title: "Help & Support" };

export default function SupportPortal() {
  return (
    <>
      <PageHero eyebrow="Selfcare" title="Customer Support Portal" />
      <Section tone="mist">
        <AuthPanel />
      </Section>
    </>
  );
}
