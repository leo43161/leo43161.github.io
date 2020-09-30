import React from 'react';
import CardExperiencia from './CardExperiencia';

const Experiencia = () => {
    return (
        <div className="owsla bg-blue">
            <div className="w-100 border-bottom text-white">
                <h2 className="text-center">Experiencia Laboral</h2>
            </div>
            <CardExperiencia></CardExperiencia>
            <CardExperiencia></CardExperiencia>
        </div>
    );
};

export default Experiencia;