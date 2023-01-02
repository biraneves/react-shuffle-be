const { PessoasServices } = require('../services');

const pessoasServices = new PessoasServices();

class PessoaController {
    static retornaTodasAsPessoas = async (req, res) => {
        try {
            const pessoas = await pessoasServices.retornaTodosOsRegistros();
            return res.status(200).json(pessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static retornaPessoaPorId = async (req, res) => {
        const { id } = req.params;

        try {
            const pessoa = await pessoasServices.retornaRegistroPorId(
                Number(id),
            );
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static criaPessoa = async (req, res) => {
        const dados = req.body;

        try {
            if (!dados.nome || !dados.foto) {
                throw new Error('Nome e endereço da foto são obrigatórios.');
            }

            const novaPessoa = await pessoasServices.criaRegistro(dados);
            return res.status(200).json(novaPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static atualizaPessoa = async (req, res) => {
        const { id } = req.params;
        const novosDados = req.body;

        try {
            await pessoasServices.atualizaRegistro(novosDados, Number(id));
            const dadosAtualizados = await pessoasServices.retornaRegistroPorId(
                Number(id),
            );
            return res.status(200).json(dadosAtualizados);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static excluiPessoa = async (req, res) => {
        const { id } = req.params;

        try {
            await pessoasServices.excluiRegistro(Number(id));
            return res.status(200).json(`A pessoa ${id} foi excluída.`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
}

module.exports = PessoaController;
