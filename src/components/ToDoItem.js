import { useState, useEffect } from "react";

const ToDoItem = ({toDoItem, handleItemCompletionClick}) => {

    const [done, setDone] = useState(toDoItem.done)

    const onCheckBoxClick = ( )=>{
        setDone(!done)
    }

    useEffect(()=>{
        handleItemCompletionClick(toDoItem, done)
    }, [done])

    return (  
            <div className="item">
                <h3>{toDoItem.title}</h3>
                <p>{toDoItem.description}</p>
                <p>{toDoItem.due}</p>
                <p>{toDoItem.done}</p>
                    <input
                    type="checkbox"
                    id="completed"
                    checked={done}
                    value={done}
                    onChange={onCheckBoxClick}
                    />
    
            </div>
     );
}
 
export default ToDoItem;