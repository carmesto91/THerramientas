import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemCount} from './components/ItemCount/ItemCount.jsx';
//import {Pika} from './components/Pika/Pika.jsx'; 
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'


function App() {
  return (
   
    <div className='app'>
      <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/counter' element={<ItemCount/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </Router>



    </div>
  );
}

export default App;
