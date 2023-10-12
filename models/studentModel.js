

module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("student", {
        stud_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
        },
        middle_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        date_of_birth: {
            type: DataTypes.DATE,
        },
        quater: {
            type: DataTypes.STRING,
        },
        photo: {
            type: DataTypes.STRING,
        },
        identification: {
            type: DataTypes.STRING,
        },
        classId: { // Foreign key column
            type: DataTypes.INTEGER,
            
         },
    });
   
    return Student;
};