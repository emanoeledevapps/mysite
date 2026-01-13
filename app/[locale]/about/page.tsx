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
        <div className="flex flex-col gap-5 w-full items-center lg:w-auto lg:items-start">
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

        <div className="flex flex-col w-full lg:max-w-[50%] mt-10 bg-card p-5 rounded-2xl h-fit gap-3">
          <p className="text-white">{t("about.description1")}</p>
          <p className="text-white">{t("about.description2")}</p>
          <p className="text-white">{t("about.description3")}</p>
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
