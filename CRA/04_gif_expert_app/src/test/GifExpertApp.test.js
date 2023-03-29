import {shallow} from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en el componente GifExpertApp', () => {
    test('Deberia hacer toMatchSnapshot correctamente', () => { 
        const wrapper = shallow(<GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();
    });

    // test('Debería de coincidir en elementos la lista de categorias', () => {
    //     const defaultCategories = ['xyz', 'abc'];
    //     const wrapper = shallow(<GifExpertApp defaultCategories={defaultCategories} /> );
    //     expect(wrapper).toMatchSnapshot();
    //     expect(wrapper.find('GifGrid').length).toBe(defaultCategories.length);
    // });
});