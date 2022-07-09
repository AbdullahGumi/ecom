/* eslint-disable react/jsx-key */
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import toast from "react-hot-toast";

//redux
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cart/cartSlice";

const ItemCard = ({ product }: any) => {
  const dispatch = useDispatch<any>();

  const addItem = () => {
    dispatch(addItemToCart());
    toast.success("Item added to cart");
  };

  return (
    <div
      className="flex flex-col  w-52 justify-center hover:cursor-pointer"
      onClick={addItem}
    >
      <div>
        <AliceCarousel
          mouseTracking
          items={product.images.map((image: string | undefined) => (
            <img className="w-full bg-red-400 h-56 " src={image} alt="test" />
          ))}
          disableButtonsControls
          renderDotsItem={({ isActive }) =>
            product.images.length > 1 && (
              <div
                className={`${
                  isActive ? "bg-yellow-500" : "border"
                } w-3 h-3 rounded-full mx-[2px]`}
              />
            )
          }
        />
        <span className="uppercase ">{product.name}</span>
      </div>
      <span className="font-bold">{product.price} &#8362;</span>
    </div>
  );
};

export default ItemCard;
