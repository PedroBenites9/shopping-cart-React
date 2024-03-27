import { useState } from "react";
import "./App.css";
import { products as initialProducts } from "./Mocks/products.json";
import { Products } from "./Components/Products";

function App() {
  const [products] = useState(initialProducts);

  return (
    <>
      {/* filtrar por categoria y precio */}
      <Products products={products} />
    </>
  );
}

export default App;
