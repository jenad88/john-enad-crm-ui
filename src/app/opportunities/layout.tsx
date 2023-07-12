"use client";

import SubModuleHeader, { SubModuleDef } from "../components/sub-module-header";

export default function OpportunitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const subModule: SubModuleDef = { moduleName: "CRM", name: "Opportunities" };
  return (
    <>
      <section>
        <SubModuleHeader subModule={subModule} />
        {children}
      </section>
    </>
  );
}
