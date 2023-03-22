import ToDoItem from "./ToDoItem";

const ToDoItems = ({toDoItems, handleItemCompletionClick}) => {
    const itemsComponents = toDoItems.map((toDoItem, index)=>{
        return(
        <ToDoItem
            key ={index}
            toDoItem ={toDoItem}
            handleItemCompletionClick={handleItemCompletionClick}
        />
        )
     })
    
        return ( 
            <>
            {itemsComponents}
            </>
         );
}
 
export default ToDoItems;