import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

// Font files can be colocated inside of `app`
const myFontHelvetica = localFont({
  src: [
    {
      path: "./../assets/font/helvetica/HelveticaNowText.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../assets/font/helvetica/HelveticaNowTextMedium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

const myFontNikeFutura = localFont({
  src: [
    {
      path: "./../assets/font/futura/Nike-Futura-ot-300.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nike-futura",
});

const myFontNikeTG = localFont({
  src: [
    {
      path: "./../assets/font/futura/Nike-TG.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-nike-tg",
});

export const metadata: Metadata = {
  title: "Nike. Just Do It. Nike VN",
  description:
    "Inspiring the world's athletes, Nike delivers innovative products, experiences and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body
        className={`${myFontHelvetica.variable} ${myFontNikeFutura.variable} ${myFontNikeTG.variable} font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
