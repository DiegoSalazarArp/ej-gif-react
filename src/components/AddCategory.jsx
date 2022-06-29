import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  // hook
  const [inputValue, setInputValue] = useState("");

  // funcion onChange para tomar el value del evento
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // funcion del submit para agregar nuevo inputValue en categorias
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar GIF"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
