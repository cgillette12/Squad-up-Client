import React from 'react'
import MySquads from '../../components/MySquads/MySquads'
import DashboardMain from '../../components/DashboardMain/DashboardMain';
import LiveChat from '../../components/LiveChat/LiveChat'
import TokenService from '../../services/token-service'
import { Redirect } from 'react-router-dom'
import './DashboardRoute.css'

export default function DashboardRoute() {
  return (
    <div className="Dashboard">
      {TokenService.hasAuthToken() ? <></>:<Redirect to='/login' />}
      <section className='Dashboard_squad-list'>
        <MySquads />
      </section>
      <div className='Dashboard_main'>
        <DashboardMain />
      </div>
      <div className="Dashboard__user-access">
        <div className='Dashboard__chat'>
          <div className="Dashboard__chat-messages">
            <LiveChat />
          </div>
        </div>
      </div>
    </div>
  )
}
