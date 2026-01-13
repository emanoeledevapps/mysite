import Image from "next/image";

import { Page } from "@/components/Page/Page";
import initTranslations from "@/app/i18n";
import Logo from "@/public/assets/logo_without_text.png";

import { ProjectsList } from "./components/ProjectsList";
import { AboutMe } from "./components/AboutMe";
import { EmphasisProjects } from "./components/EmphasisProjects";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ["common"]);

  return (
    <Page locale={locale} resources={resources} t={t}>
      <div className=" bg-gradient-to-r from-[#0888ec] via-[#4cd79f] to-[#7E42DE]">
        <div className="w-full lg:w-[1024px] flex flex-col h-[400px] items-center justify-center my-10 container lg:h-[300px] lg:my-20">
          <div className="flex flex-col w-full items-center px-2 gap-5 lg:gap-20 lg:px-0 md:flex-row">
            <Image
              src={Logo}
              width={1000}
              height={100}
              className="object-contain w-[150px] md:w-[280px] md:flex"
              alt="logo"
              quality={100}
            />
            <div className="flex flex-col gap-5 items-start">
              <h2 className="font-bold text-white text-center text-7xl lg:text-start lg:text-9xl">
                edevapps
              </h2>
              <h3 className="text-2xl text-white text-center ml-2">
                {t("home.slogan")}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <EmphasisProjects locale={locale} t={t} />

      <ProjectsList locale={locale} t={t} />

      <AboutMe t={t} />
    </Page>
  );
}
