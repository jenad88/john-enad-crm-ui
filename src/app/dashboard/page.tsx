import { Metadata } from "next";
import { GLOBAL } from "@/app/constants/global/global-constants";

export const metadata: Metadata = {
  title: `${GLOBAL.appcd} Dashboard`,
};

export default function DashboardPage() {
  return <div>Dashboard Page</div>;
}
