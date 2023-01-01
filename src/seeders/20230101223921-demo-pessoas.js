'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Pessoas',
            [
                {
                    nome: 'Carol',
                    foto: 'photos/carol.jpg',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Gabi',
                    foto: 'photos/gabi.jpg',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Kazukas',
                    foto: 'photos/kazukas.jpg',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Rayssa',
                    foto: 'photos/rayssa.jpg',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nome: 'Renata',
                    foto: 'photos/renata.jpg',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Pessoas', null, {});
    },
};
