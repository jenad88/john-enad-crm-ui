import { Metadata } from "next";
import { GLOBAL } from "@/app/constants/global/global-constants";

export const metadata: Metadata = {
  title: `${GLOBAL.appcd} Accounts`,
};

export default function AccountsPage() {
  return (
    <>
      <h1>Accounts Page</h1>
    </>
  );
}
