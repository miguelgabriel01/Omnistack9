const Spot = require('../models/Spot');//importa o modelo de spot

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;//recebe e guarda em uma constante o id pelo headres do usuario especifico

        const spots = await Spot.find({ user: user_id });//faz uma listagem de toodos os espaços cadastrados pelo usuario especifico

        return res.json(spots);//retorna um json com os espaços cadastrados do usuario especifico
    }
}

//mgbs@discente.ifpe.edu.br
