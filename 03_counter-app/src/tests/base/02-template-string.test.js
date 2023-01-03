import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en el archivo 02-template-string-js', () => {
    test('It should return hola + name', () => { 
        const nombre = 'Russell';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+ nombre);
     });

     test('It should return hola + defaultName if nombre is undefined',()=>{
        const saludo = getSaludo();    
        // console.log(saludo);   
        expect(saludo).toBe('Hola defaultName'); 
    });
});

