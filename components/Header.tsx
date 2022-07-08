import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import LeftPane from "./LeftPane";

const Header = () => {
  const [values, setValues] = React.useState(["English", "Hebrew", "French"]);
  const [selected, setSelected] = useState("English");

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
        <FormControl className="border-none">
          <Select
            className="border-none"
            value={selected}
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
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
