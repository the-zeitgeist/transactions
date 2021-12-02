import { TransactionForm } from "./components/transactionForm/transactionForm";
import { HistoricalTransactions } from "./components/historicalTransactions/historicalTransactions";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      {/* Banner */}
      <h1 style={{ color: "white" }}>Banner</h1>
      <div className="transaction-container">
        <TransactionForm formName="cool form" />
        <HistoricalTransactions />
        <div />
      </div>
    </div>
  );
}

export default App;
