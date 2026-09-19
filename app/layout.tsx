import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://plusnet.ng"),
  title: {
    default: "Plusnet Broadband Services Limited",
    template: "%s | Plusnet Broadband Services Limited",
  },
  description:
    "Plusnet unlimited fibre broadband — one of the most advanced ISP networks in Nigeria, giving you high speed unlimited connectivity.",
  openGraph: {
    type: "website",
    siteName: "Plusnet Broadband Services Limited",
    locale: "en_NG",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
