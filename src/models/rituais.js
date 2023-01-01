'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Rituais extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Rituais.init(
        {
            dia_semana: DataTypes.INTEGER,
            nome_ritual: DataTypes.STRING,
        },
        {
            sequelize,
            paranoid: true,
            modelName: 'Rituais',
        },
    );
    return Rituais;
};
