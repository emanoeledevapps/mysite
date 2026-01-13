import { ProjectProps } from "@/types/project";
import { getProjectsList } from "../../actions/project";
import Image from "next/image";
import Link from "next/link";
import { TType } from "@/types/t";

interface Props {
  locale: string;
  t: TType;
}
export async function ProjectsList({ locale, t }: Props) {
  const response = await getProjectsList({ locale });

  return (
    <section className="flex flex-col gap-1 my-10 lg:my-20 container">
      <h3 className="text-white">{t("home.lastProjects")}</h3>
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
      className="rounded-2xl flex flex-col gap-3 bg-card w-[250px] overflow-hidden border border-gray-600"
    >
      <div className="w-full h-[200px]">
        <Image
          src={project?.icon ? project.icon?.url : ""}
          alt={
            project?.icon
              ? project.icon?.alternativeText
                ? project.icon.alternativeText
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
        <h4 className="font-bold text-white text-xl">{project.title}</h4>
        <p className="text-white">{project.description}</p>
      </div>
    </Link>
  );
}
