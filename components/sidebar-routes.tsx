"use client";

import { Award, Home, Info, Library, Music, RadioTower, Sparkle, Users } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "@/components/sidebar-items";
import { BsPeople } from "react-icons/bs";

const radioRoutes = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },
  {
    icon: Music,
    label: "On Air",
    href: "/on-air",
  },
  {
    icon: Library,
    label: "Shows",
    href: "/shows",
  },
  {
    icon: Users,
    label: "RJs",
    href: "/rjs",
  },
  {
    icon: Award,
    label: "Awards",
    href: "/awards",
  },
  {
    icon: RadioTower,
    label: "Mast Streaming",
    href: "/mast-streaming",
  },
  {
    icon: Info,
    label: "About Us",
    href: "/about-us",
  },
  {
    icon: Sparkle,
    label: "Careers",
    href: "/careers",
  }, 
];


export const SidebarRoutes = () => {
  // const pathname = usePathname();

  // const isTeacherPage = pathname?.includes("/dashboard/teacher");

  const routes =  radioRoutes;

  return (
    <div className="flex flex-col px-4 w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}