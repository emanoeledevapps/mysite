import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EDevApps - Desenvolvimento de aplicativos e websites",
  description: "Olá, me chamo Emanoel Augusto, sou desenvolvedor Front-End, e no meu site você pode saber mais sobre mim!",
  icons: "https://edevapps.com.br/assets/perfil.jpg",
  openGraph:{
    images: 'https://edevapps.com.br/assets/post-square.png',
    title: 'EDevApps - Desenvolvimento de aplicativos e websites',
    description: 'Olá, me chamo Emanoel Augusto, sou desenvolvedor Front-End, e no meu site você pode saber mais sobre mim!',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
