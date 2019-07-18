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
        <h3 className="User-Info-username">{props.username}</h3>
        <div
          className="User-Avatar-Container"
          style={{ backgroundImage: `url(${props.avatar})` }}
        />
        <div className="Level-Container">
          <h4>Level: {props.level}</h4>
          <div className="Level-Bar">
            {ProcessBar(props.xp, props.xpthreshold, props.level)}
          </div>
          <div className="Level-Info">
            {props.xp}/{props.xpthreshold}
          </div>
        </div>
      </div>
    </>
  )
}
