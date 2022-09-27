const User = require('./user');
const Appointment = require('./appointment');
const Doctor = require('./doctor');
const Lab = require('./labs');
const Prescription = require('./prescriptions');

User.hasMany(Appointment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Appointment.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Doctor, {
    foreignKey: 'user_id',
});

Doctor.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Lab, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Lab.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Prescription, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Prescription.belongsTo(User, {
    foreignKey: 'user_id',
});

Doctor.hasMany(Appointment, {
    foreignKey: 'doctor_id',
    onDelete: 'CASCADE'
});

Appointment.belongsTo(Doctor, {
    foreignKey: 'doctor_id',
});

Doctor.hasMany(Lab, {
    foreignKey: 'doctor_id',
});

Lab.belongsTo(Doctor, {
    foreignKey: 'doctor_id',
});

Doctor.hasMany(Prescription, {
    foreignKey: 'doctor_id',
});

Prescription.belongsTo(Doctor, {
    foreignKey: 'doctor_id',
});

module.exports = { User, Appointment, Doctor, Lab, Prescription };