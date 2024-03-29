import React, { useState, useContext, useEffect, useRef, useLayoutEffect } from 'react'
import config from '../../config'
import openSocket from 'socket.io-client'
import UserContext from '../../contexts/UserContext'
import SquadContext from '../../contexts/SquadContext'
import LiveChatService from './LiveChatService'
import TokenService from '../../services/token-service'
import MessageBlock from './MessageBlock'
import MobileUtils from '../Utils/MobileUtils'
import ScrollArea from 'react-scrollbar'
import { Input } from '../FormUtils/FormUtils'

import './LiveChat.css'

const io = openSocket(config.LIVE_CHAT_ENDPOINT)

export default function LiveChat(props) {
  const [error, setError] = useState(null)
  const [message, setMessage] = useState('')
  const context = useContext(UserContext)
  const squadContext = useContext(SquadContext)
  const [messages, setMessages] = useState([])
  const [showBotMenu, setShowBotMenu] = useState(false)
  const scrollArea = useRef()
  const scrollable = useRef()
  const inner = useRef()
  const squadButton = useRef()
  const [dropDownWidth, setDropDownWidth] = useState(0)

  useLayoutEffect(() => {
    const realHeight = inner.current.getBoundingClientRect().height
    const containerHeight = scrollable.current.clientHeight-20
    setDropDownWidth(squadButton.current.getBoundingClientRect().width)
    if (realHeight>containerHeight){
      scrollArea.current.state.topPosition = realHeight-containerHeight
    }

  },[messages])

  useEffect(() => {
    io.emit('join room', context.squad_id)
    LiveChatService.getChat(context.squad_id).then(chats => {
      setMessages(chats)
    })
  }, [context.squad_id])

  const handleBotMenu = ev => {
    ev.preventDefault()
    setShowBotMenu(!showBotMenu)
  }
  
  useEffect(() => {
    io.on('update chat', function(msg) {
      setMessages([...messages, msg])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages])

  const handleSubmit = e => {
    e.preventDefault()

    setError(null)
    if (!TokenService.hasAuthToken()) {
      setError(new Error('Please log in'))
    }

    if(!message.trim().length) {
      setMessage('')
      setError('no empty strings in chat!')
      return
    }

    const newMessage = {
      message_body: message,
      username: context.user.username,
      squad_id: context.squad_id
    }
    setMessage('')
    io.emit('message', newMessage)
  }

  const displayDropDown = () => {
    return squadContext.squadList.map(squad => {
      return (
        <li
          key={squad.squad_id}
          className="Drop-Down-Squad"
          onClick={ev => {
            ev.preventDefault()
            context.setSquadId(squad.squad_id)
            context.setSquadName(squad.squad_name)
            setShowBotMenu(!showBotMenu)
          }}
        >
          {squad.squad_name}
        </li>
      )
    })
  }

  const messagesBlock = () => {
    if (messages.length > 0) {
      const tmp = messages
      return tmp.map((m, idx) => {
        return (
          <div key={m.id}>
            <MessageBlock
              idx={idx}
              id={m.id}
              username={m.username}
              message_body={m.message_body}
              time_stamp={m.time_stamp}
            />
          </div>
        )
      })
    } else {
      return <> </>
    }
  }

  const ulStyle = {
    marginTop: `-${10 + (squadContext.squadList.length + 1) * 28}px`,
    width:`${dropDownWidth}px`,
    paddingTop: `${showBotMenu ? '10' : '0'}px`
  }

  return (
    <div className="LiveChat">
      <h4>{context.squad_name}</h4>
      <div className="ChatHistory" ref={scrollable}>
        <ScrollArea
          speed={0.8}
          className="Scrollable-Chat"
          horizontal={false}
          vertical={true}
          ref={scrollArea}
        >
          <div id="Inner-Msg" ref={inner}>
            {messagesBlock()}
          </div>
        </ScrollArea>
      </div>
      <div className="red" role="alert">
        {error && <p>{error}</p>}
      </div>
      <ul className="Chat-SquadList-Ctner" style={ulStyle}>
        {showBotMenu ? (
          <>
            {displayDropDown()}
            <li
              className="Drop-Down-Squad"
              onClick={ev => {
                ev.preventDefault()
                context.setSquadId(999)
                context.setSquadName('General Chat')
                setShowBotMenu(!showBotMenu)
              }}
            >
              General Chat
            </li>
          </>
        ) : (
          <></>
        )}
      </ul>
      <button onClick={handleBotMenu} className="Show-List-Btn" ref={squadButton}>
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
      <MobileUtils />
    </div>
  )
}
