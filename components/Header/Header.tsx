import Image from "next/image";
import Link from "next/link";
import ImagePerfil from "@/public/assets/perfil.jpg";
import { NavMenu } from "./components/NavMenu";
import { TType } from "@/types/t";

interface Props {
  t: TType;
}
export function Header({ t }: Props) {
  return (
    <header className="w-full h-[80px] items-center justify-center flex bg-primary border-b">
      <div className="w-full container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          EDevApps
        </Link>

        <nav className="hidden lg:flex items-center gap-5 ">
          <Link href="/projects">{t("header.projects")}</Link>

          <Link href="/about">{t("header.about")}</Link>
        </nav>

        <div className="flex lg:hidden">
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
