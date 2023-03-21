import { useState } from "react";
import ToDoItems from "./ToDoItems";

const ToDoList = ({toDoList}) => {

    const [toDoItems, setToDoItems ] = useState([]);

    const handleClick = ()=> {
        fetch(` http://localhost:8080/to_do_lists/${toDoList.id}`)
        .then((response) => response.json())
        .then((response) => setToDoItems(response.toDos))

    }
    
    
    return ( 
        <div onClick={handleClick}>
        <h3>{toDoList.title}</h3>

        {/* conditional rendering- has to to do list been clicked? */}

        {/* listofItems */}
        {toDoItems ? <ToDoItems toDoItems={toDoItems} /> : <p>List is empty</p> }

        <p>{toDoList.listCategory}</p>
        </div>
     );
}
 
export default ToDoList ;