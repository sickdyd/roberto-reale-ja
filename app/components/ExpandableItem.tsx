"use client";
import React from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { Project } from "../recent-work/page";

export default function ExpandableItem({ project }: { project: Project }) {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleOnClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div
      className="mt-2 flex select-none flex-col hover:cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="flex flex-row hover:bg-blue-950 hover:text-lime-500">
        <div className="items-top mt-1 flex">
          {expanded ? (
            <BiChevronDown className="inline-block" size={16} />
          ) : (
            <BiChevronRight className="inline-block" size={16} />
          )}
        </div>
        <div className="ml-1">{project.title}</div>
      </div>
      {expanded ? (
        <div className="mb-5 ml-5 border-b-2 border-b-lime-200 pb-8">
          {project.contents}
        </div>
      ) : null}
    </div>
  );
}
