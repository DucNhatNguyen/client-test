import { LayoutProps } from "@/models/common";
import Header from "../Header/Header";
import React, { Suspense } from "react";
import Loading from "@/pages/Loading";
import Footer from "@/shared/Footer/Footer";
import PrelineScript from "@/pages/PrelineScript";

export function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
      {children}
      <Footer />
      <PrelineScript />
    </>
  );
}
