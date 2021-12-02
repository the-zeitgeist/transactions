import './modalBase.css';

export const ModalBase = ({ title, message }) => (
	<div className="modalBase">
		<div className="title">{title}</div>
		<div className="content">{message}</div>
	</div>
);
