import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomExpence from "./components/incomeExpences";
import Transation from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomExpence />
        <Transation />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
