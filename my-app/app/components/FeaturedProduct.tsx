import React from "react";

interface ProductProps {
  id: number;
  imageSrc: string;
  alt: string;
  description: string;
  price: string;
}

const products: ProductProps[] = [
  {
    id: 1,
    imageSrc: "/product1.png",
    alt: "Product 1",
    description: "Amazing Product 1 with a long description to test overflow handling.",
    price: "$49.99",
  },
  {
    id: 2,
    imageSrc: "/product2.png",
    alt: "Product 2",
    description: "Amazing Product 2 with a long description to test overflow handling.",
    price: "$59.99",
  },
  {
    id: 3,
    imageSrc: "/product3.png",
    alt: "Product 3",
    description: "Amazing Product 3 with a long description to test overflow handling.",
    price: "$69.99",
  },
//   {
//     id: 4,
//     imageSrc: "/images/product4.jpg",
//     alt: "Product 4",
//     description: "Amazing Product 4 with a long description to test overflow handling.",
//     price: "$79.99",
//   },
 ];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1920px] mx-auto mt-12 px-4">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold mb-8">Featured Products</h1>

      {/* Responsive Product Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-between bg-gray-200 rounded-lg p-4 shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto"
          >
            {/* Image */}
            <img
              src={product.imageSrc}
              alt={product.alt}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Description (with overflow control) */}
            <div className="flex flex-col justify-between flex-grow h-full overflow-y-auto">
              <p className="text-center text-lg font-medium text-gray-700 mb-4">
                {product.description}
              </p>

              {/* Price */}
              <p className="text-center text-xl font-bold text-green-600 mt-2">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

