import { NextPageWithLayout } from "@/models";
import SectionBestDeals from "./home/SectionBestDeals";
import SectionBrands from "./home/SectionBrands";
import SectionHeader from "./home/SectionHeader";
import SectionProducts from "./home/SectionProducts";
import { MainLayout } from "@/components/layout";

const Home: NextPageWithLayout = () => {
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

Home.Layout = MainLayout;
export default Home;
