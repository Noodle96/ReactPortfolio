import React, { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {
    const [mensaje, setMensaje] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!presupuesto || presupuesto < 0){
            setMensaje('Presupuesto Inválido');
            setIsValidPresupuesto(false);
            setTimeout(() => {
                setMensaje('');
            }, 1500);
            return;
        }
        setMensaje('');
        setIsValidPresupuesto(true);
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handleSubmit} className='formulario'>
                <div className="campo">
                    <label htmlFor="budget">Define Budget</label>
                    <input
                        value = {presupuesto}
                        onChange = {(e) => setPresupuesto(Number(e.target.value))}
                        id='budget'
                        className='nuevo-presupuesto'
                        type="number"
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
