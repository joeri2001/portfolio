import { ArrowSmDownIcon } from "@heroicons/react/solid";
import React from "react";

function Hero() {
  return (
    <div className="static w-full grid place-items-center">
      <div className="grid place-items-center space-y-5">
        <img
          src="images/jpg/pfp.jpg"
          alt="Joeri Brinks"
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-500"
        />
        <p className="uppercase text-xl lg:text-4xl font-thin drop-shadow-xl">
          HI, I am Joeri,
          <br />
          Welcome to my portfolio
        </p>
        <a
          href="#projects"
          className="text-slate-200 bg-slate-800 hover:bg-blue-500 font-normal rounded-lg text-sm px-2.5 py-2 text-center mr-2 mb-2 flex float-left place-self-end"
        >
          Projects
          <ArrowSmDownIcon className="h-5 leading-5" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
