import { Metadata } from "next";
import { GLOBAL } from "@/app/constants/global/global-constants";

export const metadata: Metadata = {
  title: `${GLOBAL.appcd} Opportunities`,
};

export default function OpportunitiesPage() {
  return <div>Opportunities Page</div>;
}
