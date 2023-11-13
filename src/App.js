
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

import React, { useState } from 'react'

function App() {
  const [text, setText] = useState('dark')
  const [mode, setMode] = useState('light');

  function handlerDark() {

    if (mode === 'light') {
      setMode('dark')
      setText('light')
      document.body.style.backgroundColor = '#333333'
    }
    else {
      setMode('light')
      setText('dark')
      document.body.style.backgroundColor = '#eaeaea'

    }
    
  }

  return (
    <>
      <Navbar title="My Web" Mode={mode} Text={text} HandlerDark={handlerDark} />
      <Content Mode={mode} HandlerDark={handlerDark} Text={text} />

    </>
  );
}

export default App;
