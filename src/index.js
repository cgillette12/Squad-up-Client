import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { UserProvider } from './contexts/UserContext'
import { GameProvider } from './contexts/GameContext'
import { SquadProvider} from './contexts/SquadContext'
import App from './components/App/App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <GameProvider>
        <SquadProvider>
        <App />
        </SquadProvider>
      </GameProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
