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
                            Desde cedo, sempre tive uma grande vontade de criar coisas — algo que as pessoas pudessem usar e dedicar seu tempo a apreciar. Descobri que no campo do desenvolvimento, eu poderia criar praticamente qualquer coisa. Meu primeiro contato com a &quot;Programação&quot; foi através do Construct 2, um programa que permitia criar jogos 2D usando eventos para implementar várias funcionalidades dentro do jogo.
                        </p>
                        <p className="text-gray-200">
                            Esse foi um ponto de virada para mim. Após a escola, dedicava meu tempo assistindo vídeos no YouTube e tutoriais, mergulhando cada vez mais nesse universo fascinante. Foi durante essas pesquisas que descobri outras formas de criar, como HTML, CSS e Javascript. A partir desse ponto, minha paixão pela programação só cresceu. Dominar o básico dessas linguagens me levou a explorar Frameworks, e fiquei impressionado com as infinitas possibilidades que eles oferecem.
                        </p>
                        <p className="text-gray-200">
                            Assim, foi como me iniciei na programação. Olhando para trás, percebo o quanto foi importante ter essa curiosidade incessante por descobrir coisas novas. Acredito que essa curiosidade é a chave para evoluirmos, buscarmos conhecimento e colocá-lo em prática no nosso dia a dia.
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
                            Sistema descentralizado de regeneração da natureza. A Sintrop está criando o Crédito de Regeneração, um inovador criptoativo de recompensa por serviços ambientais e uma nova forma de investir em carbono e na regeneração de ecossistemas, utilizando a blockchain para armazenamento e processamentos dos dados sem uma entidade central.
                        </p>
                        <p className="text-gray-200">
                            Eu trabalho no desenvolvimento do Front-End, abrangendo website, plataforma web e aplicativo móvel:
                        </p>

                        <p className="text-gray-200 ml-2">
                            -Website:
                        </p>
                        <p className="text-gray-200 ml-5">
                            Utilizamos Next.js para o website, aproveitando todos os recursos avançados de SEO e SSR (Server Side Rendering) que ele oferece. Implementamos um blog dentro do site utilizando o editor de textos TipTap.
                        </p>

                        <p className="text-gray-200 ml-2 mt-2">
                            -Plataforma Web:
                        </p>
                        <p className="text-gray-200 ml-5">
                            Desenvolvemos com React.js (CRA). Nesta plataforma, todas as interações com os Smart Contracts da Blockchain da Ethereum são realizadas.
                        </p>

                        <p className="text-gray-200 ml-2 mt-2">
                            -Aplicativo móvel:
                        </p>
                        <p className="text-gray-200 ml-5">
                            Desenvolvido com React Native e Expo, o aplicativo é projetado para facilitar a interação dos usuários em uma espécie de Rede Social focada na agricultura regenerativa. Ele inclui um modo offline para permitir que inspetores realizem inspeções em produtores sem conexão com a internet.
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
                </div>
            </main>

            <Footer />
        </>
    )
}