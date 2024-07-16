import Image from "next/image";
import { Footer } from "../_components/Footer";
import { Header } from "../_components/header";
import ImageProfile from '../../public/assets/perfil.jpg';

export default function About() {
    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center pb-20 bg-black">
                <div className="w-full px-2 lg:px-0 lg:w-[1024px] flex flex-col mt-32">
                    <section
                        className="flex flex-col items-center w-full"
                    >
                        <Image
                            alt='Foto de perfil'
                            src={ImageProfile}
                            width={500}
                            height={500}
                            className="w-[250px] h-[250px] object-cover rounded-full border-4 border-white"
                        />

                        <h1 className="font-bold text-white text-center text-3xl mt-2">Emanoel Augusto Freires</h1>
                        <h2 className="text-white text-center text-xl mt-1">Desenvolvedor Front-End</h2>
                        <p className="text-gray-200 text-center mt-1">22 anos</p>
                    </section>

                    <h3 className="font-bold text-white mt-20">Mais sobre mim</h3>
                    <p className="text-gray-200 mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <h3 className="font-bold text-white mt-10">Onde trabalho</h3>
                    <p className="text-gray-200 mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <h3 className="font-bold text-white mt-10">O que gosto de fazer</h3>
                    <p className="text-gray-200 mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </main>

            <Footer />
        </>
    )
}