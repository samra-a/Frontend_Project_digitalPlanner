import { useState, useEffect} from "react";
import ListOfLists from "../components/ListOfLists";
import ToDoList from "../components/ToDoList";
import ToDoListForm from "../components/ToDoListForm";

const ToDoListContainer = () => {

const [toDoList, setToDoList] = useState(null);
const [toDoLists, setToDoLists] = useState([]);
const [listToUpdate, setListToUpdate] = useState([]);
const [filteredList, setFilteredList] = useState([])
const [listCategory, setListCategory] = useState([]);
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
        setToDoLists([...toDoLists, response]);
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
    listToUpdate.id ? updateToDoList(listToUpdate) : postToDoList(listToUpdate)
  }

  const deleteToDoList = (id) => {
    fetch(`${SERVER_URL}/to_do_lists/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
}

// ------------------------------------ ToDoItems-------------------------------------------

const postToDoItem = (newToDoItem) => {
  fetch(`http://localhost:8080/to_dos/${toDoList.id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newToDoItem),
  })
    .then((response) => response.json())
    .then((response) => {
      setToDoList([...toDoList, response]);
    });
};

   const filterToDoItemsByDueDate = (toDoItem) => {
    fetch (`http://localhost:8080/to_dos/by_due_date/${toDoItem.due}`)
      .then((response) => response.json())
      .then((response) => setFilteredList(response))
   }

    return (
        <>
        <ListOfLists
        toDoLists={toDoLists}
        />
        {toDoList ? <ToDoList toDoList={toDoList}/> : <p>Loading List</p> }   
        <ToDoListForm listCategory={listCategory} saveToDoList={saveToDoList} listToUpdate={listToUpdate}/>
        </>

      );
}
 
export default ToDoListContainer;