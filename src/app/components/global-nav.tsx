"use client";

import Link from "next/link";
import { useState } from "react";

import { MenuDef } from "@/app/components/sub-module-menu-item";
import SubModuleMenu from "@/app/components/sub-module-menu";
import { CRM_SUB_MODULE_MENU } from "@/app/constants/submodule/submodule-constants";

export default function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <Link
              href="/"
              className="group flex w-full items-center gap-x-2.5"
              onClick={close}
            >
              <h2>LOGO</h2>
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <SubModuleMenu menu={CRM_SUB_MODULE_MENU} />
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
