
const mongoose = require("mongoose")

const schema_otp = new mongoose.Schema({
     email : {type:String},
     code : {type:String},
     expire_at: {
          type: Date,
          default: Date.now(),
          expires: 3600
      }
  })

  //deletes automatically after 1 hour
schema_otp.index({ "expire_at": 1 }, { expireAfterSeconds: 3600 }); 

const otp = mongoose.model("Otp", schema_otp)

module.exports = otp;
