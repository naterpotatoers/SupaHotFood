import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const Product = ({ product }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="box">
      <div>
        <Link to="" onClick={handleShow}>
          <h5>
            <strong>{product.label}</strong>
          </h5>
        </Link>
      </div>
      <Link to="" onClick={handleShow}>
        <img src={product.image} alt="" />
      </Link>

      <Modal className="Modal wrapper" show={show} onHide={handleClose}>
        <div className="flex-modal">
          <div className="box">
            <div className="modal-header">
              <strong>{product.label}</strong>
            </div>
            <img src={product.image} alt="" />
          </div>
          <div className="box">
            <button className="btn btn-modal">
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                Recipe Link
              </a>
            </button>
            <button className="btn" onClick={handleClose}>
              Close
            </button>
          </div>
          <div className="flex-container">
            <div className="box">
              <h3>Ingredients</h3>
              <ul>
                {product.ingredientLines.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>

              <h3>Additional Info</h3>
              <ul>
                {product.healthLabels.map((labels) => (
                  <li>{labels}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Product;
