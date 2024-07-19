"use client";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { FiChevronsUp } from "react-icons/fi";
import { Project } from "../recent-work/page";

export default function ExpandableItem({ project }: { project: Project }) {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const contentsDivRef = React.useRef<HTMLDivElement>(null);

  const handleOnMouseDown = (event: React.MouseEvent) => {
    // Prevent selecting all text when clicking fast on the item
    if (event.detail > 1) {
      event.preventDefault();
    }

    setExpanded((prev) => !prev);
  };

  return (
    <div className="mt-2 flex flex-col">
      <div className="clickable flex flex-row" onMouseDown={handleOnMouseDown}>
        <div className="items-top mt-1 flex">
          <BiChevronRight
            className={`inline-block transition-[transform] ${expanded && "rotate-90"}`}
            size={16}
          />
        </div>
        <div className="ml-1">{project.title}</div>
      </div>
      <div
        ref={contentsDivRef}
        className={`flex flex-col ${expanded ? expandedItemClasses : collapsedItemClasses}`}
      >
        {project.contents}
        <button
          className="clickable mt-5 self-end justify-self-center border border-blue-950 pl-1 pr-1"
          onClick={handleOnMouseDown}
        >
          <FiChevronsUp />
        </button>
      </div>
    </div>
  );
}

const collapsedItemClasses = `ml-5 max-h-0 overflow-hidden opacity-0 transition-all duration-300`;
const expandedItemClasses = `mb-5 ml-5 super-max-height opacity-100 transition-all duration-300`;
