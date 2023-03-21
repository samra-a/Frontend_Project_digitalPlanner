const ToDoItem = (toDoItem) => {


    return ( 
        <div className="item">
            <h3>{toDoItem.title}</h3>
            <p>{toDoItem.description}</p>
            <p>{toDoItem.due}</p>
            
        </div>
     );
}
 
export default ToDoItem;