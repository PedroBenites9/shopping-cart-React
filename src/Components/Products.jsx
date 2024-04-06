import "./Products.css";
import { AddToCartIcon } from "./Icon";

export function Products({ products }) {
  products.map((e) => console.log(e));
  return (
    // limita la muestra hasta 10 productos
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h3>
                <strong>{product.title}</strong> - ${product.price}
              </h3>
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
