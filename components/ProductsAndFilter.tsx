import React from "react";
import Filter from "./Filter";
import ItemCard from "./ItemCard";

const ProductsAndFilter = () => {
  return (
    <div className=" sm:w-[80%] sm:mx-auto mt-10 ">
      <Filter />
      <hr className="my-10" />
      <div className="flex flex-col  sm:flex-row  justify-center sm:justify-start gap-14 items-center sm:flex-wrap p-1">
        <ItemCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPSPkR6wgrYBqaI12yefw9lYRS_NV_pE3Eg&usqp=CAU"
          }
        />
        <ItemCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQSgpyBEzSfLj7pK_XTfPiudaDN-1PqPJKA&usqp=CAU  "
          }
        />
        <ItemCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvw5z86_sx_65Bx4SrQZcuVYqUXAZMjgG8w&usqp=CAU"
          }
        />
        <ItemCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xCdz-5YDSAWpHs70Pf5b2jepQmpNDWzn7w&usqp=CAU"
          }
        />
        <ItemCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJJnEkvldJIPn2E44f2evGbL_gRLeNAU8XQ&usqp=CAU"
          }
        />
        <ItemCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexI5VSjRZ7SDkHBk_iZ5dOszvkYoGrv9nnQ&usqp=CAU"
          }
        />
        <ItemCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIfpyINrBCksTcmtgTqhnqTx8hRb0Ux9z8A&usqp=CAU"
          }
        />
        <ItemCard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzIOPNTizncbV9Ei40ll8pc5VhO_FMcYlBQ&usqp=CAU"
          }
        />
      </div>
    </div>
  );
};

export default ProductsAndFilter;
