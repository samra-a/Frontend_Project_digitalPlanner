import { useState} from "react";

const ToDoListForm = ({saveToDoList}) => {
  const [newToDoList, setNewToDoList] = useState({
    title: "",
    listCategory: null
  });

  const handleCategoryChange = (event) => {
    const copiedList = { ...newToDoList };
    copiedList.listCategory = event.target.value;
    setNewToDoList(copiedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const listToSave = {...newToDoList};
    saveToDoList(listToSave);
    setNewToDoList({
      title: "",
      listCategory: null
    });
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Create a List</h2>
      <input
        type="text"
        id="listTitle"
        name="listTitle"
        value={newToDoList.title}
        onChange={(e) => setNewToDoList({ ...newToDoList, title: e.target.value })}
      />
      <select 
      onChange={handleCategoryChange} 
      name="category" 
      value={newToDoList.listCategory ? newToDoList.listCategory : "select-category"}>
        <option value="select-category">Select a category</option>
        <option value= "WORK"> Work</option>
        <option value= "SELFCARE"> Self-Care</option>
        <option value= "HEALTH"> Health</option>
        <option value= "HOUSEHOLD"> Household</option>
      </select>
      <input type="submit" value= "create"/>
      {/* <button type="button" onClick={handleDelete}>Delete List</button> */}
    </form>
  );
};
export default ToDoListForm;

