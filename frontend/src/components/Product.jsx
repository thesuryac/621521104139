import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <h1>{product.productName}</h1>
      <p>{product.price}</p>
      <p>{product.rating}</p>
      <p>{product.discount}</p>
      <p>{product.availability}</p>
    </div>
  );
};

export default Product;
