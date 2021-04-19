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

  var events = undefined;
  var new_date = new Date('1970-01-01T' + new_event.event_date + 'Z');
  var date_holder = undefined;

  
   dbConnection.query(`SELECT event_id, event_date FROM Event WHERE location_id = '${new_event.location_id}' AND event_date = '${new_event.event_date}'`, (err, res) => {

    if (err)
    {
      resultF(err, null);
    }

    // if (res)
    // {
    //   events = JSON.parse(res);
    // }
   events = res;
    // console.log(events);

    if(events)
  {
    console.log(events);
    for(x in events){
      date_holder = new Date('1970-01-01T' + x.event_date + 'Z');

      if ( 
        
        (new_date.getHours() < date_holder.getHours()) && (date_holder.getHours() < (new_date.getHours() + 1))
        ||
        (new_date.getHours() < (date_holder.getHours() + 1)) && ((date_holder.getHours() + 1) < (new_date.getHours() + 1))
      
      )
      {
        if
         (
          (new_date.getMinutes() < date_holder.getMinutes()) && (date_holder.getMinutes() < (new_date.getMinutes() + 1))
          ||
          (new_date.getMinutes() < (date_holder.getMinutes() + 1)) && ((date_holder.getMinutes() + 1) < (new_date.getMinutes() + 1))
        )
        {
          if
         (
          (new_date.getSeconds() < date_holder.getSeconds()) && (date_holder.getSeconds() < (new_date.getSeconds() + 1))
          ||
          (new_date.getSeconds() < (date_holder.getSeconds() + 1)) && ((date_holder.getSeconds() + 1) < (new_date.getSeconds() + 1))
        )
        {
          resultF(null, {error:"the event time coincides with anoter event"});
        }
        }
      }
    }
  }

  dbConnection.query(`INSERT INTO Event SET ?`, new_event, (err, res) => {

    if(err){
      resultF(err, null);
      return;
  }

  resultF(null, {result : "success"});

  });
    
  })


  Event.getCategories = (resultF) => {

    dbConnection.query(`SELECT DISTINCT category FROM Event`, (err, res) => {

      if(err){
        resultF(err, null);
        return;
    }
  
    resultF(null, {result : "success"});
  
    });
  }


  
}

module.exports = Event;