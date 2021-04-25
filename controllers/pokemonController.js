const { Pokemon } = require('../models');
const {Op} = require('sequelize');

class PokemonController{
    //CRUD 
    async getAll(req,res){
        try{
            const pokemons = await Pokemon.findAll();
            return res.status(200).json(pokemons);
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async getById(req,res){
        try{
            const pokemon = await Pokemon.findByPk(req.params.id); // ou somente ID
            return res.status(200).json(pokemon);
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async getAllByNome(req,res){
        let searchNome = '%' + req.query.nome + '%';
        try{
            const pokemons = await Pokemon.findAll({
                where: {
                    nome: {
                        [Op.like] : searchNome
                    }
                }
            }); //ou req.params.id
            return res.status(200).json(pokemons);
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async insert(req,res){
        //fazer validacoes necessarias antes de mandar para o bd
        console.log(req.body)
        try{
            const pokemon = await Pokemon.create(req.body);
            return res.status(201).json(pokemon);
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async update(req,res){
        try{
            const pokemon = await Pokemon.findByPk(req.params.id);
            if(pokemon){
                await pokemon.update(req.body);
                return res.status(200).json(pokemon);
            }else{
                return res.status(400).json({message: "Pokemon not found in database"})
            }
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async delete(req,res){
        try{
            const pokemon = await Pokemon.findByPk(req.params.id);
            if(pokemon){
                await pokemon.destroy();
                return res.status(200).json({message: "Pokemon removed from database"});
            }else{
                return res.status(400).json({message: "Pokemon not found in database"});
            }
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }
}


//exporta uma instância da classe
module.exports = new PokemonController();