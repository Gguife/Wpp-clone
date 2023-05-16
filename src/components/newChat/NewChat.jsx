import { useState } from 'react';
import './NewChat.css'
//ICON
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const NewChat = ({user, chatList, show, setShow}) => {
  const [list, setList] = useState([
    {id: 123, name: 'Guilherme Gomes', avatar: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'},
    {id: 123, name: 'Guilherme Gomes', avatar: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'},
    {id: 123, name: 'Guilherme Gomes', avatar: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'},
    {id: 123, name: 'Guilherme Gomes', avatar: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'},
  ])

  const handleClose = () =>{
    setShow(false)
  }
  
  return (
    <div className='newChat' style={{left: show ? 0 : -415}}>
      <div className="newChat-header">
        <div onClick={handleClose} className="newChat-backBtn">
          <ArrowBackIcon style={{color: '#FFF'}} />
        </div>
        <div className="newChat-header-title">
          Nova conversa
        </div>
      </div>
      <div className="newChat-list">
        {list.map((i, k) => (
          <div className='newChat-item' key={k}>
            <img className='newChat-item-avatar' src={i.avatar} alt="" />
            <div className='newChat-item-name'>{i.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
