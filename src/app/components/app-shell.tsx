"use client";

import { useState, useEffect } from "react";

import { CRM_SUB_MODULE_MENU } from "@/app/constants/submodule/submodule-constants";
import MobileNav from "@/app/components/mobile-nav";
import SubModuleMenuSlideOver from "@/app/components/sub-module-menu-slide-over";
import DesktopNav from "@/app/components/desktop-nav";
import HeaderBar from "@/app/components/header-bar";
import { MenuDef } from "@/app/components/sub-module-menu-item";

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function ApplicationShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const [currentSideOver, setCurrentSideOver] = useState<string | null>(null);
  const [menu, setMenu] = useState<MenuDef | null>(null);

  useEffect(() => {
    if (currentSideOver) {
      const result = CRM_SUB_MODULE_MENU.find(
        (item) => item.name === currentSideOver,
      );
      setMenu(!result ? null : result);
    }
  }, [currentSideOver]);

  return (
    <>
      <MobileNav
        items={CRM_SUB_MODULE_MENU}
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
      />
      <SubModuleMenuSlideOver
        sideOver={currentSideOver}
        setSideOver={setCurrentSideOver}
        menu={menu}
      />

      <DesktopNav
        items={CRM_SUB_MODULE_MENU}
        setSideBarOpen={setSideBarOpen}
        sideOver={currentSideOver}
        setSideOver={setCurrentSideOver}
      />

      <div className="lg:pl-20">
        <HeaderBar
          userNavigation={userNavigation}
          setSideBarOpen={setSideBarOpen}
        />
        {children}
      </div>
    </>
  );
}
