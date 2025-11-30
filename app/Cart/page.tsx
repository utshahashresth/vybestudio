import React from "react";
import Header from "@/components/Header";

const cartItems = [
  {
    id: 1,
    name: "T-Shirt",
    price: "rs1200",
    image: "/tees.jpg",
  },
  {
    id: 2,
    name: "Hoodie",
    price: "rs2000",
    image: "/hoodies.jpg",
  },
  {
    id: 3,
    name: "Trouser",
    price: "rs600",
    image: "/tees.jpg",
  },
];

const Page = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-white text-2xl font-bold mb-6">Your Cart</h1>
        <div className="space-y-3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-gray-300 rounded p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <p className="text-black font-semibold">{item.name}</p>
                <p className="text-black">{item.price}</p>
              </div>
              <button className="text-black hover:text-red-600">Remove</button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center text-white">
          <p className="text-lg font-semibold">Total: Rs 3800</p>
          <button className="bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400 text-black">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
