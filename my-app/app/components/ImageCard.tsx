import React from "react";

const ImageCard: React.FC = () => {
  return (
    <div className="flex space-x-4 p-6">
      {/* Left side image */}
      <div className="flex-1">
        <img
          src="/img1.png"
          alt="Main Image"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right side grid */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        <img
          src="/product4.png"
          alt="Image 1"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <img
          src="/product1.png"
          alt="Image 2"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <img
          src="/product11.png"
          alt="Image 3"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <img
          src="/product1.png"
          alt="Image 4"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ImageCard;
