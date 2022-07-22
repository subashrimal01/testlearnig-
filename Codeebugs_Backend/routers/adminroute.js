const express = require("express");

//Exporting the route
const admin_route = new express.Router();

//Import admin Table as Admin
const Admin = require("../models/admin")

const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken")

//Registration
admin_route.post('/adminsignup',function(req,res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password,12,function(err, hash12){
        var admin_data = new Admin({username :  username,
        email : email,
        password : hash12,
        });
        console.log("from admin register route")

        admin_data.save().then(function(){
            res.status(201).json({message : "Congratulation! Registration has been successfull."})
        }). catch ( function (e){
            res.status().json({message : e})
        })
    }); 
})


//Admin Login

admin_route.post('/Admin/login',function(req,res){
    console.log(req.body)
    const email=req.body.email;
    const password=req.body.password;

    Admin.findOne({email:email})
    .then(function(data){
        if(data==null){
            return res.status(403).json({message:"Invalid cradentials"})
             
        }

        bcrypt.compare(password,data.password, function(err,result){
            if (result===false){
                return res.status(403).json({message:"Invalide credentials"})

            }
            const token=jwt.sign({yourId:data._id},'anysecretkey');
            res.status(200).json({token:token, message:"Auth successs!"})
        })
    })

    .catch()
})

module.exports = admin_route