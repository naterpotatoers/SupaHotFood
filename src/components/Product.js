import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="box">
      <div>
        <Link to={`/product/${product.label}`}>
          <h5>
            <strong>{product.label}</strong>
          </h5>
        </Link>
      </div>
      <Link to={`/product/${product.label}`}>
        <img src={product.image} alt="" />
      </Link>
      {/* <div>
        <a href={product.url}>Direct Link</a>
      </div> */}
    </div>
  );
};

export default Product;
