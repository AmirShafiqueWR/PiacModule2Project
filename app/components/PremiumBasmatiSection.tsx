import React from "react";

const PremiumBasmatiSection: React.FC = () => {
  return (
    <section className="bg-stone-100 py-10">
      <div className="container mx-auto text-center mb-8"></div>
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center">
        <div className="w-full md:w-1/2 px-16">
          <h2 className="text-4xl font-bold mb-4">
            Experience the Exquisite Qualities of Our Premium Basmati Rice
          </h2>
          <p className="text-lg mb-6">
            Our Basmati rice is renowned for its captivating aroma and
            delightful flavor. Each grain is carefully selected to ensure
            exceptional length and texture, making every meal a culinary
            delight.
          </p>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Aromatic Delight</h3>
            <p className="text-lg">
              Savor the rich aroma that elevates your dishes to new culinary
              heights.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Perfectly Long</h3>
            <p className="text-lg">
              Enjoy the long, fluffy grains that provide a satisfying texture in
              every bite.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-1 flex justify-center">
          {" "}
          <img
            src="/images/TaqwaSella.png"
            alt="Taqwa Basmati Rice Bag"
            className="w-[350px] h-[462px] object-contain rounded-lg "
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default PremiumBasmatiSection;
