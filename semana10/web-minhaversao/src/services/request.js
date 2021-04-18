import API from '../services/api';

export async function cadastrarDesenvolvedor(usuario) {
    const response =  await API.post('devs', usuario);
    return response;
}

export async function listarTodosOsDesenvolvedores() {
    const response = await API.get('devs');
    
    return response;
}