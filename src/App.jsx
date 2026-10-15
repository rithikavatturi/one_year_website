
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Closing, Letter,Passcode,Question,Recap,Timer,Message,Music,Picture} from './components'
import LoveTerminal from './components/LoveTerminal';
import './index.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Passcode />} />
        <Route path="/question" element={<Question />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/recap/message" element={<Message />} />
        <Route path="/recap/music" element={<Music />} />
        <Route path="/recap/pictures" element={<Picture />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/love-terminal" element={<LoveTerminal />} />
        <Route path="/closing" element={<Closing />} />
      </Routes>
    </Router>
  )
}

export default App
