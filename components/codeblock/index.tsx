import React from "react";

interface Props {
  title?: string;
  content: string;
}

function CodeBlock({ title, content }: Props) {
  return (
    <div className="my-2.5">
      <p>{title}</p>
      <div className="p-5">
        <div className="bg-slate-200 dark:bg-slate-800 p-2.5 text-green-500 font-normal">
          {content}
        </div>
      </div>
    </div>
  );
}

export default CodeBlock;
