import { navMenuItems } from "../../constants/defines";
import { slugs } from "../../constants/slugs";
import { Disclosure, Menu } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import logo from "../../assets/logo/vietnam.svg";
import logo1 from "../../assets/logo/united-states.svg";
import Button from "../Button/Button";

export default function Navbar() {
  const location = useLocation();
  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-indigo-600 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"></Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center text-white sm:items-stretch sm:justify-start">
                <Link
                  to={slugs.home}
                  className="flex flex-shrink-0 items-center gap-4 font-bold uppercase">
                  Baycungban
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="logo"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo1}
                    alt="logo"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navMenuItems.map((item) => (
                    <Link
                      to={item.slug}
                      key={item.id}
                      className={twMerge(
                        "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm",
                        "font-medium text-white hover:border-gray-300 hover:text-gray-50",
                        location.pathname === item.slug &&
                          "border-white font-semibold "
                      )}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex">
                <Button>Booking now</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
