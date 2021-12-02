import { createContext, useEffect, useState } from "react";

const initialValue = 10_000;

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [amount, setAmount] = useState(initialValue);
  const [movements, setMovements] = useState([
    {
      id: 's1dfs',
      name: 'Cervezas',
      type: 'expense',
      amount: 1_000
    },
    {
      id: '44fdss',
      name: 'Freelance',
      type: 'income',
      amount: 500
    }
  ]);

  useEffect(() => {
    setAmount(() => movements.reduce((acc, v) => acc + (v.type === 'income' ? v.amount : -v.amount), initialValue));
    console.log(movements);
    console.log(amount);
  }, [movements, amount]);

  const store = {
    amount: [amount, setAmount],
    movements: [movements, setMovements]
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}


