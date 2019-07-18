import React from 'react'
import './UserBlock.css'

export default function UserBlock(props) {
  const ProcessBar = (xp, xpthreshold) => {
    let percent = (xp / xpthreshold) * 100

    if(percent >= 100) {
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
      <div className="User-Info-Contaiiner">
        <h3>{props.username}</h3>
        <div
          className="User-Avatar-Container"
          style={{ backgroundImage: `url(${props.avatar})` }}
        />
        <div className="Level-Container">
          <h4>Level: {props.level}</h4>
          <div className="Level-Bar">
            {ProcessBar(props.xp, props.xpthreshold)}
          </div>
          <div className="Level-Info">
            {props.xp}/{props.xpthreshold}
          </div>
        </div>
      </div>
    </>
  )
}
