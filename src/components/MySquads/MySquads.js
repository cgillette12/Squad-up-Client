import React, { useState, useEffect, useContext } from 'react'
import SquadService from '../../services/Squad-api-service'
import SquadContext from '../../contexts/SquadContext'
import './MySquads.css';

export default function MySquads() {

 
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
      <div role='alert'>
        {error && <p>{error}</p>}
      </div>
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
      </ul>
    </div>
  )
}
