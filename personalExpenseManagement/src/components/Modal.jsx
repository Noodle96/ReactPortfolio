import React from 'react'
import cerrarBtn from './../img/cerrar.svg';
const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    return (
        <div className='modal'>
            <div className="cerrar-modal">
                <img
                    src={cerrarBtn}
                    alt="btn cerrar"
                    onClick={ocultarModal} 
                />
            </div>
            <form
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}
            >
                <legend>Nuevo Gasto</legend>
            </form>
        </div>
  )
}

export default Modal
