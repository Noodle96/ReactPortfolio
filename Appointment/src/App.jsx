import { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
function App() {
  return (
    <Fragment>
        <Header />
        <Formulario />
        <ListadoPacientes />

    </Fragment>    
  )
}

export default App
// 'Droid Sans Mono', 'monospace', monospace