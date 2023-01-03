import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en el arcchivo 08-imp-exp', () => {
    test('{getHeroeById(id)} debería de retornar un héroe por id', () => { 
        const id = 1;
        const heroe = getHeroeById(id);
        // console.log(heroe);
        const heroeData = heroes.find(h => h.id ===id);
        // console.log(heroeData);
        expect(heroe).toEqual(heroeData);
     });
     test('{getHeroeById(id)} debería de retornar undefined si id no existe',() => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
     });
     
     test('{getHeroesByOwner(nameOwner)} deberia de retornar una areglo con los heroes con owner passed', () =>{
        const owner = 'Marvel'
        const heroesByOwner = getHeroesByOwner(owner);
        // console.log(heroesByOwner);
        const getHeroesByOwnerExpected = heroes.filter( (heroe) => heroe.owner === owner );
        expect(heroesByOwner).toEqual(getHeroesByOwnerExpected);
     });
});