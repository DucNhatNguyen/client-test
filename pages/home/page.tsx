import React from "react";
import { GetStaticProps, NextPage } from "next";
import { useQuery } from "@apollo/client";
import { GET_MENUS } from "@/graphql/queries";
import SectionBestDeals from "./SectionBestDeals";
import SectionBrands from "./SectionBrands";
import SectionHeader from "./SectionHeader";
import SectionProducts from "./SectionProducts";
export interface Menu {
  id: string;
  link: string;
  title: string;
  order: number;
  childMenus: {
    id: string;
    link: string;
    title: string;
  }[];
}

export interface Props {
  menu: Menu[];
}
const page = ({ menu }: Props) => {
  console.log("datadsadasd", menu);

  return (
    <div>
      <div className="my-7">
        <SectionHeader />
      </div>

      <div className="mb-32">
        <SectionBestDeals />
      </div>

      <div className="mb-32">
        <SectionProducts />
      </div>

      <div className="mb-32">
        <SectionBrands />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { loading, error, data } = useQuery<Props>(GET_MENUS);
  console.log("data1", data?.menu);
  return {
    props: {
      menu: data?.menu,
    },
  };
};

export default page;
