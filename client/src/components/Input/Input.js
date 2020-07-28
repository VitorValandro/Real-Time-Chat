import React from 'react';

import './Input.css';
import { FiSend } from 'react-icons/fi';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Digite sua mensagem..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}><FiSend size={20}/></button>
  </form>
)

export default Input;