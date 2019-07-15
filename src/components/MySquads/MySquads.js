import React, { useState, useEffect, useContext } from 'react'
import SquadService from '../../services/Squad-api-service'
import SquadContext from '../../contexts/SquadContext'
import UserContext from '../../contexts/UserContext'
import './MySquads.css';

export default function MySquads() {
  const userContext = useContext(UserContext)
  const [error, setError] = useState(null)
  const squadContext = useContext(SquadContext);

  useEffect(() => {
    squadContext.clearError()
    SquadService.getAllSquads()
      .then(squads => {
        squadContext.setSquadList(squads)
      })
      .catch(res => {
        setError(res.error)
      })
  }, [])


  return (
    <div className="Dashboard__user-squads">
      <h3 className='My-squads'>My Squads</h3>
      <ul className='user-squads-list'>
        {squadContext.squadList.map((squadInfo, key) => {
          return (
            <li key={key} className='squad'>
            <div className='squad-item-wrapper'>
              <img id='squad-icon' src={squadInfo.userAvatar} alt=''/>
              <p className='squad-name'>{squadInfo.squad_name}</p>
            </div>
            </li>
          )
          })}
        {userContext.squad_id!==999 ? 
        <li className='squad' onClick={(ev) => {
          ev.preventDefault()
          userContext.setSquadId(999)
          userContext.setSquadName("General Chat")
        }}>
        <div className='squad-item-wrapper'>
          <img id='squad-icon' src={userContext.user.avatar} alt=''/>
          <p className='squad-name'>General Chat</p>
        </div>
        </li> : <></>
        }
      </ul>
    </div>
  )
}
