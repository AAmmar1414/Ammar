import React from "react";

interface IconProps {
  id: number;
  src: string;
  alt: string;
}

const icons: IconProps[] = [
  { id: 1, src: "/icon1.png", alt: "Icon 1" },
  { id: 2, src: "/icon2.png", alt: "Icon 2" },
  { id: 3, src: "/icon3.png", alt: "Icon 3" },
  { id: 4, src: "/icon4.png", alt: "Icon 4" },
  { id: 5, src: "/icon5.png", alt: "Icon 5" },
  { id: 6, src: "/icon6.png", alt: "Icon 6" },
  { id: 7, src: "/icon7.png", alt: "Icon 7" },
];

const IconRow: React.FC = () => {
  return (
    <div
      className="flex justify-between items-center w-[1321px] h-[139px] absolute top-[1107px] left-[300px] opacity-0"
    >
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="flex items-center justify-center w-20 h-20"
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default IconRow;
