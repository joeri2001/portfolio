import React from "react";

interface Props {
  title: string;
  url: string;
  image?: string;
}

function Card({ title, url, image }: Props) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 flex float-left">
      <div className="bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-900 m-5 rounded-md">
        <a href={url}>
          <img
            src={image}
            className="w-screen h-48 p-3 place-items-center object-scale-down "
          ></img>
          <div>
            <p className="p-5 uppercase truncate font-bold">{title}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;
