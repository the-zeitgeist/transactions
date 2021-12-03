import { useCallback, useContext, useEffect, useState } from 'react';
import { StoreContext } from '../hooks/stateContext';
import { useModal } from '../modal/modal';
import { SuccessModal } from '../modal/modals/successModal';
import { ErrorModal } from '../modal/modals/errorModal';
import { Panel } from '../panel/panel';
import { v4 as uuid } from 'uuid';
import { TransactionFormRender } from './transactionFormRender';
import { EditModal } from '../modal/modals/editModal';
import './transactionForm.css';

export const TransactionForm = Panel(({ close }) => {
	const [movements, setMovements] = useContext(StoreContext).movements;
	const [editMovement, setEditMovement] = useContext(StoreContext).editMovement;
	const [globalAmount] = useContext(StoreContext).amount;
	const [openSuccess, ModalSuccess] = useModal(() => (
		<SuccessModal message="Movimiento agregado exitosamente" />
	));
	const [openError, ModalError] = useModal(({ err }) => (
		<ErrorModal message={err} />
	));
	const [openEdit, ModalEdit, closeEdit] = useModal(EditModal);

	const [type, setType] = useState('income');
	const [name, setName] = useState('');
	const [amount, setAmount] = useState(0);
	const [err, setErr] = useState('');

	const onChange = (setterFunction) => (e) => {
		e.persist();
		console.log('change', e.target.name, e.target.value);
		setterFunction(e.target.value);
	};

	const onCancel = useCallback(() => {
		closeEdit()

		setName('');
		setAmount(0);
		setType('income');
		setEditMovement('');
	}, [closeEdit, setEditMovement]);

	useEffect(() => {
		if (!editMovement) {
			return
		}

		openEdit();
	}, [editMovement, movements, onCancel, openEdit]);

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

		setMovements((_movements) => [
			..._movements,
			{ name, amount: Number(amount), type, id: uuid() }
		]);

		openSuccess();
		onCancel();
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
				action='Agregar Movimiento'
			/>
			<ModalSuccess />
			<ModalError err={err} />
			<ModalEdit
				onSubmit={onSubmit}
				onChange={onChange}
				name={name}
				type={type}
				amount={amount}
				onCancel={onCancel}
				setName={setName}
				setType={setType}
				setAmount={setAmount}
				onUpdate={closeEdit}
			/>
			{err && <div className="error">{err}</div>}
		</div>
	);
}, 'Registro');
