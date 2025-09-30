import { ProjectProps } from "@/types/project";
import { getProjectsList } from "../../actions/project";
import Image from "next/image";
import Link from "next/link";

interface Props {
  locale: string;
}
export async function ProjectsList({ locale }: Props) {
  const response = await getProjectsList({ locale });

  return (
    <section className="flex flex-col gap-1">
      <h3 className="text-primary">Feature projects</h3>
      <div className="flex gap-5">
        {response.slice(0, 4).map((item) => (
          <ProjectItem key={item.id} project={item} />
        ))}
      </div>
    </section>
  );
}

interface ProjectItemProps {
  project: ProjectProps;
}
function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Link
      href={`/project/${project.id}`}
      className="rounded-2xl flex flex-col gap-3 bg-card w-[250px] overflow-hidden"
    >
      <div className="w-full h-[200px] bg-red-500">
        <Image
          src={project?.icon ? project.icon?.url : ""}
          alt={
            project?.background
              ? project.background?.alternativeText
                ? project.background.alternativeText
                : ""
              : ""
          }
          width={1000}
          height={1000}
          quality={100}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-1 p-3">
        <h4 className="font-bold text-primary text-xl">{project.title}</h4>
        <p className="text-primary">{project.description}</p>
      </div>
    </Link>
  );
}
