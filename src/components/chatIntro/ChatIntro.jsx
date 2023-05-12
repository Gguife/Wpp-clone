import './ChatIntro.css'
import IntroWpp from '../../assets/intro-wpp.jpg'

export const ChatIntro = () => {
  return (
    <div className='chat-intro'>
      <img src={IntroWpp} alt="" />
      <h1>Manthenha seu celular conectado</h1>
      <h2>O whatsApp conecta ao seu telefone para sicronizar suas menssagens. <br />Para reduzir o uso de dados, conect seu telefone a uma rede WI-FI.</h2>
    </div>
  )
}

