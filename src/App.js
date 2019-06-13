import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import './App.css';
import Index from './components/layouts/Index'
function App() {
  return (
    <Router>
    <React.Fragment>
     <Navbar />
     <div className="container">
       <Switch>
         <Route exact path="/" component={Index}/>
       </Switch>
     </div>
     </React.Fragment>
    </Router>
  );
}

export default App;
