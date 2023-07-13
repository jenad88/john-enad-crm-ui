import { Metadata } from "next";
import { GLOBAL } from "@/app/constants/global/global-constants";

export const metadata: Metadata = {
  title: `${GLOBAL.appcd} Tasks`,
};

export default function TasksPage() {
  return <div>Tasks Page</div>;
}
