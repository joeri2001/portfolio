import React from "react";

function AboutSection() {
  return (
    <div className="static w-full grid h-fit place-items-center">
      <div className="grid w-10/12 place-items-start">
        <div className="font-thin space-y-5">
          <h1 className="uppercase text-2xl lg:text-4xl font-thin">About me</h1>
          <p>Hi, I&apos;m Joeri Brinks and I&apos;m a developer.</p>
          <p>
            I first started programming when I was about 8 - 9 years old when a
            friend of my brother showed me how to program a few small things.
            After a while, I made a few small things like a terminal program
            that went fullscreen when you opened it, and displayed a message
            that your computer would shut down if you didn&apos;t close the
            program fast enough (and it would actually shut down, which got me
            totally hooked). It was fun to joke around with this program to my
            classmates. A few years later when it was my first year in
            highschool, I got into web development when I was goofing around
            with inspect element. From here on out I started building websites a
            lot. Almost every day. Which made college extremely easy.
          </p>
          <p>
            The main things that I enjoy about programming is the creativity
            that is involved, complex thinking for fast solutions and working in
            a team to learn from each other while making fun of one
            another&apos;s code.
          </p>
          <p>
            Besides programming, I also have other things I spend my free time
            on, such as: competing in FPS games, cooking, reading, learning
            languages (I have a native proficiency in Dutch and English, a
            professional working proficiency in Japanese and an elementary
            proficiency in German) and watching movies and series with my
            girlfriend.
          </p>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
