import React from 'react'

export default function SquadListItem(props) {
  const { squad = {} } = props

  return (
    <div key={squad.id} className="SquadListItem">
      <h4>{squad.squad_name}</h4>
      <p>Leader: {squad.userName}</p>
      <p>Tags: placeholding</p>
      <button>Join</button>
    </div>
  )
}
