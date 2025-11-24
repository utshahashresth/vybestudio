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
    {
      id: 7,
      name: "Zip-Up Hoodie",
      category: "hoodie",
      price: 2199,
      sizes: ["S", "M", "L"],
      colors: ["dark-green", "black"],
      image: "//hoodies.jpg",
      inStock: false,
    },
    {
      id: 8,
      name: "Premium Heavyweight Hoodie",
      category: "hoodie",
      price: 2799,
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["charcoal", "navy"],
      image: "/hoodies.jpg",
      inStock: true,
    },
    {
      id: 9,
      name: "Minimalist Logo T-Shirt",
      category: "tshirt",
      price: 1199,
      sizes: ["S", "M", "L"],
      colors: ["cream", "black"],
      image: "/hoodies.jpg",
      inStock: true,
    },
    {
      id: 10,
      name: "Vintage Wash T-Shirt",
      category: "tshirt",
      price: 1399,
      sizes: ["M", "L"],
      colors: ["olive", "gray"],
      image: "/hoodies.jpg",
      inStock: true,
    },
  ];
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="ml-8 mt-5 font-semibold">
        <p className="text-white font-bold text-3xl mb-8">Our Collection</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-white   p-4 ">
              <Image
                src="/product.hoodies.jpg"
                alt="img"
                height={40}
                width={40}
              ></Image>
              <div className="text-xl font-semibold">{product.name}</div>
              <div className="text-sm text-gray-400">{product.category}</div>
              <div className="text-lg mt-1">Rs. {product.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
