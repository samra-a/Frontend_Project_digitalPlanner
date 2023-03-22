import ToDoItems from "./ToDoItems";

const ListOfItems = ({toDoItems}) => {
    const listOfItemsComponents = toDoItems.map((toDoItem, index)=>{
       return(
       <ToDoItems
           key ={index}
           toDoItems ={toDoItem}
       />
       )
    })
   
       return ( 
           <>
           {listOfItemsComponents}
           </>
        );
   }
    
   export default ListOfItems;