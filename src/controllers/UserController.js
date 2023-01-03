const { UsersServices } = require('../services');

const usersServices = new UsersServices();

class UserController {
    static criaUsuario = async (req, res) => {
        try {
            throw new Error('Não é permitida a criação de usuários.');
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static retornaUsuarios = async (req, res) => {
        try {
            const usuarios = await usersServices.retornaTodosOsRegistros();
            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static atualizaSenha = async (req, res) => {
        try {
            const { id } = req.params;
            const dadosAtualizados = req.body;

            await usersServices.atualizaRegistro(dadosAtualizados, Number(id));

            return res.status(200).json({ message: 'Senha alterada' });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static login = async (req, res) => {
        const user = req.body;

        try {
            if (!user.username || user.password == null) {
                throw new Error('Username e password são obrigatórios');
            }

            res.send(await usersServices.login(user));
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
}

module.exports = UserController;
