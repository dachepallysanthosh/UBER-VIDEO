const captainModel = require('../models/captain.model');
const BlacklistTokenModel = require('../models/blacklistToken.model');


module.exports.createCaption = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vechicalType
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vechicalType
  ) {
    throw new Error('All fields are required');
  }

  const caption = await captainModel.create({
    fullname: {
      firstname,
      lastname
    },
    email,
    password,
    vechical: {
      color,
      plate,
      capacity,
      vechicalType
    }
  });

  return caption;
};


module.exports.blacklistToken = async (token) => {
  return await BlacklistTokenModel.create({ token });
};