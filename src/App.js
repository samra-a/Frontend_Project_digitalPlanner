import './App.css';
import Sidebar from './components/Sidebar';
import ToDoListContainer from './containers/toDoListContainer';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <h1>Digital Planner</h1>
    {/* <ToDoListContainer/> */}

    <div className="App">
      <Sidebar />
    </div>

    <button
     className="openModalBtn" 
     onClick={() =>{
      setOpenModal(true);
      }}
      >
      +
    </button>

    {openModal && <ToDoListContainer closeModal={()=>{setOpenModal(false)}} />}

    </>
  );
}

export default App;
