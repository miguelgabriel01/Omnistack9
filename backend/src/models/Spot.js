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
}, {
    toJSON:{
        virtuals:true,//toda vez que um spot for convertido em JSON, vai calcular os virtuais automaticamente
    }
});

//toda vez que o thumbmail for listado, será criado pelo javascript um novo campo
SpotSchema.virtual('thumbmail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbmail}`//todos os dados dos spot que está sendo listado
})

module.exports = mongoose.model('Spot', SpotSchema);//cria a tabela de cadasytro de Spot

//mgbs@discente.ifpe.edu.br
