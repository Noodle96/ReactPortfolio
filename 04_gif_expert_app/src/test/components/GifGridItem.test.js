import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {
    const title = 'template_title';
    const url = 'https: //template.url';
    let wrapper = shallow(<GifGridItem title={title} url={url}/>);
    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url} />);
    });


    test('Debería de mostrar <GifGridItem /> correctamente ', () => { 
        expect(wrapper).toMatchSnapshot();
     })
});