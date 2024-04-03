import { useState } from "react";
import "./App.css";
import products from "./Mocks/products.json";
import { Products } from "./Components/Products";
import { Header } from "./Components/Header";

//hook useFilters()
function useFilters() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  // obtenemos los valores y comparamos con los parametros que le damos, para luego mostrarlo desde el header
  const filterProducts = (product) => {
    return product.filter((filterProdu) => {
      return (
        filterProdu.price >= filters.minPrice &&
        (filters.category === "all" ||
          filterProdu.category === filters.category)
      );
    });
  };
  return { filterProducts, setFilters };
}

function App() {
  const [leProductos] = useState(products.products);
  const { filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(leProductos);

  return (
    <>
      {/* filtrar por categoria y precio */}
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
