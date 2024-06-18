import { pathOr } from "ramda";
import React, { useEffect, useState } from "react";

import { blogs } from "@/data/content";

import SectionBlogBody from "./blogId/SectionBlogBody";
import SectionBlogHero from "./blogId/SectionBlogHero";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "@/models";
import { MainLayout } from "@/components/layout";

type Props = {
  params: { blogId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleBlogPage: NextPageWithLayout = () => {
  const [data, setData] = useState<any>();

  const router = useRouter();
  const slug = router.query.slug as string;

  useEffect(() => {
    const fetchData = async () => {
      const selectedProduct = blogs.find((item) => item.slug === slug);
      setData(selectedProduct);
    };
    fetchData();
  }, [slug]);
  return (
    <div className="container">
      <div className="pt-10">
        <SectionBlogHero
          coverImage={pathOr("", ["coverImage"], data)}
          title={pathOr("", ["title"], data)}
          brief={pathOr("", ["brief"], data)}
        />
      </div>

      <div className="py-24">
        <SectionBlogBody blogData={pathOr(null, ["blogData"], data)} />
      </div>
    </div>
  );
};

SingleBlogPage.Layout = MainLayout;
export default SingleBlogPage;
