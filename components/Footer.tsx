import React from "react";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <>
      <div className="bg-black mt-5 max-w-full  h-100 flex justify-between">
        <div>
          <p className=" w-90 mt-5 text-white font-bold ml-8 text-2xl ">
            Fresh drops, creative insights, and exclusive offers delivered
            straight from the studio.
          </p>
          <Input
            className="text-white border-none w-60 ml-8 mt-5"
            placeholder="Email"
          />
        </div>
        <div className="flex justify-center mb-0">
          <p className="  text-white  w-20">
            Support - FAQ - Terms & Conditions - Privacy Policy
          </p>
        </div>
        <div>
          <p className="text-white w-30 flex text-end align-middle">
            Connect - Contact - Kathmandu, Nepal 📧 hello@vybestudio.com 📞
            +977-9800000000 © 2025 VybeStudio. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
