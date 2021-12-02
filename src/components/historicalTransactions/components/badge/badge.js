import './badge.css';

export const Badge = ({ amount, type }) => (
	<div className={`badge ${type === 'income' ? 'income' : 'expense'}`}>
		{amount.toLocaleString()}
	</div>
);
