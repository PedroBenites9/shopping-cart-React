import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icon";
import { useId } from "react";
import "./cart.css";
export function Cart() {
  const cartCheckBoxId = useId();

  return (
    <>
      <label htmlFor={cartCheckBoxId} className="cart-button">
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
              alt="Iphone"
            />
            <div>
              <strong>iPhone</strong> - $1450
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <RemoveFromCartIcon />
        </button>
      </aside>
    </>
  );
}
