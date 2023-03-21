import { useState, useEffect } from "react";

const ToDoListForm = ({ listCategoryOptions, saveToDoList, listToUpdate }) => {
  const [newToDoList, setNewToDoList] = useState({
    title: "",
    listCategory: null
  });

  const id = listToUpdate && listToUpdate.id ? listToUpdate.id : undefined;

  useEffect(() => {
    if (id) {
      setNewToDoList(listToUpdate);
    }
  }, [id, listToUpdate]);

  const categoryOptions = listCategoryOptions.map((category) => {
    return (
      <option value={category.id} key={category.id}>
        {category.name}
      </option>
    );
  });

  const handleCategoryChange = (event) => {
    const categoryId = parseInt(event.target.value);
    const selectedCategory = listCategoryOptions.find(category => category.id === categoryId);
    const copiedList = { ...newToDoList };
    copiedList.listCategory = selectedCategory;
    setNewToDoList(copiedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const listToSave = {
      title: newToDoList.title,
      category: newToDoList.listCategory.id
    };
    saveToDoList(listToSave);
    setNewToDoList({
      title: "",
      listCategory: newToDoList.listCategory
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Update a List" : "Create a List"}</h2>
      <input
        type="text"
        id="listTitle"
        name="listTitle"
        value={newToDoList.title}
        onChange={(e) => setNewToDoList({ ...newToDoList, title: e.target.value })}
      />
      <button type="submit">{id ? "Update" : "Create"}</button>
      {/* <button type="button" onClick={handleDelete}>Delete List</button> */}
    </form>
  );
};
export default ToDoListForm;

