import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs', () => {
    test('La funcion getGifs deberia de retornar 9 elementos', async() => { 
        const gifs = await getGifs('cr7');
        expect(gifs.length).toBe(9);
    })
    test('La funcion getGifs deberia de retornar 0 elementos si no hay prop enviada', async() => { 
        const gifs = await getGifs('');
        // console.log(gifs);
        expect(gifs.length).toBe(0);
     })
});