import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Global/Header/Navbar";
import Main from "@/app/components/Global/Footer/Main";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-old-standard-tt",
});

export const metadata: Metadata = {
  title: {
    default: "Get the Best Chicken, Cookies, Bread, Cake Recipes",
    template: "%s | FoudRecipes",
  },
  description: "Discover the ultimate tire guide on sizes, pressure, and wheel selection to improve vehicle safety, performance, and efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <Head>
      <meta name="impact-site-verification" content="a7e50abc-7550-4bc1-bedb-d78534de99bb" />
      </Head>
      <GoogleTagManager gtmId="GTM-NQBBX9KZ" />
      <body className={`${inter.className} antialiased bg-slate-50`}>
        <Navbar />
        {children}
        <Main />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=GTM-NQBBX9KZ"
        />
        <Script
          id="gtag-init" // Added id attribute here
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
      </body>
    </html>
  );
}