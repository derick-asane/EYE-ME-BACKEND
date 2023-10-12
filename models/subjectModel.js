

module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define("subject", {
        stubj_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        category: {
            type: DataTypes.STRING,
        },
        abbr_name: {
            type: DataTypes.STRING,
        },
       
    });

    Subject.hasMany(sequelize.models.attendance, { foreignKey: 'subjectId' });
    
    return Subject;
};