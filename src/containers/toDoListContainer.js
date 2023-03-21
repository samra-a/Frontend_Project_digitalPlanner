import { useState, useEffect} from "react";
import ListOfLists from "../components/ListOfLists";
import ToDoList from "../components/ToDoList";

const ToDoListContainer = () => {

const [toDoList, setToDoList] = useState(null);
const [toDoLists, setToDoLists] = useState([]);
const [listToUpdate, setListToUpdate] = useState([]);
const [toDoItems, setToDoItems] = useState([]);
const [categories, setCategories] = useState([]);
const [itemsToUpdate, setItemsToUpdate] = useState(null);

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
      .then((response) => setCategories(response))
}

const postToDoList = (newToDoList) => {
    fetch(`${SERVER_URL}/to_do_lists`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToDoList),
    })
      .then((response) => response.json())
      .then((response) => {
        setToDoList([...toDoList, response]);
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

//onClickExpand

    return (
        <>
        <ListOfLists
        toDoLists={toDoLists}
        />
        </>

      );
}
 
export default ToDoListContainer;