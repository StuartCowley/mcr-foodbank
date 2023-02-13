import availableCentres from "./data/centres.json";

// Returns the complete updated stock list after adding quantity to item
export const addStockToSingleItem = (centre, stockList, itemName, quantity) => {
  // Input validation
  if (!Number.isInteger(quantity) || quantity < 1) {
    throw new Error("Quantity to add to stock must be a positive integer");
  }

  if (!availableCentres.centres.includes(centre)) {
    throw new Error("Provided centre not valid");
  }

  if (!Array.isArray(stockList)) {
    throw new Error("Provided stocklist is not an array");
  }

  const foundItem = stockList.find((product) => product.title === itemName);
  if (!foundItem) {
    throw new Error("Product not found in stock list");
  }

  const updatedProductIndex = stockList.findIndex((product) => product.title === itemName);
  foundItem.stock.currentStock = foundItem.stock.currentStock + quantity;
  stockList.splice(updatedProductIndex, 1, foundItem);

  // React sees stockList as a reference to the original array so does not register a change
  // has occurred. Using slice() creates a new reference so the re-render will now take place
  return stockList.slice();
};

// Returns the complete updated stock list after removing quantity from item
export const removeStockFromSingleItem = (centre, stockList, itemName, quantity) => {
  // Imput validation
  if (!Number.isInteger(quantity) || quantity < 1) {
    throw new Error("Quantity to remove from stock must be a positive integer");
  }

  if (!availableCentres.centres.includes(centre)) {
    throw new Error("Provided centre not valid");
  }

  if (!Array.isArray(stockList)) {
    throw new Error("Provided stocklist is not an array");
  }

  const foundItem = stockList.find((product) => product.title === itemName);
  if (!foundItem) {
    throw new Error("Product not found in stock list");
  }

  const updatedProductIndex = stockList.findIndex((product) => product.title === itemName);
  foundItem.stock.currentStock = foundItem.stock.currentStock - quantity;
  stockList.splice(updatedProductIndex, 1, foundItem);

  // React sees stockList as a reference to the original array so does not register a change
  // has occurred. Using slice() creates a new reference so the re-render will now take place
  return stockList.slice();
};
