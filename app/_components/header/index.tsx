import Image from "next/image";
import Link from "next/link";
import ImagePerfil from '../../../public/assets/perfil.jpg';

export function Header() {
    return (
        <div className="w-full h-[70px] border-b border-gray-300 items-center justify-center flex">
            <div className="w-full max-w-[1024px] flex items-center justify-between mx-3">
                <Link
                    href='/'
                    className="flex items-center gap-3"
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

                <nav className="flex items-center gap-5">
                    <Link
                        href='/projects'
                    >
                        Projetos
                    </Link>

                    <Link
                        href='/about'
                    >
                        Sobre mim
                    </Link>
                </nav>
            </div>
        </div>
    )
}