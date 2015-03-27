var NewtifryProMessage = require('../lib/NewtifryProSMS').NewtifryProSMSMessage;


var message1 = new NewtifryProMessage();

message1.setTitle('test message 1');
message1.setSenderId(apikey);
message1.addRegistrationId(registrationId);
message1.setMessage('OOAPI test');
message1.setSticky();

var SMSMsg = message1.getMessage();

// You have to send SMSMsg to your phone by SMS
