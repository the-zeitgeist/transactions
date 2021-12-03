import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../hooks/stateContext';
import { useModal } from '../modal/modal';
import { SuccessModal } from '../modal/modals/successModal';
import { ErrorModal } from '../modal/modals/errorModal';
import { Panel } from '../panel/panel';
import { v4 as uuid } from 'uuid';
import './transactionForm.css';
import TransactionFormRender from './transactionFormRender';

export const TransactionForm = Panel(() => {
	const [movements, setMovements] = useContext(StoreContext).movements;
	const [editMovement, setEditMovement] = useContext(StoreContext).editMovement;
	const [globalAmount] = useContext(StoreContext).amount;
	const [openSuccess, ModalSuccess] = useModal(() => (
		<SuccessModal message="Movimiento agregado exitosamente" />
	));
	const [openError, ModalError] = useModal(({ err }) => (
		<ErrorModal message={err} />
	));
	const [type, setType] = useState('income');
	const [name, setName] = useState('');
	const [amount, setAmount] = useState(0);
	const [err, setErr] = useState('');

	const onChange = (setterFunction) => (e) => {
		e.persist();
		setterFunction(e.target.value);
	};

	useEffect(() => {
		if (editMovement !== '') {
			movements.map((m) => {
				if (editMovement === m.id) {
					setName(m.name);
					setType(m.type);
					setAmount(m.amount);
				}
			});
		}
	}, [editMovement]);

	const onSubmit = (e) => {
		e.preventDefault();
		e.persist();
		setErr('');

		if (!name.length) {
			setErr('Nombre vacío');
			openError();
			return;
		}

		if (Number.isNaN(amount) || amount <= 0) {
			setErr('Cantidad no válida');
			openError();
			return;
		}

		if (type === 'expense' && amount > globalAmount) {
			setErr('Fondos insuficientes');
			openError();
			return;
		}
		console.log(type);

		if (editMovement === '') {
			setMovements((_movements) => [
				..._movements,
				{ name, amount: Number(amount), type, id: uuid() },
			]);
			openSuccess();
			onCancel();
		} else {
			console.log('entro');
			movements.map((m) => {
				if (editMovement === m.id) {
					m.name = name;
					m.type = type;
					m.amount = Number(amount);
				}
			});
			setEditMovement('');
			openSuccess();
			onCancel();
		}
	};

	const onCancel = () => {
		setName('');
		setAmount(0);
		setType('income');
		setEditMovement('');
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
			/>
			<ModalSuccess />
			<ModalError err={err} />
			{err && <div className="error">{err}</div>}
		</div>
	);
}, 'Registro');
