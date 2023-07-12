"use client";

import SubModuleHeader, { SubModuleDef } from "../components/sub-module-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const subModule: SubModuleDef = { moduleName: "CRM", name: "Dashboard" };
  return (
    <>
      <section>
        <SubModuleHeader subModule={subModule} />
        {children}
      </section>
    </>
  );
}
