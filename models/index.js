const dbConfig = require('../config/dbconfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases : false,

        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()

.then(()=> {
    console.log('connected...')
})
.catch(err => {
    console.log('Error' + err)
})




const db = {}
db.sequelize = sequelize
db.Sequelize= Sequelize


db.Students = require('./studentModel.js')(sequelize,DataTypes) 
db.Attendances = require('./attendanceModel.js')(sequelize,DataTypes) 
db.Classrooms = require('./classRoomModel.js')(sequelize, DataTypes) 
db.Subjects = require('./subjectModel.js')(sequelize, DataTypes) 
db.Teachers = require('./teacherModel.js')(sequelize, DataTypes) 


db.sequelize.sync({force: false})

.then(()=> {
    console.log('yes re-sync done !')
})

module.exports = db;
    
