import React, { Component } from 'react';
import '../css/app.css';
import { usuario } from '../usuario';
import Formulario from './form';
import Listagem from './listagem';
import { cadastrarDesenvolvedor, listarTodosOsDesenvolvedores } from '../services/request';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listaDeDevs: [],
      usuario: usuario
    }
  }

  componentDidMount() {
    this.encontrarLocalizacao();
    this.listarDevs();
  }

  async listarDevs() {
    const response = await listarTodosOsDesenvolvedores();
    this.setState({ listaDeDevs: response.data })
  }

  encontrarLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        let usuario = this.state.usuario;
        usuario.latitude = position.coords.latitude;
        usuario.longitude = position.coords.longitude;
        this.setState({ usuario })
      },
      err => {
        console.log(err)
      },
      {
        timeout: 3000,
      }
    )
  }

  onChange = (evento) => {
    const { name, value } = evento.target
    let usuario = this.state.usuario;
    usuario[name] = value;
    this.setState({ usuario })
  }

  salvar = (evento) => {
    evento.preventDefault();
    const response = cadastrarDesenvolvedor(this.state.usuario);
    if (response.status === 200) {
      this.limparFormulario();
      this.listarDevs();
    }
  }

  limparFormulario = () => {
    let usuario = this.state.usuario;
    usuario.techs = ''
    usuario.github_usuario = ''
    this.setState({ usuario })
  }

  render() {
    return (
      <div id="app">
        <Formulario
          usuario={this.state.usuario}
          onChange={this.onChange}
          salvar={this.salvar}
          />
        <Listagem 
          listaDeDevs={this.state.listaDeDevs}
        />
      </div>
    );
  }
}