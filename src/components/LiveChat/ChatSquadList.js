import React, { useContext } from 'react'
import SquadContext from '../../contexts/SquadContext'
import UserContext from '../../contexts/UserContext'

export default function ChatSquadList() {
  const squadContext = useContext(SquadContext)
  const userContext = useContext(UserContext)

  function renderDisplay() {
    return squadContext.squadList.map(squad => {
      return (
        <div
          key={squad.squad_id}
          onClick={ev => {
            ev.preventDefault()
            userContext.setSquadId(squad.squad_id)
          }}
        >
          <h4>{squad.squad_name}</h4>
        </div>
      )
    })
  }

  return (
    <div className="LiveChat">
      <h3>Chatroom List</h3>
      <div className="Chat-SquadList-Container">
        {renderDisplay()}
        <div
          onClick={ev => {
            ev.preventDefault()
            userContext.setSquadId(999)
          }}
        >
          <h4>General Chat</h4>
        </div>
      </div>
    </div>
  )
}
