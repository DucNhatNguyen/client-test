import { LayoutProps } from "@/models/common";
import Header from "../Header/Header";
import React, { Suspense, lazy, useEffect, useState } from "react";
import Loading from "@/pages/Loading";
import Footer from "@/shared/Footer/Footer";
import PrelineScript from "@/pages/PrelineScript";

export function MainLayout({ children }: LayoutProps) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
          <PrelineScript />
        </>
      )}
    </>
  );
}
