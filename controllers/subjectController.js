
const db = require('../models/index');


const { Sequelize } = require('sequelize');



//create main Model

const Subject = db.Subjects



//1. create student

const addSubject = async (req, res) =>{
    
    let info = {
        name: req.body.name,
        category: req.body.category,
        abbr_name: req.body.abbr_name,
    }

    const subject = await Subject.create(info)
    res.status(200).send(subject)
    console.log(subject)

}

// 2. get all student

const getAllSubjects = async ( req , res ) =>{
    let subject = await Subject.findAll({});
    res.status(200).send(subject)
}

//3. get 1 student

const getOneSubject =async (req, res)=>{
    let id = req.params.id;
    let subject= await Subject.findOne({where: { stubj_id:id }})
    res.status(200).send(subject)

}

//4. update student

const updateSubject = async (req, res)=>{
    let id = req.params.id;

    const subject = await Subject.update(req.body, {where : {stubj_id:id}})
    res.sendStatus(200).send(subject)
}
// 5. delete subject by id

const deleteSubject = async (req, res)=> {
    let id = req.params.id;
    const subject = await Subject.destroy({where : { stubj_id:id }})
    res.sendStatus(200);
}


module.exports = {
    addSubject,
    getAllSubjects,
    getOneSubject,
    updateSubject,
    deleteSubject
  
}