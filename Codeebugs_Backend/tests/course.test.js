//using the path of User Model
const Course = require('../models/course');
const mongoose =  require('mongoose');

// using abs_test as the test database
const url = 'mongodb://localhost:27017/course_test';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useCreateIndex: true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});

describe('Course Schema test For inserting', () => {
    // Testing for inserting student 
     it('Add course testing inserting', () => {
     const course = {
     'title': 'course123',
     'description' : "course123",
     'lecturer' : "lecturer123"
     };
     return Course.create(course)
     .then((pro_ret) => {
     expect(pro_ret.title).toEqual('course123');
     });
     });
    })