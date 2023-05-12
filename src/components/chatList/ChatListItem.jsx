import React from 'react'
import './ChatListItem.css'

export const ChatListItem = ({onClick, active, data}) => {
  return (
    <div onClick={onClick} className={`chat-list-item ${active ? 'active' : ''}`}>
      <img className='chat-avatar' src={data.image} alt="" />
      <div className="chat-lines">
        <div className="chat-line">
          <div className="chat-name">{data.title}</div>
          <div className="chat-date">19:00</div>
        </div>
        <div className="chat-line">
          <div className="chat-lastMsg"><p>Testando o parágrafo!</p></div>
        </div>
      </div>
    </div>
  )
}
