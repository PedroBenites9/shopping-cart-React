import { useContext, useState } from "react";
import "./App.css";
import products from "./Mocks/products.json";
import { Products } from "./Components/Products";
import { Header } from "./Components/Header";
import { FilterContext } from "./context/filter";

//hook useFilters()
function useFilters() {
  //llamamos al provider mediante destructuracion
  const { prodCategory, setProdCategory } = useContext(FilterContext);
  console.log(prodCategory.minPrice);
  // obtenemos los valores y comparamos con los parametros que le damos, para luego mostrarlo desde el header
  const filterProducts = (product) => {
    return product.filter((filterProdu) => {
      return (
        filterProdu.price >= prodCategory.minPrice &&
        (prodCategory.category === "all" ||
          filterProdu.category === prodCategory.category)
      );
    });
  };
  return { filterProducts, setProdCategory };
}

function App() {
  const [leProductos] = useState(products.products);
  const { filterProducts, setProdCategory } = useFilters();
  const filteredProducts = filterProducts(leProductos);

  return (
    <>
      {/* filtrar por categoria y precio */}
      <Header changeFilters={setProdCategory} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
