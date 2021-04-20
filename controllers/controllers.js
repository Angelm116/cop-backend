// require models
const Event = require('../models/eventModel');
const RSOMember = require('../models/RSOMembersModel');
const RSO = require('../models/RSOModel');
const University = require('../models/universityModel');
const User = require('../models/userModel');

// if error, returns json with error
// if success, returns json with result:success
const create_account = function(req, res) {
  var new_user = new User(req.body);
  console.log(new_user);

  User.createUser(new_user, (err, result) => {

    if (err) {
      res.json(err);
      return;
    }

    res.json(result);
  });

};

// will return an empty json array if credentials to not match
// will return a json array with the user_id of the user
const authenticate = function(req, res) {

  var user_credentials = new User(req.body);

  User.authenticateUser(user_credentials, (err, result) => {

    if (err) {
      res.send(err);
      return;
    }

    res.json(result);
  });

};

// INSERT INTO University (uni_name, location_id, contact_phone, contact_email) VALUES ("UCF", "123", "4075855698", "lalalostyou@gmail.com");
const create_event_with_rso = function(req, res) {
  var new_event = new Event(req.body);

  Event.create_event(new_event, (err, result) => {
    if (err){
      res.json(err);
      return;
    }

    res.json(result)
  })
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
      return;
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
      return;

    }
    else {
      res.json(result);
    }
  })
};

// retuns json array with objects of the form {"uni_name": "nameofuni"}
const get_universities = (req, res) => {
  University.getUniversities((err, result) => {
    if (err){
      res.json(err);
      return;
    }

    res.json(result);
  })
}

// returns a json array with an object of the form {"uni_name": "nameofuni"} 
const get_university = (req, res) => {
  var universityID = req.body;

  University.getUniversity(universityID, (err, result) => {
    if (err){
      res.json(err);
      return;
    }

    res.json(result);
  })
}

// returns json array with objects holding usernames of users in university 
const get_uiversity_users = (req, res) => {
  var universityID = req.body;

  University.getUsers(universityID, (err, result) => {
    if (err){
      res.send(err);
      return;
    }

    res.json(result);
  })
}

// returns list of distinct categories in the event table
const get_categories = (req, res) => {

  Event.getCategories((err, result) => {
    if (err)
    {
      res.json(err);
      return;
    }

    res.json(result);
  });

}

const createOrg = (req, res) => {
  var details = req.body;

  var info = {rso_id = details.rso_id,
              university_id = details.university_id,
              rso_name = details.name, 
              description = details.description,
              admin_id = details.admin_id}

  var students = mRSOinfo.list;

  RSO.createRSO(info, students, (err, result) => {
    if (err){
      res.json(err);
    }

    res.json(result);
  })
}



        

        // -createOrg, {rso_name, description, a list of members [user_id, isAdmin]} => new RSO / error
        // -createUni, {name, location_name, latitude, longitude, description, numberStudents} => new University / error

        // -getEvents, {user_id, partialUniName, partialRSOName, startDate, endDate, event_type(fundraising,etc)}
        // -if there is no user_id, return only public Events
        // -if user then also return events of it's university or his organization (based on event_category ->public, private, 
        //  rso)
        // -returns list of events with location 

        // -getOrgs, {user_id, partialRSOName, myRSOOnly(boolean to filter by rso user is member of), }
       
        


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
  create_RSO, 
  get_universities, 
  get_university, 
  get_uiversity_users,
  get_categories, 
  createOrg
}
