import { useEffect } from 'react';
import { TransactionForm } from './components/transactionForm/transactionForm';
import { HistoricalTransactions } from './components/historicalTransactions/historicalTransactions';
import { Banner } from './components/banner/banner';
import { useModal } from './components/modal/modal';
import { InitialValue } from './components/initialValue/initialValue';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

const App = function () {
	const [open, InitialValueModal] = useModal(InitialValue);

	useEffect(() => {
		open();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="main-container">
			<Banner />
			<div className="transaction-container">
				<TransactionForm />
				<HistoricalTransactions />
				<div />
			</div>
			<InitialValueModal />
		</div>
	);
};

export default App;
