"use client";

import Image from "next/image";
import { SidebarRoutes } from "./sidebar-routes";
import { Button } from "./ui/button";
import { GrGoogle } from "react-icons/gr";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="h-full border-r-slate-200 flex flex-col overflow-y-auto bg-gradient-to-b from-white to-red-600 shadow-sm">
      <div className="pb-4 pt-4 pl-8">
        <Link href="/">
        <Image src="/mastfmlogo.png" height={100} width={170} alt="mastfm103" />
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
      <div className="ml-6 mt-2">
        <Link href="https://play.google.com/store/apps/details?id=com.mastfm103.radioapp&pcampaignid=web_share" target="_blank">
        <Button className="mb-2 lg:mb-0">
          <GrGoogle size={20} className="mr-2" />
          Download Android App
        </Button>
        </Link>
      </div>
    </div>
  );
};
