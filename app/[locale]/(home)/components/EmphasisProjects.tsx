import { ProjectProps } from "@/types/project";
import { getEmphasisProjects } from "../../actions/project";
import Image from "next/image";
import Link from "next/link";
import { TType } from "@/types/t";
import {
  FaAppStoreIos,
  FaEarthAmericas,
  FaGithub,
  FaGooglePlay,
} from "react-icons/fa6";

interface Props {
  locale: string;
  t: TType;
}
export async function EmphasisProjects({ locale, t }: Props) {
  const response = await getEmphasisProjects({ locale });

  return (
    <section className="container">
      <div className="flex flex-col gap-1 mb-10 lg:mb-20 w-full bg-card p-10 rounded-2xl">
        <h3 className="text-white font-semibold text-xl">
          {t("home.emphasisProject")}
        </h3>
        <div className="flex flex-col gap-5 w-full mt-5">
          {response.slice(0, 4).map((item) => (
            <ProjectItem key={item.id} project={item} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectItemProps {
  project: ProjectProps;
  t: TType;
}
function ProjectItem({ project, t }: ProjectItemProps) {
  return (
    <div className="rounded-2xl flex gap-3 w-full overflow-hidden">
      <div className="w-[200px] h-[200px]">
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
        <p className="text-gray-300">{project.description}</p>

        <div className="mt-3 flex items-center gap-5 flex-wrap">
          {project.githubUrl && (
            <LinkItem type="github" url={project.githubUrl} />
          )}
          {project.appleStoreUrl && (
            <LinkItem type="applestore" url={project.appleStoreUrl} />
          )}
          {project.webAppUrl && (
            <LinkItem type="webapp" url={project.webAppUrl} />
          )}
          {project.googlePlayUrl && (
            <LinkItem type="googleplay" url={project.googlePlayUrl} />
          )}
        </div>

        <Link
          href={`/project/${project.id}`}
          className="rounded-2xl flex items-center justify-center text-white mt-5 gap-3 w-full h-12 bg-primary md:px-20 md:w-fit"
        >
          {t("home.toKnowMore")}
        </Link>
      </div>
    </div>
  );
}

interface LinkItemProps {
  url: string;
  type: "github" | "applestore" | "googleplay" | "webapp";
}
function LinkItem({ type, url }: LinkItemProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferer noopener"
      className="flex items-center gap-1 text-primary px-3 text-white"
    >
      {type === "github" && <FaGithub size={25} />}
      {type === "applestore" && <FaAppStoreIos size={25} />}
      {type === "googleplay" && <FaGooglePlay size={25} />}
      {type === "webapp" && <FaEarthAmericas size={25} />}
      {type === "github" && "Github"}
      {type === "applestore" && "Apple Store"}
      {type === "googleplay" && "Google Play"}
      {type === "webapp" && "Web App"}
    </Link>
  );
}
