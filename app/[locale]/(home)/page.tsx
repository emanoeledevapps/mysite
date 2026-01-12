import Image from "next/image";

import { Page } from "@/components/Page/Page";
import initTranslations from "@/app/i18n";
import Logo from "@/public/assets/logo_white.png";

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
        <div className="w-full lg:w-[1024px] flex flex-col h-[300px] items-center justify-center my-10 lg:my-20 container">
          <div className="flex flex-col w-full items-center px-2 lg:px-0 relative">
            <Image
              src={Logo}
              width={1000}
              height={100}
              className="object-contain w-full md:w-[800px]"
              alt="logo"
              quality={100}
            />
            <h3 className="text-2xl text-center absolute bottom-4 text-white ml-36">
              {t("home.slogan")}
            </h3>
          </div>
        </div>
      </div>

      <ProjectsList locale={locale} t={t} />

      <EmphasisProjects locale={locale} t={t} />

      <AboutMe t={t} />
    </Page>
  );
}
