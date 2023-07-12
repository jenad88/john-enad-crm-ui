"use client";

import SubModuleHeader, { SubModuleDef } from "../components/sub-module-header";

export default function AccountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const subModule: SubModuleDef = { moduleName: "CRM", name: "Accounts" };
  return (
    <>
      <section>
        <SubModuleHeader subModule={subModule} />
        {children}
      </section>
    </>
  );
}
