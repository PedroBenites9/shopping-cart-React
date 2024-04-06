import { useState, useId } from "react";
import "./filter.css";
export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
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
        />
        <span>${minPrice}</span>
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
