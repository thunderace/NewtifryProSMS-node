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

message1.setTitle('SMS big message 1');
message1.setMessage("<h3>Hosts status report</h3><p>Host redmi(192.168.1.222) is <b><font color='green'>resurrected</font></b></p><p>Host routeur(192.168.1.1) is <b><font color='blue'>alive</font></b></p><p>Host domo10(192.168.1.120) is <b><font color='blue'>alive</font></b></p><p>Host Ardomo10(192.168.1.135) is <b><font color='blue'>alive</font></b></p><p>Host TLWR710N(192.168.1.141) is <b><font color='blue'>alive</font></b></p><p>Host PS3(192.168.1.150) is <b><font color='blue'>alive</font></b></p><p>Host portail(192.168.1.184) is <b><font color='blue'>alive</font></b></p><p>Host Lolin2(192.168.1.188) is <b><font color='blue'>alive</font></b></p><p>Host undefined(192.168.1.194) is <b><font color='purple'>dead</font></b></p><p>Host undefined(192.168.1.198) is <b><font color='purple'>dead</font></b></p><p>Host ThunderPC(192.168.1.20) is <b><font color='blue'>alive</font></b></p><p>Host unknown(192.168.1.201) is <b><font color='blue'>alive</font></b></p><p>Host Epad(192.168.1.22) is <b><font color='blue'>alive</font></b></p><p>Host debianserver(192.168.1.230) is <b><font color='blue'>alive</font></b></p><p>Host printer(192.168.1.231) is <b><font color='blue'>alive</font></b></p><p>Host WDTVLive(192.168.1.237) is <b><font color='blue'>alive</font></b></p><p>Host unknown(192.168.1.243) is <b><font color='blue'>alive</font></b></p><p>Host undefined(192.168.1.244) is <b><font color='purple'>dead</font></b></p><p>Host undefined(192.168.1.251) is <b><font color='purple'>dead</font></b></p><p>Host unknown(192.168.1.253) is <b><font color='blue'>alive</font></b></p><p>Host chip(192.168.1.32) is <b><font color='blue'>alive</font></b></p><p>Host iPad(192.168.1.37) is <b><font color='blue'>alive</font></b></p><p>Host unknown(192.168.1.4) is <b><font color='blue'>alive</font></b></p><p>Host ipcam2(192.168.1.8) is <b><font color='blue'>alive</font></b></p><p>Host ipcam3(192.168.1.9) is <b><font color='blue'>alive</font></b></p><p>Host domo9(192.168.1.90) is <b><font color='blue'>alive</font></b></p>");
//message1.setSticky();

message1.sendMessage(sendFreeSMS);

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



