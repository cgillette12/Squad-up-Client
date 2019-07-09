import React from 'react'
import GamesList from '../../components/GamesList/GamesList'
import MySquads from '../../components/MySquads/MySquads'
import './DashboardRoute.css'

export default function DashboardRoute() {
  return (
    <div className="Dashboard">
    <section className='Dashboard_squad-list'>
        <MySquads/>
    </section>
      <div className="Dashboard__games-list">
        <GamesList />
      </div>
      <div className="Dashboard__user-access">
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
