import ToDoList from "./ToDoList";

const ListOfLists = ({toDoLists, handleAddItemButtonClick}) => {
 const listComponents = toDoLists.map((toDoList, index)=>{
    return(
    <ToDoList 
        key ={index}
        toDoList ={toDoList}
        handleAddItemButtonClick={handleAddItemButtonClick}
    />
    )
 })

    return ( 
        <>
        {listComponents}
        </>
     );
}
 
export default ListOfLists;