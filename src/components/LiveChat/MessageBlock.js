import React, { useState, useEffect } from 'react'
import moment from 'moment'
import jstz from 'jstz'
import 'moment-timezone'

// function useHover(){
//     const ref =useRef()
//     const [hovered, setHovered] = useState(false)

//     const enter = () => setHovered(true)
//     const leave = () => setHovered(false)

//     useEffect( ()=> {
//         ref.current.addEventListener('mouseenter', enter)
//         ref.current.addEventListener('mouseleave', leave)

//         return () => {
//             ref.current.removeEventListener('mouseenter', enter)
//             ref.current.removeEventListener('mouseleave', leave)
//         }
//     }, [ref])

//     return [ref, hovered]
// }

export default function MessageBlock(props) {
  // const [ref, hovered] = useHover()
  // const [currTz, setCurrTz] = useState()
  // const [momentTime, setMomentTime] = useState()
  // const [tzTime, setTzTime] = useState()

  // useEffect(() => {
  //   if (!sessionStorage.getItem('timezone')) {
  //     const tz = jstz.determine() || 'UTC'
  //     sessionStorage.setItem('timezone', tz.name())
  //   }

  //   const curr = sessionStorage.getItem('timezone')
  //   const mom = moment(props.time_stamp)
  //   const tz_time = mom.tz(curr)

  //   setTzTime(tz_time)
  //   console.log(tz_time.format('h:mm A'))

  //   // setCurrTz(sessionStorage.getItem('timezone'))
  //   // setMomentTime(moment(props.time_stamp))
  //   // setTzTime(momentTime.tz(currTz))
  // }, [props.time_stamp])

  const renderTimeStamp = () => {
    if (!sessionStorage.getItem('timezone')) {
      const tz = jstz.determine() || 'UTC'
      sessionStorage.setItem('timezone', tz.name())
    }

    const currTz = sessionStorage.getItem('timezone')
    const momentTime = moment(props.time_stamp)
    const tzTime = momentTime.tz(currTz)

    // console.log(currTz)

    return tzTime.format('h:mm A')
  }

  return (
    // <div className="Msg-Ctner" ref={ref}>
    <div className="Msg-Ctner">
      {/* {
                hovered ? <button id={props.id} className="Delete-Btn" onClick={props.handleDelete}>delete</button> : 
                <div key={props.id}>{props.username}{' '}:{' '}{props.message_body} {' '}{moment.utc(props.time_stamp).format("HH:mm")}</div>
            } */}
      <div key={props.id} name={props.idx}>
        <span className="User-Text">{props.username} :</span>
        <span> {props.message_body}</span>
        <span className="Time-Text">{renderTimeStamp()}</span>
      </div>
    </div>
  )
}
