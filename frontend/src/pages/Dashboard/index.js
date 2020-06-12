import React, { useEffect, useState } from 'react';//importa o react para o arquivo.  O useEfect é uma função 
import { Link } from 'react-router-dom';
import api from '../../services/api';//faz a importação do arquivo api.js na pasta services
import './style.css';//importa o css para a pagina

export default function Dashboard(){//o nome da função deve ser igual a pasta que contem os arquivos
    const  [spots,setSpots] = useState([]);
    
    useEffect(() => {
        
        //função responsavel por listar os Spost criados...
        async function loadSpots(){
         
            const user_id = localStorage.getItem('User');//constante que armazena o ID do usuario salvo no localStorage
            const response = await api.get('/dashboard', {//rota responsavel ṕor listar na API
                headers : { user_id }//ID do usuario
            }); 

            setSpots(response.data)
            console.log(response.data)
        }
         
        loadSpots();//reponsavel por chamar a função 
    }, []);//Toda vez que os os elemtos do array mudam em decorrencia do uso do usuario pela na aplicação, o useEfect é chamado outra vez.
           //Um array vazio significa que o useEfect so irá ser execultado uma unica vez.
    
    return (
       <>
       
       <ul className="spot-list">
        {spots.map(spot => (
         <li key={spot._id}>
             <header style={{ backgroundImage: `url(${spot.thumbmail_url})`}} />
              <strong>{spot.company}</strong>
              <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
         </li>
        ))} 
       </ul>

       <Link to="/new">
          <button className="btn">Cadastrar novo Spot</button> 
       </Link>
       </>
    )
}