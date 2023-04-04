import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
    const [pacientes, setPacientes] = useState([]);
    const [pacienteToEdit, setPacienteToEdit] = useState({});
    return (
        <div className="container mx-auto mt-20">
            <Header />
            <div className=" mt-12 md:flex">
                <Formulario
                    pacientes = {pacientes}
                    setPacientes = {setPacientes}
                    pacienteToEdit = {pacienteToEdit}
                    
                />
                <ListadoPacientes
                    pacientes = {pacientes}
                    setPacienteToEdit = {setPacienteToEdit}
                />
            </div>

        </div>    
    )
}

export default App
// 'Droid Sans Mono', 'monospace', monospace