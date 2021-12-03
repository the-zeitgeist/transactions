import { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext({
	initialValue: [],
	amount: [],
	movements: [],
	editMovement: []
});

export const StoreProvider = ({ children }) => {
	const [initialValue, setInitialValue] = useState(2000);
	const [amount, setAmount] = useState(initialValue);
	const [editMovement, setEditMovement] = useState('');
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

	useEffect(() => {
		setAmount(() =>
			movements.reduce(
				(acc, v) => acc + (v.type === 'income' ? v.amount : -v.amount),
				initialValue
			)
		);
	}, [movements, amount, initialValue, editMovement]);

	const store = {
		initialValue: [initialValue, setInitialValue],
		amount: [amount, setAmount],
		movements: [movements, setMovements],
		editMovement: [editMovement, setEditMovement]
	};

	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};
