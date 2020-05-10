//importação de..
const express = require('express');//importa o express que trata as rotas
const multer = require('multer');//importa o multer que é o responsavel pelo upload de arquivos
const UploadConfig = require('./config/Upload');//importa o arquivo dde configuração de arquivos

//controllers
const SessionController = require('./controllers/SessionController')//importa o arquivo de controler
const SpotController = require('./controllers/SpotController');//importa o arquivo de controler
const DashBoardController = require('./controllers/DashBoardController');//importa o controller que lista apenas os espaços cadastrados de determinado usuario especifico
const BookingController = require('./controllers/BookingController');//responsavel pela reserva do espaço


const routes = express.Router();
const upload = multer(UploadConfig)//arquivo de configuração de upload


routes.post('/sessions', SessionController.store);//Rota para criação de usuarios

routes.get('/spots', SpotController.index);//rota responsavel por listar os espaços cadastrados
routes.post('/spots', upload.single('thumbmail'), SpotController.store);//rota para cadastro de espaço.

routes.get('/dashboard', DashBoardController.show);//lista os espaços cadastrados pelo usuario especifico

routes.post('/spots/:spot_id/bookings', BookingController.store);//rota resposavel por fazer a reserva do espçao

/**
 * o upload.single é usado pq é apenas uma foto que será salva por cadastro. se fosse mais de uma seria usado o (upload.array)
 */

module.exports = routes;//exporta o arquivo de rotas

//mgbs@discente.ifpe.edu.br
