import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { pathOr } from "ramda";
import { shoes } from "@/data/content";

import SectionMoreProducts from "./productid/SectionMoreProducts";
import SectionNavigation from "./productid/SectionNavigation";
import SectionProductHeader from "./productid/SectionProductHeader";
import SectionProductInfo from "./productid/SectionProductInfo";
import { NextPageWithLayout } from "@/models";
import { MainLayout } from "@/components/layout";

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProductPage: NextPageWithLayout = () => {
  const [data, setData] = useState<any>();

  const router = useRouter();
  const slug = router.query.slug as string;

  useEffect(() => {
    const fetchData = async () => {
      const selectedProduct = shoes.find((item) => item.slug === slug);
      setData(selectedProduct);
    };
    fetchData();
  }, [slug]);

  return (
    <div className="container">
      <SectionNavigation />

      <div className="mb-20">
        <SectionProductHeader
          shots={pathOr([], ["shots"], data)}
          shoeName={pathOr("", ["shoeName"], data)}
          prevPrice={pathOr(0, ["previousPrice"], data)}
          currentPrice={pathOr(0, ["currentPrice"], data)}
          rating={pathOr(0, ["rating"], data)}
          pieces_sold={pathOr(0, ["pieces_sold"], data)}
          reviews={pathOr(0, ["reviews"], data)}
        />
      </div>

      <div className="mb-28">
        <SectionProductInfo
          overview={pathOr("", ["overview"], data)}
          shipment_details={pathOr([], ["shipment_details"], data)}
          ratings={pathOr(0, ["rating"], data)}
          reviews={pathOr(0, ["reviews"], data)}
        />
      </div>

      <div className="mb-28">
        <SectionMoreProducts />
      </div>
    </div>
  );
};

SingleProductPage.Layout = MainLayout;
export default SingleProductPage;
