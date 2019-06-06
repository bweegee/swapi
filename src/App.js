import React from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from './components/Home'
import People from './components/People'
import Planets from './components/Planets'
import Homeworld from './components/Homeworld'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/people" component={People} />
      <Route exact path="/planets" component={Planets} />
      <Route exact path="/homeworld/:name" component={Homeworld} />
    </Switch>
    </>
  );
}

export default App;
