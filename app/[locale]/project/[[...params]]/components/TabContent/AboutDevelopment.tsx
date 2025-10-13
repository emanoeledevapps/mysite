import { RenderBlock } from "@/components/RenderBlock/RenderBlock";
import { ProjectProps } from "@/types/project";

interface Props {
  project: ProjectProps;
}
export function AboutDevelopment({ project }: Props) {
  if (project.aboutDevelopment) {
    return (
      <div className="flex flex-col gap-2 w-full">
        {project.aboutDevelopment.map((item, index) => (
          <RenderBlock block={item} key={`b${index}`} />
        ))}
      </div>
    );
  }

  return <div />;
}
