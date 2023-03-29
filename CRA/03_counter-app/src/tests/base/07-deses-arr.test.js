import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en el archivo 07-deses-arr', () => {
    test('{retornaArreglo()} debe de retornar una lista con un string y un numero',() => {
        const arr = retornaArreglo();
        const [letras, numeros] = retornaArreglo();
        // console.log(arr);
        expect(arr).toEqual(['ABC',123]);// OK
        // console.log(typeof letras); // string
        // console.log(typeof numeros); // number

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

    });
});