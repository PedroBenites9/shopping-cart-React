// la finalidad de este fichero es que le vamos a asignar los valores que deseamos pero de forma encapsulada, haciendo que en el componente de
// Filters solo se asigne los datos a leer pero no visualizar la estructura de lectura.
// para este ejemplo lo que hacemos es utilizar useContext, le diremos que los datos que se va a manipular en encapsula hasta el index.jsx
// una vez que finalicemos esta estructura, iremos a la raiz de nuestro componente y le asignaremos quienes pueden recibir estos valores

import { createContext, useState } from "react";

// 1.Crear el contexto
export const FilterContext = createContext();

// 2. Crear el Provider, para proveer el contexto
export function FiltersProvider({ children }) {
  const [prodCategory, setProdCategory] = useState({
    category: "all",
    minPrice: 0,
  });
  //aqui asignamos quienes van a adquirir los datos que se van asginando, elegimos a los componentes que esten dentro del provider (hijos)
  return (
    <FilterContext.Provider value={{ prodCategory, setProdCategory }}>
      {children}
    </FilterContext.Provider>
  );
}
