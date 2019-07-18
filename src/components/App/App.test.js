import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from '../../contexts/UserContext'
import { GameProvider } from '../../contexts/GameContext'
import { SquadProvider } from '../../contexts/SquadContext'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
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
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})