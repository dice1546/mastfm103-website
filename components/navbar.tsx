import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-14 px-6 bg-gradient-to-r from-red-200 to-red-600 lg:hidden flex justify-between items-center">
      <div>
        <Link href="/">
        <Image src="/mastfmlogo.png" height={50} width={50} alt="mastfm103" />
        </Link>
      </div>
      <div>
        <Drawer>
          <DrawerTrigger>
            <Image src="/menu.png" height={35} width={35} alt="menu" />
          </DrawerTrigger>
          <DrawerContent className="bg-red-600">
            <DrawerHeader>
              <DrawerTitle className="text-white">
                Mast Logo Ki Mast Batein
              </DrawerTitle>
            </DrawerHeader>
            <DrawerFooter className="mb-10">
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">
                <DrawerClose asChild>
                  <Link
                    href="/"
                    className="inline-flex h-10 px-4 py-2 bg-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Home
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="/on-air"
                    className="inline-flex h-10 px-4 py-2 bg-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    on Air
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="/shows"
                    className="inline-flex h-10 px-4 py-2 bg-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Shows
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="/rjs"
                    className="inline-flex h-10 px-4 py-2 bg-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    RJs
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="/awards"
                    className="inline-flex bg-white h-10 px-4 py-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Awards
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="/mast-streaming"
                    className="inline-flex bg-white h-10 px-4 py-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Mast Streaming
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="/mast-streaming"
                    className="inline-flex bg-white h-10 px-4 py-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    About Us
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="/mast-streaming"
                    className="inline-flex bg-white h-10 px-4 py-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Careers
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link
                    href="www.facebook.com/mastfm103"
                    className="inline-flex bg-white h-10 px-4 py-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  ><FaFacebook className="mr-2 h-4 w-4" />
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
    </div>
  );
};

export default Navbar;
