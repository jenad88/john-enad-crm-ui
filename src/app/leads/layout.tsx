"use client";

import SubModuleHeader, { SubModuleDef } from "../components/sub-module-header";
import React, { useContext } from "react";
import LeadsProvider from "@/app/leads/components/lead-context";
import NewLeadDialog from "@/app/leads/components/new-lead-dialog";

export default function LeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const subModule: SubModuleDef = { moduleName: "CRM", name: "Leads" };
  return (
    <>
      <LeadsProvider>
        <section className="m-3">
          <SubModuleHeader subModule={subModule} />
          <div className="px-4">{children}</div>
          <NewLeadDialog />
        </section>
      </LeadsProvider>
    </>
  );
}
