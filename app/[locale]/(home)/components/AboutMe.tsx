import { Button } from "@/components/ui/button";
import ImgDev from "@/public/assets/perfil.jpg";
import { TType } from "@/types/t";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaWhatsapp } from "react-icons/fa6";

interface Props {
  t: TType;
}
export function AboutMe({ t }: Props) {
  return (
    <section className="flex flex-wrap w-full container">
      <div className="w-full flex items-center gap-10 lg:w-[50%] bg-card rounded-2xl p-5">
        <Image
          src={ImgDev}
          width={200}
          height={200}
          className="rounded-full border-4 border-white"
          alt="Image of me"
        />

        <div className="flex flex-col gap-1">
          <h3 className="text-white font-bold lg:text-2xl">
            Emanoel Augusto Freires
          </h3>
          <p className="text-gray-400 text-sm lg:text-base">
            23 {t("home.years")}, Santo André - SP
          </p>
          <Links />
        </div>
      </div>

      <div className="w-full flex flex-col gap-1 lg:w-[50%] p-5">
        <h3 className="font-bold text-2xl text-white">About me</h3>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ducimus
          commodi, sit illum corrupti tenetur illo atque dicta, itaque
          necessitatibus rerum enim quia ratione alias tempore, architecto
          molestiae odit fugit.
        </p>
        <Button className="mt-5 text-white">{t("home.seeMore")}</Button>
      </div>
    </section>
  );
}

function Links() {
  return (
    <div className="flex items-center gap-5 mt-1 text-white">
      <Link
        href="https://github.com/emanoeledevapps"
        target="_blank"
        rel="noopener noreferer"
      >
        <Github size={30} />
      </Link>

      <Link
        href="https://www.linkedin.com/in/emanoel-augusto-515915233/"
        target="_blank"
        rel="noopener noreferer"
      >
        <Linkedin size={30} />
      </Link>

      <Link href="" target="_blank" rel="noopener noreferer">
        <FaWhatsapp size={30} />
      </Link>
    </div>
  );
}
