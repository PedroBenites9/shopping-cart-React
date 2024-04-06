import { useState } from "react";
import "./App.css";
import products from "./Mocks/products.json";
import { Products } from "./Components/Products";
import { Header } from "./Components/Header";

function App() {
  const [productos] = useState(products.products);
  const [filter, setFilter] = useState({
    category: "all",
    minPrice: 0,
  });

  const productosFiltrados = (products) => {
    return products.filter((prod) => {
      return (
        prod.price >= filter.minPrice &&
        (filter.category === "all" || prod.category === filter.category)
      );
    });
  };

  const filtrado = productosFiltrados(productos);

  return (
    <>
      {/* filtrar por categoria y precio */}
      <Header />
      <Products products={filtrado} />
    </>
  );
}

export default App;
