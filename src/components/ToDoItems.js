import ToDoItem from "./ToDoItem";

const ToDoItems = ({toDoItems}) => {
    const itemsComponents = toDoItems.map((toDoItem, index)=>{
        return(
        <ToDoItem
            key ={index}
            toDoItem ={toDoItem}
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