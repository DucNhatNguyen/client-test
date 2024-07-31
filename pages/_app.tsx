import { AppPropsWithLayout } from "@/models/common";
import { EmptyLayout } from "@/components/layout";
import { Suspense } from "react";
import { SWRConfig } from "swr";
import request from "graphql-request";
import "../styles/global.css";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/styles/admin/satoshi.css";
import "@/styles/admin/style.css";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SWRConfig
      value={{
        fetcher: (query: string) => {
          const endpoint = process.env.NEXT_PUBLIC_API_KEY;
          if (endpoint) {
            return request(endpoint, query);
          } else {
            throw new Error("NEXT_PUBLIC_API_KEY is not defined");
          }
        },
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
