import { useState } from "react";
import "./App.css";
import products from "./Mocks/products.json";
import { Products } from "./Components/Products";
import { Header } from "./Components/Header";

function App() {
  const [leProductos] = useState(products.products);
  const [filters, setFilter] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (product) => {
    return product.filter((filterProdu) => {
      return (
        filterProdu.price >= filters.minPrice &&
        (filters.category === "all" ||
          filterProdu.category === filters.category)
      );
    });
  };

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
