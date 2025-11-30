import React from "react";
import Header from "@/components/Header";

export default async function Page() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="font-semibold text-5xl mt-4 ml-5 text-black ">
        Contact Us
      </div>
      <div className="bg-black mt-70 w-full h-[280px]  justify-between text-white">
        <div className="ml-5">
          <p className="mt-5 text-2xl font-medium">Our address</p>
          <p className="mt-4">Kathmandu,Nepal</p>
          <p className="">Building Office 4490</p>
        </div>
        <div className="justify-center mb-0 mt-5 ml-5 ">
          <p className=" text-2xl font-medium">Our contact</p>
          <p>vybe@gmail.com</p>
          <p>985476947694</p>
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Fetched Products</h2>
        <div>
          {products.map((product: any) => (
            <p key={product.id}>
              {product.title}, Rs. {product.price}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
