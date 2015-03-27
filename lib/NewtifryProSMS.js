/**
 * NewtifryProSMS - nodeJS message push script.
 * for version min 1.3.0
 */

function NewtifryProSMSMessage() {
    if((this instanceof NewtifryProSMSMessage) === false) {
        return new NewtifryProSMSMessage();
    }
	this.images = [];    
	this.url = null;
	this.registrationIds = [];
	this.date = null;
	this.message = null;
	this.priority = 0;
	this.title = null;
	this.source = null;
	this.speak = -1;
	this.noCache = -1;
	this.notify = -1;
	this.state = 0;
}

NewtifryProSMSMessage.prototype.getMessage = function(callback) {
  var body = {};
  var requestBody;
  var post_options;
  var post_req;
  var timeout;
  var data = {};

	if (this.title === null) {
		return;
	}
	if ( this.date instanceof Date === false) {
		this.date = new Date();
	}
	data.type = 'NPSMS';
	data.timestamp = this.date.toISOString().split('.')[0];
	data.title = this.title;
	data.message = this.message;

	if (this.source) {
		data.source = this.source;
	}
	if (this.url) {
		data.url = this.url;
	}
	if (this.images.length !== 0) {
		if (this.images.length == 1 ) {
			data.image = this.image[0];	
		} else {
			if (this.image[0] !== null) {
				data.image1 = this.image[0];
      }
			if (this.image[1] !== null) {
				data.image2 = this.image[1];
			}
			if (this.image[2] !== null) {
				data.image3 = this.image[2];
			}
			if (this.image[3] !== null) {
				data.image4 = this.image[3];
			}
			if (this.image[4] !== null) {
				data.image5 = this.image[4];
			}
		}
	}
	if (this.notify != -1) {
		data.notify = this.notify;
	}
	if (this.noCache != -1) {
		data.noCache = this.noCache;
	}
	if (this.speak != -1) {
		data.speak = this.speak;
	}

	if (this.state !== 0) {
		data.state = this.state;
	}
  return JSON.stringify(data);
};

NewtifryProSMSMessage.prototype.setSenderId = function(senderId) {
};


NewtifryProSMSMessage.prototype.addImage = function(imageUrl) {
	this.images.push(imageUrl);
};

NewtifryProSMSMessage.prototype.setUrl = function(url) {
	this.url = url;
};

NewtifryProSMSMessage.prototype.setMessage = function(message) {
	this.message = message;
};

NewtifryProSMSMessage.prototype.setTitle = function(title) {
	this.title = title;
};

NewtifryProSMSMessage.prototype.setSource = function(source) {
	this.source = source;
};

NewtifryProSMSMessage.prototype.setDate = function(date) {
	this.date = date;
};

NewtifryProSMSMessage.prototype.setSticky = function() {
	this.state = 1;
};

NewtifryProSMSMessage.prototype.setLocked = function() {
	this.state = 2;
};

NewtifryProSMSMessage.prototype.setNormalPriority = function() {
	this.priority = 0;
};

NewtifryProSMSMessage.prototype.setInfoPriority = function() {
	this.priority = 1;
};

NewtifryProSMSMessage.prototype.setWarningPriority = function() {
	this.priority = 2;
};

NewtifryProSMSMessage.prototype.setAlertPriority = function() {
	this.priority = 3;
};

NewtifryProSMSMessage.prototype.speak = function() {
	this.speak = 1;
};

NewtifryProSMSMessage.prototype.noSpeak = function() {
	this.speak = 0;
};

NewtifryProSMSMessage.prototype.cacheImages = function() {
	this.cache = 1;
};

NewtifryProSMSMessage.prototype.noCacheImage = function() {
	this.cache = 0;
};

NewtifryProSMSMessage.prototype.notify = function() {
	this.notify = 1;
};

NewtifryProSMSMessage.prototype.noNotify = function() {
	this.notify = 0;
};

NewtifryProSMSMessage.prototype.addRegistrationId = function(regId) {
	this.registrationIds.push(regId);
};

module.exports.NewtifryProSMSMessage = NewtifryProSMSMessage;
