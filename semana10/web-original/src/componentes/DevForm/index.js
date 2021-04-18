import React, { useState, useEffect } from 'react';
import './style.css';

function DevForm({ onSubmit }) {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_usuario, setGithub] = useState('');
  const [techs, setTechs] = useState('');
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err)
      },
      {
        timeout: 3000,
      }
    )
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
        github_usuario,
        techs,
        latitude,
        longitude
    }
    const response = await onSubmit(data);
    if (response.status === 200) {
        setGithub('');
        setTechs('');
    }
  }

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-block'>
                <label htmlFor='github_usuario'>Usuário do Github</label>
                <input
                    name='github_usuario'
                    id='github_usuario'
                    value={github_usuario}
                    required
                    onChange={e => setGithub(e.target.value)} />
            </div>
            <div className='input-block'>
                <label htmlFor='techs'>Tecnologias</label>
                <input
                    name='techs'
                    id='techs'
                    value={techs}
                    required
                    onChange={e => setTechs(e.target.value)} />
            </div>
            <div className='input-group'>
                <div className='input-block'>
                    <label htmlFor='latitude'>Latitude</label>
                    <input
                        name='latitude'
                        id='latitude'
                        value={latitude}
                        required
                        onChange={e => setLatitude(e.target.value)} />
                </div>
                <div className='input-block'>
                    <label htmlFor='longitude'>Longitude</label>
                    <input
                        name='longitude'
                        id='longitude'
                        value={longitude}
                        required
                        onChange={e => setLongitude(e.target.value)} />
                </div>
            </div>
            <button type='submit'>Salvar</button>
        </form>
    )
}

export default DevForm;