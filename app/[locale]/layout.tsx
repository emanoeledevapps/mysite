import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import i18nConfig from "@/i18nconfig";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EDevApps - Desenvolvimento de aplicativos e websites",
  description:
    "Olá, me chamo Emanoel Augusto, sou desenvolvedor Front-End, e no meu site você pode saber mais sobre mim!",
  icons: "https://edevapps.com.br/assets/perfil.jpg",
  openGraph: {
    images: "https://edevapps.com.br/assets/post-square.png",
    title: "EDevApps - Desenvolvimento de aplicativos e websites",
    description:
      "Olá, me chamo Emanoel Augusto, sou desenvolvedor Front-End, e no meu site você pode saber mais sobre mim!",
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
