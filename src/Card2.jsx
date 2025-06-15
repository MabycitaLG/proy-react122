import React from 'react';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
 function Card2() {
  return (
    <div className="car"style={{display:'flex',justifyContent:"space-around"}}>
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://i.pinimg.com/736x/8d/5e/79/8d5e79d9489315128b6fe01598b4fc55.jpg" className="card-img-top" alt="Imagen de ejemplo" />
      <div className="card-body">
        <h4 className="card-title">CAPORALES</h4>
        <p className="card-text">Las clases son los dias lunes miercoles y viernes de 19:00 - 21:00.</p>
        <Modal2 ></Modal2>
      </div>
    </div>
</div>
  );
}
export default Card2;