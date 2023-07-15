import { Metadata } from "next";
import { GLOBAL } from "@/app/constants/global/global-constants";
import AccountListView from "@/app/accounts/components/account-list-view";

export const metadata: Metadata = {
  title: `${GLOBAL.appcd} Accounts`,
};

export default function AccountsPage() {
  return (
    <>
      <div className="w-full bg-white mt-5">
        <div>Accounts Page</div>
        <AccountListView />
      </div>
    </>
  );
}
