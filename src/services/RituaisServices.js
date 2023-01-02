const Services = require('./Services');
const db = require('../models');

class RituaisServices extends Services {
    constructor() {
        super('Rituais');
    }

    async retornaTodosOsRegistros() {
        return db[this.nomeModelo].findAll({
            order: [['dia_semana', 'ASC']],
        });
    }
}

module.exports = RituaisServices;
