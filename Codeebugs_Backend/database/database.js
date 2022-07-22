//importing mongo db as mongoose
const mongoose = require("mongoose");

//Establishing databaseconnection

mongoose.connect("mongodb+srv://subash:Helloworld%4001@mern.3vcbg.mongodb.net/Codeebugs?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    //useCreatedIndex : true,
    useUnifiedTopology : true,
})