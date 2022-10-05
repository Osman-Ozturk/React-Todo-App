import './App.css';
import Contact from "./components/Contact"
import { Route, Routes } from 'react-router-dom';
import TodoApp from './components/TodoApp';
import Hilfe from './components/Hilfe';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <ul className='navbar'>
        <Link to="/contact">Contact</Link>
        <Link to="/">ToDo App</Link>
        <Link to="/hilfe">Hilfe</Link>
      </ul>
      
      <Routes>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/" element={<TodoApp />}/>
      <Route path="/hilfe" element={<Hilfe />}/>
      </Routes>
      
    </div>
  );
}

export default App;
