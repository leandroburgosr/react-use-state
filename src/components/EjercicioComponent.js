import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const EjercicioComponent = ({ year }) => {

    const [actual, setYearNow] = useState(year);
    const nextYear = e => {
        setYearNow(actual + 1);
    }
    const prevYear = e => {
        setYearNow(actual - 1);
    }

    const cambiarYear = e => {
        let dato = parseInt(e.target.value);
        if (Number.isInteger(dato)) {
            setYearNow(dato);
        } else {
            setYearNow(year);
        }

    };

    return (
        <div>
            <h2>Ejercio</h2>
            <strong className='label-green'>
                {actual}
            </strong>
            <p>
                <button onClick={nextYear}>Siguiente</button>
                &nbsp;
                <button onClick={prevYear}>Anterior</button>
            </p>
            <p>
                Cambiar año:
                <input onChange={e => cambiarYear(e)} type='text' placeholder='Cambia el año'></input>
            </p>
        </div>
    )
}

EjercicioComponent.prototype = {
    year: PropTypes.number.isRequired
}