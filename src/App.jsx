import { useState } from "react";
import "./App.css";
import products from "./Mocks/products.json";
import { IS_DEVELOPMENT } from "./config.js";
import { Products } from "./Components/Products";
import { Header } from "./Components/Header";
import { useFilters } from "./Hooks/useFilters";
import { Cart } from "./Components/Cart";
import { CartProvider } from "./context/cart";
import { Footer } from "./Components/Footer";

function App() {
  const [leProductos] = useState(products.products);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(leProductos);

  return (
    <CartProvider>
      {/* filtrar por categoria y precio */}
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
