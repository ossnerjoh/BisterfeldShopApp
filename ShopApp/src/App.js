import "./styles.css";
import products from "./dummyData";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import { useState, setState } from "react";

export default function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [filter, setFilter] = useState("");

  function showCart(show) {
    setShowShoppingCart(show);
  }

  let changeFilter = (filter) => {
    setFilter(filter);
  };

  let addToCart = (element) => {
    //this.setState({ shoppingCart: [...this.state.shoppingCart, element] });
    shoppingCart.push(element);
  };

  let removeFromCart = (element) => {
    shoppingCart.splice(shoppingCart.indexOf(2), 1);
  };

  let newMap = (callback) => {
    if (filter) {
      return products
        .filter(
          (x) => x.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        )
        .map(callback);
    } else {
      return products.map(callback);
    }
  };

  return (
    <div className="App card" id="app">
      <div className="container-fluid" id="title">
        ProjectStoreApp
      </div>
      <div classname="container">
        <btngroup id="btngroup">
          <button
            class="btn btn-secondary"
            type="button"
            id="btnProdukte"
            onClick={() => showCart(false)}
          >
            Produkte
          </button>
          <button
            class="btn btn-secondary"
            type="button"
            id="btnWarenkorb"
            onClick={() => showCart(true)}
          >
            Warenkorb
          </button>
        </btngroup>
      </div>
      <div className="container" id="filterInput">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Filtere die Produkte nach dem Titel"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(event) => changeFilter(event.target.value)}
          ></input>
        </div>
      </div>
      <div>
        {showShoppingCart
          ? shoppingCart.map(function (product) {
              return (
                <ShoppingCart
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  removeFromCart={removeFromCart}
                />
              );
            })
          : newMap(function (product) {
              return (
                <Product
                  title={product.title}
                  image={product.image}
                  description={product.description}
                  price={product.price}
                  addToCart={addToCart}
                />
              );
            })}
      </div>
    </div>
  );
}
