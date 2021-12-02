import { TransactionForm } from "./components/transactionForm/transactionForm";
import { HistoricalTransactions } from "./components/historicalTransactions/historicalTransactions";
import { StoreProvider } from "./components/hooks/stateContext";
import Banner from './components/banner/Banner';
import "./App.css";

const App = () => (
  <StoreProvider>
    <div className="main-container">
      <Banner />
      <div className="transaction-container">
        <TransactionForm />
        <HistoricalTransactions />
        <div />
      </div>
    </div>
  </StoreProvider>
);


export default App;
