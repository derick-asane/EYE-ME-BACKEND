const SubjectController = require('../controllers/subjectController.js')


const router = require('express').Router()

// 1. add student route
router.post('/addSubject', SubjectController.addSubject)

// 2. get all student route
router.get('/getAllSubjects', SubjectController.getAllSubjects)

// 3. add student route
router.get('/:id', SubjectController.getOneSubject)

// 4. add student route
router.put('/:id', SubjectController.updateSubject)

// 5. delete student route
router.delete('/:id', SubjectController.deleteSubject)

module.exports = router
