import { useState } from "react";
import './filter.css';

export const Filter = ({ onInputChange, onTypeChange }) => {
  const [type, setType] = useState("all");
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    onInputChange(e.target.value);
  };

  const onRadioChange = (e) => {
    setType(e.target.value);
    onTypeChange(e.target.value);
  };

  return (
    <div className="filter">
      <input
        value={search}
        type="text"
        placeholder="Buscar..."
        onChange={onSearchChange}
      />
      <div className="type" value={type} onChange={onRadioChange}>
        <label>
          <input type="radio" name="type" value="all" defaultChecked />
          Todo
        </label>
        <label>
          <input type="radio" name="type" value="income" />
          Ingresos
        </label>
        <label>
          <input type="radio" name="type" value="expense" />
          Gastos
        </label>
      </div>
    </div>
  );
};
