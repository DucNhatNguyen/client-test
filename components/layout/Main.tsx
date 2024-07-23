import { LayoutProps, Menu, Props } from "@/models/common";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { GraphQLClient, request } from "graphql-request";
import Header from "../Header/Header";
import Loading from "@/pages/Loading";
import Footer from "@/shared/Footer/Footer";
import PrelineScript from "@/pages/PrelineScript";
import { GET_MENUS } from "@/graphql/queries";

export function MainLayout({ children }: LayoutProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Props | undefined>();
  const graphQLClient = new GraphQLClient("http://localhost:5037/graphql/", {
    headers: {
      authorization: `Bearer MY_TOKEN`,
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      const res = await graphQLClient.request<Props>(GET_MENUS);
      if (res) {
        setLoading(false);
        setData(res);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header menus={data?.menus ?? []} />
      {children}
      <Footer />
      <PrelineScript />
    </>
  );
}
