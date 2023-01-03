describe('Pruebas en el archivo demo.test.js', () => {
    test('deben de ser iguales los strings', () => { 
        //Inicializacion
        const mensaje = 'Hola Mundo';
    
        //estimulo
        const mensaje2 = "Hola Mundo";
    
        //observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    
    })
});