const { Trainer } = require('../models');
const {Op} = require('sequelize');

class TrainerController{
    //CRUD 
    async getAll(req,res){
        try{
            const trainers = await Trainer.findAll();
            return res.status(200).json(trainers);
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async getById(req,res){
        try{
            const trainer = await Trainer.findByPk(req.params.id); // ou somente ID
            return res.status(200).json(trainer);
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async getAllByNome(req,res){
        let searchNome = '%' + req.query.nome + '%';
        try{
            const trainers = await Trainer.findAll({
                where: {
                    nome: {
                        [Op.like] : searchNome
                    }
                }
            }); //ou req.params.id
            return res.status(200).json(trainers);
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async insert(req,res){
        //fazer validacoes necessarias antes de mandar para o bd
        console.log(req.body)
        try{
            const trainer = await Trainer.create(req.body);
            return res.status(201).json(trainer);
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async update(req,res){
        try{
            const trainer = await Trainer.findByPk(req.params.id);
            if(trainer){
                await trainer.update(req.body);
                return res.status(200).json(trainer);
            }else{
                return res.status(400).json({mensagem: "Trainer not found in database"})
            }
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async delete(req,res){
        try{
            const trainer = await Trainer.findByPk(req.params.id);
            if(trainer){
                await trainer.destroy();
                return res.status(200).json({mensagem: "Trainer removed from database"});
            }else{
                return res.status(400).json({mensagem: "Trainer not found in database"});
            }
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }
}


//exporta uma instância da classe
module.exports = new TrainerController();