import { TransactionForm } from "./components/transactionForm/transactionForm";
import { HistoricalTransactions } from "./components/historicalTransactions/historicalTransactions";
import { StoreProvider } from "./components/hooks/stateContext";
import "./App.css";

function App() {
  return (
    <StoreProvider>
      <div className="main-container">
        {/* Banner */}
        <h1 style={{ color: "white" }}>Banner</h1>
        <div className="transaction-container">
          <TransactionForm />
          <HistoricalTransactions />
          <div />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
