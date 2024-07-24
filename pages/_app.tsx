import { AppPropsWithLayout } from "@/models/common";
import { EmptyLayout } from "@/components/layout";
import { Suspense } from "react";
import { SWRConfig } from "swr";
import "../styles/global.css";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/styles/admin/satoshi.css";
import "@/styles/admin/style.css";
import axiosClient from "@/utils/axios-client";
import { headers } from "next/headers";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SWRConfig
      value={{
        fetcher: (url, query, variables) =>
          axiosClient.post(url, {
            query: query,
            variables: variables,
            headers: {
              "Content-Type": "application/json",
            },
          }),
        shouldRetryOnError: false,
      }}
    >
      <Layout>
        <Suspense fallback={<p>Loading feed...</p>}>
          <Component {...pageProps} />
        </Suspense>
      </Layout>
    </SWRConfig>
  );
}
