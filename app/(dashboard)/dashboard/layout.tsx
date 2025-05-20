import { Montserrat, Poetsen_One } from "next/font/google";
import "@/app/globals.css";
import { Sidebar } from "@/components/Navbar";
import { Metadata } from "next/types";
import Link from "next/link";

const poetsenOne = Poetsen_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poetsen-one",
});

const montserrat = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "GRE",
  description: "World's Most Affordable Complete GRE Prep at 599/- per month.",
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poetsenOne.variable}`}>
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body
        className={`${montserrat.className} grid grid-cols-[min-content_1fr] grid-rows-[min-content_1fr] gap-4 bg-[#EEF2F6]`}
      >
        <Sidebar />
        <div className="mt-4.5 mr-4 flex items-center justify-between rounded-md border border-[#E5E5E5] bg-white px-5 py-5">
          <Link href={"/"}>
            <h1 className="font-poetsen-one text-xl font-[400] text-[#1B438F]">
              GRE NextEra
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5 rounded-lg bg-gradient-to-t from-[#1b438f] to-[#34a0bd] px-[2px] py-[2px] font-[500] text-white capitalize">
              <button className="flex gap-1.5 px-3 py-1">
                <img src="/icons/sparkles.svg" alt="" />
                <span className="underline">Upgrade now</span>
              </button>
            </div>
            <button>
              <img src="/icons/notification-icon.svg" alt="notification" />
            </button>
            <img
              className="h-9 w-9 rounded-full"
              src="/images/profile.png"
              alt="profile picture"
            />
          </div>
        </div>
        <div className="mr-4">{children}</div>
      </body>
    </html>
  );
}
