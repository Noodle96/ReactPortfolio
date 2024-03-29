import { Fragment, useState } from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import iconoNuevoGasto from "./img/nuevo-gasto.svg";


function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
    const [modal, setModal] = useState(false);
    const [animarModal, setAnimarModal] = useState(false);
    const [gastos, setGastos] = useState([]);

    const handleNuevoGasto = () => {
        setModal(true);
        setTimeout(() => {
            setAnimarModal(true);
        }, 500);
    }
    const guardarGasto = (objGasto) => {
        objGasto.id = generarId();
        objGasto.fecha = Date.now();
        setGastos([...gastos, objGasto]);
    }
    return (
        <div>
            <Header
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />
            {isValidPresupuesto && (
                <Fragment>
                    <main>
                        <ListadoGastos
                            gastos = {gastos}
                        />
                    </main>
                    <div className="nuevo-gasto">
                        <img
                            src={iconoNuevoGasto}
                            alt="icono nuevo gasto"
                            onClick={handleNuevoGasto}
                        />
                    </div>
                </Fragment>
            )}
            {modal && (
                <Modal
                    setModal = {setModal}
                    animarModal = {animarModal}
                    setAnimarModal = {setAnimarModal}
                    guardarGasto = {guardarGasto}
                />
            )}
        </div>
  );
}

export default App;
