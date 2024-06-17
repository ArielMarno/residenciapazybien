import '../estilos/instalaciones.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//imagenes para carusel
import piscina from '../assets/residencia/piscina.webp';
import residencia from '../assets/residencia/residencia.webp';
import residencia2 from '../assets/residencia/residencia2.webp';
import residencia3 from '../assets/residencia/residencia3.webp';
import residencia4 from '../assets/residencia/residencia4.webp';
import residencia5 from '../assets/residencia/residencia5.webp';


const Instalaciones = () => {
  return (
    <div className='instalaciones' id='instalaciones'>
      <aside>
        <Carousel autoPlay stopOnHover infiniteLoop swipeable={false} className='carusel'>
            
            <div>
              <img src={residencia5} alt='loby'/>
            </div>
            <div>
              <img src={residencia} alt='sala'/>
            </div>
            <div>
              <img src={residencia2} alt='habitacion'/>
            </div>
            <div>
              <img src={residencia4} alt='camas'/>
            </div>
            <div>
              <img src={residencia3} alt='baño'/>
            </div>
            <div>
               <img src={piscina} alt='piscina' />
            </div>
            
          </Carousel>
      </aside>
      <main>
        <h2>Instalaciones</h2>
        <div className='parrafos'>
          <p>Ofrecemos habitaciones confortables con opciones 
          de 2, 3 y 4 camas, todas equipadas con <span>climatización 
          y ventilación</span> directa al exterior. Además, disponemos 
          de <span>habitaciones especiales</span> para aquellos residentes 
          que necesitan cuidados adicionales, equipadas con 
          <span>camas ortopédicas</span> para su comodidad.</p>
          <p>Nuestras áreas comunes, como comedores, salas de 
          estar y patio exterior, están diseñadas para ser <span>espacios amplios y luminosos</span>, fomentando la interacción 
          social y el entretenimiento.</p>
          <p>Para brindar comodidad a las familias, hemos creado 
          áreas donde pueden pasar tiempo mientras visitan a 
          sus seres queridos. Además, <span>contamos con ascensores</span> que facilitan el acceso a todas las áreas del hogar, 
          rampas para garantizar la accesibilidad de todos 
          nuestros residentes, un <span>lavadero dedicado</span> para garantizar la limpieza y el cuidado de la ropa de nuestros residentes, y <span>oficinas de enfermería</span> disponibles 
          en cada piso.</p>
        </div>
      </main>
    </div>
  )
}

export default Instalaciones