import '../estilos/headerbar.css';

import tel from '../assets/icons/telefonoblanco.png';
import mail from '../assets/icons/mailblanco.png';

import ig from '../assets/icons/igblanco.png';
import face from '../assets/icons/faceblanco.png';
import wsp from '../assets/icons/whatsappblanco.png';

const HeaderBar = () => {
  return (
    <div className='header_bar' id='inicio'>
        <div className='header_bar-contacto'>
          <div>
            <img src={tel} alt="telefono" /><p> +54 9 2246 52-2405</p>
          </div>
          <div>
            <img src={mail} alt="sobre" /><p>hogar_pazybien@yahoo.com.ar</p>
          </div>
        </div>

        <div className='header_bar-socials'>
          <a href="https://www.facebook.com/profile.php?id=100057413261479&mibextid=LQQJ4d"> <img src={face} alt="facebook" /> </a>
          <a href="https://www.instagram.com/hogar_paz_y_bien/"> <img src={ig} alt="instagram" /> </a>
          <a href="http://wa.me/5492246518472"> <img src={wsp} alt="whatsapp" /> </a>
        </div>
      </div>
  )
}

export default HeaderBar