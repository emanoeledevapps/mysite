import initTranslations from "@/app/i18n";
import { Page } from "@/components/Page/Page";
import { getProjectsList } from "../actions/project";
import Link from "next/link";
import Image from "next/image";
import { ProjectProps } from "@/types/project";

type Props = {
  params: Promise<{ locale: string }>;
};
export default async function Projects({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ["common"]);
  const response = await getProjectsList({ locale });

  return (
    <Page locale={locale} resources={resources} t={t}>
      <h2 className="font-bold mt-10 lg:mt-20 lg:text-2xl">
        {t("projects.title")}
      </h2>

      <div className="flex flex-col gap-5 mt-10 w-full">
        {response.map((item) => (
          <ProjectItem key={item.id} project={item} />
        ))}
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
      className="rounded-2xl flex flex-col gap-3 bg-card w-[250px] overflow-hidden lg:flex-row lg:w-full"
    >
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
        <h4 className="font-bold text-black text-xl">{project.title}</h4>
        <p className="text-black">{project.description}</p>
      </div>
    </Link>
  );
}
