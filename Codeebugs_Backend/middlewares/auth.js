const jwt=require('jsonwebtoken');
const User=require('../models/student');
const Admin=require('../models/admin')


//for student varification
module.exports.verifyUser=function(req,res,next){
    try{
        const token= req.headers.authorization.split("")[1];
        const data=jwt.verify(token,'anysecretkey');

        User.findOne({_id:data.yourId})
        .then(function(result){
            req.userData=result;
            next()
        })
        .catch(function(e){
            res.status(401).json({error:e})
        })
    }
    catch(e){
        res.status(401).json({error:e})

    }
}




// for admin varification 

module.exports.verifyadmin=function(req,res,next){
    try{
        const token= req.headers.authorization.split("")[1];
        const data=jwt.verify(token,'anysecretkey');

        Admin.findOne({_id:data.yourId})
        .then(function(result){
            req.userData=result;
            next()
        })
        .catch(function(e){
            res.status(401).json({error:e})
        })
    }
    catch(e){
        res.status(401).json({error:e})

    }
}