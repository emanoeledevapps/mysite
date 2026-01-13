import initTranslations from "@/app/i18n";
import { Page } from "@/components/Page/Page";
import { getProjectDetails } from "../../actions/project";
import { ProjectHeader } from "./components/ProjectHeader";
import { TabSelector } from "./components/TabSelector";
import { TabContent, Tabs } from "./components/TabContent/TabContent";
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string; params: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, params: _params } = await params;
  const id = _params[0];
  const paramTab = _params[1];
  const { t } = await initTranslations(locale, ["common"]);

  return {
    title: t("project.seo-title"),
    description: t("project.seo-description"),
    openGraph: {
      type: "website",
      title: t("project.seo-title") as string,
      description: t("project.seo-description") as string,
      alternateLocale: ["en", "pt-BR"],
      url: `https://edevapps.com.br/${locale}/project/${id}`,
      locale,
      siteName: "edevapps",
      images: `https://edevapps.com.br/assets/og_${locale}.png`,
    },
    alternates: {
      canonical: "https://edevapps.com.br/project",
      languages: {
        en: `https://edevapps.com.br/en/project/${id}`,
        pt: `https://edevapps.com.br/pt-BR/project/${id}`,
      },
    },
  };
}

export default async function Project({ params }: Props) {
  const { locale, params: _params } = await params;
  const { t, resources } = await initTranslations(locale, ["common"]);
  const id = _params[0];
  const paramTab = _params[1];
  const tab: Tabs = paramTab === undefined ? "overview" : (paramTab as Tabs);

  const project = await getProjectDetails({ locale, id });

  return (
    <Page t={t} resources={resources} locale={locale}>
      <ProjectHeader t={t} project={project} />
      <TabSelector
        selectedTab={tab}
        projectId={project.id}
        hasTermsOfUse={
          project?.hasTermsOfUsePage ? project.hasTermsOfUsePage : false
        }
        hasPrivacyPolice={
          project?.hasPrivacyPolicePage ? project.hasPrivacyPolicePage : false
        }
      />
      <div className="container text-white p-10 rounded-2xl bg-card">
        <TabContent selectedTab={tab} project={project} />
      </div>
    </Page>
  );
}
