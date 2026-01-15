import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/public/assets/logo_white.png";
import { NavMenu } from "./components/NavMenu";
import { TType } from "@/types/t";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

interface Props {
  t: TType;
}
export function Header({ t }: Props) {
  return (
    <header className="w-full h-[80px] items-center justify-center flex fixed bg-gray-950 border-b border-gray-900 z-50">
      <div className="w-full container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={LogoImage}
            width={200}
            height={50}
            className="object-contain w-[150px] md:w-[200px]"
            alt="logo"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-white">
          <Link href="/projects">{t("header.projects")}</Link>

          <Link href="/about">{t("header.about")}</Link>

          <div className="hidden md:flex">
            <LanguageSelect />
          </div>
        </nav>

        <div className="flex md:hidden">
          <NavMenu t={t} />
        </div>
      </div>
    </header>
  );
}
