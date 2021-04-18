import React, { useState, useEffect } from 'react';
import '../css/app.css';
import API from '../services/api';
import '../css/main.css';
import '../css/sidebar.css';
import DevItem from './DevItem';
import DevForm from './DevForm';

export default function App() {
  
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await API.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, [])

  async function handleAddDev(data) {
    const response = await API.post('/devs', data);
    setDevs([ ...devs, response.data ]);
    return response;
  }

    return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}/>
        </aside>
        <main>
        <ul>
          {devs.map( dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
      </div>
    );
}