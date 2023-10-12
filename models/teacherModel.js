

module.exports = (sequelize, DataTypes) => {

    const Teacher = sequelize.define("teacher", {
        teach_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        first_name: {
            type: DataTypes.STRING,
        },
        middle_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        passcode: {
            type: DataTypes.STRING
        },
        
    });

    Teacher.hasMany(sequelize.models.attendance, { foreignKey: 'teachId' });
    
        return Teacher;
};

