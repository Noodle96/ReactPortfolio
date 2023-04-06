import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
const Header = ({presupuesto, setPresupuesto}) => {
    return (
        <header>
            <h1>Personal Expense Management</h1>
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto = {setPresupuesto}
            /> 
        </header>
  )
}

export default Header
