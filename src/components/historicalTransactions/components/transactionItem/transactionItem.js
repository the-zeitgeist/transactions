import { Badge } from '../badge/badge';
import { FaWindowClose, FaPen } from 'react-icons/fa';
import './transactionItem.css';

export const TransactionItem = ({ name, amount, type, onChange, onDelete }) => (
	<div className="transaction-item">
		<div className="buttons">
			<button onClick={onDelete}><FaWindowClose /></button>
			<button onClick={onChange}><FaPen /></button>
		</div>
		<div className="name">{name}</div>
		<Badge amount={amount} type={type} />
	</div>
);
