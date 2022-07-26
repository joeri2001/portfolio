import { XIcon, MenuIcon, CodeIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import ThemeToggle from "../themetoggle";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const renderNavbarMenu = () => {
    if (navOpen == true) {
      return (
        <nav className="flex justify-center text-center">
          <ul className="grid grid-cols-1 divide-y divide-slate-200 dark:divide-slate-500 border-b border-b-slate-600 dark:border-b-slate-200">
            {[
              ["Home", "/"],
            ].map(([title, url]) => (
              <a href={url} key={title} onClick={() => setNavOpen(false)}>
                <li className="py-2 w-screen text-slate-600 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800">
                  {title}
                </li>
              </a>
            ))}
          </ul>
        </nav>
      );
    }
  };

  const burgerToggle = () => {
    if (navOpen) {
      return <XIcon className="w-7 h-7" />;
    } else {
      return <MenuIcon className="w-7 h-7" />;
    }
  };

  return (
    <div>
      <div className="w-full flex justify-center px-10 py-2.5 bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-200 select-none border-b border-b-slate-600 dark:border-b-slate-200">
        <div className="flex justify-between w-full sm:w-10/12 md:w-8/12 lg:w-7/12 2xl:w-6/12">
          <div className="flex space-x-4">
            <a href="/">
              <img src="/images/png/tesseract.png" className="w-7 h-7" />
            </a>
            <a
              href="https://github.com/joeribrinks/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon className="w-7 h-7" />
            </a>
          </div>
          <div className="flex space-x-4">
            <ThemeToggle />
            <button onClick={() => setNavOpen(!navOpen)}>
              <div className="space-y-2">{burgerToggle()}</div>
            </button>
          </div>
        </div>
      </div>
      {renderNavbarMenu()}
    </div>
  );
}

export default Navbar;
