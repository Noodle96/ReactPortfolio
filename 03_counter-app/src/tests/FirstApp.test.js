
import React from 'react'
import {render} from "@testing-library/react"
import FirstApp from "../FirstApp";

describe('Pruebas en FirstApp', () => {
    test('Deberia mostrar el mensaje "RUSSELL AI"', () => { 
        const saludo_evaluar = 'RUSSELL AI';
        //producto renderizado de lo quiero mostrar
        const {getByText} = render(<FirstApp saludo={saludo_evaluar}/>);
        expect(getByText(saludo_evaluar)).toBeInTheDocument();
     })
});
