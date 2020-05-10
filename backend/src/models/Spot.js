const mongoose = require('mongoose');//importa o mongoose

const SpotSchema = new mongoose.Schema({

    thumbmail: String,//foto da sala
    company: String,//empressa responsavel pelo espaço
    price: Number,//valor do aluguel do espaço
    techs: [String],//tecnologias que são trabalhadas na empresa
    user: {
        type: mongoose.Schema.Types.ObjectId,//faz referencia ao usuario que criou este registro
        ref: 'User'//referencia da tabela User(usuarios)
    }
});

module.exports = mongoose.model('Spot', SpotSchema);//cria a tabela de cadasytro de Spot

//mgbs@discente.ifpe.edu.br
