import React from 'react';
import { Route } from 'react-router-dom'
import LoginRoute from '../../Routes/LoginRoute/LoginRoute'
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main role='main'>
        <Route exact path='/Login' component={LoginRoute} />
      </main>
    </div>
  );
}

export default App;
