import React from 'react'

const NuevoPresupuesto = () => {
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario'>
                <div className="campo">
                    <label htmlFor="budget">Define Budget</label>
                    <input
                        id='budget'
                        className='nuevo-presupuesto'
                        type="text"
                        placeholder='Add your budget'
                    />
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
  )
}

export default NuevoPresupuesto
