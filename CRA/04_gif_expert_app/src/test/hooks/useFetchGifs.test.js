import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs',()=>{
    test('Deberia de retornar el estado inicial', () => { 
        const {result} = renderHook(() =>  useFetchGifs('messi'));
        // console.log(resp);
     })
});