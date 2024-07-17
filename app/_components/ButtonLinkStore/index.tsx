import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

interface Props {
    href: string;
    title: string;
    icon: string;
}

export function ButtonLinkStore({ href, title, icon }: Props) {
    return (
        <Link
            href={href}
            target="_blank"
            className="px-5 h-10 border-2 border-white rounded-xl flex items-center gap-3 text-white font-bold hover:text-black hover:bg-white duration-500"
        >
            {icon === 'google-play' && (
                <FaGooglePlay size={20} />
            )}

            {icon === 'apple-store' && (
                <GrAppleAppStore size={20} />
            )}

            {icon === 'website' && (
                <BiWorld size={20} />
            )}

            {title}
        </Link>
    )
}