'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Rituais',
            [
                {
                    dia_semana: 2,
                    nome_ritual: 'Boraê',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    dia_semana: 3,
                    nome_ritual: 'Daily - TDM',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    dia_semana: 4,
                    nome_ritual: 'Daily - Livre',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Rituais', null, {});
    },
};
