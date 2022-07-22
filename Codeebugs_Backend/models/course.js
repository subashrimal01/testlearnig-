
const mongoose = require("mongoose")

const schema_course = new mongoose.Schema({
     courseTitle : {type:String},
     courseImage : {type: String},
     courseDescription : {type:String},
     coursePrice: {type:String},
     tutorName : {type: String},
     weight : {type: String},
     progress : {type:String},
     video : {type: String},
     tutorial : [
          {chapterName : String, video : String, weight: String} 
     ],
     quiz:[
          {

          question : String,
          correctAnswer : String,
          incorrectAnswer : [],
          
     }
     ]

})

const course = mongoose.model("Course", schema_course)

module.exports = course;
