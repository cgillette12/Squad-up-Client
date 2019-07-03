import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LoginRoute from '../../Routes/LoginRoute/LoginRoute'
import LandingPageRoute from '../../Routes/LandingPageRoute/LandingPageRoute'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
       <Switch>
         <Route exact path={'/'} component={LandingPageRoute} />
         <Route exact path={'/login'} component={LoginRoute} />
       </Switch>
      </main>
    </div>
  )
}

export default App
