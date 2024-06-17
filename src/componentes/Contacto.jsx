import '../estilos/contacto.css';
import tel from '../assets/icons/telefonoceleste.png';
import mail from '../assets/icons/mailceleste.png';

const Contacto = () => {
  return (
    <div className='contacto' id='contacto'>
      <div className='contacto_contenido'>
        <div className='contacto_text'>
            <h2>Contáctenos!</h2>
            <p>Complete el formulario y nos comunicaremos a la brevedad.</p>
        </div>
        <div className='contacto_icons'>
          <div><img src={tel} alt="telefono" /><p>+54 9 2246 52-2405</p></div>
          <div><img src={mail} alt="email" /><p>hogar_pazybien@yahoo.com.ar</p></div>
        </div>
        <div className='contacto_mapa'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1602.7331543436674!2d-56.712349070966205!3d-36.54286795152653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1716767073440!5m2!1ses!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className='formulario'>
        <form action="">
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" placeholder='Nombre' />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' id='email' placeholder='Email' />
          </div>
          <div>
            <label htmlFor="telefono">Teléfono:</label>
            <input type="text" name='telefono' id='telefono' placeholder='Teléfono' />
          </div>
          <div>
            <label htmlFor="consulta">Su consulta:</label>
            <textarea name="consulta" id="consulta" placeholder='Escriba su mensaje aqui'></textarea>
          </div>
          <button type='submit' className='button'>Enviar Consulta</button>
        </form>
      </div>

    </div>
  )
}

export default Contacto