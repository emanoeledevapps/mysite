import { RenderBlock } from "@/components/RenderBlock/RenderBlock";
import { ProjectProps } from "@/types/project";

interface Props {
  project: ProjectProps;
}
export function Overview({ project }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {project.overview.map((item, index) => (
        <RenderBlock block={item} key={`b${index}`} />
      ))}
    </div>
  );
}
