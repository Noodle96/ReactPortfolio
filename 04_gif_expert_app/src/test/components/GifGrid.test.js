import React from "react";
import {shallow} from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
describe('Pruebas en el componente GifGrid', () => {
    const category = 'template category';
    let wrapper = shallow(<GifGrid category={category}/>);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<GifGrid category={category}/>);
    });
    
    test('El componente <GifGrid /> deberia de mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    })    
});