import { createContext, useState } from "react";

// 1.Crear el contexto
export const FilterContext = createContext();

// 2. Crear el Provider, para proveer el contexto
export function FiltersProvider({ children }) {
  const [prodCategory, setProdCategory] = useState({
    category: "all",
    minPrice: 0,
  });
  return (
    <FilterContext.Provider value={{ prodCategory, setProdCategory }}>
      {children}
    </FilterContext.Provider>
  );
}
