import { useState } from "react";
import Child from "./child";


function Parent() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, "Item " + (items.length + 1)]);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={addItem}>Add Item</button>

      <Child items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default Parent;