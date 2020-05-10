const mongoose = require('mongoose');//importa o mongoose

//tabela de reservas onde tem a relação entre o espaço e o usuario
const BookingSchema = new mongoose.Schema({
    date: String,//salvar a data do agendamento de horario
    aproved: Boolean,//um Boolean para informar se a reserva foi ou não aprovado
    
    //parte que faz referencia a outras tabelas, como a de usuario e espaço
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'//referencia a tabela de usuario
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'//referencia a tabela de espaços
    }

});

module.exports = mongoose.model('Booking', BookingSchema);//faz a exportação

//mgbs@discente.ifpe.edu.br
