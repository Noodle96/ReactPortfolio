import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
    return (
        <header>
            <h1>Personal Expense Management</h1>
            {isValidPresupuesto ? (
                <p>Presupusto vaido</p>
            ) : (
                <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto = {setPresupuesto}
                setIsValidPresupuesto = {setIsValidPresupuesto}
            /> 
            )}
            
        </header>
  )
}

export default Header
