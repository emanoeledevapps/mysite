import Image from "next/image";
import Link from "next/link";
import ImagePerfil from '../../../public/assets/perfil.jpg';
import { NavMenu } from "./components/NavMenu";

export function Header() {
    return (
        <header className="w-full h-[70px] border-b border-gray-300 items-center justify-center flex bg-black">
            <div className="w-full max-w-[1024px] flex items-center justify-between mx-3">
                <Link
                    href='/'
                    className="flex items-center gap-3 text-white"
                >
                    <Image
                        alt='Foto de perfil'
                        src={ImagePerfil}
                        width={100}
                        height={100}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white"
                    />
                    EDevApps
                </Link>

                <nav className="hidden lg:flex items-center gap-5 ">
                    <Link
                        href='/projects'
                        className="text-white"
                    >
                        Projetos
                    </Link>

                    <Link
                        href='/about'
                        className="text-white"
                    >
                        Sobre mim
                    </Link>
                </nav>

                <div className="flex lg:hidden">
                    <NavMenu/>
                </div>
            </div>
        </header>
    )
}