/* eslint-disable react/jsx-key */
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ItemCard = ({ image }: any) => {
  const images = [
    <img className="w-full bg-red-400 h-56 " src={image} alt="test" />,
    <img className="w-full h-56 " src={image} alt="test" />,
    <img className="w-full h-56 " src={image} alt="test" />,
    <img className="w-full h-56 " src={image} alt="test" />,
  ];
  return (
    <div className="flex flex-col  w-52 justify-center">
      <div>
        <AliceCarousel
          mouseTracking
          items={images}
          disableButtonsControls
          renderDotsItem={({ isActive }) =>
            images.length > 1 && (
              <div
                className={`${
                  isActive ? "bg-yellow-500" : "border"
                } w-3 h-3 rounded-full mx-[2px]`}
              />
            )
          }
        />
        <span className="uppercase ">7 branches menorah</span>
      </div>
      <span className="font-bold">0.00 &#8362;</span>
    </div>
  );
};

export default ItemCard;
