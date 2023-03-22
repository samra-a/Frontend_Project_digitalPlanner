import ListOfLists from "./ListOfLists";


const Category = ({toDoLists, handleAddItemButtonClick, category}) =>  {
    return (
        <div className="category">
            <h2>{category}</h2>
            <ListOfLists toDoLists={toDoLists}
          handleAddItemButtonClick={handleAddItemButtonClick}/>
        </div>
     );
}
 
export default Category ;