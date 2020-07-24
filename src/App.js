import React from "react";
import { Switch, Link, Route } from 'react-router-dom'
import Form from './Form'
import Home from './Home'

const App = () => {
  return (
    <>
    <div className ='main-header'>
            <h1>Lambda Eats</h1>
            <nav>
              <Link to ='/'>Home</Link>
              <Link to='/pizza'>Create your Pizza</Link>
            </nav>
    </div>
    <Switch>
      <Route path='pizza'>
        <Form />
      </Route>

      <Route path ='/'>
        <Home />
      </Route>
    </Switch>


    </>
  );
};
export default App;
