import React, {useState} from "react";

function InputArea(props) {

  const [inputText, setInputText] = useState("");


    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
      }


    return (
        <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        {/* <button onClick={addItem}> */}
        {/* <button onClick={props.onAdd}> */}
        <button onClick={() => {   //rather than of just calling this add function, actually passing in a function 
        // and inside this function, we can again tap into props.onAdd and then in the value of the current 
        props.onAdd(inputText);  // when the button is clicked then its goint to trigger this function..and calls the onAdd function which remember is tied to the addItem
        setInputText("");
        }}>
          <span>Add</span>
        </button>
      </div>
    );
}

export default InputArea;