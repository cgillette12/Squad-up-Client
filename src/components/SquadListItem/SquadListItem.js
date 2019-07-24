import React, { useState, useEffect, useContext } from 'react'
import SquadApiService from '../../services/Squad-api-service'
import SquadContext from '../../contexts/SquadContext'
import './SquadListItem.css'
import { Label } from '../FormUtils/FormUtils'
import UserContext from '../../contexts/UserContext';
import ProfileService from '../../services/profile-service';

export default function SquadListItem(props) {
  const { squad = {} } = props
  const [error, setError] = useState(null)
  const [members, setMembers] = useState([])
  const [tags, setTags] = useState([])

  const squadContext = useContext(SquadContext)
  const userContext = useContext(UserContext)

  useEffect(() => {
    setError(null)
    setTags(squad.tags)

    SquadApiService.getSquadMembers(squad.squad_id)
      .then(mbrs => {
        setMembers(mbrs)
      })
      .catch(res => setError(res.error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSquadJoin = squad_id => {
    SquadApiService.joinSquad({ squad_id })
      .then(() => {
        SquadApiService.getAllSquads().then(squads => {
          squadContext.setSquadList(squads)
        })
      })
      .then(() => {
        SquadApiService.getSquadMembers(squad_id).then(mbrs => {
          setMembers(mbrs)
        })
        
        ProfileService.getUserInfo(userContext.user.id).then(data => {
          userContext.setUser(data)
        })
      })
      .catch(err => setError(err.error))
  }

  const renderMembers = () => {
    return members.map(member => {
      return (
        <div key={member.user_id} className="SquadListItem__member">
          <img
            className="SquadListItem__member-img"
            src={member.avatar}
            alt="Member Avatar"
          />
          <span className="SquadListItem__member-name">{member.username}</span>
        </div>
      )
    })
  }

  const renderTags = () => {
    if (tags.length === 0) {
      return <span className="SquadListItem__empty-tags-notice">None...</span>
    }

    return tags.map(tagObj => {
      return (
        <span
          key={tagObj.id}
          className="SquadListItem__squad-tag"
          aria-label={`Tag ${tagObj.tag}`}
        >
          {tagObj.tag}
        </span>
      )
    })
  }

  return (
    <div key={squad.id} className="SquadListItem">
      <div className="SquadListItem__error red" role="alert">
        {error && <p>{error}</p>}
      </div>
      <h4 className="SquadListItem__squad-name">{squad.squad_name}</h4>
      <span className="SquadListItem__squad-members">{renderMembers()}</span>
      <div className="red" role="alert">
        {squadContext.error && <p>{squadContext.error}</p>}
      </div>
      <div className="SquadListItem__squad-info">
        <Label className="SquadListItem__tags-label">Tags:</Label>
        <span className="SquadListItem__squad-tags">{renderTags()}</span>

        <button
          className="SquadListItem__join-button"
          onClick={() => handleSquadJoin(squad.id)}
        >
          Join
        </button>
      </div>
    </div>
  )
}
