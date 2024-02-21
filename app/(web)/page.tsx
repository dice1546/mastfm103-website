"use client";

import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { ArrowRightIcon, MoveRight } from "lucide-react";
import React from "react";
import rqmrxV1tzj from "../../assets/rqmrxV1tzj.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HomePage = () => {
  return (
    <section className="flex items-center lg:h-full dark:bg-gray-800 ">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap items-center justify-between mb-12 ">
          <div className="w-full mb-4 lg:w-1/2 lg:mb-0">
            <div className="lg:max-w-xl">
              <div className="flex flex-col justify-between w-full px-6 py-2 mb-2  rounded-3xl ">
                <div className="w-24 justify-start bg-red-700 h-[10px] border-red-700 rounded-xl mb-4"></div>
                <div className="flex items-center justify-between ">
                  <span className="font-bold text-6xl">
                    {" "}
                    Mast Logon ka
                    <br />
                    Mast Station
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-between w-full px-6 mb-4 bg-gray-50  rounded-3xl dark:bg-gray-700">
                <div className="text-sm text-gray-500 text-justify ">
                  Mast FM or FM 103 is a Pakistani radio channel broadcast from
                  the Pakistan with the frequency 103 MHz. It is a music radio
                  station in Pakistan. It also broadcasts some shows by its
                  hosts, in which they discuss specific topics. In the shows
                  guests are also invited to the show for questioning and
                  answering.
                </div>
              </div>
              <div className="flex flex-col justify-between w-full px-6 py-4 mb-4  rounded-3xl">
                <div className="flex items-center justify-between ">
                  <Button variant="destructive">
                    Learn More
                    <ArrowRightIcon className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-4 lg:pl-11 lg:w-1/2 lg:mb-0">
            <div className="lg:h-96 h-1/2">
              <Lottie
                animationData={rqmrxV1tzj}
                className="object-cover w-full h-full"
              />
              {/* <img
                src={}
                alt=""
                className="object-cover w-full h-full rounded-md"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
