import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductsPage = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://safarivendors-backend.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  return (
    <div className="bg-[#bbbbbb] mb-2">
    <div className="flex justify-center items-center mb-10 mt-3">
    <input
      type="text"
      placeholder="search for Products"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="align-center mt-3 rounded-lg h-10 w-80 p-2 text-black"
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-5cols-5 gap-8 pl-20 pr-20">
      {filteredProducts.map((product) => (
      <ProductCard
      key={product.id}
      product={product}
      handleAddToCart={handleAddToCart}
      />
      ))}
      </div>
    </div>
  );
};

export default ProductsPage;