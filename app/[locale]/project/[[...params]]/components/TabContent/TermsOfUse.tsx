import { RenderBlock } from "@/components/RenderBlock/RenderBlock";
import { ProjectProps } from "@/types/project";

interface Props {
  project: ProjectProps;
}
export function TermsOfUse({ project }: Props) {
  if (project.termsOfUse) {
    return (
      <div className="flex flex-col gap-2 w-full">
        {project.termsOfUse.map((item, index) => (
          <RenderBlock block={item} key={`b${index}`} />
        ))}
      </div>
    );
  }

  return <div />;
}
