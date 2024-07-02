import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Products = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((product, ind) => (
          <li key={`${product.productName}${ind}`}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
