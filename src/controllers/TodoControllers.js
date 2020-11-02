const { create } = require('../models/ToDo')
const ToDo = require('../models/ToDo')

module.exports = {

    list(req,res){
        const calculos = ToDo.list()
        return res.json(calculos)
    },
    create(req,res){
        const newCalculo = req.body
        const calculoCreated = ToDo.create(newCalculo)
        return res.status(201).json(calculoCreated)
    },
    update(req,res){
        const id = req.params.id
        const calculo = req.body
        const calculoUpdate = ToDo.update(id,calculo)
        if(!calculoUpdate){
            return res.status(400).json({msg:'Item não encontrado'})
        }
       return res.json(calculoUpdate)
    },
    delete(req,res){
        const id = req.params.id
        const calculoDeleted = ToDo.delete(id)
        if(!calculoDeleted){
            return res.status(400).json({msg:"Item não encontrado"})
        }
        return res.status(204).json()
    }
}