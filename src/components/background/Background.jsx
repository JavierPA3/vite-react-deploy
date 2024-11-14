import { Downbar } from '../downbar/Downbar'
import { Icons } from '../icons/Icons'
import './background.css'
export const Background = () => {
  return (
    <>
    <div className='iconsContainer'>
    <Icons image='img/My Computer.png' name='Mi equipo'/>
    <Icons image='img/Certificate.png' name='Certificados'/>
    <Icons image='img/Internet Connection Wizard.png' name='Navegador'/>

    </div>
    <Downbar/>
    </>
  )
}
