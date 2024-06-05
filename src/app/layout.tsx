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
    <html lang="en">
      <body className={josefin.className}>
        <div className="max-sm:flex max-sm:items-start max-sm:w-full max-sm:p-2">
          <Menu />
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
