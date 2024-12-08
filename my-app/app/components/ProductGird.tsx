import React from "react";

const ProductGrid = () => {
  const products = [
    { id: 1, image: "/product1.png", name: "Product 1", price: "$10" },
    { id: 2, image: "/product2.png", name: "Product 2", price: "$20" },
    { id: 3, image: "/product3.png", name: "Product 3", price: "$30" },
    { id: 4, image: "/product4.png", name: "Product 4", price: "$40" },
    { id: 5, image: "/products5.png", name: "Product 5", price: "$50" },
    { id: 6, image: "/product6.png", name: "Product 6", price: "$60" },
    { id: 7, image: "/product7.png", name: "Product 7", price: "$70" },
    { id: 8, image: "/product1.png", name: "Product 8", price: "$80" },
    { id: 9, image: "/product9.png", name: "Product 9", price: "$90" },
    { id: 10, image: "/product10.png", name: "Product 10", price: "$100" },
    { id: 11, image: "/products 11.png", name: "Product 11", price: "$110" },
    { id: 12, image: "/products 12.png", name: "Product 12", price: "$120" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:gap-6 sm:p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center border p-3 rounded-lg shadow-sm hover:shadow-md bg-white transition-transform transform hover:scale-105"
        >
         {/* Cart Icon (Bottom Right) with Image */}
         <div className="absolute bottom-16 right-2 bg-gray-200 p-2 rounded-full shadow-md">
            <img
              src="/cart.png" // Replace with the path to your cart image
              alt="Cart Icon"
              className="w-6 h-6" // Adjust size as needed
            />
          </div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 md:h-48 object-cover mb-3 rounded-lg"
          />
          <h3 className="text-md md:text-lg font-semibold mb-1">{product.name}</h3>
          <p className="text-sm md:text-base text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
  );
};



export default ProductGrid;

