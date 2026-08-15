function Child({ items, deleteItem }) {
  return (
    <div>
      <h3>Child Component</h3>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Child;