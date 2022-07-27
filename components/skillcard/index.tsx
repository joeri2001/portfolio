import React from "react";

interface Props {
  image: string;
}

function SkillCard({ image }: Props) {
  return (
    <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 flex float-left">
      <img
        src={image}
        className="w-screen h-24 p-3 place-items-center object-scale-down "
      ></img>
      <div></div>
    </div>
  );
}

export default SkillCard;
