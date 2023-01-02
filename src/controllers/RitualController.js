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
}

module.exports = RitualController;
