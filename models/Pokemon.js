const sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Pokemon = sequelize.define("Pokemon", {
        numero: Sequelize.STRING,
        nome: Sequelize.STRING,
        tipo: Sequelize.STRING,
        geracao: Sequelize.STRING,
        /* Todos os Campos Exceto: ID, createdAt, updatedAt */
    });

    return Pokemon;
}