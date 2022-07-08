import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

const Filter = () => {
  const [color, setColor] = React.useState("");
  const [material, setMaterial] = React.useState("");
  const [size, setSize] = React.useState("");

  return (
    <div className="flex justify-end">
      <div className="flex flex-col justify-center sm:flex-row sm:justify-end w-full gap-4 sm:items-end">
        <FormControl className="w-full sm:w-44" variant="standard">
          <InputLabel id="color-select">color</InputLabel>
          <Select
            labelId="color-select"
            id="color-select"
            value={color}
            label="Color"
            onChange={(e) => setColor(e.target.value)}
          >
            <MenuItem value={"Golden"}>Golden</MenuItem>
            <MenuItem value={"Gray"}>Gray</MenuItem>
            <MenuItem value={"Blue"}>Blue</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="w-full sm:w-44" variant="standard">
          <InputLabel id="material-select">material</InputLabel>
          <Select
            labelId="material-select"
            id="material-select"
            value={material}
            label="Material"
            onChange={(e) => setMaterial(e.target.value)}
          >
            <MenuItem value={"Gold"}>Gold</MenuItem>
            <MenuItem value={"Iron"}>Iron</MenuItem>
            <MenuItem value={"Plastic"}>Plastic</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="w-full sm:w-44" variant="standard">
          <InputLabel id="size-select">size</InputLabel>
          <Select
            labelId="size-select"
            id="size-select"
            value={size}
            label="Size"
            onChange={(e) => setSize(e.target.value)}
          >
            <MenuItem value={"Small"}>Small</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Large"}>Large</MenuItem>
          </Select>
        </FormControl>
        <Button className="bg-black text-white hover:bg-black h-9 w-36">
          apply filter
        </Button>
      </div>
    </div>
  );
};

export default Filter;
