const User = require('./user');
const Appointments = require('./appointments');
const Doctors = require('./doctors');
const Labs = require('./labs');
const Prescriptions = require('./prescriptions');

User.hasMany(Appointments, {
    foreignKey: 'user_id',
});

Appointments.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Doctors, {
    foreignKey: 'user_id',
});

Doctors.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Labs, {
    foreignKey: 'user_id',
});

Labs.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Prescriptions, {
    foreignKey: 'user_id',
});

Prescriptions.belongsTo(User, {
    foreignKey: 'user_id',
});

Doctors.hasMany(Appointments, {
    foreignKey: 'doctor_id',
});

Appointments.belongsTo(Doctors, {
    foreignKey: 'doctor_id',
});

Doctors.hasMany(Labs, {
    foreignKey: 'doctor_id',
});

Labs.belongsTo(Doctors, {
    foreignKey: 'doctor_id',
});

Doctors.hasMany(Prescriptions, {
    foreignKey: 'doctor_id',
});

Prescriptions.belongsTo(Doctors, {
    foreignKey: 'doctor_id',
});

module.exports = { User, Appointments, Doctors, Labs, Prescriptions };