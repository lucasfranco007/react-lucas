
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/navBar.js';
import Saludo from './components/ItemListContaner.js';



function App() {
  return (
    <><div className="App">
      <Router>
        <NavBar />
      </Router>
    </div>
      <div className="contenedor">
      
        <Saludo persona="CoderHouse"/>
        <Saludo persona="TutorPro"/>
      
      </div></>
  );
}

export default App;

