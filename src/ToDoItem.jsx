// import React, {useState} from "react";
import React from "react";


function ToDoItem(props) {    //props is read only..

  // const [isDone, setIsDone] = useState(false);


  //    function handleClick() {
  //       setIsDone((prevValue) => {
  //         return !prevValue;
  //       });

  //    }



  return (
    // <div onClick={handleClick}>
    //     <li style={{ textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>
    // </div> 
    <div
      onClick={() => {  //3..thats why we are creating a function () =>  and this function will only get called when the onClick triggered and it's only in this moment that we actually want to tap into props.. 
        props.onChecked(props.id);   //1..whenever we have a set of parentheses and something inside it, then we are going to be calling the function rather than passing the function...
      }}  //2.. so directlt we cannot pass {props.id} function 
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
