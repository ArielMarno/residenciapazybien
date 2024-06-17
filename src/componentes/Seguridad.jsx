import '../estilos/seguridad.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//imagenes para carusel
import seguridad from '../assets/seguridad/seguridad.webp';
import seguridad2 from '../assets/seguridad/seguridad2.webp';
import seguridad3 from '../assets/seguridad/seguridad3.webp';

const Seguridad= () => {
  return (
    <div className='seguridad' id='seguridad'>
      <main>
          <h2>Seguridad e Higiene</h2>
          <div className='parrafos'>
          <p>Nuestro establecimiento cumple con las <span>normas de 
          seguridad e higiene requeridas por Defensa Civil y 
          PAMI</span>, contando con una infraestructura adecuada 
          que incluye:</p>
          <ul>
            <li>Sistema contra incendios con cañería seca exclusiva 
            para bomberos y una cisterna.</li>
            <li> Alarma centralizada contra incendios y extintores 
            distribuidos estratégicamente.</li>
            <li>Escalera de escape y dos puertas de salida al exterior, con fácil acceso por el contrafrente.</li>
            <li>Generador eléctrico de respaldo.</li>
            <li>Luces de emergencia en pasillos, áreas comunes y 
            accesos.</li>
            <li>Desinfección permanente y barandas de sujeción en 
            todos los pasillos.</li>
            <li>Camaras de seguridad.</li>
          </ul>
          <p>Esta estructura garantiza la <span>seguridad y bienestar</span> de todos nuestros residentes.</p>
          </div>
      </main>
      <aside>
        <Carousel autoPlay stopOnHover infiniteLoop swipeable={false} className='carusel'>
            <div>
              <img src={seguridad} alt='pasillos'/>
            </div>
            <div>
              <img src={seguridad2} alt='desinfección'/>
            </div>
            <div>
              <img src={seguridad3} alt='barandas'/>
            </div>
          </Carousel>
      </aside>
    </div>
  )
}

export default Seguridad