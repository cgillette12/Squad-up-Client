import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LoginRoute from '../../Routes/LoginRoute/LoginRoute'
import LandingPageRoute from '../../Routes/LandingPageRoute/LandingPageRoute'
import RegisterRoute from '../../Routes/RegisterRoute/RegisterRoute'
import DashboardRoute from '../../Routes/DashboardRoute/DashboardRoute';
import SquadDashboardRoute from '../../Routes/SqaudDashboardRoute/SquadDashboardRoute'
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
         <Route path={'/dashboard'} component={DashboardRoute} />
         <Route path={'/squaddashboard'} component={SquadDashboardRoute} />
       </Switch>
      </main>
    </div>
  )
}

export default App
