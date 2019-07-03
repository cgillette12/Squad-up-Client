import React from 'react';
import './App.css';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main role='main'>
        <Route exact path='/login' component={LoginRoute} />
      </main>
    </div>
  );
}

export default App;
