import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
body{
animation: gradient 10s ease alternate infinite;
background-image: radial-gradient(circle, #601281, #491467, #35124d, #230e34, #14031c);no-repeat;
background-size: 300% 300%;
font-family: sans-serif;
display: flex;
align-items: center;
justify-content: center;
color: white;
height: 100vh;
}

@keyframes gradient{
    from{
        background-position: 0 50%;
    }
    to{
        background-position: 100% 50%;
    }
    
}
}
  
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  *{
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
  }


`


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


