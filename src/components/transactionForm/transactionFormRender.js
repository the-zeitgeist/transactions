export const TransactionFormRender = ({
	onSubmit,
	onChange,
	onCancel,
	name,
	type,
	amount,
	setType,
	setName,
	setAmount,
	action
}) => {
	return (
		<div className="transaction-form">
			<form onSubmit={onSubmit}>
				<div className="input">
					<label htmlFor="type">Tipo de movimiento</label>
					<select name="type" value={type} onChange={onChange(setType)}>
						<option value="income" default>
							Ingreso
						</option>
						<option value="expense">Gasto</option>
					</select>
				</div>
				<div className="input">
					<label htmlFor="Name">Nombre</label>
					<input
						type="text"
						name="Name"
						value={name}
						onChange={onChange(setName)}
					/>
				</div>
				<div className="input">
					<label htmlFor="Amount">Cantidad</label>
					<input
						type="number"
						name="Amount"
						value={amount}
						onChange={onChange(setAmount)}
					/>
				</div>

				<div className="buttons-container">
					<button type="button" onClick={onCancel}>
						Cancelar
					</button>
					<button type="submit">{action}</button>
				</div>
			</form>
		</div>
	);
};