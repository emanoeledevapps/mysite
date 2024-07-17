import Image from "next/image";
import { Footer } from "../_components/Footer";
import { Header } from "../_components/header";
import ImageProfile from '../../public/assets/perfil.jpg';
import LogoSintrop from '../../public/assets/icon-sintrop.png';
import { ButtonLinkStore } from "../_components/ButtonLinkStore";

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

                    <section className="flex flex-col mt-20 gap-1">
                        <h3 className="font-bold text-white">Mais sobre mim</h3>
                        <p className="text-gray-200">
                            Desde cedo sempre tive a vontade de criar coisas, criar algo que pessoas utilizassem, que pessoas dedicassem tempo a ver algo que participei para criar e vi que no desenvolvimento poderia criar qualquer coisa. Não sei se vocês já ouviram falar sobre Construct 2, esse era um programa que permitia que você criasse jogos 2D a partir de eventos, e assim era possível criar várias funcionalidades dentro do jogo.
                        </p>
                        <p className="text-gray-200">
                            Esse foi meu primeiro contato com &quot;Programação&quot;, e me fazia muito bem, todos os dias depois da escola sempre dedicava um tempo para ver vídeos no youtube, tutorias. E nessas pesquisas foi aparecendo para mim outros tipos de criar algo, e foi assim que comecei a conhecer sobre Html, Css, Javascript e a partir desse ponto comecei cada vez mais a se apaixonar por programação. Depois de aprender o básico sobre Html e Javascript, comecei a conhecer os Frameworks e fiquei muito impressionado como aquilo poderia criar infinitas possibilidades.
                        </p>
                        <p className="text-gray-200">
                            Foi assim que comecei na programação, hoje vejo o quão importante foi ter curiosidade para descobrir coisas novas e creio que essa seja a chave para evoluir, buscar conhecimento e colocar em prática.
                        </p>
                    </section>

                    <section className="flex flex-col mt-10 gap-1">
                        <h3 className="font-bold text-white">Onde trabalho</h3>
                        <div className="flex items-center gap-2">
                            <Image
                                alt='Logo da sintrop'
                                src={LogoSintrop}
                                width={60}
                                height={60}
                                className="w-[60px] h-[60px] rounded-md object-cover"
                            />

                            <div className="flex flex-col">
                                <h4 className="font-bold text-white">Sintrop</h4>
                                <p className="text-gray-200 text-sm">Mai de 2022 - o momento</p>
                            </div>
                        </div>
                        <p className="text-gray-200">
                            Meu primeiro emprego como programador, iniciei no modo colaborativo no projeto, consegui me destacar e depois fui contratado para trabalhar full-time no projeto.
                        </p>
                        <p className="text-gray-200">
                            Eu atuo no desenvolvimento do Front-End (Website, plataforma web e aplicativo móvel):
                        </p>

                        <p className="text-gray-200 ml-2">
                            -Website:
                        </p>
                        <p className="text-gray-200 ml-5">
                            Utilizamos NextJS no website, aproveitando todos os recursos de SEO e SSR (Server Side Rendering) que ele nos proporciona. Dentro do site também criamos um blog para postagens de conteúdos, utilizando o TipTap como editor de textos;
                        </p>

                        <p className="text-gray-200 ml-2 mt-2">
                            -Plataforma Web:
                        </p>
                        <p className="text-gray-200 ml-5">
                            Foi desenvolvida com ReactJS (CRA), e é nela onde a gente faz todas as interações com Smart Contracts da Blockchain da Ethereum.
                        </p>

                        <p className="text-gray-200 ml-2 mt-2">
                            -Aplicativo móvel:
                        </p>
                        <p className="text-gray-200 ml-5">
                            Desenvolvido com React Native e Expo, o aplicativo foi pensado para promover a interação dos usuários como uma espécie de Rede Social, mas com foco na agricultura regenerativa. O aplicativo conta também com um modo offline, para que inspetores possam inspecionar produtores que não tenham conexão com a internet.
                        </p>

                        <p className="text-gray-200 mt-2">
                            Links:
                        </p>
                        <div className="flex items-center gap-5 overflow-x-auto">
                            <ButtonLinkStore
                                title="Website"
                                href="https://sintrop.com"
                                icon="website"
                            />

                            <ButtonLinkStore
                                title="Google Play"
                                href="https://play.google.com/store/apps/details?id=com.sintrop.activistapp"
                                icon="google-play"
                            />

                            <ButtonLinkStore
                                title="Apple Store"
                                href="https://apps.apple.com/br/app/sintrop/id6475600488"
                                icon="apple-store"
                            />
                        </div>
                    </section>

                    <h3 className="font-bold text-white mt-10">O que gosto de fazer</h3>
                    <p className="text-gray-200 mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </main>

            <Footer />
        </>
    )
}