import React from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import styled from '@emotion/styled'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition:  background-color .3s ease;
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer; 
    }
`
const Formulario = () => {
    const [archivo, setArchivo] = useSelectMonedas("a.out");
    console.log("Desde form. ");
    console.log(archivo);
    setArchivo("monos.txt");
    console.log(archivo);

    return (
        <form> 
            <InputSubmit type="submit" value="Cotizar"/>
        </form>
    )
}

export default Formulario
