import { Header } from "@/app/_components/header";
import { Tech } from "@/app/_components/Tech";
import { GetProject } from "@/app/services/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa6";

interface Props{
    params:{
        id: string;
    }
}

export default function Project({params}: Props){
    const project = GetProject(params.id);

    return(
        <main className="flex min-h-screen flex-col items-center pb-5 bg-black">
            <Header/>
            <div className="w-full h-[250px] bg-gray-400">
                <Image
                    alt="Banner do projeto"
                    src={project?.bannerUrl}
                    height={1000}
                    width={2000}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="px-2 lg:px-0 lg:w-[1024px] w-full flex flex-col mt-5">
                <section className="flex flex-col gap-5 lg:flex-row">
                    <Image
                        alt='Icone do projeto'
                        src={project.icon}
                        width={500}
                        height={500}
                        className="w-[200px] h-[200px] rounded-md object-cover"
                    />

                    <div className="flex flex-col">
                        <h1 className="font-bold text-white text-5xl">{project.title}</h1>
                        <h2 className="text-gray-200">{project.shortDescription}</h2>

                        <div className="flex gap-5 mt-5">
                            {project.googlePlayUrl && (
                                <Link
                                    href={project.googlePlayUrl}
                                    target="_blank"
                                    className="px-5 h-10 border-2 border-white rounded-xl flex items-center gap-3 text-white font-bold hover:text-black hover:bg-white duration-500"
                                >
                                    <FaGooglePlay size={20}/>
                                    Google Play
                                </Link>
                            )}
                        </div>
                    </div>
                </section>

                <section className="flex flex-col mt-20">
                    <h3 className="font-bold text-white text-lg">Capturas de tela</h3>
                    
                    <div className="flex gap-3 overflow-scroll">
                        {project.screenshots.map(item => (
                            <Image
                            key={item.url}
                                alt='Captura de tela'
                                src={item.url}
                                width={720}
                                height={1280}
                                className="w-[350px] h-[500px] object-cover rounded-md border-2 border-white"
                            />
                        ))}
                    </div>
                </section>

                <section className="flex flex-col mt-20">
                    <h3 className="font-bold text-white text-lg">Mais sobre o projeto</h3>
                    <p className="text-gray-200">{project.description}</p>
                </section>

                <section className="flex flex-col mt-20">
                    <h3 className="font-bold text-white text-lg">Tecnologias utilizadas</h3>
                    <div className="flex flex-wrap gap-5 mt-3">
                        {project.techs.map(item => (
                            <Tech
                                key={item}
                                name={item}
                            />
                        ))}
                    </div>
                </section>

                <section className="flex flex-col mt-20">
                    <h3 className="font-bold text-white text-lg">Sobre o desenvolvimento</h3>
                    <p className="text-gray-200">{project.aboutDevelopment}</p>
                </section>
            </div>
        </main>
    )
}