import { useState } from "react";
import ToDoItems from "./ToDoItems";

const ToDoList = ({toDoList, handleAddItemButtonClick }) => {

    const [toDoItems, setToDoItems ] = useState([]);

    const handleClick = ()=> {
        fetch(` http://localhost:8080/to_do_lists/${toDoList.id}`)
        .then((response) => response.json())
        .then((response) => setToDoItems(response.toDos))

    }

    const onButtonClick = ( )=>{
        handleAddItemButtonClick(toDoList)
    }
    
    
    return ( 
        <div onClick={handleClick}>
        <h3>{toDoList.title}</h3>
        <p>{toDoList.listCategory}</p>
        {toDoItems ? <ToDoItems toDoItems={toDoItems} /> : <p>List is empty</p> }
        <div className="add-item">
                    <button onClick={onButtonClick}>Add New Task</button>
        </div>
        </div>

     );
}
 
export default ToDoList ;