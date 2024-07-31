import { Menu, Props } from "@/models";
import Loading from "@/pages/Loading";
import React, { FC } from "react";

const TopNav: FC<Props> = ({ menus }) => {
  return (
    <div className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 sm:py-0 dark:bg-neutral-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="relative sm:flex sm:items-center">
          <div
            id="navbar-collapse-columns"
            className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-y-3 space-x-2 sm:gap-y-0 mt-5 sm:flex-row sm:items-center sm:justify-center sm:mt-0 sm:ps-5">
              {menus?.map((menu: Menu, key: number) => (
                <div
                  key={key}
                  className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover] "
                >
                  <button
                    type="button"
                    className="sm:p-3 flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-neutral-400 dark:hover:text-neutral-500"
                  >
                    {menu.title}
                    <svg
                      className={
                        `ms-1 flex-shrink-0 size-4 ` +
                        (menu.childMenus?.length === 0 && "hidden")
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {menu.childMenus?.length > 0 && (
                    <div className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-full sm:w-96 bg-white sm:shadow-md rounded-lg py-2 sm:px-2 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700">
                      <div className="sm:grid sm:grid-cols-2">
                        {menu.childMenus?.map(
                          (
                            child: { id: string; link: string; title: string },
                            key: number
                          ) => (
                            <a
                              key={key}
                              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                              href="/jajajajaj"
                            >
                              {child.title}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>

    // <div className="hidden bg-black py-3 lg:block">
    //   <div className="container flex items-center justify-between text-sm text-white">
    //     <div className="flex items-center divide-x divide-neutral-100">
    //       {topNavLinks.map((item) => (
    //         <NavigationItem menuItem={item} key={item.id} />
    //       ))}
    //     </div>

    //     <Language />
    //   </div>
    // </div>
  );
};

export default TopNav;
