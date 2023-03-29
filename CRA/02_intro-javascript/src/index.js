import heroes, { tiposCartas }from './data/heroes.js'


const types = 'Comun';
const  nameCard = 'Caballero';
let elixir = 4;

//console.log(types,nameCard,elixir);

const caracteristicas = `${types} ${nameCard}`;

//console.log(`description : ${caracteristicas}`);

function getDate(nameC){
    return `The ${nameCard} celebrate in 01-01-2025`;
}

//console.log(`This week get up: ${getDate(nameCard)}`);




//OBJETOS LITERALES[1]
const persona = {
    name : '2d',
    lastname : 'skriniar',
    age : 35,
    direction: {
        city : 'new york',
        zip : 90909,
        lat: 100.02,
        lng : 9983.21
    },
    statusNow: 'single', 
};

//console.log(persona);
//console.table(persona);+

//assign by reference
const persona2 = persona;
persona2.age=45;

//assign by cpy:
const persona3 = {...persona}
persona3.age = 55;

//console.log(persona); //.age = 45
//console.log(persona2); //.age = 45
//console.log(persona3); // .age = 55





//AREGLOS[2]
//const arreglo = new Array();

const arreglo = [1,2,3,4,7];
//arreglo.push(1);
let arreglo2 = [...arreglo,5];

//prototype.map() crea un nuevo error
const arreglo3 = arreglo2.map(function(num){
    //return Math.sqrt(num);
    return num*2;
});

//console.log(arreglo); // [1, 2, 3, 4, 7]
//console.log(arreglo2); // [1, 2, 3, 4, 7, 5]
//console.log(arreglo3); // [2, 4, 6, 8, 14, 10]




//FUNCIONES[3]

//clasic
function saludar0(name){
    return `Hola, ${name}`;
}
//console.log(saludar0('lodd'));


const saludar = function (name){
    return `Hola, ${name}`;
}
//saludar = 89;
//console.log(saludar('Eriksen'));
//console.log(saludar); // sin const => 89
//console.log(saludar); // con const => error => OK



//funciones de flecha o lamda
const saludar2 =  (name) =>{
    return `Hola, ${name}`;
}
//console.log(saludar2('tec'));
//ventajas => ligero, mas rapido de leer

const saludar3 =  (name) =>  `Hola, ${name}`;
//console.log(saludar3('teK'));
const getUser = () => 
     ({
        id : 34,
        username:'elias',
     });
//const user = getUser();
//console.log(user);

//examples
function getUserActivo(name){
    return {
        id: 4545,
        username:name,
    }
};
const userActivo = getUserActivo('GT-revels');
//console.log(userActivo);

// Con funcion flecha
const getUserActivo2 = (nombre) => ({
    id:6767,
    username:nombre,
});

const userActivo2 = getUserActivo2('GT-jyud');
//console.log(userActivo2);



//DESESTTRUCTURACION DE UNA OBJETO
// ASIGNACION DESESTRUCTURANTE
const civil = {
    name : '2d',
    lastname : 'skriniar',
    age : 35,
    direction: {
        city : 'new york',
        zip : 90909,
        lat: 100.02,
        lng : 9983.21
    },
    statusNow: 'single', 
};
//console.log(civil.name);

const {direction, lastname:apellidoCivil} = civil;
//console.log(direction);
//console.log(apellidoCivil);

const retornaPersona = (usuario) => {
    console.log(usuario);
}
//console.log(retornaPersona(civil) );

//con desestructuracion de objeto
const retornaPersona2 = ({age,name}) =>{
    console.log(age,name);
}
//console.log(retornaPersona2(civil));

const test = ({name, age}) => {
    return {
        nuevo_nombre : name,
        new_age : age,
        schoolCourse:{
            school: 'cs',
            course: 'discret mathematics',
        }
    }
}
const  {nuevo_nombre,new_age,schoolCourse:{school,course}} = test(civil);
//console.log(nuevo_nombre,new_age, school, course);



//DESESTRUCTURACION DE ARREGLOS
const cartasCR = ['princess','megaNight','babydragon'];
const [,p2] = cartasCR;
//console.log(p2);



const retornaArregloCartas = () => ['ABC',123];

const [letras,num] = retornaArregloCartas();
//console.log(letras, num);




const State_use = (valor) => [valor,()=>{console.log('Hola Mundo');}];

//const rpta = State_use('legendary');
//console.log(rpta); // expected output => ['legendary',f]

const [nombre, setNombre] = State_use('legendary');
//console.log(nombre);
//setNombre();
//console.log();State_use


//IMPORT AND EXPORT
// console.log(heroes);

const getHeroesById = (id) => heroes.find((element) => element.id === id);
//console.log( getHeroesById(2) );

const getHeroesByOwner = (owner) => {
    return heroes.filter((element) => element.owner===owner);
}
// console.log( getHeroesByOwner('DC') );

// console.log( tiposCartas );



//PROMESAS
// resolve: Es un  callback se ejecuta cuando la promesa es exitoso
//reject: Es un callback se ejecuta cuando la promesa falla
//setTimeout: ejecuta una tarea en cierto tiempo y recibe un callback



/*
const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //console.log('6 seg despues');
        const apiResult = getHeroesById(3);
        //console.log(apiResult);
        //resolve(apiResult);
        reject("No se pudo conectar con la Api");
    },3000);
});
*/



//promesa => then , catch , finally
// resolve = > then
// reject => catch
// finally after then and catch

/*
promesa.then((resultado) => {
    console.log('then de la promesa- resultado de la api', resultado);
}).catch(err => console.log(err));
*/


const getHeroeByIdAsync = (id) => {

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //console.log('6 seg despues');
            const apiResult = getHeroesById(id);
            //console.log(apiResult);
            //resolve(apiResult);
            //reject("No se pudo conectar con la Api");
            if(apiResult){
                resolve(apiResult);
            }else{
                reject("No se pudo conectar con la Api");
            }

        },3000);
    });

};

//getHeroeByIdAsync(3)
    // .then((heroe) => {
    // console.log('Heore: ', heroe)})
    // .catch(err => console.warn(err))




//FETCH
// const apiKey = "T7s9dmoxXTBiSi4c6Eh4ZHV6siNEBCpQ";
//const peticion  =  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then( (resp) => {
    // //console.log(resp)
    // resp.json().then( (data) => {
        // console.log(data);
    // })
// } ).catch(console.warn)



/*
peticion
    .then( (resp) => resp.json())
    .then(({data}) => {
        //console.log(data.images.original.url); //abc
        const {url} = data.images.original; //abc
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn)

*/

const getPrime = async() =>{
    return "funcion return a prime";
} // todo esto en una promesa

//getPrime().then(console.log)



const getImagen = async() => {
    const apiKey = "YYY";
    const respuesta  =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await respuesta.json();
    console.log(data);
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

}

//getImagen();

const alert = false;
let mensaje = (alert) ? 'This is a alert message' : 'nothing to do';
// console.log(mensaje);