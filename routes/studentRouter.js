const StudentController = require('../controllers/studentController.js')


const router = require('express').Router()

// 1. add student route
router.post('/addStudent', StudentController.addStudent)

// 2. get all student route
router.get('/getAllStudents', StudentController.getAllStudents)

// 3. add student route
router.get('/:id', StudentController.getOneStudent)

// 4. add student route
router.put('/:id', StudentController.updateStudent)

// 5. delete student route
router.delete('/:id', StudentController.deleteStudent)

module.exports = router
