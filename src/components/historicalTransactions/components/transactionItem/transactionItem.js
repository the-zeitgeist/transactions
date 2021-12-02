import { Badge } from "../badge/badge";
import "./transactionItem.css";

export const TransactionItem = ({ name, amount, type, onChange, onDelete }) => (
  <div className="transaction-item">
    <div className="buttons">
      <button onClick={onDelete}>X</button>
      <button onClick={onChange}>O</button>
    </div>
    <div className="name">{name}</div>
    <Badge amount={amount} type={type} />
  </div>
);
