import { Project } from "../recent-work/page";
import ExpandableItem from "./ExpandableItem";

export default function ExpandableItems({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((project, id) => (
        <ExpandableItem key={id} project={{ ...project }} />
      ))}
    </div>
  );
}
