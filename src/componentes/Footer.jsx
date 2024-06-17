import '../estilos/footer.css';

import logo from '../assets/logos/logoblanco.png';
import burbuja from '../assets/icons/ubiceleste.png';

import tel from '../assets/icons/telefonoceleste.png';
import mail from '../assets/icons/mailceleste.png';

import face from '../assets/icons/faceceleste.png';
import ig from '../assets/icons/igceleste.png';
import wsp from '../assets/icons/whatsappceleste.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_logo'>
        <a href="#"><img src={logo} alt="logo hogar paz y bien " /></a>
      </div>
      <div className='footer_contenedor-contacto'>
        <div className='footer_telefono'>
          <div>
            <img src={tel} alt="teléfono" />
            <p>+54 9 2246 52-2405</p>
          </div>
          <div>
            <img src={mail} alt="email" />
            <p>hogar_pazybien@yahoo.com.ar</p>
          </div>
          <div className='footer_domicilio'>
              <img src={burbuja} alt="burbuja de busqueda" />
              <p>Calle 15 N° 1563, Santa Teresita (Bs. As.)</p>
          </div>
        </div>

        <div className='footer_redes'>
          <p>Nuestras Redes</p>
          <div>
            <a href="https://www.facebook.com/profile.php?id=100057413261479&mibextid=LQQJ4d"><img src={face} alt="facebook" /></a>
            <a href="https://www.instagram.com/hogar_paz_y_bien/"><img src={ig} alt="instagram" /></a>
            <a href="http://wa.me/5492246518472"><img src={wsp} alt="whatsapp" /></a>
          </div>
        </div>

        <div className='footer_nav'>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#seguridad">Seguridad e Higiene</a>
          <a href="#instalaciones">Instalaciones</a>
          <a href="#contacto">Contacto</a>
        </div>

      </div>
      <div className='linea'></div>
      <div className='copy'>
        <div className='copy_contenedor'>
          <p>©Copyright 2024 Hogar Paz y Bien. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado por <a href="https://sunfloweragencia.com/">SunFlower Agencia Digital.</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer