const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    // buscar todos os devs em um raio de 10km
    // filtrar por tecnologia
    async index(request, response) {

        const { latitude, longitude, techs } = request.query;

        const tecnologias = parseStringAsArray(techs);

        const devs = await Dev.find({
            tecnologias: {
                $in: tecnologias
            },
            localizacao: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    // distância máxima de 10km :)
                    $maxDistance: 10000
                }
            }
        })
        console.log(tecnologias);

        return response.json({ devs });
    }
}