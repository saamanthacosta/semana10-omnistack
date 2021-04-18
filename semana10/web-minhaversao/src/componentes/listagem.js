import React from 'react';
import '../css/main.css';

export default function Listagem(props) {
  return(
    <>
    {props.listaDeDevs.length > 0 ? 
      <main>
        <ul>
          {props.listaDeDevs.map( dev => (
            <li className='dev-item' key={dev._id}>
              <header>
                <img src={dev.avatar_url} alt={dev.nome} />
                <div className='user-info'>
                  <strong>{dev.nome}</strong>
                  <span>{dev.tecnologias.join(', ')}</span>
                </div>
              </header>
              <p>{dev.biografia}</p>
              <a href={`https://github.com/${dev.github_usuario}`}>Acessar perfil no Github</a>
            </li>
          ))}
        </ul>
      </main>
      : null
      }    
    </>
  )
}