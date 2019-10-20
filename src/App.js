import React, { useState } from 'react'
import { Route } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';

import JokeContext from './contexts/JokeContext'

import Navigation from './components/Navigation'
import Jokes from './components/Jokes'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  const [jokes] = useState()

  return (
    <div className="App">
      <JokeContext.Provider value={{ jokes }}>
        <Navigation />
        <Route exact path='/' component={Jokes} />
        <Route path='/auth/register' component={Signup} />
        <Route path='/auth/login' component={Login} />
      </JokeContext.Provider>
    </div>
  );
}

export default App;
