const mongoose = require('mongoose');

const surveyschema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true
      },
     email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
          if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
            throw new Error('Email is not valid.');
          }
        }
      },
      productname: {
        type: String,
        required: true,
        trim: true
      },
      productsatisfaction: {
        type: String,
        required: true,
      },
      productexpectations: {
        type: String,
        required:true,
      },
      reasonexpect: {
        type: String,
        required:true,
        trim: true
      },
      recommend: {
        type: String,
        required:true,
      },
      reasonrecommend: {
        type: String,
        required:true,
        trim: true
      },
      reasonsatisfy: {
        type: String,
        required:true,
        trim: true
      },
      mostsatisfy: {
        type: String,
        required:true,
      },
      leastsatisfy: {
        type: String,
        required:true,
      },
   
    }
  );
  
  const surveying = mongoose.model('surveying', surveyschema);
  
  module.exports = surveying;