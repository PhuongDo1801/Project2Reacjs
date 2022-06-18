import './App.css';
import AddData from './AddData';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './NotFound';
function App() {
  return ( 
    //Bài 1
  <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path= "/">
            <Home />
          </Route>
          <Route path= "/add">
            <AddData />
          </Route>
          <Route path= "*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
