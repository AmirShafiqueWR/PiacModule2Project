"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleShopNowClick = () => {
    router.push("/shop");
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center">
        <div className="w-full md:w-1/2 px-4 md:px-16">
          <h1 className="text-5xl font-bold mb-4">
            Discover the Essence of Basmati Rice
          </h1>
          <p className="text-lg mb-6">
            Indulge in the rich aroma and delicate flavor of the world's finest
            Basmati rice. Elevate your culinary creations with every grain.
          </p>
          <button
            onClick={handleShopNowClick}
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-500"
          >
            Shop Now
          </button>
        </div>
        <div className="w-full md:w-1/2 p-1 flex justify-center">
          {" "}
          <img
            src="/images/TaqwaSteam.png"
            alt="Taqwa Basmati Rice Bag"
            className="w-[350px] h-[462px] object-contain rounded-lg "
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
