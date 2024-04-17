import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icon";
import { useCart } from "../Hooks/useCart";

export function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductinCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    // limita la muestra hasta 10 productos
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductinCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>
                  <strong>{product.title}</strong> - ${product.price}
                </h3>
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? "red" : "#09f" }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
