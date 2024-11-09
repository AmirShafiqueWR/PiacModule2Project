"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation instead of next/router

const PromoBanner: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/shop');
  };

  return (
    <section className="bg-white ">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/2 px-16">
          <h2 className="text-4xl text-red-700 font-bold mb-4">Discover Our Premium Basmati Rice Selection</h2>
          <p className="text-lg mb-4">
            Explore our exquisite range of Basmati rice, sourced from the finest fields. Each grain promises a delightful culinary experience, perfect for any dish.
          </p>
          <div className="w-full md:w-1/2  flex ">
        
        <button 
            onClick={handleButtonClick} 
            className="inline-block bg-red-800 text-white py-2 px-4 rounded hover:bg-yellow-400"
          >
            Shop Now
          </button>
        </div>
          
        </div>
        <div className="w-full md:w-1/2 p-1 flex justify-center">
          {" "}
          <img
            src="/images/AllProducts.png"
            alt="Basmati Rice"
            className="w-[600px] h-[562px] object-contain rounded-lg "
          />{" "}
        </div>
        
        
      </div>
      
    </section>
  );
};

export default PromoBanner;
