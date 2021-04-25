const sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Trainer = sequelize.define("Trainer", {
        nome: Sequelize.STRING,
        nivel: Sequelize.STRING,
        idade: Sequelize.INTEGER,
                
    });

    Trainer.associate = (models) => {
        Trainer.belongsTo(models.Pokemon, {
          foreignKey: {
            name: 'pokemonFav',
            allowNull: false
          },
          as: 'pokemons'
        });
      };

    return Trainer;
}