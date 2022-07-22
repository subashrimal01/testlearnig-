
const express = require("express");
const router = new express.Router();

const course = require("../models/course")
const video_upload = require("../middlewares/videoupload");
const image_upload = require("../middlewares/imageupload");


//view all course
router.get("/course/showall", function (req, res) {
        course.find()
                .then(function (data) {
                        res.status(201).json({ success: true, data: data })
                })
                .catch(function (e) {
                        res.status(500).json({ message: e })
                })
})

//add course
router.post('/addcourse',image_upload.single('courseImage'), function (req, res) {

        const courseTitle = req.body.courseTitle;
        const courseDescription = req.body.courseDescription;
        const courseImage = req.file.filename;
        console.log(courseImage)
        const coursePrice = req.body.coursePrice;
        const tutorName = req.body.tutorName;


        var course_data = new course({
                courseTitle: courseTitle,
                courseDescription: courseDescription,
                coursePrice: coursePrice,
                tutorName: tutorName,
                courseImage: courseImage
        })

        course_data.save()
                .then(function () {
                        res.status(201).json({ data: course_data, success: true, message: "Course has been added!" })
                })
                .catch(function (e) {
                        res.status(500).json({ message: e })
                })
})

router.put("/addchapter/:id", video_upload.single('video'), function (req, res) {
        const id = req.params.id;
        const chapterName = req.body.chapterName
        console.log(chapterName)
        const weight = req.body.weight;
        const video = req.file.filename;
        console.log(video);

        const tutorial = {
                chapterName: chapterName,
                video: video,
                weight: weight
        }

        course.findOneAndUpdate({ _id: id }, { $push: { tutorial: tutorial } }, { new: true })
                .then(function (result) {
                        res.status(201).json({ success: true, message: "Chapter has been added!" })
                })
                .catch(function (e) {
                        res.status(500).json({ message: e })
                });
})

// to display single course
router.get("/course/:id", function (req, res) {
        const id = req.params.id;
        console.log(id)
        course.findById({ _id: id })
                .then(function (data) {
                        res.status(201).json(data)
                })
                .catch(function (e) {
                        res.status(500).json({ message: e })
                });
})

router.get("/coursechapter/:id", function (req, res) {
        const id = req.params.id;
        console.log(id)
        course.findById({ _id: id })
                .then(function (data) {
                        const tutorial = data.tutorial
                        console.log(tutorial)

                        res.status(201).json(data)
                })
                .catch(function (e) {
                        res.status(500).json({ message: e })
                });
})

// update course
router.put("/updatecourse/:id", function (req, res) {
        const id = req.params.id;
        const update = {
                "$set": {
                        "title": req.body.title,
                        "description": req.body.description,
                        "lecturer": req.body.lecturer
                }
        };
        const option = {
                returnNewDocument: false
        }
        course.findByIdAndUpdate({ _id : id }, update, option)
                .then(function (result) {
                        res.status(201).json({ success: true, message: "Course has been updated!" })
                })
                .catch(function (e) {
                        res.status(500).json({ message: e })
                });
})

// update progress
router.put("/updateprogress/:id", function (req, res) {
        const id = req.params.id;
        console.log(req.body.progress)
        const update = {
                "$set": {
                        "progress": req.body.progress
                }
        };
        const option = {
                returnNewDocument: false
        }
        course.findOneAndUpdate({ _id: id }, update, option)
                .then(function (result) {
                        res.status(201).json({ success: true, message: "Progress has been updated!" })
                })
                .catch(function (e) {
                        res.status(500).json({ message: e })
                });
})



//delete course
router.delete('/deletecourse/:id', function (req, res) {
        const id = req.params.id;
        console.log(id)

        course.deleteOne({ _id: id })
                .then(function (result) {
                        res.status(201).json({ success: true, message: "Course has been deleted!" })
                })
                .catch(function (e) {
                        res.status(500).json({ message: e })
                });

})

module.exports = router;