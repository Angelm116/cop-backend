var dbConnection = require('../dbConnection');

const Event = function(event){ 
  this.event_name = event.event_name, 
  this.event_date = event.event_date, 
  this.event_time = event.event_time, 
  this.rso_id = event.rso_id,
  this.description = event.description, 
  this.contact_email = event.contact_email, 
  this.contact_phone = event.contact_phone, 
  this.category = event.category, 
  this.event_type = event.event_type, 
  this.location_id = event.location_id
}

Event.create_event = (new_event, resultF) => {


  dbConnection.query(`INSERT INTO Event SET ?`, new_event, (err, res) => {

    if(err){
      resultF(err, null);
      return;
  }

  resultF(null, {result : "success"});

  });
  
}

Event.getCategories = (resultF) => {

  dbConnection.query(`SELECT DISTINCT event_type FROM Event`, (err, res) => {

    if(err){
      resultF(err, null);
      return;
  }

  resultF(null, res);

  });
}

module.exports = Event;