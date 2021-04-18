const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.get('/incidentes', IncidentController.index);
routes.get('/profile', ProfileController.index);

routes.post('/ongs', OngController.create);
routes.post('/incidentes', IncidentController.create);
routes.delete('/incidentes/:id', IncidentController.delete);
routes.post('/sessions', SessionController.create);

module.exports = routes;