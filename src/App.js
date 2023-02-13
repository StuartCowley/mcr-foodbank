import { useState } from "react";
import "./styles/app.css";
import stock from "./data/stock-harpurhey.json";

import { addStockToSingleItem, removeStockFromSingleItem } from "./functions";

function App() {
  const [harpurheyStock, setHarpurheyStock] = useState(stock.items);

  const handleClick = (e) => {
    if (e.target.id === "decrement") {
      setHarpurheyStock(
        removeStockFromSingleItem(
          "Harpurhey",
          harpurheyStock,
          e.target.value,
          1
        )
      );
    } else {
      setHarpurheyStock(
        addStockToSingleItem("Harpurhey", harpurheyStock, e.target.value, 1)
      );
    }
  };

  return (
    <div className="app">
      <h1>Foodbank</h1>
      {harpurheyStock.map((item, index) => {
        return (
          <div className="app__stock-item" key={index}>
            <div>Product: {item.title}</div>
            <div>Current Stock: {item.stock.currentStock}</div>
            <div>Low stock threshold: {item.stock.redStockThreshold}</div>
            <button id="increment" value={item.title} onClick={handleClick}>
              +
            </button>
            <button id="decrement" value={item.title} onClick={handleClick}>
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
