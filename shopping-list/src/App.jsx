import { useState } from "react";
import ShoppingList from "./components/ShoppingList";

export default function App () {
  const [addItems, setaAddItems] = useState('')
  const [addItemsBtn, setAddItemsBtn] = useState([])

  function handleItems (event) {
    setaAddItems(event.target.value)
  }

  function handleItemsBtn () {
    setAddItemsBtn((oldItems) => [...oldItems, addItems])
    
  }

  return(
    <div className="full-div">
      <h1>Shopping List</h1>
      <input type="text" placeholder="type st to add to the list" value={addItems}  onChange={handleItems} />
      <button onClick={handleItemsBtn}>Add to list</button>
      <ShoppingList items={addItemsBtn}  />
    </div>
  )
}