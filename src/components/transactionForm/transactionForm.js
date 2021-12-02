import { useState } from 'react';
import { Panel } from "../panel/panel";
import "./transactionForm.css";

export const TransactionForm = Panel(() => {
  const [type, setType] = useState("income");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const onChange = setterFunction =>(e) => {
    e.persist();
    setterFunction(e.target.value);
  }


  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="transaction-form">
      <form onSubmit={onSubmit}>
        <div className="input">
          <label htmlFor="type">Tipo de movimiento</label>
          <select name="type" value={type} onChange={onChange(setType)}>
            <option value="income" default>
              Ingreso
            </option>
            <option value="expense">Gasto</option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="Name">Nombre</label>
          <input type="text" name="Name" value={name} onChange={onChange(setName)}/>
        </div>
        <div className="input">
          <label htmlFor="Amount">Cantidad</label>
          <input type="number" name="Amount" min="0" value={amount} onChange={onChange(setAmount)}/>
        </div>

        <div className="buttons-container">
          <button>Cancelar</button>
          <button>Agregar Movimiento</button>
        </div>
      </form>
    </div>
  );
}, 'Registro');
