import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
    const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) || []);
    const [pacienteToEdit, setPacienteToEdit] = useState({});

    // useEffect(() => {
    //     const obtenerLS = () =>{
    //         const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) || [];
    //         setPacientes(pacientesLS);
    //     }
    //     obtenerLS();
    
    // }, []) // Only once
    
    useEffect(() => {
        // const setearPacientesToLS = () => {
        // }
        // setearPacientesToLS();
        localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }, [pacientes])
    

    const eliminarPaciente = (id) => {
        const pacientesActualizados = pacientes.filter( pacienteTemp => pacienteTemp.id !== id);
        setPacientes(pacientesActualizados);
        // console.log(pacientesActualizados); //good
        // console.log(pacientes); // bad
    }
;

    return (
        <div className="container mx-auto mt-20">
            <Header />
            <div className=" mt-12 md:flex">
                <Formulario
                    pacientes = {pacientes}
                    setPacientes = {setPacientes}
                    pacienteToEdit = {pacienteToEdit}
                    setPacienteToEdit =  {setPacienteToEdit}
                    
                />
                <ListadoPacientes
                    pacientes = {pacientes}
                    setPacienteToEdit = {setPacienteToEdit}
                    eliminarPaciente = {eliminarPaciente}
                />
            </div>

        </div>    
    )
}

export default App
// 'Droid Sans Mono', 'monospace', monospace