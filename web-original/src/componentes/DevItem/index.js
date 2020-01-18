import React from 'react';
import './style.css';

function DevItem({ dev }) {
    return (
        <li className='dev-item'>
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
    );
};

export default DevItem;