const sequelize = require('../config/connection');
const { User, Doctor, Appointment, Lab, Prescription } = require('../models');

const userData = require('./user.json');
const doctorData = require('./doctor.json');
const appointmentData = require('./appointments.json');
const labsData = require('./labs.json');
const prescriptionData = require('./prescriptions.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    await Doctor.bulkCreate(doctorData);
    await Appointment.bulkCreate(appointmentData);
    await Lab.bulkCreate(labsData);
    await Prescription.bulkCreate(prescriptionData);
  
    process.exit(0);
};
  
seedDatabase();