import './App.css';
import Sidebar from './components/Sidebar';
import ToDoListContainer from './containers/toDoListContainer';

function App() {
  return (
    <>
    <h1>Digital Planner</h1>
    <ToDoListContainer/>

    <div className="App">
      <Sidebar />
    </div>

    </>
  );
}

export default App;
