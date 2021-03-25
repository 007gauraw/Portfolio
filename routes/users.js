var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '007gauraw@gmail.com',
    pass: 'gauraw786$'
  }
});

var mailOptions = {
  from: '007gauraw@gmail.com',
  to: 'iamgaurawjoshi@gmail.com',
  subject: 'Someone contacted You',
  text: 'That was easy!'
};

/* GET users listing. */
router.post('/', function (req, res, next) {
  mailOptions.text = JSON.stringify(req.body);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.send('OK');

});

module.exports = router;
