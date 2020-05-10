const multer = require('multer');//importa o multer que é responsavel por upload de arquivos
const path = require('path');//O módulo Path fornece uma maneira de trabalhar com diretórios e caminhos de arquivo.

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..','..', 'uploads'),//desta maneira em todos os sistemas operacionais será possivel encontrar a pasta desejada
        filename: (req,file,cb) => {
            const ext = path.extname(file.originalname);//o nome real do arquivo
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`)
        },
    }),
};

//mgbs@discente.ifpe.edu.br
