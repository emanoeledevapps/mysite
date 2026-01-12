import initTranslations from "@/app/i18n";
import { Page } from "@/components/Page/Page";
import { getProjectDetails } from "../../actions/project";
import { ProjectHeader } from "./components/ProjectHeader";
import { TabSelector } from "./components/TabSelector";
import { TabContent, Tabs } from "./components/TabContent/TabContent";

type Props = {
  params: Promise<{ locale: string; params: string[] }>;
};

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
      <div className="container text-white p-10 rounded-2xl bg-gray-700">
        <TabContent selectedTab={tab} project={project} />
      </div>
    </Page>
  );
}
