import React from 'react';
import {createRoot} from 'react-dom/client';
// import '../src/styles/styles.scss';
import './index.css'

// import reportWebVitals from './reportWebVitals';

import {GifExpertApp} from './GifExpertApp' ;

const root = createRoot(document.getElementById('root'));
root.render(<GifExpertApp />);



// reportWebVitals();
