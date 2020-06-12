import React, { useState } from 'react';//importa o react para o arquivo. o useStat serve para criar estados dentro da nossa aplicação
import api from '../../services/api';//faz a importação do arquivo api.js na pasta services


export default function Login({ history }){// O histiry é usado para fazer navegação

          //estado é qualquer informação que será arm,azenada em um componente
      const [email, setEmail] = useState('');//a informação inicial é vazia


  async function handleSubmit(event){

    event.preventDefault();//esta parte previne uma atividade normal do form/submite que é a de redirecionar o usuario para uma outra pagina

    const response = await api.post('/sessions', {email})//envia o email informado pelo usuario
      //faz uma chamanda a API para a rota responsavel por iniciar a sessão com o usuario
    
      console.log(response)

    const { _id } = response.data;
    console.log(_id)//responsavel por testar se a constante está funcionando perfeitamente

   console.log('Olá mundo!!!');//msg que aparecerar no 'console' do navegador para teste
   console.log(email);//teste para saber se o value está pegando o valor do email

   localStorage.setItem('User', _id);//armazena no localstorage, que é um tipo de banco de dados do navegador, o id do usuario que fez o login no sistema
   
   history.push('/dashboard');//responsavel por fazer o redirecionamento para outra pagina;
  }

    return (
        <>
        <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail *</label>
        <input
         type="email"
          id="email"
           placeholder="Seu melhor email"
           value={email}
           onChange = { event => setEmail(event.target.value)}//recebe o valor informado no imput
        />

        <button className="btn" type="submit">Entrar</button>
      </form>
      </>

    );
}

//o React permite a criação de tags vazias. já que o componente deve estar dentro de uma div no geral.
//o nome dessa tecnica é fragmento. uma div que bão aparece( <> </> );  