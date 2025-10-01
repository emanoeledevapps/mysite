import { ReactNode } from "react";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import TranslationsProvider from "@/providers/TranslationsProvider";
import { Resource } from "i18next";
import { TType } from "@/types/t";

interface Props {
  children: ReactNode;
  resources: Resource;
  locale: string;
  t: TType;
}
export function Page({ children, resources, locale, t }: Props) {
  return (
    <TranslationsProvider
      namespaces={["common"]}
      resources={resources}
      locale={locale}
    >
      <div className="flex flex-col bg-background">
        <Header t={t} />

        <main className="flex min-h-screen flex-col items-center pb-20 container mx-auto gap-10">
          {children}
        </main>

        <Footer />
      </div>
    </TranslationsProvider>
  );
}
