import { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext({
	initialValue: [],
	amount: [],
	movements: [],
	editMovement: [],
});

export const StoreProvider = ({ children }) => {
	const [initialValue, setInitialValue] = useState(0);
	const [amount, setAmount] = useState(initialValue);
	const [movements, setMovements] = useState([
		{
			id: 's1dfs',
			name: 'Cervezas',
			type: 'expense',
			amount: 1_000,
		},
		{
			id: '44fdss',
			name: 'Freelance',
			type: 'income',
			amount: 500,
		},
	]);
	const [editMovement, setEditMovement] = useState('');

	useEffect(() => {
		setAmount(() =>
			movements.reduce(
				(acc, v) => acc + (v.type === 'income' ? v.amount : -v.amount),
				initialValue
			)
		);
		console.log(movements);
		console.log(amount);
	}, [movements, amount, initialValue, editMovement]);

	const store = {
		initialValue: [initialValue, setInitialValue],
		amount: [amount, setAmount],
		movements: [movements, setMovements],
		editMovement: [editMovement, setEditMovement],
	};

	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};
