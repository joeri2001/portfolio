import React from "react";
import Card from "../card";

function ProjectsSection() {
  return (
    <div className="static w-full grid h-fit place-items-center">
      <div className="grid w-10/12 place-items-start">
        <div className="font-thin space-y-5">
          <h1 className="uppercase text-2xl lg:text-4xl font-thin">
            My projects
          </h1>
          <p>Click the cards to see the code.</p>
        </div>
      </div>
      <div>
        <Card
          title={"Portfolio website"}
          url={"https://github.com/joeribrinks/portfolio"}
          image={"/images/png/projects/portfolio.png"}
        />
        <Card
          title={"Links app"}
          url={"https://github.com/joeribrinks/linksapp"}
          image={"/images/png/projects/linksapp.png"}
        />
        <Card
          title={"Discord bot"}
          url={"https://github.com/joeribrinks/discord-bot"}
          image={"/images/png/projects/discordbot.png"}
        />
      </div>
    </div>
  );
}

export default ProjectsSection;
