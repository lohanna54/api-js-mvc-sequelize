const {Router} = require('express');
const PokemonController = require('../controllers/pokemonController');
const TrainerController = require('../controllers/trainerController');
const routes = Router();

//routes só serve para redirecionar para a rota desejada
routes.get('/',(req,res) =>{
    res.status(200).json({mensagem: "Hello World"})
});

//pokemon routes
routes.get('/pokemons' , PokemonController.getAll);
routes.get('/pokemon/:id' , PokemonController.getById);
routes.get('/pokemon' , PokemonController.getAllByNome);
routes.post('/pokemon' , PokemonController.insert);
routes.put('/pokemon/:id', PokemonController.update)
routes.delete('/pokemon/:id', PokemonController.delete)

//Trainer routes
routes.get('/trainers' , TrainerController.getAll);
routes.get('/trainer/:id' , TrainerController.getById);
routes.get('/trainer' , TrainerController.getAllByNome);
routes.post('/trainer' , TrainerController.insert);
routes.put('/trainer/:id', TrainerController.update)
routes.delete('/trainer/:id', TrainerController.delete)

module.exports = routes;