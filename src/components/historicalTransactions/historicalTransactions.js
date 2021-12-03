import { useContext, useState } from 'react';
import { Panel } from '../panel/panel';
import { TransactionItem } from './components/transactionItem/transactionItem';
import { Filter } from './components/filter/filter';
import { StoreContext } from '../hooks/stateContext';
import './historicalTransactions.css';

const Indicator = () => {
	const [movements] = useContext(StoreContext).movements;

	return <div className="indicator">{movements.length}</div>;
};

export const HistoricalTransactions = Panel(
	() => {
		const [transactions, setTransactions] = useContext(StoreContext).movements;
		const [, setEditMovement] = useContext(StoreContext).editMovement;
		const [word, setWord] = useState('');
		const [type, setType] = useState('all');

		const onDelete = (transaction) =>
			setTransactions((_transactions) =>
				_transactions.filter(
					(_transaction) => _transaction.id !== transaction.id
				)
			);

		const onChange = (transaction) => {
			setEditMovement(transaction.id);
		};

		return (
			<div className="historical-transactions">
				<Filter
					onInputChange={(w) => setWord(w)}
					onTypeChange={(t) => setType(t)}
				/>
				<div className="transactions">
					{transactions
						.filter((t) => {
							if (type === 'all') return t;
							return t.type === type;
						})
						.filter((t) => {
							if (!word) return t;
							return t.name.toLowerCase().includes(word.toLowerCase());
						})
						.map((transaction, i) => (
							<TransactionItem
								key={i}
								{...transaction}
								onDelete={() => onDelete(transaction)}
								onChange={() => onChange(transaction)}
							/>
						))}
				</div>
			</div>
		);
	},
	'Listado de movimientos',
	Indicator
);
