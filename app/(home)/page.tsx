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


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center pb-5">
            <Header/>
            <div className="w-[1024px] flex flex-col mt-32">
                <h1 className="text-white font-bold text-3xl lg:w-[50%]">Olá, me chamo Emanoel Augusto e sou Desenvolvedor Front-End</h1>
                
                <div className="flex flex-wrap gap-5 mt-10">
                    <button
                        className="w-[200px] h-10 bg-white rounded-lg text-black font-bold"
                    >
                        teste callaction
                    </button>

                    <button
                        className="w-[200px] h-10 border-2 border-white rounded-lg text-white font-bold"
                    >
                        teste callaction
                    </button>
                </div>

                <h3 className="mt-20 text-white">Projetos</h3>
                <section className="flex overflow-scroll gap-5">
                    {projects.map(item => (
                        <ProjectItem data={item} key={item.icon}/>
                    ))}
                </section>

                <h3 className="mt-10 text-white">Tecnologias que utilizo</h3>
                <section className="flex flex-wrap gap-7 w-[40%] mt-1">
                    <Tech name="reactjs"/>
                    <Tech name="nextjs"/>
                    <Tech name="vite"/>
                    <Tech name="react-native"/>
                    <Tech name="expo"/>
                    <Tech name="firebase"/>
                    <Tech name="nodejs"/>
                    <Tech name="prisma"/>
                    <Tech name="postgresql"/>
                    <Tech name="vscode"/>
                </section>
                {/* <div className="flex flex-col gap-5 w-[30%]">
                    <section
                        className="flex flex-col items-center w-full bg-gray-900 rounded-md p-3 shadow-lg"
                    >
                        <Image
                            alt="Imagem de perfil"
                            src={imagePerfil}
                            width={1000}
                            height={1000}
                            className="w-32 h-32 rounded-full border-4 border-white"
                        />

                        <h1 className="font-bold text-white text-center text-xl mt-3">Emanoel Augusto Freires</h1>
                        <p className="text-white text-sm">Desenvolvedor Front-End</p>
                        <p className="text-gray-300 text-sm">22 anos</p>

                        <div className="flex flex-col w-full mt-5 gap-4">
                            <div className="flex items-center gap-2 w-full">
                                <MdEmail size={25} color='white' />
                                <p className="text-sm text-white">emanoelaugusto7@gmail.com</p>
                            </div>

                            <div className="flex items-center gap-2 pl-1 w-full">
                                <BsTelephoneFill size={19} color='white' />
                                <p className="text-sm text-white">+55 11 94371-8117</p>
                            </div>

                            <div className="flex items-center gap-2 w-full">
                                <FaMapMarkedAlt size={25} color='white' />
                                <p className="text-sm text-white">Santo André - SP</p>
                            </div>

                            <div className="flex items-center gap-2 w-full">
                                <PiBagFill size={25} color='white' />
                                <p className="text-sm text-white">Sintrop</p>
                            </div>
                        </div>
                    </section>

                    <section
                        className="flex flex-col items-center w-full bg-gray-900 rounded-md p-3 shadow-lg"
                    >
                        <h2 className="font-bold text-white text-lg">Sobre mim</h2>
                        <p className="text-sm text-white mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.</p>
                    </section>

                    <section
                        className="flex flex-col items-center w-full bg-gray-900 rounded-md p-3 shadow-lg"
                    >
                        <h2 className="font-bold text-white text-lg">Tecnologias</h2>
                        <p className="text-sm text-white mt-2"></p>
                    </section>
                </div>

                <div className="flex flex-col gap-5 w-[70%]">
                    <section className="flex flex-col w-full bg-gray-900 rounded-md p-3 shadow-lg">
                        <h3 className="font-bold text-white">Projetos</h3>

                        <div className="flex gap-3 mt-2">
                            <div className="w-[140px] h-[180px] rounded-md shadow-lg p-2 bg-gray-800">

                            </div>
                        </div>
                    </section>

                    <p className="text-center text-gray-700 text-sm">Timeline</p>

                    <div className="flex flex-col items-center mt-10">
                        <GoDependabot size={100} className="text-white"/>
                        <p className="text-white">Nada aqui por enquanto!</p>
                    </div>
                </div> */}
            </div>
        </main>
    );
}
