import { useState } from "react";
import ToDoItem from "./ToDoItem";

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
        {/* <ListOfItems
            toDoItems={toDoItems}
        /> */}

        <p>{toDoList.listCategory}</p>
        </div>
     );
}
 
export default ToDoList ;