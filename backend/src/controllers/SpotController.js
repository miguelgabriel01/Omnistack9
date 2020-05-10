const Spot = require('../models/Spot');//importa o modelo de Spot
const User = require('../models/User');//importa o modelo de usuario

module.exports = {

  //responsavel por listar os espaços de acordo com a tecnologia trabalhada no local
  async index(req,res) {
    const { tech } = req.query;//cria uma constante que com o paramentro especifico da nusca
 
    const spots = await Spot.find({ techs: tech });//busca por todos os itens correspondentes a "palavra chave"
 
    return res.json(spots);//retorna em json todos os resultados encontrados aparti da palavra chave
   },
 
 
   //responsavel por agendar os espaços com as informações especificas sobre o mesm
    async store(req,res) {
    
        
        /*console.log(req.body)//informações sobre o cadastro do espaço
        console.log(req.file)//informações sobre o arquivo enviado, que neste caso é uma foto
        */

        const { filename } = req.file;//constante com o arquivo do upload
        const { company, techs, price } = req.body;//const que recebe do corpo da requisição o preço, a empresa e as tecnologias trabalhadas no local
        const { user_id } = req.headers;//o id do usuario que fez o cadastro do espaço e que pegamos pelo header

        const user = await User.findById(user_id);//verifica se realmente existe algum usuario com essse ID

        if(!user){//verifica se existe o usuario não existe
            return res.status(400).json({ error: 'Usuario não existe em nosso registro de dados. por favor faça um cadaastro em nosso sistema para poder continuar ultilizando nossos serviços'})
        }//se não existir ele reposnde com uma msg em formato de JSON

        const spot = await Spot.create({
            user: user_id,//id do usuario
            thumbmail: filename,//arquivo que foi feito o upload
            company,//a empresa que disponibiliza o espaço
            techs: techs.split(',').map( tech => tech.trim()),//como as tecnologias vão ser varias e possivelmente vão ser separadas por virgulas
            //elas vão ser salvas em um array separadas por virgula.por isso o (techs.split(',')). mas elas podem vim com espaços depois ou antes da virgula. por isso essa função TRIM, retira os espaços entre as palavras
            price//o preço que a empresa vai cobrar sobre o espaço fornecido
        })
     return res.json(spot)//retorna os dados salvos em formato JSON
    }
};

//mgbs@discente.ifpe.edu.br
