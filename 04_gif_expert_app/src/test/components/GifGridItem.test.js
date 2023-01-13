import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {
    let wrapper = shallow(<GifGridItem />);
    beforeEach(() => {
        wrapper = shallow(<GifGridItem />);
    });


    test('Debería de mostrar <GifGridItem /> correctamente ', () => { 
        expect(wrapper).toMatchSnapshot();
     })
});