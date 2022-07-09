import React, { useEffect, useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  productsSelector,
} from "../redux/products/productsSlice";

//components
import Filter from "./Filter";
import ItemCard from "./ItemCard";

const ProductsAndFilter = () => {
  const [filtered, setFiltered] = useState([]);
  const dispatch = useDispatch<any>();
  const { products, filteredProducts } = useSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFiltered(filteredProducts);
  }, [filteredProducts]);

  return (
    <div className=" sm:w-[80%] sm:mx-auto mt-10 ">
      <Filter />
      <hr className="my-10" />
      <div className="flex flex-col  sm:flex-row  justify-center sm:justify-start gap-14 items-center sm:flex-wrap p-1">
        {filtered.length > 0
          ? filtered.map((product: any, i: any) => (
              <ItemCard key={i} product={product} />
            ))
          : products.length > 0 &&
            products.map((product: any, i: any) => (
              <ItemCard key={i} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductsAndFilter;
