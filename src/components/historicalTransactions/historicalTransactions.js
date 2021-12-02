import { Panel } from "../panel/panel";
import { TransactionItem } from './components/transactionItem/transactionItem';
import { Filter } from './components/filter/filter';
import "./historicalTransactions.css";

const transactions = [
  {
    name: "cervezas",
    amount: 100000,
    type: "expense"
  },
  {
    name: "trabajo",
    amount: 1000,
    type: "income"
  },
  {
    name: "empanadas",
    amount: 20000,
    type: "expense"
  }
];

const Indicator = () => {
  const val = 6;

  return (
    <div className="indicator">{val}</div>
  )
}

export const HistoricalTransactions = Panel(() => {
    return(
      <div className="historical-transactions">
        <Filter onInputChange={() => {}} onTypeChange={() => {}} />
        <div className='transactions'>
          {transactions.map((transaction) => (
            <TransactionItem {...transaction} />
          ))}
        </div>
      </div>
    );
}, "Listado de movimientos", Indicator);


