"use client";

import SectionHeader, { SectionDef } from "../components/section-header";

export default function AccountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const section: SectionDef = { moduleName: "CRM", name: "Accounts" };
  return (
    <>
      <section>
        <SectionHeader section={section} />
        {children}
      </section>
    </>
  );
}
