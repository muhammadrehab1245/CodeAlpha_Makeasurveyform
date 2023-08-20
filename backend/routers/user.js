const express = require('express');
const surveying=require('../models/usersurvey')
const router = express.Router();

router.post('/register', async (req, res) => {
    const { email } = req.body;
   console.log(surveying)
   console.log('aa')
    console.log('req.body', req.body);
   
    let user = await surveying.findOne({ email });
    if (user) {
      return res.status(400).send('This email is already filled the form! Try another');
    }
   else{

    try {
      user = new surveying(req.body);
      console.log(user)
      await user.save();
      res.status(201).send();
    } catch (e) {
      res.status(500).send('Something went wrong. Try again later.');
    }
  }
   });
   
   module.exports = router;