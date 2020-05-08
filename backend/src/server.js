const express = require('express');//faz a ultilização do express
const mongoose = require('mongoose')//vamos usar o mongo db
const routes = require('./routes');//faz a importação do arquivo de rotas

const app = express();//diz que a const recebe o modulo express

mongoose.connect('mongodb+srv://miguelgabriel:miguelgabriel123@mgbsproject-gcytw.mongodb.net/semana9?retryWrites=true&w=majority', {//não esquecer de trocar usuario e senha e escolher o nome do banco que se deseja usar
    useNewUrlParser: true,//esse trecho não interfere na aplicação, apenas mostra uma msg no terminal. para tirar essa msg, basta colocar essa linha de codigo
    useUnifiedTopology: true,//esse trecho não interfere na aplicação, apenas mostra uma msg no terminal. para tirar essa msg, basta colocar essa linha de codigo
})

app.use(express.json());//agora o express identifica e pode trabalhar com Json

//sempre esta parte do codigo deve vim abaixo do "app.use(express.json())"
app.use(routes);


const PORT = 3333;//inicia a aplicação na porta informada
app.listen(PORT,() => {

  console.log("Servidor iniciado com sucesso");//informa que a aplicação foi iniciada com sucesso
  console.log("Para derrubar servidor aperte CTRL + C  ");//procedimento para derrubar aplicação
  console.log("mgbs@discente.ifpe.edu.br");//informa o propietario
  console.log("github: https://github.com/miguelgabriel01");//informa o repositorio do propietario da aplicação
  console.log("Cristo vem!!!");//mensagem motivacional sobre CRISTO REI!!!!
  console.log("︻╦̵̵̿╤─ ҉ - - - - - - -")
});

/**
 * Criar bando no site https://www.mongodb.com/cloud/atlas
 * 
 */