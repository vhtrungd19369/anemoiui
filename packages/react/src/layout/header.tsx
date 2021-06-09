import React from "react";
import { Dropdown } from "../elements";
import { GlobeIcon, MenuIcon } from "@heroicons/react/outline";

type Header = {
  mainNavigation: any[];
};

export const Header = ({
  mainNavigation,
  children
}: React.PropsWithChildren<Header>) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-header py-3">
      <nav className="relative md:max-w-7xl max-w-full" aria-label="Global">
        <div className="flex items-center justify-around">
          <div className="flex items-center justify-between text-primary-next">
            <a href="/">
              <GlobeIcon className="w-8 h-8" />
            </a>
          </div>
          <div className="sm:hidden md:block space-x-8 md:ml-10">
            {mainNavigation.map(item =>
              !Array.isArray(item?.items) ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium hover:text-primary-next"
                >
                  {item.name}
                </a>
              ) : (
                <Dropdown label={item.name} items={item.items} />
              )
            )}
          </div>
          <MenuIcon
            className="md:hidden w-6 h-6"
            onClick={() => setOpen(!open)}
          />
          <div className="flex flex-col md:flex-row justify-center items-center">
            {children}
          </div>
        </div>
      </nav>
      {open && (
        <div className="absolute w-full bg-white rounded z-10 shadow-lg">
          <ul>
            {mainNavigation.map(item => (
              <li className="m-2 hover:text-primary-next">{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
