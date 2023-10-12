const classroomContoller = require('../controllers/classroomController')

const router = require('express').Router()


// 1. add classroom route
router.post('/addClassroom', classroomContoller.addClassroom)

// 2. get all classroom route
router.get('/getAllClassrooms', classroomContoller.getAllClassrooms)

// 3. add classroom route
router.get('/:id', classroomContoller.getOneClassroom)

// 4. add classroom route
router.put('/:id', classroomContoller.updateClassroom)

// 5. delete classroom route
router.delete('/:id', classroomContoller.deleteClassroom)

module.exports = router