import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LoginRoute from '../../Routes/LoginRoute/LoginRoute'
import LandingPageRoute from '../../Routes/LandingPageRoute/LandingPageRoute'
import GamesList from '../../Routes/GamesListPage/GamesList';
import RegisterRoute from '../../Routes/RegisterRoute/RegisterRoute'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
       <Switch>
         <Route exact path={'/'} component={LandingPageRoute} />
         <Route exact path={'/login'} component={LoginRoute} />
         <Route exact path={'/register'} component={RegisterRoute} />
         <Route path={'/games-list'} component={GamesList} />
       </Switch>
      </main>
    </div>
  )
}

export default App
