import { useState } from "react";
import "./App.css";
import products from "./Mocks/products.json";
import { Products } from "./Components/Products";
import { Header } from "./Components/Header";
import { useFilters } from "./Hooks/useFilters";

function App() {
  const [leProductos] = useState(products.products);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(leProductos);

  return (
    <>
      {/* filtrar por categoria y precio */}
      <Header />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
