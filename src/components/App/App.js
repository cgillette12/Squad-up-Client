import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LoginRoute from '../../Routes/LoginRoute/LoginRoute'
import LandingPageRoute from '../../Routes/LandingPageRoute/LandingPageRoute'
import RegisterRoute from '../../Routes/RegisterRoute/RegisterRoute'
import NewSquadRoute from '../../Routes/NewSquadRoute/NewSquadRoute'
import DashboardRoute from '../../Routes/DashboardRoute/DashboardRoute'
import './App.css'
import LiveChat from '../LiveChat/LiveChat'

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
       <Switch>
         <Route exact path={'/'} component={LandingPageRoute} />
         <Route exact path={'/login'} component={LoginRoute} />
         <Route exact path={'/register'} component={RegisterRoute} />
<<<<<<< HEAD
         <Route exact path={'/chat'} component={LiveChat} />
=======
         <Route exact path={'/newsquad'} component={NewSquadRoute}/>
         <Route path={'/dashboard'} component={DashboardRoute} />
>>>>>>> 57126bdc2d15cf5b04a0144a18fc74852829c963
       </Switch>
      </main>
    </div>
  )
}

export default App
