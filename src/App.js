import React from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Login from './Components/Login'
import Posts from './Components/Posts'


function App() {
  return (
    <div className="App">
      <Router>
      <Link to='/'></Link>





  
      <Route exact path='/' component={Login}/>
      <Route  path='/:id' component={Posts}/>

      </Router>
    </div>
  );
}

export default App;
