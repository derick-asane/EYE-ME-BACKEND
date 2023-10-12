
const db = require('../models/index');


const { Sequelize } = require('sequelize');

const randomString = require('../utils/randomString.js');

//create main Model

const Teacher = db.Teachers


//1. create student

const addTeacher = async (req, res) => { 
    
    var myrandom = randomString(8);

    let info = {
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        type: req.body.type,
        passcode: myrandom,
    }

    const teacher = await Teacher.create(info)
    res.status(200).send(teacher)
    console.log(teacher)

}

// 2. get all student

const getAllTeachers = async ( req , res ) =>{
    let teacher = await Teacher.findAll({});
    res.status(200).send(teacher)
}

//3. get 1 student

const getOneTeacher =async (req, res)=>{
    let id = req.params.id;
    let teacher = await Teacher.findOne({where: { stud_id:id }})
    res.status(200).send(teacher)

}

//4. update student

const updateTeacher = async (req, res)=>{
    let id = req.params.id;

    const teacher = await Teacher.update(req.body, {where : {stud_id:id}})
    res.status(200).send(teacher)
}
// 5. delete student by id

const deleteTeacher = async (req, res)=> {
    let id = req.params.id;
    const teacher = await Teacher.destroy({where : {stud_id:id}})
    res.status(200).send('student is deleted')
}


module.exports = {

    addTeacher,
    getAllTeachers,
    getOneTeacher,
    updateTeacher,
    deleteTeacher
  
}