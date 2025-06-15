import React from 'react';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
 function Card1() {
  return (
    <div className="car"style={{display:'flex',justifyContent:"space-around"}}>
    <div className="card" style={{ width: '18rem' }}>
      <img src="im1.jpg" className="card-img-top" alt="Imagen de ejemplo" />
      <div className="card-body">
        <h4 className="card-title">TOBAS</h4>
        <p className="card-text">Las clases comienzan la proxima semana tine una duracion de 2 meses solo sabados.</p>
        <Modal1 ></Modal1>
      </div>
    </div>

    </div>
  );
}
export default Card1;