import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import initTranslations from "@/app/i18n";
import { Page } from "@/components/Page/Page";
import { ProjectProps } from "@/types/project";
import {
  FaAppStoreIos,
  FaEarthAmericas,
  FaGithub,
  FaGooglePlay,
} from "react-icons/fa6";

import { getProjectsList } from "../actions/project";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale;
  const { t } = await initTranslations(locale, ["common"]);

  return {
    title: t("projects.seo-title"),
    description: t("projects.seo-description"),
    openGraph: {
      type: "website",
      title: t("projects.seo-title") as string,
      description: t("projects.seo-description") as string,
      alternateLocale: ["en", "pt-BR"],
      url: `https://edevapps.com.br/${locale}/projects`,
      locale,
      siteName: "edevapps",
      images: `https://edevapps.com.br/assets/og_${locale}.png`,
    },
    alternates: {
      canonical: "https://edevapps.com.br/projects",
      languages: {
        en: "https://edevapps.com.br/en/projects",
        pt: "https://edevapps.com.br/pt-BR/projects",
      },
    },
  };
}

export default async function Projects({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ["common"]);
  const response = await getProjectsList({ locale });

  return (
    <Page locale={locale} resources={resources} t={t}>
      <div className="container">
        <h2 className="font-bold mt-20 text-2xl text-white text-center lg:text-5xl">
          {t("projects.title")}
        </h2>

        <div className="flex flex-col gap-5 mt-20 w-full">
          {response.map((item) => (
            <ProjectItem key={item.id} project={item} />
          ))}
        </div>
      </div>
    </Page>
  );
}

interface ProjectItemProps {
  project: ProjectProps;
}
function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Link
      href={`/project/${project.id}`}
      className="rounded-2xl flex flex-col gap-3 bg-gray-900 overflow-hidden md:flex-row md:w-full"
    >
      <div className="min-w-[200px] h-[200px]">
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

        <div className="mt-3 flex items-center gap-5 flex-wrap justify-center md:justify-start">
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
    </Link>
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
