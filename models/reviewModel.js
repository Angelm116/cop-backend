var dbConnection = require('../dbConnection');

const Review = function(review){
  this.review_id = review.review_id, 
  this.user_id = review.user_id, 
  this.event_id = review.event_id, 
  this.comment = review.comment, 
  this.rating = review.rating, 
  this.timestamp = review.timestamp
}

Review.add = (rev, resultF)=>
{
  dbConnection.query(`INSERT INTO Review SET ?`, rev, (err, res) => {

    if(err){
      resultF(err, null);
      return;
  }

  resultF(null, {result : "success"});

  });
}

module.exports = Review;