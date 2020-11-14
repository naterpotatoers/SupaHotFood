import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleModal = () => {
    console.log(product.ingredients);
    setIsShowing(!isShowing);
  };

  return (
    <div className="box">
      <div>
        <Link to={`/product/${product.label}`}>
          <h5>
            <strong>{product.label}</strong>
          </h5>
        </Link>
        <button className="trigger btn" onClick={toggleModal}>
          Info
        </button>
      </div>
      <Link to={`/product/${product.label}`}>
        <img src={product.image} alt="" />
      </Link>
      <div className="modal">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <h3>hello worold</h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
