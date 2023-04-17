import React,{useState} from 'react'
import Mensaje from './Mensaje';
import cerrarBtn from './../img/cerrar.svg';
const Modal = ({setModal, animarModal, setAnimarModal,guardarGasto}) => {
    const [mensaje, setMensaje] = useState('');
    const [nameGasto, setNameGasto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria , setCategoria] = useState('');

    const ocultarModal = () => {
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if([nameGasto.trim(), categoria.trim()].includes('')){
            setMensaje('Todos los campos son obligatorios');
            setTimeout(() => {
                setMensaje('');
            }, 3000);
            return;
        }
        guardarGasto({nameGasto, cantidad, categoria});
        ocultarModal();
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
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}
            >
                <legend>New Expense</legend>
                {mensaje && 
                    <Mensaje tipo = "error">{mensaje}</Mensaje>
                }
                <div className="campo">
                    <label htmlFor="nombreGasto">Expense:</label>
                    <input
                        id='nombreGasto'
                        type="text"
                        placeholder='Add expense Name'
                        value={nameGasto}
                        onChange = { e => setNameGasto(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Amount:</label>
                    <input
                        id='cantidad'
                        type="number"
                        placeholder='Add expense amount'
                        value = {cantidad}
                        onChange = { e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Category:</label>
                    <select
                        name=""
                        id="categoria"
                        value = {categoria}
                        onChange = { e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Select --</option>
                        <option value="ahorro">Saving</option>
                        <option value="comida">Food</option>
                        <option value="casa">Home</option>
                        <option value="gastos">Others expenses</option>
                        <option value="ocio">Leisure</option>
                        <option value="salud">Health</option>
                        <option value="suscripciones">Suscriptions</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Add Expense"
                />  
            </form>
        </div>
  )
}

export default Modal
