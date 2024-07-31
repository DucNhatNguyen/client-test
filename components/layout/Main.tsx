import { LayoutProps, Menu, Props } from "@/models/common";
import React from "react";
import Header from "../Header/Header";
import Loading from "@/pages/Loading";
import Footer from "@/shared/Footer/Footer";
import PrelineScript from "@/pages/PrelineScript";
import { GET_MENUS } from "@/graphql/queries";
import useSWR from "swr";

export function MainLayout({ children }: LayoutProps) {
  const { data, error } = useSWR<any>(GET_MENUS);

  if (!data) return <Loading />;
  if (error) return <div>Error loading data.</div>;

  return (
    <>
      <Header menus={data?.menus ?? []} />
      {children}
      <Footer />
      <PrelineScript />
    </>
  );
}
