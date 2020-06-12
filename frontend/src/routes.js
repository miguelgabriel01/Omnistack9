//arquivo responsavel pelas rotas da aplicação
import React from 'react';//importa o react para a pagina
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//importação da pasta Pages
import Login from './pages/Login';//importa a pagina de login, responsavel por verificar se o usuario está apto a entrar no sistema para o arquivo de rotas
import New from './pages/New';//importa o arquivo responsavel por cadastrar um novo espaço, para o arquivo de rotas
import Dashboard from './pages/Dashboard';//importa o dashboard, arquivo responsavel por listar os espaços cadastrados, para o arquivo de rotas

export default function Routes(){
    return(
        //rotas e componentes
        < BrowserRouter>
         < Switch>
           < Route path="/" exact component={Login} />{/**informa a rota e qual componente vai ser chamado. a propiedade "exact server para que a aplicação só chame a rota se o caminho  for exato ao que foi informado" */}
           < Route path="/dashboard" component={Dashboard} /> {/** informa a rota e qual componente vai ser chamado*/}
           < Route path="/new" component={New} />{/**informa a rota e qual componente vai ser chamado */}
         </Switch>
        </BrowserRouter>

    )
}


/**
 * o Switc vai impedir que mais de uma rota seja executada por vez
 */




















/**
 * ----------------------------------------------------------------------------
 * 
 * O Router (BrowserRouter) é um componente responsável por fazer
 *  o roteamento dos nossos componentes. O Switch é feito para comparar 
 * as Route e iterará sobre todos os seus elementos e renderizará o primeiro 
 * que corresponda ao local atual. O Route é o componente responsável por
 *  determinada rota do sistema.29 de jan. de 2019
 */