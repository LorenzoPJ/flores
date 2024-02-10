// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import '../app.css';
import andreaM from '../assets/andrea2.gif';
import nore from '../assets/norelys.gif';


const FloresApp = () => {
  const [nombre, setNombre] = useState('');
  const [flor, setFlor] = useState(null);
  const [mostrarAgradecimiento, setMostrarAgradecimiento] = useState(false);
  const [clicEnFlorAndrea, setClicEnFlorAndrea] = useState(false);
  const [clicEnFlorNorelys, setClicEnFlorNorelys] = useState(false);
  const [verMas, setVerMas] = useState(false);

  useEffect(() => {
    let timer;
    if (mostrarAgradecimiento) {
      timer = setTimeout(() => {
        setMostrarAgradecimiento(false);
        setVerMas(true);
      }, 3500); // 1 minuto en milisegundos
    }
    return () => clearTimeout(timer);
  }, [mostrarAgradecimiento]);

  const handleChange = (e) => {
    setNombre(e.target.value);
  };

  const mostrarFlor = () => {
    // Lógica para determinar qué tipo de flor mostrar según el nombre
    if (nombre.toLowerCase() === 'andrea' ) {
      setFlor('margarita');
    } else if (nombre.toLowerCase() === 'norelys' || nombre.toLowerCase() === 'norelys ') {
      setFlor('rosa');
    } else {
      setFlor('mensaje');
    }
  };

  const handleClickFlor = () => {
    // Mostrar el mensaje de agradecimiento solo si es la primera vez que se hace clic en cada flor
    if (nombre.toLowerCase() === 'andrea' && !clicEnFlorAndrea) {
      setMostrarAgradecimiento(true);
      setClicEnFlorAndrea(true);
    } else if ((nombre.toLowerCase() === 'norelys' || nombre.toLowerCase() === 'norelys ') && !clicEnFlorNorelys) {
      setMostrarAgradecimiento(true);
      setClicEnFlorNorelys(true);
    }
  };

  // Animación de la flor
  const florAnimation = useSpring({
    opacity: flor ? 1 : 0,
    transform: flor ? 'translate(0%, 0%)' : 'translate(-50%, -50%)', // Cambia la posición
    from: { opacity: 0, transform: 'translate(-50%, -50%)' },
  });

  return (
    <div className="card">
      <h1>¡Tengo una sorpresa para ti!</h1>
      <label>
        Ingresa tu nombre:
        <input type="text" value={nombre} onChange={handleChange} />
      </label>
      <div className="button-container">
        <button onClick={mostrarFlor}>¡Ver Sorpresa!</button>
      </div>
      {flor && (
        <animated.div style={florAnimation} className="flower-container">
          {flor === 'margarita' ? (
            <>
              <Margarita onClick={handleClickFlor} clicEnFlor={clicEnFlorAndrea} />
              {mostrarAgradecimiento && clicEnFlorAndrea && (
                <p> <b>¡Gracias por recibir mi detalle!</b></p>
              )}
              
            </>
          ) : flor === 'rosa' ? (
            <>
              <Rosa onClick={handleClickFlor} clicEnFlor={clicEnFlorNorelys} />
              {mostrarAgradecimiento && clicEnFlorNorelys && (
                <p> <b>¡No se si te gustan las rosas, pero queria darte aunque sea virtual! <br></br>Gracias por recibir mi detalle!</b></p>
              )}
              {verMas && <p>Ver más <Link to="/FlowerDrawer"><b>sorpresa</b></Link></p>}
            </>
          ) : (
            <p>Lo siento, no eres la persona indicada para recibir una sorpresa de mi parte!!.</p>
          )}
        </animated.div>
      )}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Margarita = ({ onClick, clicEnFlor }) => {
  const margaritaAnimation = useSpring({
    from: { transform: 'scale(0.8)' },
    to: { transform: 'scale(1)' },
  });

  return (
    <animated.div style={{ ...margaritaAnimation, color: 'purple' }} className="flower">
      <img src={andreaM} alt="Margarita animada" onClick={onClick} />
      {!clicEnFlor && <p className="clic-aqui-message">¡Da clic en tu margarita!</p>}
    </animated.div>
  );
};

// eslint-disable-next-line react/prop-types
const Rosa = ({ onClick, clicEnFlor }) => {
  const rosaAnimation = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  });

  return (
    <animated.div style={{ ...rosaAnimation, color: 'purple' }} className="flower">
      <img src={nore} alt="Rosa animada" onClick={onClick} />
      {!clicEnFlor && <p className="clic-aqui-message">¡Da clic en tu rosa!</p>}
    </animated.div>
  );
};

export default FloresApp;