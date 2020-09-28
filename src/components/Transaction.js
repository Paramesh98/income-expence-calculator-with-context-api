import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ item }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = item.amount > 0 ? "+" : "-";
  return (
    <li key={item.id} className={item.amount < 0 ? "minus" : "plus"}>
      {item.text}{" "}
      <span>
        {sign} Rs. {Math.abs(item.amount)}
      </span>
      <button onClick={() => deleteTransaction(item.id)} className="delete-btn">
        x
      </button>
    </li>
  );
}
