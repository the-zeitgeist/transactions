import { useContext } from 'react';
import { StoreContext } from '../hooks/stateContext';
import './initialValue.css';

export const InitialValue = ({ close }) => {
	const [initialValue, setInitialValue] = useContext(StoreContext).initialValue;

	const onSubmit = (e) => {
		e.preventDefault();

		if (Number.isNaN(initialValue) || initialValue < 0) {
			return;
		}

		close();
	};

	return (
		<form onSubmit={onSubmit} className="initial-value-form">
			<div className="initial-value-input">
				<label htmlFor="initialValue">Valor inicial</label>
				<input
					name="initialValue"
					type="number"
					value={initialValue}
					onChange={(e) => setInitialValue(Number(e.target.value))}
				/>
			</div>
			<div>
				<button>Aceptar</button>{' '}
			</div>
		</form>
	);
};
