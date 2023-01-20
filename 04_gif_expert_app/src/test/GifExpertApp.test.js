import {shallow} from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en el componente GifExpertApp', () => {
    test('Deberia hacer toMatchSnapshot correctamente', () => { 
        const wrapper = shallow(<GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();
    });
});