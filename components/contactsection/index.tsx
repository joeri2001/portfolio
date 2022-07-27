import React from "react";

function ContactSection() {
  return (
    <div className="static w-full grid place-items-center">
      <div className="flex space-x-10">
        <a
          href="https://www.linkedin.com/in/joeribrinks/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/png/linkedinicon.png" alt="" className="w-7 h-7" />
        </a>
        <a
          href="https://github.com/joeribrinks"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/png/githubicon.png" alt="" className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}

export default ContactSection;
