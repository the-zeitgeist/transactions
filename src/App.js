import { TransactionForm } from "./components/transactionForm/transactionForm";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      {/* Banner */}
      <h1 style={{ color: "white" }}>Banner</h1>
      <div className="transaction-container">
        <TransactionForm formName="cool form" />
        {/* history panel */}
        <div />
      </div>
    </div>
  );
}

export default App;
