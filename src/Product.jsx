import React from "react";
import { useState, setState } from "react";

export default function Product(props) {
  function add() {
    props.addToCart(props);
  }

  return (
    <div className="container" id="productTile">
      <div className="top">
        <div class="p-2 g-col-6">
          <img
            className="img-thumbnail"
            src={props.image}
            alt="picture_img"
            id="pic"
          ></img>
        </div>
        <div class="p-2 g-col-6">
          <h1 id="productTitle">{props.title}</h1>
        </div>
      </div>
      <div className="bottom">
        <p classname="info">{props.description}</p>
        <br></br>
        <div class="d-flex justify-content-around">
          <div class="p-2 g-col-6">
            <p id="price">{props.price}€</p>
          </div>
          <div class="p-2 g-col-6">
            <button
              className="btn btn-secondary"
              onClick={add}
              id="btnShoppinCart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart-plus"
                viewBox="0 0 16 16"
              >
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
