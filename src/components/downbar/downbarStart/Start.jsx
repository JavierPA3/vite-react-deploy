import './start.css';
import { IconsDown } from '../iconsDownBar/IconsDown';
export const Start = () => {
  return (
    <>
     <main className="downbarStart">
  <div className="startTitle">
    <img src="img/Moon.jpg" className="whistlerImg" alt="Profile" />
    <span>Administrator</span>
  </div>
    <hr className='startTitleGradient'/>
  <div className="startContent">
    <div className='leftStartContent'>
      <IconsDown image="img/clock.png" name="Clock" alt="Clock" />
      <IconsDown image="img/cloudSun.png" name="Weather" alt="WeatherApp"/>
      <IconsDown image="img/Notepad.png" name="Notas" alt='NoteBlock'/>
      <IconsDown image="img/Game Controller.png" name="Juegos" alt='GamesFolder'/>
      <IconsDown image="img/.png" name="Grabadora" alt='GamesFolder'/>
      <IconsDown image="img/.png" name="XpMusic" alt='GamesFolder'/>

          </div>
    <div className='rightStartContent'>
      <IconsDown image="img/Command Prompt.png" name="terminalApp"  alt='TerminalApp'/>
      <IconsDown image="img/Input Panel.png" name="Calculadora" alt='Calculator'/>
      <IconsDown image="img/.png" name="Contactos" alt='GamesFolder'/>
      <IconsDown image="img/.png" name="" alt='GamesFolder'/>
      <IconsDown image="img/.png" name="Juegos" alt='GamesFolder'/>
      <IconsDown image="img/.png" name="Juegos" alt='GamesFolder'/>

    </div>
  </div>
  <div className="startFooter">
  <div className="divStartFooter">
    <img src="img/Standby.png" className="divStartFooterImg" alt="Standby" />
    <span>Cerrar sesión</span>
  </div>
  <div className="divStartFooter">
    <img src="img/Power.png" className="divStartFooterImg" alt="Power" />
    <span>Apagar</span>
  </div>
</div>

</main>

    </>
  );
};
