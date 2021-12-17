
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/navBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import {ItemDetailContainer} from './components/ItemDetailsContainer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
return (
  <> 
    <NavBar />,
    <ItemListContainer/>,
    <ItemDetailContainer/>
    
  </>

);
}
export default App;
