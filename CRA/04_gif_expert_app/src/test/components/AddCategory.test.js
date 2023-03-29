

import React from 'react'; 
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en el componente <AddCategory />', () => {
    // const setCategory = () => {}
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory  setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory  setCategories={setCategories}/>);
    });


    test('EL componente <AddCategory /> debería de mostrarse correctamente ', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    test('Deberia de cambiar la caja de texto',() => {
        const input = wrapper.find('input');
        // console.log(input.html());
        const value = 'Hola mundo';
        input.simulate('change',{target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de llamarse a la funcíon setCategories ', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });
    test('Deberia de llamarse el setcategories y limpiar la caja de text', () => {
        const input = wrapper.find('input');
        const value = 'pii';

        //SIMULAR EL INPUTCHANGE
        input.simulate('change',{target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);

        //SIMULAR EL SUBMIT
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        // expect(setCategories).toHaveBeenCalled();
        // expect(setCategories).toHaveBeenCalledTimes(1); //the same
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // console.log(wrapper.find('p').text().trim());
        //verificando que la caja de texto sea ''
        expect(wrapper.find('p').text().trim()).toBe('');
    });
});