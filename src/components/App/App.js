import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LoginRoute from '../../Routes/LoginRoute/LoginRoute'
import LandingPageRoute from '../../Routes/LandingPageRoute/LandingPageRoute'
import SquadList from '../../components/MySquads/MySquads'
import GameList from '../../components/GamesList/GamesList'
import RegisterRoute from '../../Routes/RegisterRoute/RegisterRoute'
import { Redirect } from 'react-router'
import NewSquadRoute from '../../Routes/NewSquadRoute/NewSquadRoute'
import DashboardRoute from '../../Routes/DashboardRoute/DashboardRoute'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main" query="(max-width:800px)">
       <Switch>
         <Route exact path={'/'} component={LandingPageRoute} />
         <Route exact path={'/login'} component={LoginRoute} />
         <Route exact path={'/squads'} component={SquadList}/>
         <Route exact path={'/games'} component={GameList} />
         <Route exact path={'/register'} component={RegisterRoute} />
         <Route exact path={'/newsquad'} component={NewSquadRoute}/>
         <Route path={'/dashboard'} component={DashboardRoute} />
          <Redirect from="/" to="/games" />
       </Switch>
      </main>
    </div>
  )
}

export default App
