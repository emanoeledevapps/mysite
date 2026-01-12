import initTranslations from "@/app/i18n";
import { Page } from "@/components/Page/Page";

type Props = {
  params: Promise<{ locale: string }>;
};
export default async function About({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ["common"]);

  return (
    <Page t={t} resources={resources} locale={locale}>
      about
    </Page>
  );
}
