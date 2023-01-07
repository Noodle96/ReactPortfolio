import React from 'react';
//import  ReactDOM  from 'react-dom'; react v17
import { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';
import FirstApp from './FirstApp';
import './index.css'


// Before
//import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// // After
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);


const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<FirstApp saludo='RUSSELL AI'  />);
//root.render(<CounterApp value={100} />);

//ANTES
//ReactDOM.render(<FirstApp />,divRoot); react v17



