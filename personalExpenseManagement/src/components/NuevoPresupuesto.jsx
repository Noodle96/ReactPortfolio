import React, { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    const [mensaje, setMensaje] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!Number(presupuesto) || Number(presupuesto) < 0){
            setMensaje('Presupuesto Inválido');
            setTimeout(() => {
                setMensaje('');
            }, 3000);
        }else{
            setMensaje('');
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handleSubmit} className='formulario'>
                <div className="campo">
                    <label htmlFor="budget">Define Budget</label>
                    <input
                        value = {presupuesto}
                        onChange = {(e) => setPresupuesto(e.target.value)}
                        id='budget'
                        className='nuevo-presupuesto'
                        type="text"
                        placeholder='Add your budget'
                    />
                </div>
                <input type="submit" value="Add" />
                {
                    mensaje &&
                    <Mensaje
                        tipo='error'
                    >{mensaje}</Mensaje>
                }
            </form>
        </div>
  )
}

export default NuevoPresupuesto
