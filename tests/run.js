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
message1.setMessage('OOAPI test SMS HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
//message1.setSticky();


message1.sendMessage(sendFreeSMS);

// i don't have a usb gdm card so i use the free mobile facility to test
function sendFreeSMS(message) {
  var url = 'https://smsapi.free-mobile.fr/sendmsg?user=' + userFreeSMS + '&pass=' + passwordFreeSMS + '&msg=' + encodeURIComponent(message);
  https.get(url, function(res) {
    if(res.statusCode != 200){
      console.log('Send SMS Error' + res.statusCode);
    } else {
      console.log('Send SMS Done');
    }
    res.resume();
  }).on('error', function(e) {
    console.log('Send SMS Error');
  });
}


