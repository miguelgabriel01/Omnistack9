const mongoose = require('mongoose');//importa o mongoose

const UserSchema = new mongoose.Schema({
    email: String,//email do usuario
});

module.exports = mongoose.model('User', UserSchema);//cria a tabela usuario