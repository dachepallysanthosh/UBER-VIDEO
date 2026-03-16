const Captain = require("../models/captain.model");


module.exports.createCaptain = async ({ fullname, email, password, vehicle }) => {
  return await Captain.create({
    fullname,
    email,
    password,   
    vehicle,
  });
};