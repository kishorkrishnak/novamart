import React from "react";

const ProductSkeltons = () => {
  return (
    <section className="mx-auto px-1 md:px-4 mt-6 max-w-screen-xl gap-1 grid md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
      {[...Array(10)].map((product, index) => {
        return (
          <div key={index} className="w-full flex flex-col gap-4">
            <div className="skeleton h-32 md:h-56 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        );
      })}
    </section>
  );
};

export default ProductSkeltons;
