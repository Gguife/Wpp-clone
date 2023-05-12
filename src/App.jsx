import './App.css'
import { useState, useEffect } from 'react';

//Components
import { ChatListItem } from './components/chatList/ChatListItem'
import { ChatIntro } from './components/chatIntro/ChatIntro';
import { ChatWindow } from './components/chatWindow/ChatWindow';
//ICONS
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  
  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Fulano de Tal', image: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'},
    {chatId: 2, title: 'Fulano de Tal', image: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'},
    {chatId: 3, title: 'Fulano de Tal', image: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'},
    {chatId: 4, title: 'Fulano de Tal', image: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'},
    {chatId: 5, title: 'Fulano de Tal', image: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'},
  ])
  const [activeChat, setActiveChat] = useState({})

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className='header-avatar' src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="" />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{color: '#919191'}} />
            </div>
            <div className="header-btn">
              <ChatIcon style={{color: '#919191'}} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{color: '#919191'}} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize='small' style={{color: '#919191'}} />
            <input type="search" placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </div>
        <div className="chat-list">
          {chatList.map((i, k) => (
            <ChatListItem key={k} data={i} active={activeChat.chatId == chatList[k].chatId} onClick={() => setActiveChat(chatList[k])} />
          ))}
        </div>
      </div>
      <div className="content-area">
        {activeChat.chatId !== undefined &&
          <ChatWindow />
        }
        {activeChat.chatId == undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  )
}

export default App
