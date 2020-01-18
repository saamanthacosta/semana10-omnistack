const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    nome: String,
    github_usuario: String,
    biografia: String,
    avatar_url: String,
    tecnologias: [String],
    localizacao: {
        type: PointSchema,
        index: '2dsphere' 
    }
})

module.exports = mongoose.model('Dev', DevSchema);