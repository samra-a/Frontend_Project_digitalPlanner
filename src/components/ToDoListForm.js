import { useState} from "react";

const ToDoListForm = ({saveToDoList, closeModal}) => {
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

    <div className='modalContainer'>
    <div className="titleCloseBtn">
      <button onClick={() => closeModal(false)}> x </button>
      </div>
    <div className='title'>
      <h2>Create A New Task</h2>
    </div>
    <div className='body'>

    <form onSubmit={handleSubmit}>
    <p>Enter Title</p>
      <input
        type="text"
        id="listTitle"
        name="listTitle"
        value={newToDoList.title}
        onChange={(e) => setNewToDoList({ ...newToDoList, title: e.target.value })}
      />
      <p>Select category</p>
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
      {/* <input className="add-list-button" type="submit" value= "create"/> */}
      <div className='footer'>
      <button onClick={() => closeModal(false)}>Cancel</button>
      <button type="submit">Submit</button>
    </div>
      {/* <button type="button" onClick={handleDelete}>Delete List</button> */}
    </form>

    </div>
   
  </div>
  );
};
export default ToDoListForm;

