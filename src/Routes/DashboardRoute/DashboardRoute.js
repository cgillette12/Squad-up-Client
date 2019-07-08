import React from 'react'
import GamesList from '../../components/GamesList/GamesList'
import './DashboardRoute.css'

export default function DashboardRoute() {
  return (
    <div className="Dashboard">
      <div className="Dashboard__games-list">
        <GamesList />
      </div>
      <div className="Dashboard__user-access">
        <div className="Dashboard__user-squads">
          <h3>My Squads</h3>
          <ul>
            <li>Squad 1</li>
            <li>Squad 2</li>
            <li>Squad 3</li>
            <li>Squad 4</li>
          </ul>
        </div>
        <div className="Dashboard__chat">
          <h3>Chat</h3>
          <div className="Dashboard__chat-messages">
            <p>username <strong>time</strong> : some text messages</p>
            <p>username <strong>time</strong> : some text messages</p>
            <p>username <strong>time</strong> : some text messages</p>
            <p>username <strong>time</strong> : some text messages</p>
            <p>username <strong>time</strong> : some text messages</p>
            <p>username <strong>time</strong> : some text messages</p>
          </div>
        </div>
      </div>
    </div>
  )
}
