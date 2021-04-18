const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index (lista), show (único), store(criar), update, destroy

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const { github_usuario, techs, longitude, latitude } = request.body;

        let dev = await Dev.findOne({ github_usuario });

        if (!dev) {
            const respostaAPI = await axios.get(`https://api.github.com/users/${github_usuario}`);
            const { name = login, avatar_url, bio } = respostaAPI.data;
            
            const tecnologias = parseStringAsArray(techs);
            const localizacao = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            
            dev = await Dev.create({
                github_usuario,
                nome: name,
                avatar_url,
                biografia: bio,
                tecnologias,
                localizacao
            })
        }

        return response.json(dev)
    }
}