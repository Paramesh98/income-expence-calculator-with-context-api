import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transaction } = useContext(GlobalContext);

  const amounts = transaction.map((item) => item.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">Rs. {total} </h1>
    </>
  );
}
