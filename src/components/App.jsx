import React, { useState } from "react";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue); //Saving the value of text input...
  }

  function handleClick() {
    setItems((prevItems) => [...prevItems, inputText]);
    setInputText(""); //Restoring text input
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem) => (
            <li>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
