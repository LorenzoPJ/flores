// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import '../app.css';
import eney from '../assets/nore.jpeg';
import eny from '../assets/manta.jpeg';
import gol from '../assets/gol.mp4'
import conozco from '../assets/conozco.mp4'

function FlowerDrawer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='todo'>
      {loading ? (
        <div className="loading-message">
          <p>Cargando sorpresa...🤗</p>
        </div>
      ) : (
        <>
          {/* Galería de Fotos */}
          <header className='ha'><h2>Tus Fotos🤩</h2></header>
          <div className="gallery">
            <div className="cards">
              <img src={eney} alt="Foto 1" />
              <p>Tristonga 😥</p>
            </div>
            <div className="cards">
              <img src={eny} alt="Foto 1" />
              <p>En Manta 🥰</p>
            </div>
            
            
            {/* Agrega más imágenes según sea necesario */}
          </div>

          {/* Galería de Videos */}
          <header className='ha'><h2>Tus Videos😝</h2></header>
          <div className="gallery">
            <div className="cards">
              <iframe
                width="560"
                height="315"
                src={gol}
                title="Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>Tu gol ⚽😍</p>
            </div>
            <div className="cards">
              <iframe
                width="560"
                height="315"
                src={conozco}
                title="Video 2"
                frameBorder="0"
                
                allowFullScreen
              ></iframe>
              <p>Como te conoci⚽🧎‍♀️</p>
            </div>
            
            
          </div>
        </>
      )}
    </div>
  );
}

export default FlowerDrawer;
