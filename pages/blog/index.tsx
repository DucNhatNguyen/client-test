import React from "react";

import Heading from "@/shared/Heading/Heading";

import SectionBlogs from "./SectionBlogs";
import SectionBlogsHero from "./SectionBlogsHero";
import { NextPageWithLayout } from "@/models";
import { MainLayout } from "@/components/layout";

const index: NextPageWithLayout = () => {
  return (
    <div className="container pb-20 pt-10">
      <Heading
        desc="Cras imperdiet vel id quis ut mattis ut id et viverra velit ut nam amet massa cursus tempor nibh pellentesque risus accumsan luc incidunt."
        isMain
      >
        Blog Posts
      </Heading>

      <div className="pb-24">
        <SectionBlogsHero />
      </div>

      <div className="py-24">
        <SectionBlogs />
      </div>
    </div>
  );
};

index.Layout = MainLayout;
export default index;
