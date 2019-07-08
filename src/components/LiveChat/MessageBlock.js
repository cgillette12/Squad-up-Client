import React, { useRef, useState, useEffect } from 'react';
import moment from 'moment';

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

export default function MessageBlock(props){
    // const [ref, hovered] = useHover()

    return (
        // <div className="Msg-Ctner" ref={ref}>
        <div className="Msg-Ctner">
            {/* {
                hovered ? <button id={props.id} className="Delete-Btn" onClick={props.handleDelete}>delete</button> : 
                <div key={props.id}>{props.username}{' '}:{' '}{props.message_body} {' '}{moment.utc(props.time_stamp).format("HH:mm")}</div>
            } */}
            <div key={props.id}>{props.username}{' '}:{' '}{props.message_body} {' '}{moment.utc(props.time_stamp).format("HH:mm")}</div>
        </div>
    )
}