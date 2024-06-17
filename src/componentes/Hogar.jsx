import '../estilos/hogar.css';
import aside from '../assets/hogarfondo.webp';

const Hogar = () => {
  return (
    <div className='hogar' id='nosotros'>
        <div className='hogar_imagen'>
          <img src={aside} alt="anciano y acompañante" />
        </div>
        <div className='hogar_contenido'>
          <h2>Hogar Paz y Bien</h2>
          <p>Hace 32 años, allá por 1992, comenzamos con el sueño de poder brindarle a nuestros adultos mayores un espacio distinto.</p>
          <p>Nuestro proyecto siguió creciendo y logramos adaptamos a cada requerimiento básico, terapéutico y socio-cultural, con profesionales de calidad y un mobiliario adecuado para cubrir todas sus necesidades.</p>
          <a className='button' href="http://wa.me/5492246518472">Más Información</a>
        </div>  
    </div>
  )
}

export default Hogar