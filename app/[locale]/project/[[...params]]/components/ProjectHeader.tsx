import { ProjectProps } from "@/types/project";
import { TType } from "@/types/t";
import Image from "next/image";

interface Props {
  project: ProjectProps;
  t: TType;
}

export function ProjectHeader({ project }: Props) {
  return (
    <section className="flex flex-col w-full mt-20">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-7xl">{project.title}</h2>
          <p className="">{project.description}</p>
        </div>
        <div className="flex flex-col w-[200px] h-[200px] shadow-2xl rounded-2xl overflow-hidden border">
          <Image
            src={project?.icon ? project.icon?.url : ""}
            alt={
              project?.background
                ? project.background?.alternativeText
                  ? project.background.alternativeText
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
