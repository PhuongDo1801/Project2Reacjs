import './App.css';
import AddData from './components/AddData';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound';
// import NestedGrid from './components/NestedGrid';
function App() {
  return (
    // <NestedGrid/>
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
