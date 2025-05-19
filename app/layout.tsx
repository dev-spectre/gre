import type { Metadata } from "next";
import { Roboto_Condensed, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "GRE",
  description: "World's Most Affordable Complete GRE Prep at 599/- per month.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoCondensed.variable} ${poppins.variable}`}>
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body className="antialiased bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
