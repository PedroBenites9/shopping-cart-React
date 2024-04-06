import { useContext } from "react";
import { FilterContext } from "../context/filter";

//hook useFilters()
export function useFilters() {
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
