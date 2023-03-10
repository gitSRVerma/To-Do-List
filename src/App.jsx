import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  // const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  // function handleChange(event) {
  //   const newValue = event.target.value;
  //   setInputText(newValue);
  // }

  // function addItem() {      // it passes over the inputText that it could add to all of the previous items in our items array..
  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    // setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea 
      onAdd={addItem}
      />
      {/* <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div> */}

          

      <div>
        {/* <ul>
        {items.map(todoItem => (
          <li>{todoItem}</li>
        ))}
        </ul> */}
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}   
              id={index}    // that means our ToDoItems should be able to receive the id in the props..
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
