import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-PE', {
            style: 'currency',
            currency: 'PEN',
        })
    }

     return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Imagen here</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Budget: </span>{formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Available: </span>{formatearCantidad(0)}
                </p>
                <p>
                    <span>Expenses: </span>{formatearCantidad(0)}
                </p>
            </div>
        </div>
  )
}

export default ControlPresupuesto
