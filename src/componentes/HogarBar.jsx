import '../estilos/hogarbar.css';

import gpb from '../assets/gpb.png';
import pami from '../assets/pami.png';
import sisa from '../assets/sisa.png';

const HogarBar = () => {
  return (
    <div className='hogar_bar'>
        <div className='hogar_bar-contenedor'>
          <img src={gpb} alt="provincia de Buenos Aires" />
        </div>
        <div className='hogar_bar-contenedor'>
          <img src={pami} alt="Pami" />
        </div>
        <div className='hogar_bar-contenedor'>
          <img src={sisa} alt="Sisa" />
        </div>
    </div>
  )
}

export default HogarBar