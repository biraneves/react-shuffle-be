const Services = require('./Services');
const db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UsersServices extends Services {
    constructor() {
        super('Users');
    }

    async criaRegistro(user) {
        user.password = await bcrypt.hash(user.password, 10);
        return await db[this.nomeModelo].create(user);
    }

    async retornaTodosOsRegistros() {
        return await db[this.nomeModelo].findAll({
            attributes: ['id', 'username'],
        });
    }

    async atualizaRegistro(dadosAtualizados, id) {
        if (!dadosAtualizados.oldPassword || !dadosAtualizados.newPassword) {
            throw new Error('As senhas antiga e nova são obrigatórias.');
        }

        const dbUser = await db[this.nomeModelo].findOne({ where: { id } });

        if (dbUser) {
            const senhaOk = await bcrypt.compare(
                dadosAtualizados.oldPassword,
                dbUser.password,
            );

            if (senhaOk) {
                const senhaCriptografada = await bcrypt.hash(
                    dadosAtualizados.newPassword,
                    10,
                );

                return await db[this.nomeModelo].upsert({
                    id,
                    password: senhaCriptografada,
                });
            } else {
                throw new Error('Usuário ou senha inválidos');
            }
        } else {
            throw new Error('Usuário ou senha inválidos');
        }
    }

    async login(user) {
        const dbUser = await db[this.nomeModelo].findOne({
            where: { username: user.username },
        });

        if (dbUser) {
            const senhaOk = await bcrypt.compare(
                user.password,
                dbUser.password,
            );

            if (senhaOk) {
                const token = jwt.sign(
                    {
                        role: dbUser.role,
                    },
                    process.env.JWT_PWD,
                    {
                        expiresIn: 300,
                    },
                );

                return token;
            } else {
                throw new Error('Usuário ou senha inválidos');
            }
        } else {
            throw new Error('Usuário ou senha inválidos');
        }
    }
}

module.exports = UsersServices;
