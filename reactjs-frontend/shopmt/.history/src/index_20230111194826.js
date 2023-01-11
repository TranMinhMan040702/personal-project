import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>,
);
reportWebVitals();
