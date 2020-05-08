const User = require('../models/User');//importa o modulo de usuario

module.exports = {
  async store(req,res) {
   const { email } = req.body;//salva em uma constante o dado do usuario que neste caso é um email

   let user = await User.findOne({ email });//recebe o email do usuario e verifica se um registro com esse mesmo email já foi criado

   if(!user){
     user = await User.create({ email });//recebe o email do usuario apos verificação e salva se n tiver um já cadastrado com esse email
   }
   else if(user){
       return res.json({ alert: "Usuario já possui conta com este E-mail. por favor, informe outro E-mail valido"})
   }


   return res.json( user );//retorna o resultado do cadastro como um json
}
};