import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed();

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
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body className={`${robotoCondensed.className} antialiased`}>{children}</body>
    </html>
  );
}
