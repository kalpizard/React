// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const name = 'PAME';
// const element = <h1>Hola , {name}</h1>;

// const user = {
//  name: 'Pame',
//  lastname :'Vega',
//  photo : 'https://picsum.photos/200'
// };

// function printName (user) {
//   return user.name +'  '+user.lastname;
// }

// function printNameV2(user) {
//   if (user){
//     return user.name +'  '+user.lastname;
//   } else {
//     return "Desconocido";
//   }
// }

// function printTernario (user) {
//   return user? user.name +'  '+user.lastname :"Desconocido";
// }

// const element2 = (
//   <h1>
//     Hello, {printTernario(null)}
//   </h1>
// );

// const imageElement = <img src = {user.photo}/>

// const element3 = React.createElement(
//   'h1', {className: 'saludo'}, 'Hola mundo');

// root.render(element3);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = 'PAME';
const element = <h1>Hola , {name}</h1>;

const user = {
 name: 'Pame',
 lastname :'Vega',
 photo : 'https://picsum.photos/200'
};

function printName (user) {
  return user.name +'  '+user.lastname;
}

function printNameV2(user) {
  if (user){
    return user.name +'  '+user.lastname;
  } else {
    return "Desconocido";
  }
}

function printTernario (user) {
  return user? user.name +'  '+user.lastname :"Desconocido";
}

const element2 = (
  <h1>
    Hello, {printTernario(null)}
  </h1>
);

const imageElement = <img src = {user.photo}/>

const element3 = React.createElement(
  'h1', {className: 'saludo'}, 'Hola mundo');

// root.render(element3);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
