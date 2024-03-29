import React, { useState, useEffect, useContext } from 'react'
import SquadService from '../../services/Squad-api-service'
import SquadContext from '../../contexts/SquadContext'
import ScrollArea from 'react-scrollbar'
import MobileUtils from '../../components/Utils/MobileUtils'
import './MySquads.css'

export default function MySquads() {
  const [error, setError] = useState(null)
  const squadContext = useContext(SquadContext)

  useEffect(() => {
    squadContext.clearError()
    SquadService.getAllSquads()
      .then(squads => {
        squadContext.setSquadList(squads)
      })
      .catch(res => {
        setError(res.error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderSquadsList = () => {
    return squadContext.squadList.map((squadInfo, key) => {
      return (
        <li key={key} className="squad">
          <div className="squad-item-wrapper">
            <img
              id="squad-icon"
              src="https://res.cloudinary.com/squad-up/image/upload/c_scale,w_128/v1563466769/avatars/squad_avatar_tcnq2r.png"
              alt=""
            />
            <p className="squad-name">{squadInfo.squad_name}</p>
          </div>
        </li>
      )
    })
  }
  // Due to time restraints the only funtionality of this component is desplaying the squad list
  return (
    <div className="Dashboard__user-squads">
      <div role="alert">{error && <p>{error}</p>}</div>
      <section className="squads-header">
        <h3 className="My-squads">My Squads</h3>
      </section>
      <ScrollArea
        speed={0.8}
        className="Scrollable-games"
        horizontal={false}
        vertical={true}
        smoothScrolling={true}
        style={{
          maxHeight: `${window.innerHeight -
            (window.innerWidth <= 800 ? 197 : 134)}px`
        }}
      >
        <ul className="user-squads-list">{renderSquadsList()}</ul>
      </ScrollArea>
      <MobileUtils />
    </div>
  )
}
