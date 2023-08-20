const express = require('express');
const axios = require('axios');
const surveying=require('../models/usersurvey')
const router = express.Router();
const secretkey=''
router.post('/register', async (req, res) => {
    const { email,captcha } = req.body;
    axios({url: `https://www.google.com/recaptcha/api/siteverify?secret=${secretkey}&response=${captcha}`, 
    method: 'POST',
    })  .then(async ({data}) => {
      if(data.success) {
        let user = await surveying.findOne({ email });
        if (user) {
          return res.status(400).send('This email is already filled the form! Try another');
        }
       else{
        try {
          user = new surveying(req.body);
          await user.save();
          res.status(201).send();
        } catch (e) {
          res.status(500).send('Something went wrong. Try again later.');
        }
      }
      } else {
          res.status(400).json({message: 'Try again recaptcha verification'})
      }
  })
  .catch(error => {
      res.status(400).json({message: 'Recaptcha is invalid'})
  })

    console.log('req.body', req.body);
   
   
   });
   
   module.exports = router;