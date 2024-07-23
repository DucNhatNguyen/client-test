import type { FC } from "react";
import React from "react";
import MainNav from "./MainNav";
import TopNav from "./TopNav";
import { Props } from "@/models";

const Header: FC<Props> = ({ menus }) => {
  return (
    <div className="nc-Header sticky inset-x-0 top-0 z-50 w-full border-b border-neutral-300 bg-white">
      <MainNav />
      <TopNav menus={menus} />
    </div>
  );
};

export default Header;
