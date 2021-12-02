import { useContext, useState } from 'react';
import { StoreContext } from '../hooks/stateContext';
import { Panel } from "../panel/panel";
import { v4 as uuid } from 'uuid';
import "./transactionForm.css";

export const TransactionForm = Panel(() => {
  const [, setMovements] = useContext(StoreContext).movements;
  const [globalAmount] = useContext(StoreContext).amount;
  const [type, setType] = useState("income");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [err, setErr] = useState("");

  const onChange = setterFunction => (e) => {
    e.persist();
    setterFunction(e.target.value);
  }


  const onSubmit = (e) => {
    e.preventDefault();
    e.persist()

    if (Number.isNaN(amount) || amount <= 0) {
      setErr("Cantidad no válida");
      return
    }

    if (type === 'expense' && amount > globalAmount) {
      setErr("Fondos insuficientes");
      return;
    }
    console.log(type)

    setMovements((_movements) => [..._movements, { name, amount: Number(amount), type, id: uuid() }])
    onCancel();
  };

  const onCancel = () => {
    setName("");
    setAmount(0);
    setType("income");
  }

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
          <input type="text" name="Name" value={name} onChange={onChange(setName)} />
        </div>
        <div className="input">
          <label htmlFor="Amount">Cantidad</label>
          <input type="number" name="Amount" min="0" value={amount} onChange={onChange(setAmount)} />
        </div>

        <div className="buttons-container">
          <button type='button' onClick={onCancel}>Cancelar</button>
          <button type='submit'>Agregar Movimiento</button>
        </div>
      </form>
      {err && <div className="error">{err}</div>}
    </div>
  );
}, 'Registro');
