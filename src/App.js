import { useState } from "react";
import "./styles/app.css";
import stock from "./data/stock-harpurhey.json";

function App() {
  const [harpurheyStock, setHarpurheyStock] = useState(stock.items);

  const handleClick = (e) => {
    const foundItem = harpurheyStock.find(item => {
      return item.title === e.target.value
    })

    if (e.target.id === "decrement") {
      foundItem.stock.currentStock = foundItem.stock.currentStock - 1
    } else {
      foundItem.stock.currentStock = foundItem.stock.currentStock + 1
    }
    setHarpurheyStock(prev => [...prev])
  };

  return (
    <div className="app">
      <h1>Foodbank</h1>
      {harpurheyStock.map((item, index) => {
        return (
          <div className="app__stock-item" key={index}>
            <div>Product: {item.title}</div>
            <div>Current Stock: {item.stock.currentStock}</div>
            <div>Low stock threshold: {item.stock.lowStockThreshold}</div>
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
