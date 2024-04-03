import { createContext } from "react";

// 1.Crear el contexto
export const FilterContext = createContext();

// 2. Crear el Provider, para proveer el contexto
export function FiltersProvider({ Children }) {
    <FilterContext.Provider value={{
        category: "all",
        minPrice: 0
    }}>
        {Children}
    </FilterContext.Provider>
}