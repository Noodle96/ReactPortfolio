import React from 'react'
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp', () =>{
    let  wrapper = shallow(<CounterApp />);
    beforeEach(() => {
        wrapper= shallow(<CounterApp />);
    });


    test('Deberia mostrar <CounterApp /> correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    });

     test('Deberia de mostrar el value enviado por props', () => {
        const wrapper = shallow(<CounterApp value = {100}/>);
        const value_received = wrapper.find('#counterInicial').text().trim();
        // console.log(value_received);
        expect(value_received).toEqual('100');

     });
     test('El props value debe de incrementar al hacer click en el boton +1', ()=> {
        wrapper.find('button').at(0).simulate('click'); // button +1
        // console.log(btn_0.html());
        const value_received = wrapper.find('#counterInicial').text().trim();
        // console.log(value_received);
        expect(value_received).toBe('626');
     });

     test('El props value debe de decrementar al hacer click en el boton -1', ()=> {
        wrapper.find('button').at(2).simulate('click'); // button -1
        // console.log(btn_0.html());
        const value_received = wrapper.find('#counterInicial').text().trim();
        // console.log(value_received);
        expect(value_received).toBe('624');
        
     });

     test('El props value debería de resetearse al hacer click en el btn reset', () =>{
        const valueInitial = 1000;
        const wrapper = shallow(<CounterApp value = {valueInitial}/>);
        wrapper.find('button').at(2).simulate('click'); // button -1
        wrapper.find('button').at(2).simulate('click'); // button -1
        wrapper.find('button').at(1).simulate('click'); // button Reset
        const value_received = parseInt(wrapper.find('#counterInicial').text().trim());
        // console.log(typeof value_received); // integer
        expect(value_received).toEqual(valueInitial);
     });

});