import React from 'react'
import moment from 'moment'
import jstz from 'jstz'
import 'moment-timezone'

export default function MessageBlock(props) {
  const renderTimeStamp = () => {
    if (!sessionStorage.getItem('timezone')) {
      const tz = jstz.determine() || 'UTC'
      sessionStorage.setItem('timezone', tz.name())
    }

    const currTz = sessionStorage.getItem('timezone')
    const momentTime = moment(props.time_stamp)
    const tzTime = momentTime.tz(currTz)

    return tzTime.format('h:mm A')
  }

  return (
    <div className="Msg-Ctner" id={props.id}>
      <div key={props.id} name={props.idx}>
        <span className="User-Text">{props.username} </span>{' '} <span className="Time-Text">{renderTimeStamp()}</span><br/>
        <span> {props.message_body}</span>   
      </div>
    </div>
  )
}
