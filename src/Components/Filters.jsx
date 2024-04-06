<<<<<<< HEAD
import { useState } from "react";
import "./filters.css";

export function Filters() {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor="category">Price</label>
        <input
          type="range"
          id="price"
=======
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
>>>>>>> pc
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
<<<<<<< HEAD
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categorias</label>
        <select name="" id="category">
          <option value="all">Todas</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Celulares</option>{" "}
=======
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Notebook</option>
          <option value="smartphones">Celulares</option>
>>>>>>> pc
        </select>
      </div>
    </section>
  );
}
