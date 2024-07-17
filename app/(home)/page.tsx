import Image from "next/image";
import imagePerfil from '../../public/assets/perfil.jpg';
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { PiBagFill } from "react-icons/pi";
import { GoDependabot } from "react-icons/go";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Header } from "../_components/header";
import { Tech } from "../_components/Tech";
import { projects } from "../services/projects";
import { ProjectItem } from "../_components/ProjectItem";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Footer } from "../_components/Footer";


export default function Home() {
    return (
        <>
            <Header />
            
            <main className="flex min-h-screen flex-col items-center pb-20 bg-black">
                <div className="w-full px-2 lg:px-0 lg:w-[1024px] flex flex-col mt-32">
                    <div className="flex flex-col w-full items-center">
                        <h1 className="text-white font-bold text-4xl text-center lg:w-[60%]">Olá, me chamo Emanoel Augusto e sou Desenvolvedor Front-End</h1>

                        <div className="flex flex-wrap gap-5 mt-10">
                            <Link
                                className="w-[130px] h-10 border-2 border-white rounded-lg text-white font-bold flex items-center justify-center gap-2 hover:text-black hover:bg-white duration-500"
                                href='https://github.com/emanoeledevapps/'
                                target="_blank"
                            >
                                <FaGithub size={20} />
                                GitHub
                            </Link>

                            <Link
                                className="w-[130px] h-10 border-2 border-white rounded-lg text-white font-bold flex items-center justify-center gap-2 hover:text-black hover:bg-white duration-500"
                                href='https://www.linkedin.com/in/emanoel-augusto-515915233/'
                                target="_blank"
                            >
                                <FaLinkedin size={20} />
                                Linkedin
                            </Link>
                        </div>
                    </div>

                    <h3 className="mt-20 text-white font-bold">Projetos</h3>
                    <section className="flex overflow-scroll gap-5 w-full">
                        {projects.map(item => (
                            <ProjectItem data={item} key={item.icon} />
                        ))}

                        <div className="flex flex-col items-center justify-center w-[200px]">
                            <GoDependabot size={80} color='white' />
                            <p className="text-white text-center">Mais projetos por aqui em breve...</p>
                        </div>
                    </section>

                    <h3 className="mt-20 text-white font-bold">Tecnologias que utilizo</h3>
                    <section className="flex flex-wrap gap-7 w-full mt-1">
                        <Tech name="reactjs" />
                        <Tech name="nextjs" />
                        <Tech name="vite" />
                        <Tech name="tailwindcss" />
                        <Tech name="sass" />
                        <Tech name="react-native" />
                        <Tech name="expo" />
                        <Tech name="firebase" />
                        <Tech name="nodejs" />
                        <Tech name="prisma" />
                        <Tech name="postgresql" />
                        <Tech name="vscode" />
                        <Tech name="html" />
                        <Tech name="javascript" />
                        <Tech name="typescript" />
                        <Tech name="css" />
                    </section>
                </div>
            </main>

            <Footer/>
        </>
    );
}
