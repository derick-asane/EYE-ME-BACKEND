

module.exports = (sequelize, DataTypes) => {
    const Attendance = sequelize.define("attendance", {
        attend_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        status: {
            type: DataTypes.STRING,
        },
        justified: {
            type: DataTypes.BOOLEAN,
        },
        attend_time: {
            type: DataTypes.TIME,
        },
        attend_date: {
            type: DataTypes.TIME,
        },
        teachId: { // Foreign key column
            type: DataTypes.INTEGER,
            
         },
         subjectId: { // Foreign key column
            type: DataTypes.INTEGER,
            
         },
       
    });
   
    return Attendance;
};

