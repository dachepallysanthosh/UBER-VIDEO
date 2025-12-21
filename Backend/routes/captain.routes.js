const captainController = require('../controllers/captain.controller');
const expires = require('express');
const router = expires.Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth.middlewares');



router.post('/register',[
    body('email').isEmail().withMessage('Invalid email format'),
    body('fullname.firstname').notEmpty().withMessage('First name is required'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('vechical.color').notEmpty().withMessage('Vechical color is required'),    
    body('vechical.plate').notEmpty().withMessage('Vechical plate number is required'),    
    body('vechical.capacity').isInt({min:1}).withMessage('Vechical capacity must be at least 1'),    
    body('vechical.vechicalType').isIn(['car','motercycle','auto']).withMessage('Invalid vechical type'),    
],
captainController.registerCaptain

)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required'),
],
captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain ,captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain ,captainController.logoutCaptain);

module.exports = router;
