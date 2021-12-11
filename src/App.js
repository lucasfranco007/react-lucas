
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/navBar.js';
import Saludo from './components/ItemListContaner.js';
import ClassButton from './components/button.js';

function App() {
return (
  <> 
    <NavBar />
    <Saludo persona="PAGINA REACT"/>
    <ClassButton/>
  </>

);
}
export default App;
