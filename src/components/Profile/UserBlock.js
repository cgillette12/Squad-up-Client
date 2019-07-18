import React from 'react';
import './UserBlock.css';


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

export default function UserBlock(props){
    // const [ref, hovered] = useHover()
    
    const ProcessBar = (xp, xpthreshold) => {
        const percent = xp/xpthreshold*100
        
        const divStyle = {
            width:`${percent}%`
        }
        
        return (
            <div className="Process-Bar">
                <div 
                    className="Filler" 
                    style={ divStyle }
                ></div>
            </div>
        )
    }
    // function renderAvatars(){
    //     const avatars = [
    //         "https://image.flaticon.com/icons/svg/78/78373.svg",
    //         "https://image.flaticon.com/icons/svg/78/78373.svg",
    //         "https://image.flaticon.com/icons/svg/78/78373.svg",
    //         "https://image.flaticon.com/icons/svg/78/78373.svg",
    //         "https://image.flaticon.com/icons/svg/78/78373.svg",
    //         "https://image.flaticon.com/icons/svg/78/78373.svg"
    //     ]
    //     return avatars.map(image => {
    //         return (
    //             <div className="Avatar-Container" 
    //                 style ={{backgroundImage :`${image}`}}
    //                 key={image.charAt(15)}
    //                 onClick={ev => {
    //                     ev.preventDefault()
    //                     props.setAvatar(image)
    //                 }}
    //                 >
    //             </div>
    //         )
    //     })
    // }
    return (
        <>
        <div className="User-Info-Contaiiner">
        <section className='user-Lable'>
            <img className='user-Avatar' src={props.avatar} alt=''/>
            <h3>{props.username}</h3>
        </section>
            <div className="Level-Container">
                <h4>level: {props.level}</h4>
                {ProcessBar(props.xp,props.xpthreshold)}
                <p className="Level-Info">
                    {props.xp}/{props.xpthreshold}
                </p>
            </div>
        </div>
        </>
    )
}