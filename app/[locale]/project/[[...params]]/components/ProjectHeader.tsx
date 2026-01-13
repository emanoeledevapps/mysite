import { ProjectProps } from "@/types/project";
import { TType } from "@/types/t";
import Image from "next/image";
import Link from "next/link";
import {
  FaAppStoreIos,
  FaEarthAmericas,
  FaGithub,
  FaGooglePlay,
} from "react-icons/fa6";

interface Props {
  project: ProjectProps;
  t: TType;
}

export function ProjectHeader({ project }: Props) {
  return (
    <section className="flex flex-col w-full mt-20 container">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-7xl text-white">{project.title}</h2>
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
        </div>
        <div className="flex flex-col w-[200px] h-[200px] shadow-2xl rounded-2xl overflow-hidden border">
          <Image
            src={project?.icon ? project.icon?.url : ""}
            alt={
              project?.icon
                ? project.icon?.alternativeText
                  ? project.icon.alternativeText
                  : ""
                : ""
            }
            width={200}
            height={200}
            quality={100}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </section>
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
      className="flex items-center gap-1 text-white px-3"
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
