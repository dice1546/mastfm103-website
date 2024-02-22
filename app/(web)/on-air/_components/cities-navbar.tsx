"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import lahore from "@/public/lahore.png";
import faisalabad from "@/public/faisalabad.png";
import multan from "@/public/multan.png";
import karachi from "@/public/karachi.png";
import islamabad from "@/public/islamabad.png";
import close from "@/public/close.svg";
import menu from "@/public/menu.svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FaFacebook } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export const navLinks = [
  {
    id: 1,
    title: "Lahore",
    link: "/on-air/lahore",
    image: lahore,
  },
  {
    id: 2,
    title: "Multan",
    link: "/on-air/multan",
    image: multan,
  },
  {
    id: 3,
    title: "Karachi",
    link: "/on-air/karachi",
    image: karachi,
  },
  {
    id: 4,
    title: "Islamabad",
    link: "/on-air/islamabad",
    image: islamabad,
  },
  {
    id: 5,
    title: "Faisalabad",
    link: "/on-air/faisalabad",
    image: faisalabad,
  },
];
const CitiesNavbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-center items-center navbar">
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((navlink) => (
          <Link
            key={navlink.id}
            href={navlink.link}
            className="font-poppins font-medium 
  cursor-pointer text-md px-4 py-2 rounded-xl text-black transition-colors duration-300 hover:bg-gradient-to-r from-red-500 to-yellow-500"
          >
            <div className="flex-1 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={navlink.image}
                  height={60}
                  width={60}
                  alt={navlink.title}
                />
                <p className="text-center">{navlink.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </ul>
      <div
        className="sm:hidden flex flex-1
      justify-center items-center z-50"
      >
        <Drawer>
          <DrawerTrigger className="text-white text-center fixed top-2 flex px-4 py-2 bg-black hover:bg-slate-500 rounded-xl">
            <span>Radio Stations</span>
            <ChevronDown className="h-6 w-6 ml-2" />
          </DrawerTrigger>
          <DrawerContent className="bg-red-600">
            <DrawerHeader>
              <DrawerTitle className="text-white">
                Mast Logo Ki Mast Batein
              </DrawerTitle>
            </DrawerHeader>
            <DrawerFooter className="mb-10">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-6">
                <DrawerClose asChild>
                  <Link
                    href="/on-air/karachi"
                    className="inline-flex h-10 px-4 py-2 bg-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Karachi
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="/on-air/lahore"
                    className="inline-flex h-10 px-4 py-2 bg-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Lahore
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="/on-air/multan"
                    className="inline-flex h-10 px-4 py-2 bg-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Multan
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="/on-air/faisalabad"
                    className="inline-flex h-10 px-4 py-2 bg-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Faisalabad
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="/on-air/islamabad"
                    className="inline-flex bg-white h-10 px-4 py-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Islamabad
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="/on-air/gujranwala"
                    className="inline-flex bg-white h-10 px-4 py-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Gujranwala
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="www.facebook.com/mastfm103"
                    className="inline-flex bg-white h-10 px-4 py-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <FaFacebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Link>
                </DrawerClose>
              </div>
              <Button value="default" className="mt-4">
                Download Our App
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default CitiesNavbar;
