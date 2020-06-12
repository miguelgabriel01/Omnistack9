import React, { useState, useMemo   } from 'react';//importa o react para o arquivo
import api from '../../services/api';//faz a importação da Api

import camera from '../../assets/camera.svg';//importa a img da camera 

//importa o css da pagina
import './style.css';

export default function New({ history }){//o nome da função deve ser igual a pasta que contem os arquivos
   const [ company, setCompany ] = useState('');
   const [ techs, setTechs ] = useState('');
   const [ price, setPrice ] = useState('');
   const [ thumbmail, setThumbmail ] = useState( null )//o valor deve ser null inicialmente pq não vamos trabalhar com textos nesse imput

   //toda vez que o usuario faz o upload de um arquivo(neste caso uma img), é criada uma variavel temporaria com valores diferentes que são usados para inserir o background-image no form de cadastro de Spot
   const preview = useMemo(() => {
       return thumbmail ? URL.createObjectURL(thumbmail) : null;
   }, [thumbmail])
    
    //função chamada quando o usuario acionar o submit no form
    async function handleSubmit( event ){
        event.preventDefault();//Evita que a caracteristica do form de enviar o usuario para uma poutra pagina apos o submit ser ativado.
        const data = new FormData();
        const user_id = localStorage.getItem('User');//ID do usuario que esta cadastrando o local recebido pelo localStorage
    
      //valores
      data.append('thumbmail', thumbmail);//Arquivo de foto
      data.append('company', company);//empresa dona do espaço
      data.append('techs', techs);//tecnologias trabalhadas no local
      data.append('price', price);//valor da diaria( opcional )
 
      //aqui chamamos a API no metodo post salvando os dados
       await api.post('/spots', data, {
        headers: { user_id }//ID do usuario recebido pelo localStorage
      })
        
       history.push('/dashboard');//apos salvar os dados, o usuario é redirecionado para a pagina DASHBOARD, onde é listado todos os espaços cadastrado por ele

   }

    return (
        <>
         <form onSubmit={handleSubmit}>

             <label id="thumbmail"
              style={{ backgroundImage: `url(${preview})`}} 
              className={thumbmail ? 'has-thumbmail' : ''}
              >
                 <input type="file" 
                  onChange = {event => setThumbmail(event.target.files[0])}/>
                 <img src={ camera } alt="Select img"/>
             </label>
            
            <label htmlFor="company">EMPRESA *</label>
            <input type="text"
            id="company"
            placeholder="Sua empresa incrivel"
            value={company}
            onChange={ event => setCompany(event.target.value)}
            />

            <label htmlFor="company">TECNOLOGIAS * <spam>( Separadas por virgulas )</spam> </label>
            <input type="text"
            id="techs"
            placeholder="Quais tecnologias usam?"
            value={techs}
            onChange={ event => setTechs(event.target.value)}
            />

            <label htmlFor="company">Valor da diaria <spam>( Em branco para gratuito )</spam></label>
            <input type="text"
            id="price"
            placeholder="Valor cobrado por dia"
            value={price}
            onChange={ event => setPrice(event.target.value)}
            />
            
            <button className="btn" type="submit">Cadastrar</button>

         </form>
        </>
    )
}