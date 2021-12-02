import { useState } from 'react';
import Modal from 'react-modal';

const modalStyle = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',op: 50
	}
};

export const useModal = (Component) => {
	const [isOpen, setIsOpen] = useState(false);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	return [
		open,
		(props) => (
			<Modal
				isOpen={isOpen}
				onRequestClose={close}
				style={modalStyle}
			>
				<Component {...props} open={open} close={close} />
			</Modal>
		)
	];
};
