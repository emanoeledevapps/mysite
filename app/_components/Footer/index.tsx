import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Footer() {
    return (
        <footer className="bg-black">
            <div className="w-full h-[70px] border-t border-gray-300 items-center justify-center flex">
                <div className="w-full max-w-[1024px] flex items-center justify-center mx-3">
                    <p className="text-white">EDevApps &copy; 2024</p>

                    <p className="text-white mx-10">|</p>

                    <div className="flex items-center gap-3">
                        <Link
                            href='https://www.linkedin.com/in/emanoel-augusto-515915233/'
                            target="_blank"
                        >
                            <FaLinkedin size={20} color='white'/>
                        </Link>

                        <Link
                            href='https://github.com/emanoeledevapps/'
                            target="_blank"
                        >
                            <FaGithub size={20} color='white'/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}