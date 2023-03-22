import { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoItems from "./ToDoItems";

const ToDoList = ({ toDoList, handleAddItemButtonClick, toDoLists }) => {

    const [toDoItems, setToDoItems] = useState([]);
    const [open, setOpen] = useState(false);



    const handleClick = () => {
        fetch(`http://localhost:8080/to_do_lists/${toDoList.id}`)
            .then((response) => response.json())
            .then((response) => setToDoItems(response.toDos))

        setOpen(!open);

    }



    const onButtonClick = () => {
        handleAddItemButtonClick(toDoList)
    }

    const handleItemCompletionClick = (toDoItem, done) => {
        toDoItem.done = done
        toDoItem.toDoList = { id: toDoList.id }
        console.log("toDoItem", toDoItem);
        fetch(` http://localhost:8080/to_dos/${toDoItem.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toDoItem),
        })

            .then((response) => response.json())
            .then((responseToDoItem) => {
                const updatedItemList = toDoItems.map((toDoItem) => {
                    if (toDoItem.id === responseToDoItem.id) {
                        return responseToDoItem;
                    } else {
                        return toDoItem;
                    }
                })
                setToDoItems(updatedItemList);
            })

    }
    // updatedItemList.push(updatedItemList.splice(updatedItemList.indexOf(responseToDoItem), 1)[0]);




    return (
        <div onClick={handleClick}>
            <h3>{toDoList.title}</h3>
            {/* <p>{toDoList.listCategory}</p> */}
            {open && (
            <>
            {toDoItems ? <ToDoItems toDoItems={toDoItems} handleItemCompletionClick={handleItemCompletionClick} /> : <p>List is empty</p>}
            <div className="add-item-button">
                <button onClick={onButtonClick}>Add New Task</button>
            </div>
            </>
        )}
        </div>

    );
}


export default ToDoList;