import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardComponent = ({ imageUrl }) => {
    return (
        <div className="card m-3" style={{ width: '14rem' }}>
            <img
                src={imageUrl}
                className="card-img-top"
                alt="Imagen de la tarjeta"
                style={{ objectFit: 'cover', height: '10rem' }} // Establecer un tamaño fijo para la imagen
            />
            <div className="card-body">
                <h5 className="card-title">Título de la tarjeta</h5>
                <p className="card-text">
                    Aquí puedes añadir tu texto descriptivo sobre la tarjeta.
                </p>
                <a href="#" className="btn btn-primary">
                    Find Out!
                </a>
            </div>
        </div>
    );
};

export default CardComponent;
