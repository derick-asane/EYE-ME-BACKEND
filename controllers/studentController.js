
const db = require('../models/index');


const { Sequelize } = require('sequelize');

const randomString = require('../utils/randomString.js');

//create main Model

const Student = db.Students



// main work

//



//1. create student

const addStudent = async (req, res) =>{
    
    var myrandom = randomString(6);

    let info = {
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        date_of_birth: req.body.date_of_birth,
        quater: req.body.quater,
        photo: req.body.photo,
        identification: myrandom,
        classId: req.body.classId
        
    }

    const student = await Student.create(info)
    res.status(200).send(student)
    console.log(student)

}

// 2. get all student

const getAllStudents = async ( req , res ) =>{
    let student = await Student.findAll({});
    res.status(200).send(student)
}

//3. get 1 student

const getOneStudent =async (req, res)=>{
    let id = req.params.id;
    let student= await Student.findOne({where: { stud_id:id }})
    res.status(200).send(student)

}

//4. update student

const updateStudent = async (req, res)=>{
    let id = req.params.id;

    const student = await Student.update(req.body, {where : {stud_id:id}})
    res.status(200).send(student)
}
// 5. delete student by id

const deleteStudent = async (req, res)=> {
    let id = req.params.id;
    const student = await Student.destroy({where : {stud_id:id}})
    res.status(200).send('student is deleted')
}


module.exports = {
    addStudent,
    getAllStudents,
    getOneStudent,
    updateStudent,
    deleteStudent
  
}