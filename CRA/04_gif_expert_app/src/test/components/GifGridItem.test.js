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
     test('<GifGridItem /> debería de tener un páarafo con el title',() => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
     });

     test('img de <GifGridItem /> deberia de setearse con los elemetos adecuados',() => {
        const img = wrapper.find('img');
        // console.log(img.props());
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
     });
     test('div de <GifGridItem /> deberia de tener la clase  animate_bounce', () => {
        const div = wrapper.find('div');
        // console.log(div.props().className);
        const className = div.props().className;
        console.log(className);
        expect(className.includes('animate__bounce')).toBe(true);
     });
});