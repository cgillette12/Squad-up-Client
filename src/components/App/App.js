import React from 'react';
import LoginRoute from '../../Routes/LoginRoute/LoginRoute'
import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main role='main'>
        <Route exact path='/Login' component={LoginRoute} />
      </main>
    </div>
  );
}

export default App;
