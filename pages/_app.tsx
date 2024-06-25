import { AppPropsWithLayout } from "@/models/common";
import { EmptyLayout } from "@/components/layout";
import { Suspense } from "react";
import "../styles/global.css";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/styles/admin/satoshi.css";
import "@/styles/admin/style.css";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Layout>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Component {...pageProps} />
      </Suspense>
    </Layout>
  );
}
