const express = require('express');
const router = express.Router();

// Placeholder routes for rides
router.get('/get-fare', (req, res) => {
  res.json({ fare: 100 }); // dummy
});

router.post('/create', (req, res) => {
  res.json({ message: 'Ride created' }); // dummy
});

router.post('/confirm', (req, res) => {
  res.json({ message: 'Ride confirmed' }); // dummy
});

router.get('/start-ride', (req, res) => {
  res.json({ message: 'Ride started' }); // dummy
});

router.post('/end-ride', (req, res) => {
  res.json({ message: 'Ride ended' }); // dummy
});

module.exports = router;