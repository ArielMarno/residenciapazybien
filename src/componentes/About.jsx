import '../estilos/about.css';

import vision from '../assets/icons/vision.png';
import mision from '../assets/icons/mision.png';
import valores from '../assets/icons/valores.png';

const about = () => {
  return (
    <div className='about'>
      <div className='about_items'>
        
        <div className='about_items-title'>
          <img src={vision} alt="telescopio" />
          <h2>Visión</h2>
        </div>
        <p>Ser líderes en servicios de cuidado para adultos mayores,
        siendo reconocidos por nuestra calidad, ética y confianza. Queremos 
        fomentar la autonomía y mejorar la calidad de vida.
        Destacarnos en la investigación gerontológica e innovación, buscando estar a la vanguardia
        y ser un modelo de responsabilidad social.</p>
      </div>

      <div className='about_items'>
        <div className='about_items-title'>
          <img src={mision} alt="bandera" />
          <h2>Misión</h2>
        </div>
        <p>Ofrecer atención integral de alta calidad que mejore la vida 
        física, mental, intelectual y social de los adultos mayores.
        Proporcionar atención especializada y actividades recreativas, respetando la individualidad de cada persona.
        Mantener siempre un trato cordial y respetuoso para que se sientan seguros y valorados.</p>
      </div>

      <div className='about_items'>
        <div className='about_items-title'>
          <img src={valores} alt="valores" />
          <h2>Valores</h2>
        </div>
        <p>Guiados por el amor y la confianza, priorizamos la calidad y seguridad en todas nuestras acciones. Trabajamos con transparencia y respeto valorando la diversidad y mateniendo el compromiso con detectar y abordar los factores que 
        afectan a nuestros residentes, promoviendo la cooperación y escucha activa.</p>
      </div>
      
    </div>
  )
}

export default about