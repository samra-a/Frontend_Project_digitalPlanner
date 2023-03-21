import ToDoList from "./ToDoList";

const ListOfLists = ({toDoLists}) => {
 const listComponents = toDoLists.map((toDoList, index)=>{
    return(
    <ToDoList 
        key ={index}
        toDoList ={toDoList}
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