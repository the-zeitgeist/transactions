import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../hooks/stateContext';
import { TransactionFormRender } from '../../transactionForm/transactionFormRender';

export const EditModal = ({ onUpdate }) => {
  const [movements, setMovements] = useContext(StoreContext).movements;
  const [editMovement, setEditMovement] = useContext(StoreContext).editMovement;
  const [globalAmount] = useContext(StoreContext).amount;

  const [type, setType] = useState('income');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [err, setErr] = useState('');

  const onChange = (setterFunction) => (e) => {
    e.persist();
    console.log('change', e.target.name, e.target.value);
    setterFunction(e.target.value);
  };

  useEffect(() => {
    if (!editMovement) {
      return;
    }

    const editableTransaction = movements.find((m) => editMovement === m.id)

    setName(editableTransaction.name);
    setType(editableTransaction.type);
    setAmount(editableTransaction.amount);
  }, [editMovement, movements]);

  const onSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setErr('');

    if (!name.length) {
      setErr('Nombre vacío');
      return;
    }

    if (Number.isNaN(amount) || amount <= 0) {
      setErr('Cantidad no válida');
      return;
    }

    if (type === 'expense' && (editMovement && amount > globalAmount + movements.find((m) => m.id === editMovement).amount)) {
      setErr('Fondos insuficientes');
      return;
    }

    setMovements((_movements) => [...movements].map((m) => {
      if (editMovement === m.id) {
        m.name = name;
        m.type = type;
        m.amount = Number(amount);
      }
      return m;
    }));


    setEditMovement('');
    onCancel();
  };

  const onCancel = () => {
    setName('');
    setAmount(0);
    setType('income');
    setEditMovement('');
    onUpdate();
  };

  return (
    <div className="transaction-form">
      <TransactionFormRender
        onSubmit={onSubmit}
        onChange={onChange}
        name={name}
        type={type}
        amount={amount}
        onCancel={onCancel}
        setName={setName}
        setType={setType}
        setAmount={setAmount}
        action='Modificar'
      />
      {err && <div className="error">{err}</div>}
    </div>
  );
};
