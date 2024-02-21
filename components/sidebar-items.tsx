"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-white dark:text-white text-sm font-[500] pl-6 rounded-xl transition-all hover:text-white dark:hover:text-slate-100 hover:bg-gradient-to-r from-black to-slate-600",
        isActive && "text-white bg-gradient-to-r from-red-500 to-red-900 rounded-xl mt-2 mb-2"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-white",
            isActive && "text-slate-200"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-white dark:border-white h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  )
}