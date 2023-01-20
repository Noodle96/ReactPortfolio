import React from "react";
import {shallow} from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente GifGrid', () => {
    const category = 'template category';

    useFetchGifs.mockReturnValue({
        data: [],
        loading: true,
    });
    let wrapper = shallow(<GifGrid category={category}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        wrapper = shallow(<GifGrid category={category}/>);
    });
    
    test('El componente <GifGrid /> deberia de mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar las imagenes retornadas de la funcion useFetchGifs',()=>{
        const gifs = [{
            id: 'template_id',
            title: 'template_title',
            url: 'https://templateURL.jpg',
            type: 'template_type',
            username: 'template_username ',
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});