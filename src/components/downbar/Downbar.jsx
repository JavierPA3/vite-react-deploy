import { useEffect, useState } from 'react';
import './Downbar.css';

export const Downbar = () => {
    return (
        <>
            <div className="barra">
                <button className="iconButton2">
                    <img src='./img/2.png' alt="logo" className="logo" />
                </button>
                
                <div className='rightCorner'>
                    <img src='./img/taskbar_resize.png' alt="logo" className="taskBar" />
                    
                    <button className="iconButton2">
                        <img src='./img/Volume.png' alt="Volume" className="imagesCornerLogo" />
                    </button>
                    
                    <button className="iconButton2">
                        <img src='./img/Bluetooth Devices.png' alt="Bluetooth" className="imagesCornerLogo" />
                    </button>
                    
                    <button className="iconButton2">
                        <img src='./img/Disable Network Connection.png' alt="Network" className="imagesCornerLogo" />
                    </button>
                    
                    <img src='./img/taskbar_resize.png' alt="Resize" className="taskBar" />
                    
                    <button className="iconButton2">
                        <img src='./img/Setup Language.png' alt="Language" className="imagesCornerLogo" />
                    </button>
                </div>
            </div>
        </>
    );
};
