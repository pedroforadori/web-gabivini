import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import { Providers } from "./providers";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casamento Gabi e Vini",
  description: "Casamento Gabi e Vini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/logo-branco.ico" />
      </head>
      <body className={josefin.className}>
        <div className="max-sm:flex max-sm:items-start max-sm:w-full max-sm:p-2">
          <Menu />
        </div>
        <Providers>{children}</Providers>
        <footer className="bg-white py-6 text-center text-xs text-marinho">
          <a
            href="https://www.pennecasamentos.com.br/"
            target="_blank"
            rel="noopener"
            className="underline underline-offset-4 hover:opacity-70"
          >
            Desenvolvido por Penne · Faça o site do seu casamento conosco
          </a>
        </footer>
      </body>
    </html>
  );
}
