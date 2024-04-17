import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icon";
import { useId } from "react";
import "./cart.css";
import { CartContext } from "../context/cart";
import { useCart } from "../Hooks/useCart";

function CartItem({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
  removeToCart,
}) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <button onClick={removeToCart}>-</button>
        <small>{quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}
export function Cart() {
  const cartCheckBoxId = useId();

  const { cart, clearCart, addToCart, removeToCart } = useCart(CartContext);

  return (
    <>
      <label htmlFor={cartCheckBoxId} className="cart-button">
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
              removeToCart={() => removeToCart(product)}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
