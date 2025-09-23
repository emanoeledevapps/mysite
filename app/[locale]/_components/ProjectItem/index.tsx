import { ProjectProps } from "@/app/services/projects"
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: ProjectProps;
}

export function ProjectItem({ data }: Props) {
    return (
        <Link
            href={`/project/${data?.id}`}
        >
            <div className="w-[230px] h-[300px] flex flex-col bg-gray-800 rounded-md overflow-hidden hover:w-[240px] hover:h-[310px] duration-500">
                <div className="w-full h-[50%] bg-gray-400">
                    <Image
                        alt={data?.title}
                        src={data?.icon}
                        height={1000}
                        width={1000}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-2 flex flex-col w-[230px]">
                    <h5 className="font-bold text-white">{data?.title}</h5>

                    <p className="text-sm text-gray-300">{data?.shortDescription}</p>
                </div>
            </div>
        </Link>
    )
}