// Exemple with SMS send by FREE (France)


var https = require('https');
var NewtifryProMessage = require('../lib/NewtifryProSMS').NewtifryProSMSMessage;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';



try {
  var priv = require('./credentials.js');
  var userFreeSMS = priv.userFreeSMS;
  var passwordFreeSMS = priv.passwordFreeSMS;
} catch (e) {
  console.log('You have to add you user and password');
  process.exit();
}

var message1 = new NewtifryProMessage();

message1.setTitle('test message 1');
message1.setMessage('OOAPI test');
message1.setSticky();

var SMSMsg = message1.getMessage();

var url = 'https://smsapi.free-mobile.fr/sendmsg?user=' + userFreeSMS + '&pass=' + passwordFreeSMS + '&msg=' + encodeURIComponent(SMSMsg);
https.get(url, function(res) {
  if(res.statusCode != 200){
    console.log('Send SMS Error');
  } else {
    console.log('Send SMS Done');
  }
  res.resume();
}).on('error', function(e) {
  console.log('Send SMS Error');
});




