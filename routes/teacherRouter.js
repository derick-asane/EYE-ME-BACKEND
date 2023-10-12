const TeacherController = require('../controllers/teacherController.js')


const router = require('express').Router()

// 1. add student route
router.post('/addTeacher', TeacherController.addTeacher)

// 2. get all student route
router.get('/getAllTeachers', TeacherController.getAllTeachers)

// 3. add student route
router.get('/:id', TeacherController.getOneTeacher)

// 4. add student route
router.put('/:id', TeacherController.updateTeacher)

// 5. delete student route
router.delete('/:id', TeacherController.deleteTeacher)

module.exports = router
