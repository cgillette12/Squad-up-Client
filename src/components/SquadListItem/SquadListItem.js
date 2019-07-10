import React from 'react'
import './SquadListItem.css'

export default function SquadListItem(props) {
  const { squad = {} } = props

  const testMembers = [
    {name: 'leader', image: "https://image.flaticon.com/icons/svg/78/78373.svg"},
    {name: 'member2', image: "https://image.flaticon.com/icons/svg/78/78373.svg"},
    {name: 'member3', image: "https://image.flaticon.com/icons/svg/78/78373.svg"},
    {name: 'member4', image: "https://image.flaticon.com/icons/svg/78/78373.svg"},
    {name: 'member5', image: "https://image.flaticon.com/icons/svg/78/78373.svg"},
  ]

  const handleSquadJoin = () => {
    // TODO: wait for backend confirmation
  }

  const renderMembers = (membersList) => {
    return membersList.map((member, index) => {
      return (
        <div key={index}className="SquadListItem__member">
          <img className="SquadListItem__member-img" src={member.image} alt="Member Avatar" aria-label="Member Image" />
          {/* <span>{member.name}</span> */}
        </div>
      )
    })
  }

  return (
    <div key={squad.id} className="SquadListItem">
      <h4 className="SquadListItem__squad-name">{squad.squad_name}</h4>
      <span className="SquadListItem__squad-members">
        {renderMembers(testMembers)}
      </span>
      <div className="SquadListItem__squad-info">
        <span className="SquadListItem__squad-tags">Tags: Squad Tags placeholding...</span>
        <button className="SquadListItem__join-button" onClick={handleSquadJoin}>Join</button>
      </div>
    </div>
  )
}
