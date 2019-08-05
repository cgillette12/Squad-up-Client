import React from 'react'
import './UserBlock.css'

export default function UserBlock(props) {
  const ProcessBar = (xp, xpThreshold, level) => {
    const prevThreshold = 500 * (level - 1)
    const currThreshold = xpThreshold - prevThreshold
    const currProgress = xp - prevThreshold

    let percent = (currProgress / currThreshold) * 100

    if (percent >= 100) {
      percent = 100
    }

    const divStyle = {
      width: `${percent}%`
    }

    return (
      <div className="Process-Bar">
        <div className="Filler" style={divStyle} />
      </div>
    )
  }

  return (
    <>
      <div className="User-Info-Container">
        <section className="user-Label">
          <img
            className="user-Avatar"
            src={props.avatar}
            alt={`Avatar of ${props.username}`}
          />
          <h3 className='profile-user-name'>{props.username}</h3>
        </section>
        <div className="Level-Container">
          <h4>level: {props.level}</h4>
          {ProcessBar(props.xp, props.xpthreshold, props.level)}
          <p className="Level-Info">
            {props.xp}/{props.xpthreshold}
          </p>
        </div>
      </div>
    </>
  )
}
