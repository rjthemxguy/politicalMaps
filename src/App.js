import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Map from "./components/map"
import 'bootstrap/dist/css/bootstrap.min.css';
import OfficeGrid  from './components/Grid';
import GridTest from './components/GridTest';



function App() {

   
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element={<Map/>}/>
        <Route path = "/grid" element={<GridTest/>}/>
      </Routes>
    </Router>
  );
}

export default App;
