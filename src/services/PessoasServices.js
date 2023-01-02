const Services = require('./Services');
const db = require('../models');

class PessoasServices extends Services {
    constructor() {
        super('Pessoas');
    }

    async retornaTodosOsRegistros() {
        return db[this.nomeModelo].findAll({
            order: [['nome', 'ASC']],
        });
    }
}

module.exports = PessoasServices;
