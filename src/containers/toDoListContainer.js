import { useState, useEffect} from "react";
import Category from "../components/Category";
import ListOfLists from "../components/ListOfLists";
import ToDoItemForm from "../components/ToDoItemForm";
import ToDoList from "../components/ToDoList";
import ToDoListForm from "../components/ToDoListForm"

const ToDoListContainer = ({closeModal}) => {

const [toDoList, setToDoList] = useState(null);
const [toDoLists, setToDoLists] = useState([]);
const [listToUpdate, setListToUpdate] = useState([]);
const [filteredList, setFilteredList] = useState([])
const [listCategory, setListCategory] = useState([]);
const [displayItemForm, setDisplayItemForm] = useState(false);
// const [itemsToUpdate, setItemsToUpdate] = useState(null);

const SERVER_URL = "http://localhost:8080";

useEffect(() => {
    getAllLists();
    getAllCategories();
}, [])

const getAllLists = () =>{
    fetch(`${SERVER_URL}/to_do_lists`)
      .then((response) => response.json())
      .then((response) => setToDoLists(response))
      // .then((response) => setToDoLists(response.map((toDoLists)=>toDoLists.title)))
}

const getAllCategories= ()=>{
    fetch(`${SERVER_URL}/to_do_lists/category`)
      .then((response) => response.json())
      .then((response) => setListCategory(response))
}

const postToDoList = (newToDoList) => {
    fetch(`${SERVER_URL}/to_do_lists`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToDoList),
    })
      .then((response) => response.json())
      .then((response) => {
        setToDoLists([...toDoLists, response.pop()]); //takes the last thing of the array 
      }); 
  };

const updateToDoList = (listToUpdate) => {
    fetch(`${SERVER_URL}/to_do_lists/${listToUpdate.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(listToUpdate),
    })
    .then((response)=> response.json())
    .then((responseToDoList)=> {
      const updatedtoDoList = toDoList.map((listToUpdate) =>{
        if(listToUpdate.id === responseToDoList.id){
          return responseToDoList
        }
        else{
          return listToUpdate
        }
      })
      setToDoList(updatedtoDoList)

    })
    setListToUpdate(null)
  }

  const saveToDoList =(listToUpdate)=> {
    postToDoList(listToUpdate)
  }

  const deleteToDoList = (id) => {
    fetch(`${SERVER_URL}/to_do_lists/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
}

// ------------------------------------ ToDoItems-------------------------------------------//

const postToDoItem = (newToDoItem) => {
  fetch(`http://localhost:8080/to_dos/${toDoList.id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newToDoItem),
  })
    .then((response) => response.json())
    .then(() => getAllLists()) //reloads all lists
    .then(()=>setDisplayItemForm(false))
  };

   const filterToDoItemsByDueDate = (toDoItem) => {
    fetch (`http://localhost:8080/to_dos/by_due_date/${toDoItem.due}`)
      .then((response) => response.json())
      .then((response) => setFilteredList(response))
   }

   const handleAddItemButtonClick = (toDoListToUpdate)=>{
    setDisplayItemForm(true)
    setToDoList(toDoListToUpdate)
   }

  //  const handleItemClosureClick = ()=>{

  //   setToDoLists(getAllLists())
  //  }
  

   const groupByCategory = (category) => {
    return toDoLists.filter((toDoList) => {
      console.log(toDoList)
      console.log(category)
      return toDoList.listCategory === category
    })
   }


    return (
        <>
        {/* <ListOfLists
          toDoLists={toDoLists}
          handleAddItemButtonClick={handleAddItemButtonClick}
        />  */}
        <Category category={"Work"} toDoLists ={groupByCategory("WORK")} handleAddItemButtonClick={handleAddItemButtonClick}/>
        <Category category={"Self-Care"} toDoLists={groupByCategory("SELFCARE")} handleAddItemButtonClick={handleAddItemButtonClick}/>
        <Category category={"Household"}  toDoLists ={groupByCategory("HOUSEHOLD")} handleAddItemButtonClick={handleAddItemButtonClick}/>
        <Category category={"Health"}  toDoLists ={groupByCategory("HEALTH")} handleAddItemButtonClick={handleAddItemButtonClick}/>
        <ToDoListForm listCategory={listCategory} closeModal={closeModal} saveToDoList={saveToDoList} listToUpdate={listToUpdate}/>
        {displayItemForm ? <ToDoItemForm postToDoItem={postToDoItem}/> : null}
        </>

      );
}
 
export default ToDoListContainer;