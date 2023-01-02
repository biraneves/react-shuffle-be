const db = require('../models');

class Services {
    constructor(nomeModelo) {
        this.nomeModelo = nomeModelo;
    }

    async retornaTodosOsRegistros() {
        return db[this.nomeModelo].findAll();
    }

    async retornaRegistroPorId(id) {
        return db[this.nomeModelo].findOne({ where: { id } });
    }

    async criaRegistro(dados) {
        return db[this.nomeModelo].create(dados);
    }

    async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
        return db[this.nomeModelo].update(
            dadosAtualizados,
            { where: { id } },
            transacao,
        );
    }

    async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
        return db[this.nomeModelo].update(
            dadosAtualizados,
            { where: { ...where } },
            transacao,
        );
    }

    async excluiRegistro(id) {
        return db[this.nomeModelo].destroy({ where: { id } });
    }
}

module.exports = Services;
