import { useCart } from "../Hooks/useCart";
import { useFilters } from "../Hooks/useFilters";
import "./footer.css";

export function Footer() {
  // const { prodCategory } = useFilters();

  const { cart } = useCart();

  return (
    <footer className="footer">
      {/* {JSON.stringify(prodCategory, null, 2)} */}
      {JSON.stringify(cart, null, 2)}
    </footer>
  );
}
