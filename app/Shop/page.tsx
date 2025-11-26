import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { div } from "motion/react-client";
const page = () => {
  const products = [
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      category: "tshirt",
      price: 899,
      sizes: ["S", "M", "L", "XL"],
      colors: ["black", "white"],
      image: "/hoodies.jpg",
      inStock: true,
    },
    {
      id: 2,
      name: "Oversized Streetwear Tee",
      category: "tshirt",
      price: 1299,
      sizes: ["M", "L", "XL"],
      colors: ["gray", "navy"],
      image: "/hoodies.jpg",
      inStock: true,
    },
    {
      id: 3,
      name: "Graphic Print Tee",
      category: "tshirt",
      price: 999,
      sizes: ["S", "M", "L"],
      colors: ["white"],
      image: "/hoodies.jpg",
      inStock: false,
    },
    {
      id: 4,
      name: "Athletic Fit Performance Tee",
      category: "tshirt",
      price: 1499,
      sizes: ["S", "M", "L", "XL"],
      colors: ["blue", "black"],
      image: "/hoodies.jpg",
      inStock: true,
    },
    {
      id: 5,
      name: "Basic Hoodie",
      category: "hoodie",
      price: 1999,
      sizes: ["M", "L", "XL"],
      colors: ["black"],
      image: "/hoodies.jpg",
      inStock: true,
    },
    {
      id: 6,
      name: "Fleece Oversized Hoodie",
      category: "hoodie",
      price: 2499,
      sizes: ["L", "XL"],
      colors: ["brown", "beige"],
      image: "/hoodies.jpg",
      inStock: true,
    },
  ];
  return (
    <div className="bg-black min-h-screen min-w-screen">
      <Header />
      <div className="ml-3 mt-5 font-semibold">
        <p className="text-white font-bold text-3xl mb-2">Our Collection</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-white   p-4 mr-0">
              <Image
                src={product.image}
                alt="img"
                height={100}
                width={300}
                className="gap-2 ml-2 mb-1"
              ></Image>
              <div className=" font-">{product.name}</div>

              <div className=" ">Rs. {product.price}</div>
            </div>
          ))}
          <div className="text-white text-6xl font-bold ml-20 mt-30 ">
            Vybestudio
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
