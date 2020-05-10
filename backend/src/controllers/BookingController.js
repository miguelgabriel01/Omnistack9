const Booking = require('../models/Booking');//importa o model de Booking(reservas)

module.exports = {
 async store(req, res) {
     const { user_id } = req.headers;//const que recebe o id do usuario pelo cabeçalho(headers)
     const { spot_id } = req.params;//const que recebe o id do espaço por meio de parametros
     const { date } = req.body;//const que recebe a data do pedido de aluguel de espaço

     const booking = await Booking.create({
         user: user_id,//id do usuario
         spot: spot_id,//id do espaço
         date,//data do pedido
     });

     //responsavel por trazer as informações sobre o usuario e e do espaço disponivel
     await booking.populate('spot').populate('user').execPopulate()

     
     return res.json(booking);//retorna um json com as informações sobre o pedidode reserva
 }
}

//mgbs@discente.ifpe.edu.br
