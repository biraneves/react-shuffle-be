const { RituaisServices } = require('../services');

const rituaisServices = new RituaisServices();

class RitualController {
    static retornaTodosOsRituais = async (req, res) => {
        try {
            const rituais = await rituaisServices.retornaTodosOsRegistros();
            return res.status(200).json(rituais);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static retornaRitualPorId = async (req, res) => {
        const { id } = req.params;

        try {
            const ritual = await rituaisServices.retornaRegistroPorId(
                Number(id),
            );
            return res.status(200).json(ritual);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static criaRitual = async (req, res) => {
        const dados = req.body;

        try {
            if (!dados.dia_semana || !dados.nome_ritual) {
                throw new Error(
                    'Dia da semana e nome do ritual são obrigatórios.',
                );
            }

            const novoRitual = await rituaisServices.criaRegistro(dados);
            return res.status(200).json(novoRitual);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static atualizaRitual = async (req, res) => {
        const { id } = req.params;
        const novosDados = req.body;

        try {
            await rituaisServices.atualizaRegistro(novosDados, Number(id));
            const registroAtualizado =
                await rituaisServices.retornaRegistroPorId(id);
            return res.status(200).json(registroAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static excluiRitual = async (req, res) => {
        const { id } = req.params;

        try {
            await rituaisServices.excluiRegistro(Number(id));
            return res.status(200).json(`O ritual ${id} foi excluído.`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
}

module.exports = RitualController;
