"use client";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { FiChevronsUp } from "react-icons/fi";
import { Project } from "../recent-work/page";

export default function ExpandableItem({ project }: { project: Project }) {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleOnMouseDown = () => setExpanded((prev) => !prev);

  return (
    <div className="mt-6 flex flex-col">
      <button
        className="clickable flex flex-row text-left"
        onMouseDown={handleOnMouseDown}
        aria-expanded={expanded}
        aria-controls={`content-${project.title}`}
        aria-label={
          expanded ? "Collapse project details" : "Expand project details"
        }
      >
        <div className="items-top mt-1 flex">
          <BiChevronRight
            className={`inline-block transition-[transform] ${expanded && "rotate-90"}`}
            size={16}
          />
        </div>
        <div className="ml-1">{project.title}</div>
      </button>
      <div
        className={`flex flex-col ${expanded ? "mb-5 ml-5 h-auto overflow-visible" : "ml-5 max-h-0 overflow-hidden"}`}
      >
        {project.contents}
        <button
          className="clickable mt-5 self-end justify-self-center border border-blue-950 pl-1 pr-1"
          onClick={handleOnMouseDown}
          aria-label="Collapse project details"
        >
          <FiChevronsUp />
        </button>
      </div>
    </div>
  );
}
