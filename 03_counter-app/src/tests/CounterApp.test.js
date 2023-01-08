import React from 'react'
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp', () =>{
    test('Deberia mostrar <CounterApp /> correctamente', () => { 
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
     });

     test('Deberia de mostrar el value enviado por props', () => {
        const wrapper = shallow(<CounterApp value = {100}/>);
        const value_received = wrapper.find('#counterInicial').text().trim();
        // console.log(value_received);
        expect(value_received).toEqual('100');

     });
});