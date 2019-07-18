import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPageRoute from '../../Routes/LandingPageRoute/LandingPageRoute'
import RegisterRoute from '../../Routes/RegisterRoute/RegisterRoute'
import LoginRoute from '../../Routes/LoginRoute/LoginRoute'
import SquadList from '../../components/MySquads/MySquads'
import DashboardMain from '../DashboardMain/DashboardMain';
import LiveChat from '../LiveChat/LiveChat'
import DashboardRoute from '../../Routes/DashboardRoute/DashboardRoute'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <Switch>
          <Route exact path={'/'} component={LandingPageRoute} />
          <Route exact path={'/register'} component={RegisterRoute} />
          <Route exact path={'/login'} component={LoginRoute} />
          <Route exact path={'/squads'} component={SquadList} />
          <Route exact path={'/games'} component={DashboardMain} />
          <Route exact path={'/chat'} component={LiveChat} />
          <Route path={'/dashboard'} component={DashboardRoute} />
        </Switch>
      </main>
    </div>
  )
}

export default App
