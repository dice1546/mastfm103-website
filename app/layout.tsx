import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Navbar from "@/components/navbar";
import Player from "@/components/Player";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mast Fm 103",
  description: "Live Music and News 24/7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="hidden lg:flex h-full lg:w-72 flex-col fixed inset-y-0 lg:z-40 md:z-40 sm:z-10">
          <Sidebar />
        </div>
        <div className="flex lg:hidden h-full w-full flex-col fixed inset-y-0 sm:z-20">
          <Navbar />
        </div>
        <div className="fixed right-4 z-40 justify-center bg-slate-200 hover:bg-slate-300 rounded-xl shadow-all shadow-xl p-4 top-1/2 transform -translate-y-1/2 space-y-4">
          <a
            href="https://facebook.com"
            className="block text-2xl text-blue-600"
          >
            <FaFacebook size={25} />
            <p className="text-black text-sm mt-2">480k</p>
          </a>
          <a
            href="https://instagram.com"
            className="block text-2xl text-pink-500"
          >
            <FaInstagram size={25} />
          </a>
        </div>
        <main className="md:pl-0 lg:pl-96 pt-[50px] h-full">{children}</main>
        <div className="bg-gradient-to-r lg:pl-96 from-slate-100 to-slate-400 lg:z-10 sm:z-40 fixed bottom-0 w-full h-20">
          <Player />
        </div>
      </body>
    </html>
  );
}
