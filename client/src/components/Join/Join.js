import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import wave1 from '../../icons/1.png';
import wave2 from '../../icons/2.png';
import wave3 from '../../icons/3.png';

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    //JOIN FORM
    <div className="joinOuterContainer">
      <a className="gitAnchor" href="https://github.com/VitorValandro/Real-Time-Chat" target="_blank">
        Github &nbsp;<BsArrowRight size={22}/>
      </a>
      <div className="joinInnerContainer">
        <h1 className="heading">Entre em uma sala</h1>
        <div>
          <p>Apelido</p>
          <input className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <p>Sala</p>
          <input className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Entrar</button>
        </Link>
      </div>

      {/*WAVE ANIMATION*/}
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div className="wave waveTop" style={{backgroundImage: "url(" + wave1 + ")"}}></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle" style={{ backgroundImage: "url(" + wave2 + ")" }}></div>
        </div>
        <div className="waveWrapperInner bgBottom">
        <div className="wave waveBottom" style={{ backgroundImage: "url(" + wave3 + ")"}}></div>
        </div>
      </div>
    </div>
  );
}
