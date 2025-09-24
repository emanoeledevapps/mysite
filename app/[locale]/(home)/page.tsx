import { Page } from "@/components/Page/Page";
import initTranslations from "@/app/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, ["common"]);

  return (
    <Page locale={locale} resources={resources} t={t}>
      <div className="w-full lg:w-[1024px] flex flex-col mt-32">
        <div className="flex flex-col w-full items-center px-2 lg:px-0">
          <h2 className="font-bold text-4xl text-center">EDevApps</h2>
          <h3 className="font-bold text-xl text-center">SLogan here</h3>
        </div>
      </div>
    </Page>
  );
}
