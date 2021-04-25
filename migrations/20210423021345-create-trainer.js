'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trainers', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome:{
        allowNull: false,
        type:Sequelize.STRING
      },
      idade:{
        allowNull: false,
        type:Sequelize.INTEGER
      },
      nivel:{
        allowNull: false,
        type:Sequelize.INTEGER
      },
      createdAt:{
        allowNull: false,
        type:Sequelize.DATE
      },
      updatedAt:{
        allowNull: false,
        type:Sequelize.DATE
      },
      pokemonFav:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Pokemons',
          key: 'id',
          as: 'pokemonFav'
      },
    }
  });
},


  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
