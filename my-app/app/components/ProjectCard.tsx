import React from "react";

interface ProductProps {
  id: number;
  imageSrc: string;
  alt: string;
  description: string;
  price: string;
  name: string; // Adding the name property for the product name
}

const products: ProductProps[] = [
  {
    id: 1,
    imageSrc: "/product11.png",
    alt: "Product 1",
    description: "Amazing Product 1 with a long description to test overflow handling.",
    price: "600 products",
    name: "Product 1",
  },
  {
    id: 2,
    imageSrc: "/product22.png",
    alt: "Product 2",
    description: "Amazing Product 2 with a long description to test overflow handling.",
    price: "500 products",
    name: "Product 2",
  },
  {
    id: 3,
    imageSrc: "/product33.png",
    alt: "Product 3",
    description: "Amazing Product 3 with a long description to test overflow handling.",
    price:"1142 products",
    name: "Product 3",
  },
];

const TopProducts: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1920px] mx-auto mt-12 px-4">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold mb-8">Top Products</h1>

      {/* Responsive Product Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col items-center justify-between bg-gray-200 rounded-lg p-4 shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto"
          >
            {/* Image */}
            <img
              src={product.imageSrc}
              alt={product.alt}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Transparent Black Bar with Product Name */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2">
              <p className="text-center text-white text-lg font-bold">{product.name}</p>
            </div>

            {/* Description */}
            <div className="flex flex-col justify-between flex-grow h-full overflow-hidden">
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

export default TopProducts;
