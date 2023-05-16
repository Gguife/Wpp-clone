import './ChatWindow.css'
import { useState, useEffect, useRef } from 'react'
import EmojiPicker from 'emoji-picker-react';
//COMPONENT
import { MessageItem } from '../messageItem/MessageItem'
//ICONS
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

export const ChatWindow = ({user}) => {

  const body = useRef()

  //Funcionalidade do MIC
  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(SpeechRecognition !== undefined){
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen] = useState(false)
  const [text, setText] = useState('')
  const [listening, setListening] = useState(false)
  const [list, setList] = useState([
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
    {author: 123, body: 'blablabla'},
    {author: 123, body: 'abla'},
    {author: 1234, body: 'baldlbadblblablabla'},
  ])

  //Send Button && Mic button
  const handleSendClick = () =>{

  }
  const handleMicClick = () =>{
    if(recognition !== null){
      recognition.onstart = () =>{
        setListening(true)
      }
      recognition.onend = () =>{
        setListening(false)
      }
      recognition.onresult = (e) =>{
        setText(e.results[0][0].transcript)
      }
    }

    recognition.start()
  }

  //Open and Close Emoji
  const handleOpenEmoji = () => {
    setEmojiOpen(true)
  }
  const handleCloseEmoji = () =>{
    setEmojiOpen(false)
  }

  //Chat start forma(iniciando pela ultima mensagem enviada)
  useEffect(() =>{
    if(body.current.scrollHeight > body.current.offsetHeight){
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
    }
  }, [list])
  
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

      <div ref={body} className="chat-window-body">
        {list.map((i, k) => (
          <MessageItem key={k} data={i} user={user} />
        ))}
      </div>

      <div className="chat-window-emojiArea" style={{height: emojiOpen ? '350px' : '0px'}}>
        <EmojiPicker
          width={'100%'}
          height={'100%'}
          searchDisabled
          skinTonesDisabled
          onEmojiClick={({ emoji }) => setText(text + emoji)}
        />
      </div>

      <div className="chat-window-footer">
        <div className="chat-window-pre">
          <div className="window-btn" onClick={handleCloseEmoji} style={{width: emojiOpen ? 40 : 0}}><CloseIcon style={{color: '#919191'}} /></div>
          <div className="window-btn" onClick={handleOpenEmoji}><InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#919191'}} /></div>
        </div>

        <div className="chat-window-input">
          <input className='window-input' placeholder='Digite uma mensagem' type="text" value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div className="chat-window-pos">
          {text == '' &&
            <div className="window-btn" onClick={handleMicClick}>
              <MicIcon style={{color: listening ? '#126ECE' : '#919191'}} />
            </div>
          }
          {text !== '' &&  
            <div className="window-btn" onClick={handleSendClick}>
              <SendIcon style={{color: '#919191'}} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}
