import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import { FirebaseContext } from '../src/Context/Firebase';
import { app, auth, db } from '../src/Firebase/Config';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <FirebaseContext.Provider value={{ app, auth, db }}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </FirebaseContext.Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
