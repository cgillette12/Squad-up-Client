import React, { useState, useContext, useEffect } from 'react'
import LiveChatService from './LiveChatService'
import config from '../../config'
import UserContext from '../../contexts/UserContext'
import openSocket from 'socket.io-client'
import TokenService from '../../services/token-service'
import { Input } from '../FormUtils/FormUtils';
import MessageBlock from './MessageBlock'
import ScrollArea from 'react-scrollbar';
import SquadContext from '../../contexts/SquadContext'
import './LiveChat.css';

const io = openSocket(config.LIVE_CHAT_ENDPOINT)


export default function LiveChat(props) {
    const [error, setError] = useState(null)
    const [message, setMessage] = useState('')
    const context = useContext(UserContext)
    const squadContext = useContext(SquadContext)
    const [messages, setMessages] = useState([])
    const [showBotMenu, setShowBotMenu] = useState(false)

    useEffect( () => {
        LiveChatService.getChat(context.squad_id)
        .then(chats => {
            setMessages(chats)
        })
    }, [context.squad_id])


    const handleBotMenu = (ev) => {
        ev.preventDefault()
        setShowBotMenu(!showBotMenu)
    }

    useEffect( () => {
        io.emit('join room', context.squad_id)
        io.on('update chat', function(data){
            addMessage(data)
        })
        // io.on('delete', function(data){
        //     let newMessages = messages
        //     newMessages = newMessages.filter(msg => 
        //         msg.id!==data
        //     )
        //     setMessages(newMessages)
        //  })
    },[message,messages])

    const addMessage = msg => {
        setMessages([...messages, msg])
    }

    const handleSubmit = e => {
        e.preventDefault()

        setError(null)
        if (!TokenService.hasAuthToken()){
            setError(new Error('Please log in'))
        }

        const newMessage = {
            message_body:message,
            username:context.user.username,
            squad_id:context.squad_id
        }
        setMessage('')
        io.emit('message', newMessage)
        
    }

    // const handleDelete = e =>{
    //     e.preventDefault();
    //     const delId = Number(e.target.id)
    //     const newMessages = messages.filter(msg => {
    //         return msg.id !==delId
    //     })
    //     setMessages(newMessages)
    //     io.emit("delete chat", {
    //         id:delId,
    //         squad_id,
    //         username:context.user.username
    //     })
        
    // }

    const displayDropDown = () => {
        return squadContext.squadList.map(squad => {
            return (
                <li key={squad.squad_id} className="Drop-Down-Squad" onClick={(ev) =>{
                    ev.preventDefault()
                    context.setSquadId(squad.squad_id)
                    context.setSquadName(squad.squad_name)
                    }
                }>
                    {squad.squad_name}
                </li>
            )
        })
    }

    const messagesBlock = () =>{ 
        if(messages.length>0){
        const tmp = messages
        return tmp.map( 
            (m,idx) => {
                return (
                    <div key={m.id}>
                        <MessageBlock 
                            idx={idx}
                            id={m.id}
                            username={m.username}
                            message_body={m.message_body}
                            time_stamp={m.time_stamp}
                            // handleDelete={handleDelete}
                        />
                    </div>
                )
            })
        }
        else{
            return <> </>
        }
    }

    const ulStyle={
        marginTop:`-${(squadContext.squadList.length+1)*28}px`
    }
    
    return (
        <div className="LiveChat">
            <h3>
                {context.squad_name}
            </h3>
            <div className="ChatHistory">
                <ScrollArea
                    speed={0.8}
                    className="Scrollable-Chat"
                    horizontal={false}
                    vertical={true}
                >
                    {messagesBlock()}
                </ScrollArea>
            </div>
            <div role='alert'>
                {error && <p>{error}</p>}
            </div>
            <ul className="Chat-SquadList-Ctner" style={ulStyle}>
                {showBotMenu ? 
                    <>
                    {displayDropDown()}
                    <li className="Drop-Down-Squad" onClick={(ev) =>{
                        ev.preventDefault()
                        context.setSquadId(999)
                        context.setSquadName("General Chat")
                    }
                    }>
                    General Chat
                    </li>
                    </>
                    : 
                    <></>
                    }
            </ul>
            <button onClick={handleBotMenu} className="Show-List-Btn">
                Show Squad List
            </button>
            <form className="chat-input" onSubmit={handleSubmit}>
                <Input
                    value={message}
                    className="Message-Input"
                    placeholder="enter message to chat"
                    onChange={e => setMessage(e.target.value)}
                    required
                />
            </form>
           
        </div>
    )

}