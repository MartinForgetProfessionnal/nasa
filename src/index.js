import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import './components/Fonts/Nasa.ttf';
import './components/Fonts/LMS.ttf';
import './components/Fonts/Typewriter.ttf';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
