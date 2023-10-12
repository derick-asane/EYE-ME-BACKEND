const db = require('../models/index');


const { Sequelize } = require('sequelize');

const randomString = require('../utils/randomString.js');

//create main Model

const Student = db.Students
const Classroom = db.Classrooms


//1. create classroom

const addClassroom = async (req, res)=>{

    let info = {
        class_name: req.body.class_name,
        abbr_name : req.body.abbr_name,
        size : req.body.size
    }

    const classroom = await Classroom.create(info)
    res.status(200).send(classroom)

}

// 2. get all classrooms

const getAllClassrooms = async ( req , res ) =>{
    let classroom = await Classroom.findAll({});
    res.status(200).send(classroom)
}

//3. get 1 student

const getOneClassroom =async (req, res)=>{
    let id = req.params.id;
    let classroom= await Classroom.findOne({where: { class_id:id }})
    res.status(200).send(classroom)

}

//4. update student

const updateClassroom = async (req, res)=>{
    let id = req.params.id;

    const classroom = await Classroom.update(req.body, {where : {class_id:id}})
    res.status(200).send(classroom)
}

// 5. delete student by id

const deleteClassroom = async (req, res)=> {
    let id = req.params.id;
    const classroom = await Classroom.destroy({where : {class_id:id}})
    res.status(200).send('student is deleted')
}

module.exports = {
    addClassroom,
    getAllClassrooms ,
    getOneClassroom,
    updateClassroom,
    deleteClassroom
  
}