import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en el archivo 05-funciones.js', () => {
    test('{getUser()} Debería retornar un objeto', () => { 
        const userTest = {
            uid: '123456',
         username: 'Russell96'
        }
        const user = getUser();
        //expect(user).toBe(userTest); //falla
        //expected(received).toBe(expected);
        expect(user).toEqual(userTest);
     })

     test('{getUsuarioActivo(name)} debería retornar un objeto, funcion con parametro', () => {
        const nameTest = 'Russell96';
        const userTest = {
            uid: '123456',
            username: nameTest,
        }
        const user  = getUsuarioActivo(nameTest);
        expect(user).toEqual(userTest);
     })
});