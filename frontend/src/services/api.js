import axios from 'axios';//importa o axios que é responsavel por fazer o front, consumir a api

const api = axios.create({
    baseURL: 'http://localhost:3333',//porta que a aplicação vai rodar
})

export default api;//exporta a api