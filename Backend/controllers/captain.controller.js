const captainModel = require('../models/captain.model');
const captionService = require('../services/captain.service');
const { validationResult } = require('express-validator');




module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vechical } = req.body;

    const isCaptainAlreadyExists = await captionModel.findOne({ email });
    if (isCaptainAlreadyExists) {
        return res.status(400).json({ message: 'Captain with this email already exists' });
    }

    const hashedPassword = await captionModel.hashPassword(password);

    const caption = await captionService.createCaption({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vechical.color,
        plate: vechical.plate,
        capacity: vechical.capacity,
        vechicalType: vechical.vechicalType
    });

    const token = caption.generateAuthToken();

    res.status(201).json({
        token,
        caption,
    });
}
module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = captain.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({
        token,
        captain,
    });
}
module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({
        captain: req.captain,
    });
}

module.exports.updateCaptainprofile = async (req, res, next) => {
    res.status(200).json({
        captain: req.captain,
    });
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization?.split(' ')[1]);
    await captionService.blacklistToken(token);
    
    
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
}