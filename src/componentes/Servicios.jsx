import '../estilos/servicios.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//imagenes para carusel
import servicios from '../assets/servicios/servicio.webp';
import servicios2 from '../assets/servicios/servicio2.webp';
import servicios3 from '../assets/servicios/servicio3.webp';

const Servicios = () => {
  return (
    <div className='servicios' id='servicios'>
      <aside>
        <Carousel autoPlay stopOnHover infiniteLoop swipeable={false} className='carusel'>
          <div>
            <img src={servicios} alt='personal'/>
          </div>
          <div>
            <img src={servicios2} alt='peluquera'/>
          </div>
          <div>
            <img src={servicios3} alt='actividades didacticas' />
          </div>
        </Carousel>
      </aside>
      <main>
        <h2>Servicios</h2>
        <div className='parrafos'>
          <p>Nuestra residencia ofrece control médico y asistencia organizada por un <span>equipo de enfermería</span>, incluyendo enfermeros profesionales, auxiliares y <span>asistentes geriátricos</span> para atención personalizada. <br />El área Preventivo Social cuenta con trabajadores sociales y otros profesionales externos para <span>actividades de integración y estimulación</span>. Realizamos <span>evaluaciones y controles clínicos</span> periódicos. Además, ofrecemos:</p>
          <ul>
            <li>Asistencia psicológica para pacientes y familias.</li>
            <li>Dietas personalizadas a cargo de nutricionistas(desayuno, almuerzo, merienda y cena).</li>
            <li>Supervisión terapéutica farmacológica.</li>
            <li>Atención kinesiológica y terapia ocupacional.</li>
            <li>Entretenimientos y celebración de eventos(cumpleaños, fiestas patrias, fechas religiosas).</li>
            <li>Suministro y mantenimiento de ropa de cama y toallas, así como lavado y guardado de ropa personal.</li>
            <li>Servicios de peluquería, manicura y podología.</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Servicios