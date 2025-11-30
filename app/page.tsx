"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import DecryptedText from "@/components/ui/shadcn-io/decrypted-text";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Fullscreen } from "lucide-react";
const page = () => {
  return (
    <div>
      <Header />
      <div>
        <div
          className="h-[400px] w-[600px] bg-cover  mx-auto flex justify-center items-center mt-15  "
          style={{
            backgroundImage: "url('example.jpg')",
            opacity: 20,
          }}
        >
          <p className=" absolute inset-0 flex items-center justify-center text-black text-9xl font-bold -z-10 mt-96">
            Vybestudio
          </p>
          <div>
            <div className="absolute justify-center top-5">
              <Link href="/">
                {" "}
                <DecryptedText
                  text="Vybestudio"
                  infinite
                  speed={60}
                  maxIterations={15}
                  sequential={false}
                  className="font-bold text-black text-center text-50px mt-2"
                  encryptedClassName="text-2xl font-bold text-muted-foreground"
                  animateOn="view"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-10 mt-30 ">
        <Link href="/Recommend" className="font-bold text-3xl">
          Recommended For You
        </Link>
        <p className="font-light">
          Curated selections to elevate your wardrobe
        </p>

        <div className="flex justify-end">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Featured" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hoodie">Hoodie</SelectItem>
              <SelectItem value="zipup">Zipups</SelectItem>
              <SelectItem value="trouser">trousers</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-col  ">
          <div className="flex gap-3 mt-6  ">
            <Image
              src="/tees.jpg"
              alt="tshirt"
              width={300}
              height={100}
              objectFit="cover"
            />

            <Image
              src="/tees.jpg"
              alt="tshirt"
              width={300}
              height={100}
              objectFit="cover"
              className=""
            ></Image>
            <Image
              src="/tees.jpg"
              alt="tshirt"
              width={300}
              height={100}
              objectFit="cover"
            />
            <Image
              src="/tees.jpg"
              alt="tshirt"
              width={300}
              height={100}
              objectFit="cover"
              className=""
            />
          </div>
          <div className="font-bold text-3xl mt-20">Basic Collection</div>
          <div className=" grid  md:grid-cols-3 gap-2 mt-4">
            <Image
              src="/tees.jpg"
              alt="tshirt"
              width={300}
              height={100}
              objectFit="cover"
            />
            <Image
              src="/tees.jpg"
              alt="tshirt"
              width={300}
              height={100}
              objectFit="cover"
            />
            <Image
              src="/tees.jpg"
              alt="tshirt"
              width={300}
              height={100}
              objectFit="cover"
            />
            <Image
              src="/tees.jpg"
              alt="tshirt"
              width={300}
              height={100}
              objectFit="cover"
            />
            <Image
              src="/tees.jpg"
              alt="tshirt"
              width={300}
              height={100}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
