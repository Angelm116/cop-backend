var dbConnection = require('../dbConnection');

const RSOMember = function(rsoMember)
{ 
  this.user_id = rsoMember.user_id, 
  this.rso_id = rsoMember.rso_id
}

RSOMember.addUser = (user, resultF) => {

  dbConnection.query(`INSERT INTO RSO_member SET ?`, user, (err, res) => {
    if (err){
      resultF(err, null);
      return;
    }

    resultF(null, {result:"success"});
  });
  
}

module.exports = RSOMember;