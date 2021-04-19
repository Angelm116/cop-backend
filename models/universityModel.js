var dbConnection = require('../dbConnection');

const University = function(university) {
  this.university_id = university.university_id,
  this.uni_name = university.uni_name,
  this.location_id = university.location_id,
  this.contact_phone = university.contact_phone,
  this.uni_email = university.uni_email
}

University.getUniversities = (result) => {
  dbConnection.query(`SELECT uni_name FROM University`, (err, res) => {
    if (err)
    {
      result(err, null);
    }

    result(null, res);
  })
}

University.getUniversity = (universityID, result) => {
  dbConnection.query(`SELECT uni_name FROM University WHERE university_id = '${universityID.university_id}'`, (err, res) => {
    if (err)
    {
      result(err, null);
    }

    result(null, res);
  })
}

module.exports = University;