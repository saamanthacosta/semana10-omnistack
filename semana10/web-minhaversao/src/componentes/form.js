import React from 'react';
import '../css/sidebar.css';

export default function Form(props) {
  return (
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={props.salvar}>
        <div className='input-block'>
          <label htmlFor='github_usuario'>Usuário do Github</label>
          <input name='github_usuario' id='github_usuario' onChange={props.onChange} value={props.usuario.github_usuario} />
        </div>
        <div className='input-block'>
          <label htmlFor='techs'>Tecnologias</label>
          <input name='techs' id='techs' onChange={props.onChange} value={props.usuario.techs} />
        </div>
        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='latitude'>Latitude</label>
            <input name='latitude' id='latitude' value={props.usuario.latitude} readOnly />
          </div>
          <div className='input-block'>
            <label htmlFor='longitude'>Longitude</label>
            <input name='longitude' id='longitude' value={props.usuario.longitude} readOnly />
          </div>
        </div>
        <button type='submit'>Salvar</button>
      </form>
    </aside>
  )
}