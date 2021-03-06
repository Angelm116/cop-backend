// import db connection
var dbConnection = require('../dbConnection');

const User = function (user){

  this.username = user.username,
  this.user_pw = user.user_pw,
  this.full_name = user.full_name,
  this.email = user.email,
  this.user_type = user.user_type,
  this.university_id = user.university_id

};

User.createUser = (new_user, resultF) => {

    dbConnection.query(`INSERT INTO User SET ?`, new_user, (err, res) => {

      if(err){
        resultF(err, null);
        return;
    }

    resultF(null, {result : "success"});

    });
}


User.authenticateUser = (user_credentials, result) => {

  dbConnection.query(`SELECT user_id
  FROM User
  WHERE username = '${user_credentials.username}' AND user_pw = '${user_credentials.user_pw}'`, (err, res) => {

    if(err){
      result(err, null);
      return;
  }

  result(null, res);

  });
}

module.exports = User;