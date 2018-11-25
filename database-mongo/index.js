var mongoose = require('mongoose');
mongoose.connect('mongodb://ashraf:ashraf123@ds231740.mlab.com:31740/student');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  Name: String,
  HomeWork: String
});

var Student = mongoose.model('Student', itemSchema);
// var save=Student(data).save(function(err){
// if(err)throw err ;
// console.log("saved")
// })


let save = (data ,cb) => {
        // console.log(data.username)
        console.log("db")
        // console.log(data)
        let student = new Student({Name:data.Name,HomeWork:data.Homework});
      student.save(function(err){
          if (err) {
            console.log("error", err)
              // return handleError(err)
          }
          console.log('Saved!')
          // cb("done from data base")
      })
      }


var selectAll = function(callback) {
  Student.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.save=save