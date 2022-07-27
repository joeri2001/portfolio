import React from "react";
import SkillCard from "../skillcard";

function SkillsSection() {
  return (
    <div className="static w-full grid h-fit place-items-center">
      <div className="grid w-10/12 place-items-start">
        <div className="font-thin space-y-5">
          <h1 className="uppercase text-2xl lg:text-4xl font-thin">
            a few of my skills
          </h1>
        </div>
      </div>
      <div>
        <SkillCard image={"/images/png/skills/html-5.png"} />
        <SkillCard image={"/images/png/skills/css-3.png"} />
        <SkillCard image={"/images/png/skills/javascript.png"} />
        <SkillCard image={"/images/png/skills/typescript.png"} />
        <SkillCard image={"/images/png/skills/react.png"} />
        <SkillCard image={"/images/png/skills/nextjs.png"} />
        <SkillCard image={"/images/png/skills/nodejs.png"} />
        <SkillCard image={"/images/png/skills/php.png"} />
        <SkillCard image={"/images/png/skills/sql.png"} />
        <SkillCard image={"/images/png/skills/mysql.png"} />
        <SkillCard image={"/images/png/skills/git.png"} />
        <SkillCard image={"/images/png/skills/stackoverflow.png"} />
      </div>
    </div>
  );
}

export default SkillsSection;
