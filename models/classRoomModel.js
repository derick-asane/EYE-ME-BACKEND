


module.exports = (sequelize, DataTypes) => {

    const Classroom = sequelize.define("classroom", {
        class_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        class_name: {
            type: DataTypes.STRING,
        },
        abbr_name: {
            type: DataTypes.STRING
        },
        size: {
            type: DataTypes.STRING
        },
        
        
    });

    Classroom.hasMany(sequelize.models.student, { foreignKey: 'classId' });

        return Classroom;
};