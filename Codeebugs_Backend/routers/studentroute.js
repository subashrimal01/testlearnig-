const express = require("express");
const otp = require("../models/otp")

//Exporting the route
const student_route = new express.Router();

//Import Student Table as Students
const Students = require("../models/student")

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodeMailer = require("nodemailer")

//Registration
student_route.post('/signup', function (req, res) {
    const full_name = req.body.full_name;
    const email = req.body.email;
    const age = req.body.age;
    const password = req.body.password;

    bcrypt.hash(password, 12, function (err, hash12) {
        var student_data = new Students({
            full_name: full_name,
            email: email,
            age: age,
            password: hash12,
        });
        console.log("from student register route")

        student_data.save().then(function () {
            res.status(201).json({ message: "Congratulation! Registration has been successfull." })
        }).catch(function (e) {
            res.status().json({ message: e })
        })
    });
})


//User Login

student_route.post('/user/login', function (req, res) {

    const email = req.body.email;
    const password = req.body.password;

    Students.findOne({ email: email })
        .then(function (data) {
            if (data == null) {
                return res.status(403).json({ message: "Invalid craditaintail" })
            }

            bcrypt.compare(password, data.password, function (err, result) {
                if (result === false) {
                    return res.status(403).json({ message: "Invalide credentials" })

                }
                const token = jwt.sign({ yourId: data._id }, 'anysecretkey');
                const userID = data._id
                const username = data.full_name
                const email = data.email
                res.status(200).json({ token: token, username: username, email: email, userID : userID,message: "Auth successs!" })
            })
        })

        .catch()
})

//for fetching data
student_route.get("/user/showall", function(req,res){
    Students.find()
    .then(function (data) {
         res.status(201).json({ success: true, data: data })
    })
    .catch(function (e) {
         res.status(500).json({ message: e })
 })
})

//for fetching enrolled Course
student_route.get("/enrolledCourses/:id", function(req,res){
    const userID = req.params.id
    console.log(userID)
    Students.findById({ _id: userID })
    .then(function (data) {
         res.status(201).json(data)
    })
    .catch(function (e) {
         res.status(500).json({ message: e })
 })
})

student_route.get("/user/:id", function(req,res){
    const id = req.params.id
    console.log(id)
    Students.findById({ _id:id })
    .then(function (data) {
         res.status(201).json(data)
    })
    .catch(function (e) {
         res.status(500).json({ message: e })
 })
})

//for updating students
student_route.put('/student/update', function (req, res) {
    const id = req.body.id;
    const full_name = req.body.full_name;
    const email = req.body.email;
    const age = req.body.age;
    const password = req.body.password;

    Students.updateOne({ _id: id }, { full_name: full_name }, { email: email }, { age: age }, { password: password })
        .then(function (result) {
            res.status(201).json({ success: true, message: "Student has been updated!" })
        }).catch(function (e) {
            res.status(500).json({ message: e })
    });
})

student_route.post("/find-email", function (req, res) {
    const email = req.body.email;
    Students.findOne({ email: email })
        .then(function (data) {
            if (data == null) {
                return res.status(403).json({ success: false, message: "User not found" })
            }
            res.status(203).json({ success: true, message: "User found!" })

        }).catch(function (e) {
            res.status(403).json({ message: e })
        })
})

student_route.post("/forgot-password", (req, res) => {

    Students.findOne({ email: req.body.email })
        .then(student => {
            if (!student) {
                res.status(422).json({ message: "User does not exist!" })
            }

            const otpCode = Math.floor((Math.random() * 10000) + 1)
            const otpData = new otp({
                email: req.body.email,
                code: otpCode
            })

            otpData.save().then(function () {
                var transporter = nodeMailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    auth: {
                        user: "codeebugs@gmail.com",
                        pass: "CodeeBugs123"
                    }
                })

                var mailOptions = {
                    from: "codeebugs@gmail.com",
                    to: req.body.email,
                    subject: "OTP Code",
                    html: `
                    <h4>You have requested to reset your password.</h5>
                    <p>Your OTP code is ${otpCode}.</p>
                    <p>This code will expire in 1 hour.</p>
                    `
                }

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("email sent")
                        res.status(201).json({ message: "Check e-mail!" })
                    }
                })

            }).catch(function (e) {
                res.status().json({ message: e })
            })

        })
})

//delete student
student_route.delete('/deleteuser/:id', function (req, res) {
    const id = req.params.id;
    console.log(id)

    Students.deleteOne({ _id: id })
            .then(function (result) {
                    res.status(201).json({ success: true, message: "Course has been deleted!" })
            })
            .catch(function (e) {
                    res.status(500).json({ message: e })
            });

})

student_route.put("/reset-password", (req, res) => {
    const otpCode = req.body.otpCode;

    otp.findOne({ otpCode: otpCode })
        .then(function (data) {
            if (data == null) {
                res.status(403).json({ message: "Invalid Code!" })
            }

            else if ((data.expireTime - Date.now()) < 0) {
                res.status(403).json({ message: "OTP has expired!:" })
            }
            else {
                const newPassword = req.body.newPassword;
              
                bcrypt.hash(newPassword, 12, function (err, hash12) {
                    var password = { newPassword: hash12 }
                    Students.updateOne({ email: data.email }, { password: password })
                        .then(function (result) {
                            res.status(203).json({ message: "Password succesfully changed!" })
                        }).catch(function (e) {
                            res.status().json({ message: e })
                        })

                });

                otp.findOneAndDelete({ email: data.email })
                    .then(function (result) {
                        res.status(203).json({ message: "Otp deleted!" })
                    }).catch(function (e) {
                        res.status().json({ message: e })
                    })
            }
        })
})

// enroll course
student_route.put("/enrollcourse", function (req, res) {
    const userID = req.body.userID
    const courseID = req.body.enrolledCourses
    console.log(courseID)

    Students.findOneAndUpdate({ _id: userID }, { $push: { enrolledCourses: courseID } }, { new: true })
            .then(function (result) {
                    res.status(201).json({ success: true, message: "Course has been enrolled!" })
            })
            .catch(function (e) {
                    res.status(500).json({ message: e })
            });
})



module.exports = student_route;