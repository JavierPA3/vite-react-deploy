import { AboutMe } from '../../apps/certificados/AboutMe';
import './window.css';

const componentMap = {
  AboutMe, 
};

export const Window = ({ app }) => {
  const SelectedComponent = componentMap[app]; // Busca el componente en el mapa

  return (
    <>
      <div className="totalWindow">
        <div className="topWindow">
          <div className="divIconsWindows">
            <img src="img/Exit.png" alt="close" className="windowsIcons" />
            <img src="img/Maximize.png" alt="maximize" className="windowsIcons" />
            <img src="img/Minimize.png" alt="minimize" className="windowsIcons" />
          </div>
        </div>
        <div className="windowContent">
          {SelectedComponent ? <SelectedComponent /> : <p>Componente no encontrado</p>}
        </div>
      </div>
    </>
  );
};
