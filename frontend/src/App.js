import React from 'react';//o useStat serve para criar estados dentro da nossa aplicação
import './App.css';
import logo from './assets/logo.svg';//importação de img

import Routes from './routes';//importa o arquivo que contem as rotas da aplicação

function App() {

  //a função App vai gerar todo este HTML abaixo
  return (
   <div className="container">
     <img src={logo} alt="AirCnC"/>

     <div className="content">

      < Routes />

     </div>
   </div>    
  );
}

export default App;
