const express = require('express')

const cors = require('cors')


const app = express()

var corOptions = {
    origin: 'https://localhost:8081'
}



// middlewares
app.use(cors(corOptions))

app.use(express.json())


app.use(express.urlencoded({extended : true}))



// routers

const StudentRouter = require('./routes/studentRouter.js')
const ClassroomRouter = require('./routes/classroomRouter.js')
const SubjectRouter = require('./routes/subjectRouter.js')
const TeacherRouter = require('./routes/teacherRouter.js')



app.use('/api/students', StudentRouter)

app.use('/api/classrooms', ClassroomRouter)

app.use('/api/subjects', SubjectRouter)

app.use('/api/teachers', TeacherRouter)


// testing api
app.get('/', (req, res )=>{
    res.json({message:'hello derick whats up'})
})

// port 

const PORT = process.env.PORT || 8080

// server 

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})
