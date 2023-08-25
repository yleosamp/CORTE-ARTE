const express = require('express');
const router = express.Router;
const barber = require('../models/barber.js')

router.post('/', async(req, res) => {
  try{
    const Barber = await new Barber(req.body).save();
  }catch(err){
    res.json({ error: true, message: err.message })
  }
});

module.exports = router;