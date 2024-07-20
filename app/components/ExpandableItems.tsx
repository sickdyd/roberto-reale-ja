import { Project } from "../recent-work/page";
import ExpandableItem from "./ExpandableItem";

export default function ExpandableItems({ projects }: { projects: Project[] }) {
  return projects.map((project, id) => (
    <ExpandableItem key={project.title?.toString() || id} project={project} />
  ));
}
