import React, { FC, useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface PropsType {
  items: any;
  pageSize: any;
  currentPage: any;
  onPageChange: any;
}
const Pagination: FC<PropsType> = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const [active, setActive] = useState(1);
  const pagesCount = Math.ceil(items / pageSize);
  console.log("pagesCount", pagesCount);
  //   if (pagesCount === 1) return null
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  const getItemProps = (index: number) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === pages.length) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div>
      <ul className="">
        {pages.map((page) => (
          <li key={page} className="">
            <a className="">{page}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
