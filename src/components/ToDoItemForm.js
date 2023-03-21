import { useState } from "react";

const  ToDoItemForm= ({postToDoItem}) => {

    const [newToDoItem, setNewToDoItem] = useState({
        title: "",
        description: "",
        due: Date.now()
      });

      const handleItemSubmit = (e) => {
        e.preventDefault();
        const itemToSave = {...newToDoItem};
        postToDoItem(itemToSave);
        setNewToDoItem({
            title: "",
            description: "",
            due: Date.now()
        });
      };

    return ( 
        <form onSubmit={handleItemSubmit}>
        <h2>Tasks</h2>
      <input
        type="text"
        id="itemTitle"
        name="itemTitle"
        value={newToDoItem.title}
        onChange={(e) => setNewToDoItem({ ...newToDoItem, title: e.target.value })}
      />
      <input
        type="text"
        id="itemDescription"
        name="itemDescription"
        value={newToDoItem.description}
        onChange={(e) => setNewToDoItem({ ...newToDoItem, description: e.target.value })}
      />
      <input
        type="date"
        id="dueDate"
        name="dueDate"
        value={newToDoItem.due}
        onChange={(e) => setNewToDoItem({ ...newToDoItem, due: e.target.value })}
/>
      <input type="submit" value= "create"/>
        </form>
     );
}
 
export default ToDoItemForm ;