
import React from 'react'
// import {render} from "@testing-library/react"
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import FirstApp from "../FirstApp";

describe('Pruebas en FirstApp', () => {
    // test('Deberia mostrar el mensaje "RUSSELL AI"', () => { 
    //     const saludo_evaluar = 'RUSSELL AI';
    //     //producto renderizado de lo quiero mostrar
    //     const {getByText} = render(<FirstApp saludo={saludo_evaluar}/>);
    //     expect(getByText(saludo_evaluar)).toBeInTheDocument();
    //  })

    test('Deberia mostrar <FirstApp/> correctamente', () => { 
        const saludo_evaluar = 'RUSSELL AI';
        const wrapper = shallow(<FirstApp saludo={saludo_evaluar}/>);
        // console.log(wrapper);
        expect(wrapper).toMatchSnapshot();
     })

     test('Deberia de mostrar el subtitulo enviado por props', () =>  {
        const saludo = 'Welcome to enzyme testing';
        const subtitulo = 'subtitle in enzyme';
        const wrapper = shallow(
            <FirstApp
                 saludo={saludo}
                 subtitles={subtitulo}
            />
        );
        const textoSubtitulo = wrapper.find('#subtitle').text();
        // console.log( textoSubtitulo);
        expect(textoSubtitulo).toBe(subtitulo);

     });
});
