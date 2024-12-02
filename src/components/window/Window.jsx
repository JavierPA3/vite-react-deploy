import React, { useState } from 'react';
import './window.css';
import { AboutMe } from '../../apps/certificados/AboutMe';
import { MoreAboutMe } from '../../apps/certificados/MoreAboutMe';
import { Symblog } from '../../apps/certificados/Symblog';
import { CrudOne } from '../../apps/certificados/CrudOne';
import { PitchEventing } from '../../apps/certificados/PitchEventing';
import { Porfolio } from '../../apps/certificados/Porfolio';
import { PythonApi } from '../../apps/certificados/PythonApi';
import { Tfg } from '../../apps/certificados/Tfg';
import { Clock } from '../../apps/clockApp/Clock';
import { WeatherApp } from '../../apps/weather/WeatherApp';
import { TerminalApp } from '../../apps/terminal/terminalApp';
import { Calculator } from '../../apps/calculadora/Calculator';
import { NoteBlock } from '../../apps/blocNotas/NoteBlock';
import { GamesFolder } from '../../apps/GamesFolder/GamesFolder';
import { MusicPlayerXP } from '../../apps/musicPlayer/MusicPlayerXp';
import { ContactsManagerXP } from '../../apps/contactManager/ContactManagerXp';
import { ToDoXP } from '../../apps/ToDo/ToDoXp';
import { PowerPointApp } from '../../apps/PowerPoint/PowerPointApp';
import { VideoPlayer } from '../../apps/videosXp/VideoPlayer';
const componentMap = {
  AboutMe,
  MoreAboutMe,
  Symblog,
  CrudOne,
  PitchEventing,
  Porfolio,
  PythonApi,
  Tfg,
  Clock,
  WeatherApp,
  TerminalApp,
  Calculator,
  NoteBlock,
  GamesFolder,
  MusicPlayerXP,
  ContactsManagerXP,
  ToDoXP,
  PowerPointApp,
  VideoPlayer,
};

export const Window = ({ app, onClose, imageWindow, nameWindow }) => {
  const SelectedComponent = componentMap[app];

  const [position, setPosition] = useState({ top: 0, left: 350 });
  const [size, setSize] = useState({ width: 950, height: 600 }); 
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    setOffset({
      x: e.clientX - position.left,
      y: e.clientY - position.top,
    });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        top: e.clientY - offset.y,
        left: e.clientX - offset.x,
      });
    }

    if (resizing) {
      const newWidth = e.clientX - position.left;
      const newHeight = e.clientY - position.top;

      setSize({
        width: Math.max(newWidth, 350),
        height: Math.max(newHeight, 250),
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    setResizing(false); 
  };

  const handleResizeStart = (e) => {
    e.preventDefault();
    setResizing(true); 
  };

  return (
    <div
      className="totalWindow"
      style={{
        top: position.top,
        left: position.left,
        width: size.width,
        height: size.height,
        position: 'absolute',
        userSelect: 'none', 
        overflow: 'hidden', 
      }}
      onMouseMove={handleMouseMove} 
      onMouseUp={handleMouseUp} 
      onMouseLeave={handleMouseUp} 
    >
      <div className="topWindow" onMouseDown={handleMouseDown}>
       <div className='topWindowIcon'>
       <img src={imageWindow} alt={nameWindow} className="newTopWindowIcon" />
       <p className="newTopWindowP">{nameWindow}</p>
       </div>
        <div className="divIconsWindows">
        
          <button className="iconButtonWindow" onClick={onClose}>
            <img src="img/Exit.png" alt="close" className="windowsIcons" />
          </button>
          <button className="iconButtonWindow">
            <img src="img/Maximize.png" alt="maximize" className="windowsIcons" />
          </button>
          <button className="iconButtonWindow">
            <img src="img/Minimize.png" alt="minimize" className="windowsIcons" />
          </button>
          
        </div>
      </div>

      <div className="windowContent">
        {SelectedComponent ? <SelectedComponent closeWindow={onClose} windowImage={imageWindow} /> : <p>Componente no encontrado</p>}
      </div>

      <div
        className="resizeHandle"
        onMouseDown={handleResizeStart} 
      />
    </div>
  );
};
