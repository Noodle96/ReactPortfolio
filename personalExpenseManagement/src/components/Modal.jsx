import React,{useState} from 'react'
import cerrarBtn from './../img/cerrar.svg';
const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const [nameGasto, setNameGasto] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [categoria , setCategoria] = useState('');

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
                <legend>New Expense</legend>
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
