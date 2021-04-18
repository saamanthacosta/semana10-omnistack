const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

// Query Params: filtros, ordenação, paginação
// Route Params: identificar um recurso na consulta, alteração, remoção
// Body: objetos json, como usuário para ser autenticado

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes;