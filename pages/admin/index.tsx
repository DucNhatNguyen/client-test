import { AdminLayout } from "@/components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Dashboard",
  description: "",
};

export default function Index<NextPageWithLayout>() {
  return <>ADmin Home</>;
}

Index.Layout = AdminLayout;
