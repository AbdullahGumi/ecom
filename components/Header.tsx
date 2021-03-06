import React, { useState } from "react";

//mui
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LeftPane from "./LeftPane";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

//redux
import { cartSelector } from "../redux/cart/cartSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [values, _] = React.useState(["English", "Hebrew", "French"]);
  const [selected, setSelected] = useState("English");
  const { itemsInCart } = useSelector(cartSelector);

  function handleChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setSelected(event.target.value);
  }
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <LeftPane />
        <input
          placeholder="Search products"
          className="border border-[#eee] rounded-full p-1 px-2"
        />
      </div>
      <div className="flex gap-2 items-center">
        <FormControl className="w-24 hidden sm:block " variant="standard">
          <Select
            className="border-none"
            value={selected}
            disableUnderline
            IconComponent={KeyboardArrowDownIcon}
            onChange={handleChange}
          >
            {values.map((value, index) => {
              return (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <PermIdentityOutlinedIcon className="hover:cursor-pointer" />
        <div className="relative">
          <ShoppingCartOutlinedIcon className="hover:cursor-pointer" />
          <span className="flex items-center justify-center bg-black absolute rounded-full text-white w-4 h-4 text-xs  -top-1 -right-1">
            {itemsInCart}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
