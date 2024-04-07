import { useId } from "react";
import "./filter.css";
import { useFilters } from "../Hooks/useFilters";
export function Filters() {
  // llamamos al los params del hook useFiltrers()
  const { prodCategory, setProdCategory } = useFilters();

  // const [minPrice, setMinPrice] = useState(0);  un useState que asignaba el valor de minimo de un producto, pero de forma local

  const minPriceId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setProdCategory((prevState) => ({
      // setMinPrice(event.target.value); en esta linea estaba sujeto a un useState local, el problema sucede que tenemos dos valores de minPrice, uno que lo
      // lo provee el filter.jsx y luego el de la linea 7. Creando asi dos valores iguales que apunta a lo mismo. En este caso asginamos que
      // el valor global sea el que indique el minPrice.
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setProdCategory((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceId}>Price</label>
        <input
          type="range"
          id={minPriceId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={prodCategory.minPrice}
        />
        <span>${prodCategory.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Notebook</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
