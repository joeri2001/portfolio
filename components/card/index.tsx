import React from "react";

interface Props {
  title: string;
  url: string;
  image: string;
}

function Card({ title, url, image }: Props) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 flex float-left">
      <div className="bg-blue-400 text-slate-100 hover:bg-blue-500 m-5 rounded-lg">
        <a href={url} target="_blank" rel="noreferrer">
          <img
            src={image}
            className="w-screen h-48 p-3 place-items-center object-scale-down"
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
