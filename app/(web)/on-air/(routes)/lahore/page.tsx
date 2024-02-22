import React from "react";
import lok from "@/public/lok.png";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

const shows = [
  {
    id: 1,
    title: "Lok Leher",
    paragraph:
      "The caffeine high to get you going! Quirky twists to the hot happenings around, and all the info that occupies your thoughts as you get ready",
    image: lok,
    rj: "RJ Amir Riaz",
  },
  {
    id: 2,
    title: "",
    paragraph: "",
    image: "",
  },
  {
    id: 3,
    title: "",
    paragraph: "",
    image: "",
  },
  {
    id: 4,
    title: "",
    paragraph: "",
    image: "",
  },
  {
    id: 5,
    title: "",
    paragraph: "",
    image: "",
  },
  {
    id: 6,
    title: "",
    paragraph: "",
    image: "",
  },
];

const LahorePage = () => {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6">
      {shows.map((director) => (
        <Card key={director.id}>
          <CardHeader>
            <Image
              className="object-cover w-screen transition-all hover:scale-110 h-72 rounded-xl"
              height={100}
              width={100}
              src={director.image}
              alt={director.title}
            />
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold"> {director.title}</p>
            <h2 className="mt-2 text-md font-bold text-red-600">
              {director.rj}
            </h2>

            <p className="mt-2 text-sm text-black">
              {director.paragraph}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LahorePage;
