import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2? family = M + PLUS + Arredondado + 1c: wght @ 500 & display = swap');
  
  #root{

    height: 100vh;
    width:60%:
    padding-top:400px;
   
  }

body{
animation: gradient 10s ease alternate infinite;
background-image: radial-gradient(circle, #1b0126, #150221, #0e021c, #070116, #01000d);


background-size: 300% 300%;
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

  html{
    padding: 0;
  }

  

`


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


