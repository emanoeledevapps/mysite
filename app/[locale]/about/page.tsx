import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import initTranslations from "@/app/i18n";
import { Page } from "@/components/Page/Page";
import ImgDev from "@/public/assets/perfil.jpg";

type Props = {
  params: Promise<{ locale: string }>;
};
export default async function About({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ["common"]);

  return (
    <Page t={t} resources={resources} locale={locale}>
      <div className="container flex flex-wrap gap-12 justify-center pt-10 lg:pt-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-white font-bold text-lg">{t("about.title")}</h1>

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
              24 {t("home.years")}, Santo André/SP
            </p>
            <Links />
          </div>
        </div>

        <div className="flex flex-col w-full md:max-w-[50%] mt-10 bg-red-500">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            tenetur non unde blanditiis hic saepe sit at, consequuntur neque
            molestias quia maiores, vero expedita numquam optio dolor in commodi
            praesentium?
          </p>
        </div>
      </div>
    </Page>
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
