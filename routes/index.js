var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'languagepdf@gmail.com',
    pass: 'ndukkdbbludpcfna'
  }
});

var mailOptions = {
  from: 'languagepdf@gmail.com',
  to: req.body.email,
  subject: 'Sending Email using Node.js',
  text: 'node js demo'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    res.send('Email sent: ' + info.response);
  }
});

});

module.exports = router;
