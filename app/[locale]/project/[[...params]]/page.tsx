import Image from "next/image";

import initTranslations from "@/app/i18n";
import { Page } from "@/components/Page/Page";
import { getProjectDetails } from "../../actions/project";
import { ProjectHeader } from "./components/ProjectHeader/ProjectHeader";

type Props = {
  params: Promise<{ locale: string; params: string[] }>;
};

export default async function Project({ params }: Props) {
  const { locale, params: _params } = await params;
  const { t, resources } = await initTranslations(locale, ["common"]);
  const id = _params[0];
  const tab = _params[1];

  const project = await getProjectDetails({ locale, id });

  return (
    <Page t={t} resources={resources} locale={locale}>
      <ProjectHeader t={t} project={project} />
    </Page>
  );
}
