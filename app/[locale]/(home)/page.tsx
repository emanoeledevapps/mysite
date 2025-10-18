import { Page } from "@/components/Page/Page";
import initTranslations from "@/app/i18n";
import { ProjectsList } from "./components/ProjectsList";
import { AboutMe } from "./components/AboutMe";

import TextLogo from "@/public/assets/text-logo.png";
import Image from "next/image";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ["common"]);

  return (
    <Page locale={locale} resources={resources} t={t}>
      <div className="w-full lg:w-[1024px] flex flex-col h-[300px] items-center justify-center my-10 lg:my-20">
        <div className="flex flex-col w-full items-center px-2 lg:px-0">
          <Image
            src={TextLogo}
            width={1000}
            height={100}
            className="object-contain w-full md:w-[400px]"
            alt="logo"
            quality={100}
          />
          <h3 className="font-semibold text-xl text-center">
            {t("home.slogan")}
          </h3>
        </div>
      </div>

      <ProjectsList locale={locale} t={t} />

      <AboutMe t={t} />
    </Page>
  );
}
