// require models
var User = require('../models/userModel');


const create_account = function(req, res) {
  var new_user = new User(req.body);

  User.createUser(new_user, (err, result) => {

    if (err) {
      res.json(err);
    }

    res.json(new_user);
  });

};

const authenticate = function(req, res) {

  var user_credentials = new User(req.body);

  User.authenicateUser(user_credentials, (err, result) => {

    if (err) {
      res.send(err);
    }

    res.json(result);
  });

};


const create_event_with_rso = function(req, res) {

};


const create_event_without_rso = function(req, res) {

};

const get_events_by_category = function(req, res) {

}




const add_review = function(req, res) {

};

const edit_review = function(req, res){
  
}


const add_user_to_rso = function(req, res) {
  var user = new RSOMember(req.body);

  RSOMember.addUser(user, (err, result) => {
    if (err){
      res.send(err);
    }

    res.json(result);
  })
};


const get_user_events = function(req, res) {

};


const get_public_events = function(req, res) {

};

const create_RSO = function(req, res) {
  var new_RSO = new RSO(req.body); 

  RSO.createRSO(new_RSO, (err, result) => {
    if(err){
      res.send(err);
    }
    else {
      res.json(result);
    }
  })
}

        // -authenticate,  {username, user_pw}   => user / error
        // -create-account, {username,user_pw, name, university_id, email} => user/error  (user_type 0 = normal user, user_type 1 = superAdmin)
        // -createEvent, {rso_id, event_name, event_type, category, description, date, contact_phone, contact_email, latitude, longitude, locationName} => event/error
        // -createOrg, {rso_name, description, a list of members [user_id, isAdmin]} => new RSO / error
        // -createUni, {name, location_name, latitude, longitude, description, numberStudents} => new University / error
        // -joinRso, {rso_id, user_id} => new RSO member/ error

        // -getEvents, {user_id, partialUniName, partialRSOName, startDate, endDate, event_type(fundraising,etc)}
        // -if there is no user_id, return only public Events
        // -if user then also return events of it's university or his organization (based on event_category ->public, private, 
        //  rso)
        // -returns list of events with location 

        // -getCategories, return a list of all distinct event_types in db
        // -getOrgs, {user_id, partialRSOName, myRSOOnly(boolean to filter by rso user is member of), }
        // -getUniversities,return a list of all registered universities in db
        // -getUsersFromUni, {university_id} => return list of all users that belong to university /error

        // -getUniversity, {university_id} return university


module.exports = {
  create_account,
  authenticate,
  create_event_with_rso,
  create_event_without_rso,
  add_review,
  edit_review,
  add_user_to_rso,
  get_user_events,
  get_public_events,
  create_RSO
}
