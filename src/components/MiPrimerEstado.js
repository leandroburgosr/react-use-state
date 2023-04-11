import React, { useState } from 'react'

export const MiPrimerEstado = () => {

    /*let nombre = "Leandro Burgos";
    const cambiarNombre = e => {
        nombre = "Jair Robles"
    };*/

    const [nombre, setNombre] = useState("Leandro Burgos");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

    return (
        <div>
            <h3>Componente : MiPrimerEstado</h3>
            <strong>
                {nombre}
            </strong>
            &nbsp;
            <button onClick={e => cambiarNombre(e, 'Jair Robles')}>Canbiar por Jair</button>
            <hr />

            <input onKeyUp={e => cambiarNombre(e, e.target.value)} type='text' placeholder='Cambia el nombre'></input>

        </div>
    )
}
