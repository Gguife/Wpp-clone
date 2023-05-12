import './ChatWindow.css'
//ICONS
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

export const ChatWindow = () => {
  return (
    <div className='chat-window'>
      <div className="chat-window-header">
         <div className="window-header-info">
            <img className='window-avatar' src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="" />
            <div className="window-name">Guilherme Gomes</div>
         </div>
         <div className="window-header-buttons">
          <div className="window-btn"><SearchIcon style={{color: '#919191'}} /></div>
          <div className="window-btn"><AttachFileIcon style={{color: '#919191'}} /></div>
          <div className="window-btn"><MoreVertIcon style={{color: '#919191'}} /></div>
         </div>
      </div>

      <div className="chat-window-body">

      </div>

      <div className="chat-window-footer">
        <div className="chat-window-pre">
          <div className="window-btn"><InsertEmoticonIcon style={{color: '#919191'}} /></div>
        </div>

        <div className="chat-window-input">
          <input className='window-input' placeholder='Digite uma mensagem' type="text" />
        </div>
        <div className="chat-window-pos">
          <div className="window-btn"><SendIcon style={{color: '#919191'}} /></div>
        </div>
      </div>
    </div>
  )
}
