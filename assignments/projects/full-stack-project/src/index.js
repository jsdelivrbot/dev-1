import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';





ReactDOM.render(<App url="http://localhost:3001/api/notes"/>, document.getElementById('root'));

