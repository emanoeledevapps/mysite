import Link from "next/link";

export function Header(){
    return(
        <div className="w-full h-[70px] border-b border-gray-300 items-center justify-center flex">
            <div className="w-full max-w-[1024px] flex items-center justify-between mx-3">
                <p>EDevApps</p>
                
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