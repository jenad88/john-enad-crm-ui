"use client";

import SubModuleHeader, { SubModuleDef } from "../components/sub-module-header";
import React, { useContext } from "react";
import AccountsProvider from "@/app/accounts/components/account-context";
import NewAccountDialog from "@/app/accounts/components/new-account-dialog";

export default function AccountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const subModule: SubModuleDef = { moduleName: "CRM", name: "Accounts" };
  // const [open, setOpen] = useContext(true)

  return (
    <>
      <AccountsProvider>
        <section className="m-3">
          <SubModuleHeader subModule={subModule} />
          <div className="px-4">{children}</div>
          <NewAccountDialog />
        </section>
      </AccountsProvider>
    </>
  );
}
