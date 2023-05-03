import React from 'react'

const useSelectMonedas = () => {
    let archivo = "test.txt";
    const setArchivo = (nameArchivo) => {
        archivo = nameArchivo;
    }
    console.log("desde useSelect: ");
    console.log(archivo);
    return [archivo, setArchivo];
}

export default useSelectMonedas
