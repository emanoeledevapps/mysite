import { RenderBlock } from "@/components/RenderBlock/RenderBlock";
import { ProjectProps } from "@/types/project";

interface Props {
  project: ProjectProps;
}
export function PrivacyPolicy({ project }: Props) {
  if (project.privacyPolice) {
    return (
      <div className="flex flex-col gap-2 w-full">
        {project.privacyPolice.map((item, index) => (
          <RenderBlock block={item} key={`b${index}`} />
        ))}
      </div>
    );
  }

  return <div />;
}
