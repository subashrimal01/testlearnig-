const mongoose =  require("mongoose");

const schema_student = new mongoose.Schema({
    full_name : {type: String},
    email : {type : String},
    age : {type : String},
    password : {type :String},
    enrolledCourses : [
        {courseID : String} 
   ],
})

const student = mongoose.model('Student', schema_student)

module.exports = student;